const Discord = require("discord.js")
const config = require('../../config.json')
const imageApi = require('imageapi.js')

module.exports = {
    name: 'reddit-meme',
    description: 'Finds a random meme from a subreddit',
    usage: '```' + `${config.prefix}reddit-meme [subreddit name]` + '```',
    example: '```' + `${config.prefix}reddit-meme boneappletea` + '```',
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            const noArgsEmbed = new Discord.MessageEmbed() 
                .setTitle('Command Error')
                .addField('Reason', errors.noArgsErr , false)
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
            return message.channel.send(noArgsEmbed)
        }
    try {
        let subreddit = args[0]
        if(subreddit.includes('r/')) {
            subreddit = subreddit.replace('r/', "")
        }
        let meme = await imageApi(subreddit)
        let memory_usage_protection = 0;
        while(!meme && memory_usage_protection < 3) {
            meme = await imageApi(subreddit)
            memory_usage_protection++;
        }
        if(!meme) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'Could not find the requested subreddit! This may happen if the subreddit is void of images or if it is non-existent')
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
            return message.channel.send(errEmbed)
        }
        if(meme) {
        const memeEmbed = new Discord.MessageEmbed()
            .setTitle('Reddit Meme: r/' + subreddit)
            .setURL(`https://www.reddit.com/r/${subreddit}`)
            .setImage(await meme)
            .setColor(config.colors.reddit)
        return message.channel.send(memeEmbed)
        }
    }
    catch(err) {
        const errEmbed = new Discord.MessageEmbed()
            .setTitle('Command Error')
            .addField('Reason', 'Could not find the requested subreddit! This may happen if the subreddit is void of images or if it is non-existent' )
            .addField('Example', this.example, false)
            .setColor(config.colors.error)
        return message.channel.send(errEmbed)
    }

    }
}
