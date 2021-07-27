const Discord = require('discord.js');
const config = require('../../config.json');
const errors = require('../../errors.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'say',
    description: 'Sends a user-defined string in a channel',
    usage: '```js\n' + `${config.prefix}say [content]` + '```',
    example: '```js\n' + `${config.prefix}say hey there` + '```',
    async execute(client, message, args, Discord) {
        let words = (message.content).slice(config.prefix.length + this.name.length)
        try {
            if(message.attachments.size > 0) {
                words = "||~~Media~~|"
            } 
            const regex = /<@![0-9]+>/g
            words = words.replace(regex, "||~~User Ping~~||")
            const roleRegex = /<@&[0-9]+>/g
            words = words.replace(roleRegex, "||~~Role Ping~~||")
            const hereRegex = /@here/g
            words = words.replace(hereRegex, "||~~Here Ping~~||")
            const everyoneRegex = /@everyone/g
            words = words.replace(everyoneRegex, "||~~Everyone Pings~~||")
            const inviteRegex = /discord\.gg\/[^ ]+/g
            words = words.replace(inviteRegex, "||~~Invite Link~~||")
            const linkRegex = /(https|http):\/\/[^ ]+\.[^ ]+/g
            words = words.replace(linkRegex, "||~~Link~~||")
            const discordRegex = /discord\.gg\/[^ ]+/g
        words = words.replace(discordRegex, "||~~Discord-Link~~||")
            await message.channel.send(words)
        }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr, false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example)
                .setColor(colors.error)
            return message.channel.send(errEmbed);
        }
    }
}