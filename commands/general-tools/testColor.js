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
    example: '```js\n' + config.prefix + 'testcolor #869eb5' + '```',
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