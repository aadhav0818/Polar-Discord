const Discord = require("discord.js")
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'addrole',
    description: 'Adds a role to the server',
    usage: '```' + `${config.prefix}addrole [name] [color/hex]` + '```',
    example: '```' + `${config.prefix}addrole Moderator blue` + '```',
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
            const roleName = args[0];
            const successEmbed = new Discord.MessageEmbed()
                .setTitle('✅ Successfully added a new role to the server!')
                .setColor(colors.success)
            if(args[1]) {
                const color = args[1].toUpperCase();
                message.guild.roles.create({
                    data: {
                        name: roleName,
                        color: color,
                    }                    
                }).then(addedRole => {
                    const id = addedRole.id;
                    successEmbed.addField('Role Information', `Preview: <@&${id}>\nRole ID: ${id}`)
                    message.channel.send({ embeds: [successEmbed] })
                });  
            }
            else {
                successEmbed.setDescription('No color was specified so the role was given the default one! To see usage: Use `' + config.prefix + 'help addrole`')
                message.guild.roles.create({
                    data: {
                        name: roleName,
                    }
                }).then(addedRole => {
                    const id = addedRole.id;
                    successEmbed.addField('Role Information', `Preview: <@&${id}>\nRole ID: ${id}`)
                    message.channel.send({ embeds: [successEmbed] })
                });  
            }
           
    }
}