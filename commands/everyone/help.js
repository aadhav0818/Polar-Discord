const Discord = require('discord.js')
const config = require('../../config.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'help',
    description: 'Sends list of commands',
    usage: '```js\n' + `${config.prefix}help` + '```',
    async execute(client, message, args, Discord) {
        if(args[0]) {
            return;
        }
        else {
            const embedHelp = new Discord.MessageEmbed()
                .setTitle('Help Commands')
                .setDescription(`Use ${config.prefix}help [command] to get more information on each command!\n**Please** report all bugs and suggestions to P0LARB34R#4038!`)
                .addField('Server Management', '```' + '\naddchannel\ndeletechannel\naddrole\ndeleterole\naddemoji\ndeleteemoji' + '```', true)
                .addField('Informational','```' + '\nhelp\ninfo\nping\nsay\ntestcolor\nusers\ninvite' + '```', true)
                .addField('Calculators and Translators', '```' + '\ncalc\nconvert\nmorse\nquadratic\ncoinflip\nrolldice\nunscramble' + '```')
                .addField('Search and Statistics', '```' + '\nreddit-profile\nreddit-meme' + '```' + '```' + '\nminecraft-namehistory\nminecraft-skinsteal\nminecraft-namecheck' + '```')
                .addField('Moderation', '```' + '\npurge\nembed' + '```')
                .setColor(colors.default)
                .setFooter(`PolarBot™ ${config.version}`)
            message.channel.send(embedHelp)
        }
    }
}