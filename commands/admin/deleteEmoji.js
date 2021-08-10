const Discord = require('discord.js')
const config = require('../../config.json')
const errors = require('../../errors.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'deleteemoji',
    description: 'Deletes an emoji from the server',
    usage: '```js\n' + `${config.prefix}deleteemoji [emoji/name]` + '```',
    example: '```js\n' + `${config.prefix}deleteemoji :thonk:` + '```',
    async execute(client, message, args, Discord) {
        if(message.guild === null) {
            const dmEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'This command can only be used in a server!')
                .setColor(colors.error)
            return message.author.send({ embeds: [dmEmbed] });
        }
        if(!message.member.hasPermission('MANAGE_EMOJIS')) {
            const noPermsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Missing permissions: `MANAGE_EMOJIS`', false)
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

        var emoji = args[0];
        const regex = /:.+:/
        if(regex.test(emoji) == true) {
            emoji = (emoji.match(regex)).toString()
            emoji = emoji.replace(/:/g, "")
        }
        var guildEmoji = message.guild.emojis.cache.find(e => e.name == emoji) 

        if(guildEmoji) {
            await guildEmoji.delete();
            const deletedEmojiEmbed = new Discord.MessageEmbed()
                .setTitle(`✅ Successfully deleted an emoji from the server!`)
                .setColor(colors.success)
                .addField('Emoji Information', `Name: ${guildEmoji.name}`)
            message.channel.send({ embeds: [deletedEmojiEmbed] })
        }

        else if(!guildEmoji) {
            const errEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Could not find the specified emoji', false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            message.channel.send({ embeds: [errEmbed] })

        }
//hi person reading this - bear            

    }
}