const Discord = require('discord.js')
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')
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
            .setColor(colors.default)
        message.channel.send(pingEmbed)
    }
}