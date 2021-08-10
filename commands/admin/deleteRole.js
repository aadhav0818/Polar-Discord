const Discord = require("discord.js")
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'deleterole',
    description: 'Deletes a role from the server',
    usage: '```' + `${config.prefix}deleterole [role-mention/id]` + '```',
    example: '```' + `${config.prefix}deleterole @Moderator` + '```',
    async execute(client, message, args, Discord) {
        if(message.guild === null) {
            const dmEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'This command can only be used in a server!')
                .setColor(colors.error)
            return message.author.send({ embeds: [dmEmbed] });
        }
        if(!message.member.hasPermission('MANAGE_ROLES')) {
            const noPermsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Missing permissions: `MANAGE_ROLES`', false)
                .setColor(colors.error)
            return message.channel.send({ embeds: [noPermsEmbed] })
        }
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send({ embeds: [noArgsEmbed] })
        }
        const successEmbed = new Discord.MessageEmbed()
            .setTitle('✅ Successfully deleted a role from the server!') 
            .setColor(colors.success)
        const role = args[0];
        const idRegex = /<@&([0-9]+)>/
        if(idRegex.test(role) == true) {
            const match = idRegex.exec(role)
            const guildRole = message.guild.roles.cache.find(r => r.id == match[1])
            await guildRole.delete();
            successEmbed.addField('Role Information', `Name: ${guildRole.name}`)
            message.channel.send({ embeds: [successEmbed] })
        }
        else {
            if(message.guild.roles.cache.find(r => r.id == role)) {
                const guildRole = message.guild.roles.cache.find(r => r.id == role)
                guildRole.delete();
                successEmbed.addField('Role Information', `Name: ${guildRole.name}`)
                message.channel.send({ embeds: [successEmbed] })
            }
            else {
                const errEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', 'Could not find the specified role!', false)
                    .addField('Example', this.example, false)
                    .setColor(colors.error)
                 return message.channel.send({ embeds: [errEmbed] });
            }

        }
    }
}