const Discord = require("discord.js")
const config = require('../../config.json');
const minecraftPlayer = require('minecraft-player')
module.exports = {
    name: 'minecraft-skinsteal',
    description: 'Gives information about a player\'s minecraft skin',
    usage: `${config.prefix}minecraft-skin [username]`,
    example: '```' + `${config.prefix}minecraft-skin p0larb34r` + '```',
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

            const { textures } = await minecraftPlayer(args[0])
            const { username } = await minecraftPlayer(args[0])
            const { uuid } = await minecraftPlayer(args[0])
            const skinEmbed = new Discord.MessageEmbed()
                .setTitle(`Minecraft Skinstealer: ${username}`)
                .setFooter('UUID • ' + uuid)
                .addField('Skin Source', textures.custom ? "Custom" : "Default")
                .addField('Skin type', textures.slim ? "Slim" : "Normal")
                .setURL(`https://namemc.com/search?q=${username}`)
                .setThumbnail(`https://crafatar.com/renders/body/${uuid}?overlay`)
                .setDescription(`\n:eject: **[Download Mincraft Skin PNG](${textures.skin.url} "Download Skin for Minecraft")**\n:eject: **[Download Skin Render PNG](https://crafatar.com/renders/body/${uuid}?overlay "Download Render")**`)
                .setColor(config.colors.minecraft)
            message.channel.send({ embeds: [skinEmbed] });
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