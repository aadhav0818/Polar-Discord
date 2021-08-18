const Discord = require("discord.js")
const config = require('../../config.json')

module.exports = {
    name: 'morse',
    description: 'Translates between English and Morse Code',
    usage: '```' + `${config.prefix}morse [encode/decode] [text]` + '```',
    example: '```' + `${config.prefix}morse decode -- --- .-. ... . / -.-. --- -.. .` + '```',
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'No action (encode/decode) was specifed!', false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(noArgsEmbed)
        }
        if(!args[1]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'No text was provided!', false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)    
            return message.channel.send(noArgsEmbed)
        }
        const action = args[0].toLowerCase();
        let text = message.content.slice(this.name.length + config.prefix.length + 1 + args[0].length + 1)
        if(action === 'decode') {
            text = text + " "
            text = text.replace(/\.-\.-\.- /g, "\\period")
            text = text.replace(/--\.\. /g, 'Z')
            text = text.replace(/\.\.-\. /g, 'F')
            text = text.replace(/\.-\.\. /g, 'L')
            text = text.replace(/--\.- /g, 'Q')
            text = text.replace(/-\.-\. /g, 'C')
            text = text.replace(/\/ /g, ' ')
            text = text.replace(/\.\.--\.\. /g, '?')
            text = text.replace(/-\.- /g, 'K')
            text = text.replace(/\.\.\.- /g, 'V')
            text = text.replace(/-\.-- /g, 'Y')
            text = text.replace(/-\.\.- /g, 'X')
            text = text.replace(/\.\.- /g, 'U')
            text = text.replace(/\.\.\.\. /g, 'H')
            text = text.replace(/--\.\.-- /g, ',')
            text = text.replace(/\.-\. /g, 'R')
            text = text.replace(/\.--\. /g, 'P')

            text = text.replace(/-\.\.\. /g, 'B')
            text = text.replace(/-\.\. /g, 'D')
            text = text.replace(/--\. /g, 'G')
            text = text.replace(/\.--- /g, 'J')
            text = text.replace(/--- /g, 'O')
            text = text.replace(/\.-- /g, 'W')
            text = text.replace(/-\. /g, 'N')

            text = text.replace(/-- /g, 'M')
            text = text.replace(/\.\.\. /g, 'S')
            text = text.replace(/\.\. /g, 'I')
            text = text.replace(/\.- /g, 'A')
            text = text.replace(/\. /g, 'E')
            text = text.replace(/- /g, 'T')
            text = text.replace(/\\period/g, ".")

            const decodeEmbed = new Discord.MessageEmbed()
                .setTitle('Morse Code Decryption')
                .setDescription('```' + text + '```')
                .setColor(colors.default)
            message.channel.send(decodeEmbed)
        }

        else if(action === 'encode') {
            
            text = text.replace(/ /gi, "/ ")
            text = text.replace(/\./gi, ".-.-.- ")
            text = text.replace(/A/gi, ".- ")
            text = text.replace(/B/gi, "-... ")
            text = text.replace(/C/gi, "-.-. ")
            text = text.replace(/D/gi, "-.. ")
            text = text.replace(/E/gi, ". ")
            text = text.replace(/F/gi, "..-. ")
            text = text.replace(/G/gi, "--. ")
            text = text.replace(/H/gi, ".... ")
            text = text.replace(/I/gi, ".. ")
            text = text.replace(/J/gi, ".--- ")
            text = text.replace(/K/gi, "-.- ")
            text = text.replace(/L/gi, ".-.. ")
            text = text.replace(/M/gi, "-- ")
            text = text.replace(/N/gi, "-. ")
            text = text.replace(/O/gi, "--- ")
            text = text.replace(/P/gi, ".--. ")
            text = text.replace(/Q/gi, "--.- ")
            text = text.replace(/R/gi, ".-. ")
            text = text.replace(/S/gi, "... ")
            text = text.replace(/T/gi, "- ")
            text = text.replace(/U/gi, "..- ")
            text = text.replace(/V/gi, "...- ")
            text = text.replace(/W/gi, ".-- ")
            text = text.replace(/X/gi, "-..- ")
            text = text.replace(/Y/gi, "-.-- ")
            text = text.replace(/Z/gi, "--.. ")
            text = text.replace(/,/gi, "--..-- ")
            text = text.replace(/\?/gi, "..--.. ")
            text = text.replace(/!/gi, "-.-.-- ")
            
            const encodeEmbed = new Discord.MessageEmbed()
                .setTitle('Morse Code Encryption')
                .setDescription('```' + text + '```')
                .setColor(colors.default)
            message.channel.send(encodeEmbed)
        }
        else {
            const noActionEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'Invalid Action, Please use either encode or decode!')
                .addField('Example', this.example, false)
                .setColor(colors.error)
            message.channel.send(noActionEmbed)
        }

    }
}