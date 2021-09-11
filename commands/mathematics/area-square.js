const Discord = require('discord.js');
const config = require('../../config.json');
const throwArg = require('../../objects/throwArg.js');

module.exports = {
    name: 'area-square',
    description: 'Calculates the area of a square',
    usage: `${config.prefix}area square [dim]`,
    example: `${config.prefix}area square 2`,
    async execute(client, message, args, Discord) {
        throwArg.setFooter(`Try ${config.prefix}help ${this.name}`)
        if(!args[0]) {return message.channel.send({ embeds: [throwArg] })}
        const result = new Discord.MessageEmbed();
        result.setColor(config.colors.success);
        result.setTitle('Area: Square');
        result.addField('Result', `${Math.pow(args[0], 2)} units²`, false);
        result.addField('Dimensions', `Side-Length: ${args[0]}`);
        return message.channel.send({ embeds: [result] });
    }
}