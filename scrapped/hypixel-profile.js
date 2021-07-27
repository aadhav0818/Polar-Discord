const Discord = require("discord.js")
const fetch = require('node-fetch')
const minecraftPlayer = require('minecraft-player')
const errors = require('../../errors.json'); const config = require('../../config.json'); const colors = require('../../colors.json')
const hypixel_key = config.hypixel.api_token
module.exports = {
    name: 'hypixel-profile',
    description: 'Shows the main statistics of a hypixel minecraft server',
    usage: `${config.prefix}hypixel-profile [username]`,
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(noArgsEmbed)
        }               

        const username = args[0];
        const { uuid } = await minecraftPlayer(username)
        
        const networkError = new Discord.MessageEmbed().setTitle('Command Error').setDescription('Network Error').setColor(colors.error)
        fetch(`https://api.hypixel.net/player?key=${hypixel_key}&uuid=${uuid}`)
            .then(response => response.json()) 
            .then(({ player }) => {
                let rank = "";
                let color = "";
                if(!player.newPackageRank) {
                    rank = "UNRANKED";
                    color = colors.hypixel.player.unranked;
                }
                else if(player.newPackageRank === 'VIP') {
                    rank = "VIP";
                    color = colors.hypixel.player.vip;
                }
                else if(player.newPackageRank === 'VIP_PLUS') {
                    rank = "VIP+";
                    color = colors.hypixel.player.vip;
                }
                else if(player.newPackageRank === 'MVP') {
                    rank = "MVP";
                    color = colors.hypixel.player.mvp;
                }
                else if(player.newPackageRank === 'MVP_PLUS') {
                    rank = "MVP+";
                    color = colors.hypixel.player.mvp;
                }
                else if(player.newPackageRank === 'MVP_PLUS_PLUS') {
                    rank = "VIP+";
                    color = colors.hypixel.player.vip;
                }
                const profileEmbed = new Discord.MessageEmbed()
                    .setTitle(`Hypixel Profile: [${rank}] ${player.displayname}`)
                    .setColor(color)

                message.channel.send(profileEmbed)
            })
            .catch(error => message.channel.send(networkError))
        
    }
}   