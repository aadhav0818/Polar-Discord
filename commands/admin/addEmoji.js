const Discord = require('discord.js')
const config = require('../../config.json')
const errors = require('../../errors.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'addemoji',
    description: 'Adds an emoji to the server',
    usage: '```js\n' + `${config.prefix}addemoji [url/path/buffer] [name]` + '```',
    example: '```js\n' + `${config.prefix}addemoji https://cdn.discordapp.com/emojis/794938327844782090.png?v=1 thonk` + '```',
    async execute(client, message, args, Discord) {
        try {
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
        const emoji = args[0]
        var name = args[1]
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Error', errors.noArgsErr, false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send({ embeds: [noArgsEmbed] })
        }
        if(emoji && !name) {
            name = (Math.floor(Math.random() * 10000000)).toString()
        }
        await message.guild.emojis.create(emoji, name)
        var newEmoji = message.guild.emojis.cache.find(e => e.name === name);
        if(newEmoji) {
            const successEmojiEmbed = new Discord.MessageEmbed()
                .setTitle(`✅ Successfully added a new emoji to the server!`)
                .setColor(colors.success)
                .addField('Emoji Information', `Name: ${name}\nEmoji ID: ${newEmoji.id}`)
            if(!args[1]) {
                successEmojiEmbed.setDescription('A random integer value was assigned to the emoji because `name (args[1])` was missing! To see usage: Use `help addemoji`')
            }
            message.channel.send({ embeds: [successEmojiEmbed] })
        }
    }
    catch(err) {
        const errEmbed = new Discord.MessageEmbed()
            .setTitle('Command Error')
            .addField('Reason', 'The string provided was either not a proper image URL/file directory, or was over 256kb in storage', false)
            .addField('Usage', this.usage, false)
            .addField('Example', this.example, false)
            .setColor(colors.error)
        return message.channel.send({ embeds: [errEmbed] })
    }
    }
}
