const Discord = require("discord.js")
const config = require('../../config.json')
const minecraftPlayer = require('minecraft-player')
module.exports = {
    name: 'minecraft-namecheck',
    description: 'Tells the status of a minecraft name',
    usage: `${config.prefix}minecraft-name [name]`,
    example: '```' + `${config.prefix}minecraft-name polarbear` + '```',
    async execute(client, message, args, Discord) {
        try {
            const { username } = await minecraftPlayer(args[0])
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', errors.noArgsErr , false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(colors.error)
                return message.channel.send(noArgsEmbed)
            }               

            const { textures } = await minecraftPlayer(args[0])
            const { uuid } = await minecraftPlayer(args[0])
            const nameEmbed = new Discord.MessageEmbed()
                .setTitle(`Minecraft Namechecker: ${username}`)
                .setURL(`https://namemc.com/search?q=${username}`)
                .addField('Status', 'Not Available', false)
                .setColor('#fff769')
            return message.channel.send(nameEmbed)
        }
        catch(err) {
            const namesEmbed = new Discord.MessageEmbed()
            .setTitle(`Minecraft Namechecker: ${args[0]}`)
            .setURL(`https://namemc.com/search?q=${args[0]}`)

            const regex = /[A-Za-z0-9_]{3,16}/
            const longRegex = /[A-Za-z0-9_]{17,}/
            const shortRegex = /[A-Za-z0-9_]{1,2}/
            const invalidRegex = /[^a-zA-Z0-9_]+/


            if(!args[0]) {
                namesEmbed.addField('Status', 'Null', false)
                namesEmbed.setColor('#fff769')
                return message.channel.send(namesEmbed)
            }
            if(regex.exec(args[0]) == args[0]) {
                namesEmbed.addField('Status', 'Available', false)
                namesEmbed.setColor('#35cc5d')
                return message.channel.send(namesEmbed)
            }
            else if(invalidRegex.test(args[0]) == true) {
                namesEmbed.addField('Status', 'Invalid Characters', false)
                namesEmbed.setColor('DB9AE9')
                return message.channel.send(namesEmbed)
            }
            else if(longRegex.test(args[0]) == true) {
                namesEmbed.addField('Status', 'Too Long', false)
                namesEmbed.setColor('DB9AE9')
                return message.channel.send(namesEmbed)
            }
            else if(shortRegex.test(args[0]) == true) {
                namesEmbed.addField('Status', 'Too Short', false)
                namesEmbed.setColor('DB9AE9')
                return message.channel.send(namesEmbed)
            }
        }
    }
}