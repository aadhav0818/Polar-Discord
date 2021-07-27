if(message.guild === null) {
    const dmEmbed = new Discord.MessageEmbed()
        .setTitle('Command Error')
        .addField('Reason', 'This command can only be used in a server!')
        .setColor(config.errorColor)
    return message.author.send(dmEmbed);
}