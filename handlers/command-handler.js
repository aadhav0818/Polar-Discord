const fs = require('fs');

module.exports = (client, Discord) => {
    let commandAmount = 0
    const commandFolders = fs.readdirSync('./commands');
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            commandAmount += 1
            const command = require(`../commands/${folder}/${file}`)
            client.commands.set(command.name, command)
            if(command.name) {
                client.commands.set(command.name, command)
            }
            else {
                continue;
            }
         }
    }
    console.log(`Loading ${commandAmount} commands!`)
}
