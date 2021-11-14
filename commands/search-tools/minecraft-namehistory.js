const Discord = require("discord.js")
const config = require('../../config.json');
const minecraftPlayer = require("minecraft-player");
module.exports = {
    name: 'minecraft-namehistory',
    description: 'Shows the UUID and name history of a minecraft player',
    usage: '```' + `${config.prefix}minecraft-profile [username]` + '```',
    example: '```' + `${config.prefix}minecraft-profile p0larb34r` + '```',
    async execute(client, message, args, Discord) {
        try {
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', errors.noArgsErr , false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send({ embeds: [noArgsEmbed] });
            }
            const { username } = await minecraftPlayer(args[0])
            const { uuid }  = await minecraftPlayer(args[0])
            const { usernameHistory } = await minecraftPlayer(args[0])
            const { createdAt } = await minecraftPlayer(args[0])

            const profileEmbed  = new Discord.MessageEmbed()
                .setTitle(`Minecraft Profile: ${username}`)
                .setURL(`https://namemc.com/search?q=${username}`)
                .setFooter('UUID • ' + uuid)
                .setColor(config.colors.minecraft)
                .setThumbnail(`https://crafatar.com/renders/body/${uuid}?overlay`)
            for(let i = usernameHistory.length - 1; i >= 0; i--) {
               if(i != 0) {
                    let date = usernameHistory[i].changedAt
                    const regex = /[0-9]{4,10}-[0-9]{2}-[0-9]{2}/
                    date = regex.exec(date);
                    profileEmbed.addField(usernameHistory[i].username.toString(), date.toString(), true)
               }
               else {
                    profileEmbed.addField(usernameHistory[i].username.toString(), 'xxxx-xx-xx', true)
               }
            }
            message.channel.send({ embeds: [profileEmbed] });
        
    }
    catch(err) {
        const errEmbed = new Discord.MessageEmbed()
            .setTitle('Command Error')
            .addField('Reason', 'Could not find the requested user!')
            .setColor(config.colors.error)
        return message.channel.send({ embeds: [errEmbed] });
    }
}
}