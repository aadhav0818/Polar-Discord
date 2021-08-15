const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = (Discord, client, message) => {

    setInterval(() => {
        let users = 0;
        client.guilds.cache.forEach(guild => {
            users += guild.memberCount;
        })
        client.user.setActivity(client.guilds.cache.size + ' Discord servers and ' + users + ' users', { type: 'WATCHING' })
    }, 60000);

    const prefix = config.prefix;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd)
    if(command) command.execute(client, message, args, Discord)

    if(message.content.startsWith(`${config.prefix}help`) && message.content != `${config.prefix}help`) {
        let commandName = args[0];
        if(!client.commands.find(cmd => cmd.name == commandName)) {
            let unknownCommand = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', `${config.errors.UNKNOWN_CMD_ERROR} Do ${config.prefix}help to see a list of commands!`, false)
                .addField('Usage', '```js\n' + `${config.prefix}help [command]` + '```')
                .setColor(config.colors.error)
            message.channel.send(unknownCommand)
        }
        else {
            let findCommand = client.commands.find(cmd => cmd.name == commandName)
            let knownCommand = new Discord.MessageEmbed()
                .setTitle('Help: ' + commandName)
                .addField('Description', findCommand.description, false)
                .addField('Usage', findCommand.usage, false)
                if(findCommand.example) {
                    knownCommand.addField('Example', findCommand.example, false)
                }
                if(findCommand.items) {
                    knownCommand.addField('Items', findCommand.items, false)
                }
                knownCommand.setColor(config.colors.default)
                knownCommand.setFooter(`PolarBot™ ${config.version}`)
                if(findCommand.image) {
                    knownCommand.setImage(findCommand.image)
                }
            message.channel.send(knownCommand)
        }
    }

}