const Discord = require("discord.js")
const config = require('../../config.json')
module.exports = {
    name: 'purge',
    description: 'Deletes up to a 100 messages in a channel at once',
    usage: '```' + `${config.prefix}purge [1-100]` + '```',
    example: '```' + `${config.prefix}purge 80` + '```',
    async execute(client, message, args, Discord) {
        try { 
            if(message.guild === null) {
                const dmEmbed = new Discord.MessageEmbed()
                    .setTitle('Command Error')
                    .addField('Reason', 'This command can only be used in a server!')
                    .setColor(config.colors.error)
                return message.author.send(dmEmbed);
            }
            if(!message.member.hasPermission('MANAGE_MESSAGES')) {
                const noPermsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', 'Missing permissions: `MANAGE_MESSAGES`', false)
                    .setColor(config.colors.error)
                return message.channel.send(noPermsEmbed)
            }
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', errors.noArgsErr , false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send(noArgsEmbed)
            }

            const deleteCount = args[0];
            if(deleteCount > 100 || deleteCount < 1) {
                const countEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'You may only bulk delete 1-100 messages at a time!')
                .setColor(config.colors.error)
                return message.channel.send(countEmbed)
            }
            const regex = /[^0-9]+/
            if(regex.test(deleteCount) == true) {
                const illegalCharEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', errors.illegalCharErr , false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send(illegalCharEmbed)
            }
            await message.channel.bulkDelete(deleteCount) 
                const successEmbed = new Discord.MessageEmbed()
                    .setTitle('Deleted ' + deleteCount + " messages from this channel!")
                    .setColor(config.colors.success)
            message.channel.send(successEmbed).then(sentMessage => {
                try {
                setTimeout(() => {
                    sentMessage.delete()
                }, 3000) 
                }
                catch(err) {

                }
            })           
        }
                
        
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'You cannot delete messages that are over 14 days old!')
                .setColor(config.colors.error)
            return message.channel.send(errEmbed)
            
        }

    }
}