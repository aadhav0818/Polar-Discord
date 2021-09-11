const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'area square',
    description: 'Calculates the area of a square',
    usage: `${config.prefix}area square [dim]`,
    example: `${config.prefix}area square 2`,
    async execute(client, message, args, Discord) {
        if(!args[0]) {return }
    }
}