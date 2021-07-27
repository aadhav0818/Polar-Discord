const Discord = require("discord.js")
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')

module.exports = {
    name: 'rolldice',
    description: 'Rolls a dice with a specified amount of faces for a specified amount of simulations. A chart showing the percentages will be shown after',
    usage: '```' + `${config.prefix}rolldice [1-100 simulations] [(optional) 1-20 faces]` + '```',
    example: '```' + `${config.prefix}rolldice 10 7` + '```',
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            const resultEmbed = new Discord.MessageEmbed()
                .setTitle('Dice Roll Result')
                .addField('Faces', '6', true)
                .addField('Result', parseInt((Math.random() * 6) + 1), true)
                .setColor(colors.default)
            return message.channel.send(resultEmbed)
        }             
        const regex = /[^0-9]+/ 
        if(regex.test(args[0]) == true) {
            const invalidCharEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.illegalCharErr , false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(invalidCharEmbed)
        }

        let simulations = args[0]
        let faces = 0; let desc = "";
        let note1  = 'You entered in an invalid amount of faces so it defaulted to 6!'; 
        let note1_2 = 'You entered too many faces (not 1-20) so it defaulted to 6!'
        if(args[1]) {
            if(regex.test(args[1]) == false) {
                if(args[1] > 20 || args[1] < 1) {
                    faces = 6;
                    desc += note1_2
                }
                else {
                    faces = args[1]
                }
            }
            else {
                desc += note1;
                faces = 6;
            }
        }
        else {
            faces = 6;
        }
        let note2 = "You entered in an invalid amount of simulations (not 1-100) so it defaulted to 1!";
        if(simulations < 1 || simulations > 100) {
            sendNote2 = true;
            desc += note2;
        }

        let resArr = []; resArr.length = faces;
        for(let j = 0; j < resArr.length; j++) {
            resArr[j] = 0;
        }
        for(let i = 0; i < simulations; i++) {
            var random = parseInt((Math.random() * faces));
            for(let k = 0; k < faces; k++) {
                if(random == k) {
                    resArr[k]++;
                }
            }
        }

        const resultEmbed = new Discord.MessageEmbed()
            .setTitle('Dice Roll Results')
            .addField('Faces', faces, true)
            .addField('Simulations', simulations, true)
            if(desc != '') {
                resultEmbed.setDescription(desc)
            }
            for(let i = 0; i < faces; i++) {
                let percentage = parseInt(resArr[i]/simulations * 100);
                resultEmbed.addField(`Face ${i + 1}`, `${percentage}%`, true)

            }
            resultEmbed.setColor(colors.default)
        message.channel.send(resultEmbed)
    }
}