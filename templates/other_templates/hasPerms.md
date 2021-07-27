if(!message.member.hasPermission('')) {
            const noPermsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Missing permissions: ``', false)
                .setColor(config.errorColor)
            return message.channel.send(noPermsEmbed)
        }