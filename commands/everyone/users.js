const Discord = require("discord.js")
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')
const { existsSync } = require("fs")

module.exports = {
    name: 'users',
    description: 'Shows the amount of users and guilds the bot is in',
    usage: `${config.prefix}users`,
    example: `${config.prefix}users`,
    async execute(client, message, args, Discord) {
        let users = 0;
        client.guilds.cache.forEach(guild => {
            users += guild.memberCount;
        })
        const userEmbed = new Discord.MessageEmbed()
            .setTitle('Guild/User Information')
            .addField('Guilds Joined', client.guilds.cache.size, true)
            .addField('Total Users', users, true)
            .setColor(colors.default)
        message.channel.send({ embeds: [userEmbed] })
    }
}