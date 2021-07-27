const Discord = require("discord.js");const errors = require('../../errors.json');const config = require('../../config.json');
const colors = require('../../colors.json');  const wordlist = require('wordlist-english');
const shuffle = require('shuffle-array');
module.exports = {

    name: 'unscramble',
    description: 'Unscrambles a random string using the official english dictionary',
    usage: '```' + `${config.prefix}unscramble [scrambled word]` + '```',
    example: '```' + `${config.prefix}unscramble peaoblarr` + '```',
    items: '```' + `Note: Some words cannot be unscrambled due to the database being used and the RAM Usage` + '```',
     /** 
     * @param {Discord.Message} message
     *  @param {Discord.Client} client;
     **/

    async execute(client, message, args, Discord) {
        if(!args[0]) {const noArgsEmbed = new Discord.MessageEmbed()
        .setTitle('Command Error').addField('Reason', errors.noArgsErr , false).addField('Usage', this.usage, false).addField('Example', this.example, false).setColor(colors.error); return message.channel.send(noArgsEmbed)}          
        
        let englishWords = wordlist['english'];

        let mcont = message.content.slice(config.prefix.length + this.name.length + 1)

        let scrambledWorld = mcont.toLowerCase();

        if(scrambledWorld.length > 8) {
            const morethan8 = new Discord.MessageEmbed().setTitle('Command Error').addField('Reason', 'The word cannot be longer than 8 characters! `[RAM Conservation Initiative]`' , false).setColor(colors.error); return message.channel.send(morethan8)
        }
        function scramble(a){a=a.split("");for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1));d=a[b];a[b]=a[c];a[c]=d}return a.join("")}

        let ram_saver = 0;
        let isUnscrambled = true;

        while(englishWords.indexOf(scrambledWorld) == -1) 
        {
            scrambledWorld = scrambledWorld.split(''); scrambledWorld = shuffle(scrambledWorld); scrambledWorld = scrambledWorld.join("");
            ram_saver++;
            if(ram_saver > 5040) {
                isUnscrambled = false;
                break;
            }
        }

        arr = englishWords.slice(englishWords.indexOf(scrambledWorld)), englishWords.slice(englishWords.indexOf(scrambledWorld))

        if(arr[0] == 'nigger' || arr[0] == 'nigga') {
            arr[0] = '⚠️ WARNING: Please do not attempt to unscramble racist/offensive terminology!'
        };
        if(isUnscrambled == false) {
            arr[0] = '⚠️ No words found!'
        }
        const msgEmbed = new Discord.MessageEmbed()
        .setTitle('Unscrambled Word')
        .addField('Unscrambles', '```' + arr[0] + '```', false)
        .addField('Original Scramble', '```' + `${mcont}` + '```')
        .setColor(colors.default)
        return message.channel.send(msgEmbed)
        

    }
}