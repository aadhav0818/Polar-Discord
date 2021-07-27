        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'Incorrect Syntax or there was no defined answer')
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(errEmbed)
        }