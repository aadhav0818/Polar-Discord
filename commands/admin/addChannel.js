const Discord = require("discord.js")
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')

module.exports = {
    name: 'addchannel',
    description: 'Adds a channel to the server',
    usage: '```' + `${config.prefix}addchannel [name] [voice/text] [category id (optional)]` + '```',
    example: '```' + `${config.prefix}addchannel staff-chat voice 65497947527592` + '```',
    async execute(client, message, args, Discord) {

        //PERMS CHECK
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

        //ARGS 0 CHECK
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(noArgsEmbed)
        }        

        const channelName = args[0];
        let channelType;
        if(args[1]) {
            channelType = args[1].toLowerCase();
        }
        if(channelType != "voice") {
            channelType = "Text";
        }
        else {
            channelType = "Voice"
        }

        let invalidType = false;
        if(channelType.toLowerCase() != "voice" && channelType.toLowerCase() != "text") {
            invalidType = true;
        }
        message.guild.channels.create(channelName, {type: channelType}).then(newChannel => {
            const successEmbed = new Discord.MessageEmbed() 
                .setTitle('✅ Successfully added a new channel to the server!')
                .setColor(colors.success)
            if(args[2]){
                const category = args[2]
                if(message.guild.channels.cache.find(cat => cat.id == category)) {
                    newChannel.setParent(category)
                    const guildCategory = message.guild.channels.cache.find(cat => cat.id == category);
                    const categoryName = guildCategory.name;
                    successEmbed.addField('Channel Information', `Preview: <#${newChannel.id}>\nChannel ID: ${newChannel.id}\nCategory: ${categoryName}\nCategory ID: ${guildCategory.id}\nType: ${channelType}`)
                    if(invalidType == true) {
                        successEmbed.setDescription("The channel type you entered was not valid so the channel defaulted to text!")
                    }
                }
                else {
                    successEmbed.addField('Channel Information', `Preview: <#${newChannel.id}>\nChannel ID: ${newChannel.id}\nType: ${channelType}`)
                    if(invalidType == true) {
                        successEmbed.setDescription('The category you provided was not found in your server so the channel has been created at the top!\nThe type of channel entered was also invalid so the channel defaulted to text!')
                    }
                    else {
                    successEmbed.setDescription('The category you provided was not found in your server so the channel has been created at the top!')
                    }
                }
                
            }
            else {
                successEmbed.addField('Channel Information', `Preview: <#${newChannel.id}>\nChannel ID: ${newChannel.id}\nType: ${channelType}`)
                if(invalidType == true) {
                    successEmbed.setDescription('No category was specified so the channel has been created at the top!\nThe type of channel was also invalid so the channel defaulted to text!')
                }
                else {
                    successEmbed.setDescription('No category was specified so the channel has been created at the top!')
                }
            }
            

            message.channel.send(successEmbed)
        })
        

    }
}