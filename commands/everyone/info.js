const Discord = require('discord.js')
const config = require('../../config.json')
const errors = require('../../errors.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'info',
    description: 'Gives information about the bot',
    usage: '```js\n' + `${config.prefix}info` + '```',
    async execute(client, message, args, Discord) {
        let users = 0;
        client.guilds.cache.forEach(guild => {
            users += guild.memberCount;
           })
        const info = new Discord.MessageEmbed() 
            .setTitle('Invite Link')
            .setColor(colors.default)
            .setAuthor('PolarBot Information', client.user.displayAvatarURL(), 'https://discord.com/api/oauth2/authorize?client_id=760553137605181541&permissions=4294967287&scope=bot')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=760553137605181541&permissions=4294967287&scope=bot')
            .addField('Developer', 'P0LARB34R#4038', false)
            .addField('Establishment', 'September 28 2020', false)
            .addField('Library Info', 'Platform: Node JS (v12.18.4), Library: discord.js (v12)', false)
            .addField('Uptime Info', 'Unstable', false)
            .addField('Guilds Joined', client.guilds.cache.size , false)
            .addField('Users', users , false)
            .setFooter(`PolarBot ${config.version} • Contact P0LARB34R#4038 for help or Q/A`)
        message.channel.send({ embeds: [info] }) 
    }
}