const Discord = require('discord.js');
const config = require('../../config.json');
const { argument, figure } = require('../../objects/throwArg.js');

module.exports = {
    name: 'area',
    description: 'Calculates the area of a square',
    usage: `${config.prefix}area square [dim]`,
    example: `${config.prefix}area square 2`,
    async execute(client, message, args, Discord) {
        [argument, figure].forEach(execption => {
            execption.setFooter(`Try ${config.prefix}help ${this.name}`)
        })
        const areaFunction = ["square", "rect"];
        if(!args[0]) {return message.channel.send({ embeds: [argument] })}
        if(!areaFunction.includes(args[0])) {return message.channel.send({ embeds: [figure] })}
        const result = new Discord.MessageEmbed();
        result.setColor(config.colors.success);
        
        class Area {
            square(x) { return Math.pow(x, 2) }
            rect(x, y) { return x * y } 
        }

        const areacalc = new Area();
        if(args[0].toLowerCase() === "square") {
            result.setTitle('Area: Square');
            result.addField('Result', `${areacalc.square(args[1])} units²`, false);
            result.addField('Dimensions', `Side-Length: ${args[0]}`);
            return message.channel.send({ embeds: [result] });
        }
}
}