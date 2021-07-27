const Discord = require('discord.js')
const errors = require('../../errors.json')
const config = require('../../config.json')
const colors = require('../../colors.json')
module.exports = {
    name: 'quadratic',
    description: 'Calculates a quadratic equation and its properties',
    usage: '```js\n' + `${config.prefix}quadratic [a] [b] [c]` + '```',
    example: '```js\n' + `${config.prefix}quadratic 2 3 2\n//Note: 2 3 2 stands for 2x^2+3x+2` + '```',
    execute(client, message, args, Discord) {
        try {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'The argument(s) provided contained illegal characters')
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            const regex = /[0-9]/;
            var a = (args[0])
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
                return message.channel.send(noArgsEmbed)
            }
            var b = (args[1])
            var c = (args[2])
     
            if(!args[1]) {
                b = 0;
            }
            if(!args[2]) {
                c = 0;
            }
            if(!a.match(regex)) {
                return message.channel.send(errEmbed)
            }
            if(!b.match(regex)) {
                return message.channel.send(errEmbed)
            }
            if(!c.match(regex)) {
                return message.channel.send(errEmbed)
            }
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
            var root1 = ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/ (2 * a))
            var root2 = ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/ (2 * a))
            var xVer = (-1 * b) / (2 * a)
            var aos = (-1 * b) / (2 * a)
            var yVer = (Math.pow(aos, 2) * a) + (aos * b) + (c)
            var minimum;
            var maximum;
            var endpoint
            if(a > 0) {
                endpoint = 'Minimum'
            }
            if(a < 0) {
                endpoint = 'Maximum'
            }
            var roots = new Discord.MessageEmbed()
              .setTitle('Quadratic Root Calculation')
              .addField('Standard Form', a + 'x^2+' + b + 'x+' + c, true)
              .addField('Vertex Form', a + '(x-' + xVer + ')^2+' + yVer, false)
              .addField('Factor Form', '(x-' + root1 + ')(x-' + root2 + ')', false)
              .addField('Roots', 'x=' + root1 + ' and x=' + root2, true)
              .addField('Vertex', '(' + xVer + ',' + yVer + ')', true)
              .addField('AOS', aos, true)
              .addField(endpoint, aos, true)
              .setColor(colors.default)
              .setFooter('Disclaimer: Cannot calculate complex roots at the moment\nNaN represents a complex root')
            return message.channel.send(roots)

        }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'The argument(s) provided contained illegal characters')
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(colors.error)
            return message.channel.send(errEmbed)
        }
    }
}