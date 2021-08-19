const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'ping',
    description: 'Sends your discord ping (ms) and the API ping (ms)',
    usage: '```' + `${config.prefix}ping` + '```',
    async execute(client, message, args, Discord) {
        let userPing = Date.now() - message.createdTimestamp;
        let apiPing = Math.round(client.ws.ping);

        const pingEmbed = new Discord.MessageEmbed() 
            .setTitle('Ping Information')
            .addField('User Ping', '```' + userPing + ' ms```')
            .addField('API Ping', '```' + apiPing + ' ms```')
            .setColor(config.colors.default)
        message.channel.send({ embeds: [pingEmbed] })
    }
}