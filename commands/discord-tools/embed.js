const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'embed',
    description: 'Generates a custom embed through an interactive setup',
    usage: '```' + `${config.prefix}embed` + '```',
    items: 'Hex Colors > https://htmlcolorcodes.com/',
    image: 'https://cdn.discordapp.com/attachments/801843086379450368/821203766920347689/Screen_Shot_2021-03-15_at_9.10.32_PM.png',
    async execute(client, message, args, Discord) {
        if(message.guild === null) {
            const dmEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'This command can only be used in a server!')
                .setColor(colors.error)
            return message.author.send(dmEmbed);
        }
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            const noPermsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', 'Missing permissions: `MANAGE_MESSAGES`', false)
                .setColor(colors.error)
            return message.channel.send(noPermsEmbed)
        }
        const promptTitle = new Discord.MessageEmbed() 
            .setDescription('Enter the `title` of your custom embed\n(Type `null` if you do not want a title)')
            .setColor(colors.default)
        const promptDescription = new Discord.MessageEmbed() 
            .setDescription('Enter the `description` of your customembed\n(Type `null` if you do not want a description)')
            .setColor(colors.default)
        const promptFooter = new Discord.MessageEmbed() 
            .setDescription('Enter the `footer` of your custom embed\n(Type `null` if you do not want a footer)')
            .setColor(colors.default)
        const promptTimestamp = new Discord.MessageEmbed() 
            .setDescription('Do you want a `timestamp`\n(Enter `Y or N`)')
            .setColor(colors.default)
        const promptThumbnail = new Discord.MessageEmbed()
            .setDescription('Enter a `discord media link` for your thumbnail\n(Type `null` if you do not want a thumbnail)')
            .setColor(colors.default)
        const promptImage = new Discord.MessageEmbed()
            .setDescription('Enter a `discord media link` for your `IMG/GIF`\n(Type `null` if you do not want an IMG/GIF)')
            .setColor(colors.default)
        const promptColor = new Discord.MessageEmbed() 
            .setDescription('Enter the `color` of your custom embed\n(Type `null` if you want a blank color)')
            .setColor(colors.default)
        const promptChannel = new Discord.MessageEmbed() 
            .setDescription('Enter the `ID` of the channel you want to send this embed to!\n(Invalid `IDs` will set the destination to the original channel)')
            .setColor(colors.default)
        
        const prompts = [promptTitle, promptDescription, promptFooter, promptTimestamp, promptThumbnail, promptImage, promptColor, promptChannel]
        let question = 0;
        var embed = new Discord.MessageEmbed()
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: prompts.length, time: 600000});
        message.channel.send(prompts[question++])
        collector.on('collect', m => {
            if(question < prompts.length) {
            m.channel.send(prompts[question++])
            }
        })
    
        collector.on('end', collected => {
            let question = 0;
            collected.forEach((value) => { 
                question++;
                if(question == 1 && value.content != 'null') {
                    embed.setTitle(value.content)
                }
                if(question == 2 && value.content != 'null') {
                    embed.setDescription(value.content)
                }
                if(question == 3 && value.content != 'null') {
                    embed.setFooter(value.content)
                }
                if(question == 4 && (value.content.toLowerCase(value.content) === 'y' || value.content.toLowerCase(value.content) === 'yes')) {
                    embed.setTimestamp(message.createdTimestamp)
                }
                if(question == 5 && value.content != 'null' && (value.content.includes('cdn.discordapp.com') || value.content.includes('tenor.com'))) {
                    embed.setThumbnail(value.content)
                }
                if(question == 6 && value.content != 'null' && (value.content.includes('cdn.discordapp.com') || value.content.includes('tenor.com'))) {
                    embed.setImage(value.content)
                }
                if(question == 7) {
                    if(value.content != 'null') {
                    embed.setColor(value.content)
                    }
                }
                if(question == 8) {
                    const noticeEmbed = new Discord.MessageEmbed()
                    if(message.guild.channels.cache.find(ch => ch.id == value.content)) {
                        const destination = message.guild.channels.cache.find(ch => ch.id == value.content);
                        destination.send(embed);
                        noticeEmbed.setTitle(`✅ Successfully sent your embed to ${destination.name}!`)
                        noticeEmbed.setColor(colors.success)
                        message.channel.send(noticeEmbed)
                    }
                    else {
                        message.channel.send(embed)
                        noticeEmbed.setTitle('✅ Successfully sent your embed!')
                        noticeEmbed.setDescription('The embed was sent in this channel because the ID did not resolve to any of your channels!')
                        noticeEmbed.setColor(colors.success)
                        message.channel.send(noticeEmbed)
                    }
                }
            })
        })
  
     
    
    }
}