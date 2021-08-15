const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'gpa',
    description: 'Calculates Grade Point Average (GPA)',
    usage: '```' + `${config.prefix}gpa` + '```',
    async execute(client, message, args, Discord) {
        try {
            const user = message.author;
            const promptColor = new Discord.MessageEmbed() 
                .setTitle('')
                .setDescription('Enter the amount of classes/semesters you would like to calculate for')
                .setColor(colors.default)
          
            const prompts = [promptColor]
            let question = 0;
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: prompts.length, time: 600000});
            message.channel.send(prompts[question++])
            collector.on('collect', m => {
            if(question < prompts.length) {
                m.channel.send(prompts[question++])
            }
            })
            let classAmt = 0;
            collector.on('end', collected => {
                let question = 0;
                collected.forEach((value) => { 
                    question++;
                    if(question == 1) {
                        if((Number.isInteger(parseFloat(value.content)))) {
                            classAmt = classAmt + (parseFloat(value.content))
                            for(var i = 1; i <= classAmt; i++) {
                                const askClass = new Discord.MessageEmbed()
                                    .setDescription('')
                                    .setColor(colors.default)
                            }







                        }
                        else {
                            const errEmbed = new Discord.MessageEmbed() 
                                .setTitle('Command Error')
                                .addField('Reason', 'You did not enter an integer value for your classes! Please try again')
                                .setColor(colors.error)
                            message.channel.send(errEmbed)
                        }
                    }
                })
         })

        }
        catch(err) {
            console.log(err)
            const errEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Your DM is closed to friends! To change this, go to your settings and enable dms from server users')
                .setColor(colors.error)
            message.channel.send(errEmbed)
        }
    }
}