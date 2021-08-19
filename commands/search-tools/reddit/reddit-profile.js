const Discord = require("discord.js")
const config = require('../../config.json'); 
const moment = require('moment')
const request = require('node-superfetch')

module.exports = {
    name: 'reddit-profile',
    description: 'Shows the profile of a user on the reddit platform',
    usage: '```' + `${config.prefix}reddit-profile [name]` + '```',
    example: '```' + `${config.prefix}reddit-profile Bear` + '```',
    async execute(client, message, args, Discord) {
        try {
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', 'No user was provided!' , false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send(noArgsEmbed)
            }
                let username = args[0];
                const { body } = await request.get(`https://www.reddit.com/user/${username}/about.json`)
                const { data } = body;
                if(data.hide_from_robots) {
                    const errEmbed = new Discord.MessageEmbed()
                        .setTitle('Command Error')
                        .addField('Reason', 'The user requested has a hidden profile!')
                        .setColor(config.colors.error)
                    return message.channel.send(errEmbed)
                }
                const userProfile = new Discord.MessageEmbed()
                    .setTitle('Reddit Profile: u/' + data.name)
                    .setURL(`https://www.reddit.com/user/${username}`)
                    .addField('Username', data.name, true)
                    .addField('Karma', data.total_karma, true)
                    .addField('Account Creation Date', moment.utc(data.created_utc * 1000).format('MM/DD/YYYY, h:mm A '), true)
                    .addField('User ID', data.id, true)
                    .addField('Premium Member', data.is_gold ? "Yes" : "No" , true)
                    .setColor(config.colors.reddit)
                    .setThumbnail(data.icon_img.replace(/(amp;)/gi, ""))
                message.channel.send(userProfile)
        }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Could not find the requested reddit user!')
                .setColor(config.colors.error)
            message.channel.send(errEmbed)
        }
    }
}