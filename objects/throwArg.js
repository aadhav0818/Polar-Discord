const Discord = require("discord.js");
const config = require('../config.json')
const arg = new Discord.MessageEmbed();
arg.setColor(config.colors.error);
arg.setDescription('**Error Code 001:** Missing Arguments');
const fig = new Discord.MessageEmbed();
fig.setColor(config.colors.error);
fig.setDescription('**Error Code 002:** Invalid Figure');

module.exports = {
    argument: arg,
    figure: fig
}