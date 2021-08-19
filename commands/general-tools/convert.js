const config = require('../../config.json')
const Discord = require('discord.js')

module.exports = {
    name: 'convert',
    description: 'Converts a value from the initial base to the target base',
    usage: '```' + `${config.prefix}convert [value] [(from) base x] [(to) base y]` + '```',
    example: '```' + `${config.prefix}convert 101101 2 10` + '```',
    async execute(client, message, args, Discord) {
        try {   

            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
                return message.channel.send(noArgsEmbed)
            }
            const resultEmbed = new Discord.MessageEmbed() 
                .setColor(config.colors.default)

            if(!args[1]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'No inital base or target base was specified!', false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
                return message.channel.send(noArgsEmbed)
            }
            if(!args[2]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'No target base was specified!', false )
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
                return message.channel.send(noArgsEmbed)
            }
            const value = (args[0]);
            let initialBase = args[1];
            let targetBase = args[2];

            const regex = /base[0-9]{1,2}/
            if(regex.test(initialBase) == true) { 
                initialBase = initialBase.replace('base', "")
            }
            if(regex.test(targetBase) == true) {
                targetBase = targetBase.replace('base', "")
            }

            const convertedValue = (parseInt(value, initialBase)).toString(targetBase)

            if(convertedValue == 'NaN') {
                const nanEmbed = new Discord.MessageEmbed()
                    .setTitle('Command Error')
                    .addField('Reason', 'The inital value entered is not a member of the inital base provided!')
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send(nanEmbed)
            }
            resultEmbed.setTitle('Base Converter')
            resultEmbed.addField('Result', '```' + convertedValue + '```', false)
            resultEmbed.addField('Conversion', '```js\n' + `${value} in Base ${initialBase} converted to Base ${targetBase}` + '```')
            return message.channel.send(resultEmbed)
        }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'Radix value must be between 2 and 36!')
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
            return message.channel.send(errEmbed)
        }
    }
}