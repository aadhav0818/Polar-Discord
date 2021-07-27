
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(noArgsEmbed)
        }