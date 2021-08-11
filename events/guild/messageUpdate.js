const Discord = require('discord.js');

module.exports = (Discord, client, oldMessage, newMessage) => {
    console.log(oldMessage.toString() + ' ' + newMessage.toString())
}