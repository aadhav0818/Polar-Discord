const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'quadratic',
    description: 'Calculates a quadratic equation and its properties',
    usage: '```js\n' + `${config.prefix}quadratic [a] [b] [c]` + '```',
    example: '```js\n' + `${config.prefix}quadratic 2 3 2\n//Note: 2 3 2 stands for 2x^2+3x+2` + '```',
    execute(client, message, args, Discord) {
        
    }
}