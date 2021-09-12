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
        const areaFunction = ["square", "rect", 'rectangle', 'tri', 'triangle'];
        if(!args[0]) {return message.channel.send({ embeds: [argument] })}
        if(!areaFunction.includes(args[0])) {return message.channel.send({ embeds: [figure] })}
        const result = new Discord.MessageEmbed();
        result.setColor(config.colors.success);
        
        class Area {
            square(x) { return Math.pow(x, 2) }
            rect(x, y) { return x * y }
            tri(b, h) { return 0.5 * b * h}
            trap(b1, b2, h) {return ((b1 + b2) * h) / 2}
        }

        const areacalc = new Area();
        args[1] = args[1].toLowerCase();
        let res = null;
        let dims = null;
        switch(args[0]) {
            case 'square' : res = areacalc.square(args[1]); dims = `Side-Length: ${args[1]}`; break;
            case 'rectangle' :
                case 'rect' : 
                res = areacalc.rect(args[1], args[2]); dims = `Length: ${args[1]}, Width: ${args[2]}`; break;
            case 'triangle' : 
                case 'tri' :
                res = areacalc.tri(args[1], args[2]); dims = `Base: ${args[1]}, Height: ${args[2]}`; break;
            case 'trapezoid' :
                case 'trap' :
                res = areacalc.trap(args[1], args[2], args[3])
        }
        result.setTitle(`Area: ${args[0]}`);
        result.addField('Result', `${res} units²`, false);
        result.addField('Dimensions', `${dims}`);
        return message.channel.send({ embeds: [result] });
}
}