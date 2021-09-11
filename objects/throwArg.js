const Discord = require("discord.js");
const config = require('../config.json')
const embed = new Discord.MessageEmbed();
embed.setColor(config.colors.error);
embed.setDescription('Missing Arguments');

module.exports = embed;