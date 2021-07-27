const Discord = require("discord.js");const errors = require('../../errors.json');const config = require('../../config.json');
const colors = require('../../colors.json'); 

module.exports = {

    name: '',
    description: '',
    usage: `${config.prefix}`,
     /** 
     * @param {Discord.Message} message
     *  @param {Discord.Client} client;
     **/

    async execute(client, message, args, Discord) {

        if(!args[0]) {const noArgsEmbed = new Discord.MessageEmbed()
        .setTitle('Command Error').addField('Reason', errors.noArgsErr , false).addField('Usage', this.usage, false).addField('Example', this.example, false).setColor(colors.error); return message.channel.send(noArgsEmbed)}          


    }
}