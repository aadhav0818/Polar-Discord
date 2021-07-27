const Discord = require('discord.js')
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'deletechannel',
    description: 'Deletes a channel from the server',
    usage: '```' + `${config.prefix}deletechannel [channel-mention/id (optional)]` + '```',
    example: '```' + `${config.prefix}deletechannel #general` + '```',
    async execute(client, message, args, Discord) {
        if(message.guild === null) {
            const dmEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'This command can only be used in a server!')
                .setColor(colors.error)
            return message.author.send(dmEmbed);
        }
        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const noPermsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Missing permissions: `MANAGE_CHANNELS`', false)
                .setColor(colors.error)
            return message.channel.send(noPermsEmbed)
        }
        if(!args[0]) {
            const confirmEmbed = new Discord.MessageEmbed()
                .setTitle('Confirmation')
                .setDescription('Type "**Yes**" if you want to continue with this action. You have 10 seconds to respond!')
                .addField('Status', 'Pending')
            let id = "";
            message.channel.send(confirmEmbed).then(sentMessage => {
                id = sentMessage.id
            })
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 10000});
                collector.on('collect', message => {
                    if(message.content.toLowerCase() === 'yes') {
                        message.channel.messages.fetch(id).then(sentMessage => {
                            confirmEmbed.fields[0] = {name: 'Status', value: 'Confirmed'},
                            confirmEmbed.setColor(colors.success) 
                            confirmEmbed.setDescription('Deleting this channel in 5 seconds!')
                            sentMessage.edit(confirmEmbed)
                            setTimeout(() => {
                                message.channel.delete()
                            }, 5000);
                        })

                    }
                    else {
                        message.channel.messages.fetch(id).then(sentMessage => {
                            confirmEmbed.fields[0] = {name: 'Status', value: 'Cancelled'},
                            confirmEmbed.setColor(colors.error) 
                            confirmEmbed.setDescription('Cancelling the command!')
                            sentMessage.edit(confirmEmbed)
                        })
                    }
                })
                collector.on('end', collected => {
                    if(collected.size == 0) {
                    message.channel.messages.fetch(id).then(sentMessage => {
                        confirmEmbed.fields[0] = {name: 'Status', value: 'Cancelled'},
                        confirmEmbed.setColor(colors.error) 
                        confirmEmbed.setDescription('10 Seconds has passed, Cancelling the command!')
                        sentMessage.edit(confirmEmbed)
                    })  
                }
                })
            
        }

        if(args[0]) {
            var channelID = args[0]
            const regex = /<#([0-9]+)>/
            if(regex.test(args[0]) == true) {
                const match = regex.exec(channelID)
                channelID = match[1]

            }
            const guildChannel = message.guild.channels.cache.find(ch => ch.id == channelID)
            if(guildChannel) {
                const confirmEmbed = new Discord.MessageEmbed()
                .setTitle('Confirmation')
                .setDescription('Type "**Yes**" if you want to continue with this action. You have 10 seconds to respond!')
                .addField('Status', 'Pending')
                let id = "";
                message.channel.send(confirmEmbed).then(sentMessage => {
                    id = sentMessage.id
                })
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 10000});
                    collector.on('collect', message => {
                        if(message.content.toLowerCase() === 'yes') {
                            message.channel.messages.fetch(id).then(sentMessage => {
                                confirmEmbed.fields[0] = {name: 'Status', value: 'Confirmed'},
                                confirmEmbed.setColor(colors.success) 
                                confirmEmbed.setDescription('Deleting provided channel in 5 seconds!')
                                sentMessage.edit(confirmEmbed)
                                setTimeout(() => {
                                    guildChannel.delete()
                                }, 5000);
                            })

                        }
                        else {
                            message.channel.messages.fetch(id).then(sentMessage => {
                                confirmEmbed.fields[0] = {name: 'Status', value: 'Cancelled'},
                                confirmEmbed.setColor(colors.error) 
                                confirmEmbed.setDescription('Cancelling the command!')
                                sentMessage.edit(confirmEmbed)
                            })
                        }
                    })
                    collector.on('end', collected => {
                        if(collected.size == 0) {
                        message.channel.messages.fetch(id).then(sentMessage => {
                            confirmEmbed.fields[0] = {name: 'Status', value: 'Cancelled'},
                            confirmEmbed.setColor(colors.error) 
                            confirmEmbed.setDescription('10 Seconds has passed, Cancelling the command!')
                            sentMessage.edit(confirmEmbed)
                        })  
                    }
                    })
                }
            else {
                const errEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', 'Could not find the specified channel!', false)
                    .addField('Example', this.example, false)
                    .setColor(colors.error)
                return message.channel.send(errEmbed);
            }
        }
    }
}