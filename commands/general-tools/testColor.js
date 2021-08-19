const config = require('../../config.json');
const Discord = require('discord.js')

module.exports = {
    /** 
     * @param {Discord.Message} message
     *  @param {Discord.Client} client;
     * */
    
    name: 'testcolor',
    description: 'Generates the color of a certain hex value or color code',
    usage: '```js\n' + `${config.prefix}testcolor [color/hex]` + '```',
    example: ['```js\n' + config.prefix + 'testcolor #869eb5' + '```', ''],
    items: '```md\n' + `#Guide: Make your own hex color` + '```' + '```js\n\n' + 'Every hex value is made up of a RED, GREEN, and BLUE\nRed: 0-255, Green: 0-255, Blue 0-255\n' + '```' + '```js\n' + `Each value for each color is converted from base 10 to base 16 [Try it using ${config.prefix}convert]` + '```' + '```js\n' + 'You then get 6 characters after converting each RGB Value: This is a hex value and it represents the color that is composed of all three RGB Values' + '```',
    async execute(client, message, args, Discord) {
        try {
            const color = args[0];
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', errors.noArgsErr, false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send({ embeds: [noArgsEmbed] })
            }
            const colorEmbed = new Discord.MessageEmbed() 
                .setTitle(color)
                .setColor(color.toUpperCase())
            message.channel.send({ embeds: [colorEmbed] })
        }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'Invalid Color Range')
                .setColor(config.colors.error)
            message.channel.send({ embeds: [errEmbed] })
        }   
    }
}