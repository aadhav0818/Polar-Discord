const Discord = require("discord.js");const errors = require('../../errors.json');const config = require('../../config.json');
const colors = require('../../colors.json'); 

module.exports = {
    name: 'invite',
    description: 'Provides an invite link for polarbot! You should definetly share this around :)',
    usage: `${config.prefix}`,
     /** 
     * @param {Discord.Message} message
     *  @param {Discord.Client} client;
     **/

    async execute(client, message, args, Discord) {
        const info = new Discord.MessageEmbed() 
        .setTitle('Invite Link')
        .setColor(colors.default)
        .setDescription('To Invite PolarBot [Click Here!](https://discord.com/api/oauth2/authorize?client_id=760553137605181541&permissions=4294967287&scope=bot) This really helps with the growth of this bot, so please consider sharing this to others :)')

        .addField('Coming Soon', 'Polarbot Website & Documentation')
        .
        message.channel.send(info) 
    }
}