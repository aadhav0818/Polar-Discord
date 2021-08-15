const Discord = require("discord.js")
const config = require('../../config.json')
module.exports = {  
    name: 'guildlist',
    description: 'Sends a list of guilds',
    usage: '```' + `${config.prefix}guildlist` + '```',
    /** 
     * @param {Discord.Message} message
     *  @param {Discord.Client} client;
     **/
    async execute(client, message, args, Discord) {
        let users = 0;
            if(message.author.id === '426926009653264384') {
            let list = "```";
           client.guilds.cache.forEach(guild => {
           list += (`${guild.name} | ${guild.id}\n`);
           users += guild.memberCount;

          })
          list += "```"
        const listEmbed = new Discord.MessageEmbed() 
            .setTitle('Guild List')
            .setDescription(list)
            .addField('Guild Count', client.guilds.cache.size)
            .addField('Users', users)
            .setColor(colors.default)
        message.author.send({ embeds: [listEmbed] })
  
        }
    }
}