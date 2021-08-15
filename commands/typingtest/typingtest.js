const Discord = require("discord.js")
const config = require('../../config.json');
const wordlist = require('wordlist-english');
/**
 * @param {Discord.Message} message
 * @param {Discord.Client} client
 */

module.exports = {
    name: 'typingtest',
    description: 'Starts a typing test with your own customizations',
    usage: '```' + `${config.prefix}typingtest [short/medium/long] [(optional) random]` + '```',
    example: '```' + `${config.prefix}typingtest medium random`+ '```', 
    async execute(client, message, args, Discord) {

        if(!args[0]) {const noArgsEmbed = new Discord.MessageEmbed().setTitle('Command Error').addField('Reason', errors.noArgsErr , false).addField('Usage', this.usage, false).addField('Example', this.example, false).setColor(colors.error)
        return message.channel.send(noArgsEmbed)}         

        const length = args[0].toLowerCase()
        let wordcount = 0; let note = ""; let isRandom = false;
        function writeNote(str) {
            return note += str + '\n';
        }
    
        switch(length) {
            case "short" : wordcount = 25;
                break;
            case "medium" : wordcount = 50;
                break;
            case "long" : wordcount = 100;
                break;
            default : wordcount = 50; writeNote("Invalid length entered so it defaulted to medium!");
        }
        function newRandomWords(length) {
            let randomWords = '';
            for(let i = 0; i < length; i++) {
                let word = ''; let wordLength = parseInt((Math.random() * 7) + 1)
                for(let k = 0; k < wordLength; k++) { 
                    word += String.fromCharCode(Math.floor((Math.random() * 25) + 97))
                }
                wordLength = parseInt((Math.random() * 7) + 1);
                if(length - 1 != i) {randomWords += word + ' '};
                word = '';
            }   
            randomWords = randomWords.replace(randomWords.charAt(0), randomWords.charAt(0).toUpperCase());
            randomWords = randomWords.slice(0, randomWords.length - 1)
            ;randomWords = randomWords + '.'
            return randomWords
        }

        if(args[1]) {
            if(args[1].toLowerCase() === 'random') {
                isRandom = true;
            }
        }
        let words = '';
        if(isRandom == true) {
            words = newRandomWords(wordcount)
        }
        else {
            englishWords = wordlist['english/10'];
            for(let i = 0; i < wordcount; i++) {
                let random = (Math.random() * (englishWords.length - 3)) + 1;
                arr = englishWords.slice(random)
                words += arr[0] + " ";
            }
         }


        const testEmbed = new Discord.MessageEmbed()
        .setTitle('Typing Test')
        .addField('Length', length, true)
        .addField('Type', isRandom ? "Random" : "Normal", true)
        .addField('Typing Test', words)
        .setColor(colors.default)

        const prompts = [testEmbed]
        let question = 0;
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: prompts.length, time: 600000});
        let timestamp_first = '';
        message.channel.send(prompts[question++]).then(sentMessage => {
            timestamp_first = sentMessage.createdTimestamp
        })
        collector.on('collect', m => {
            if(question < prompts.length) {
            m.channel.send(prompts[question++])
            }
        })
    
        collector.on('end', collected => {
            let question = 0;
            collected.forEach((value) => { 
                question++;
                if(question == 1) {
                    let score = 0;
                    resultCheck = value.content.split(/ /g)
                    wordCheck = words.split(/ /g)
                    for(let i = 0; i < wordcount; i++) {
                        if(resultCheck[i] == wordCheck[i]) {
                            score++
                        }
                        if(resultCheck[i] == null) {
                            break;
                        }
                    }
                    let timestamp_second = value.createdTimestamp;
                    let time = parseFloat((timestamp_second - timestamp_first) / 1000)
                    let wpm = score/time
                    let result = parseFloat((score / wordcount) * 100).toLocaleString()
                    if(wpm * 60 > 230) {
                        result = 0
                    }
                    const resultEmbed = new Discord.MessageEmbed()
                    .setTitle('Typing Test Results')
                    .addField('User', `<@!${message.author.id}>`, true)
                    .addField('Length', length, true)
                    .addField('Type', isRandom ? "Random" : "Normal", true)
                    .addField('Accuracy', result + '%', true)
                    .addField('WPM Adjusted', (wpm * 60).toLocaleString(), true)
                    .setColor(colors.default)
                    if(note != '') {
                        resultEmbed.setDescription(note)
                    }
                    if(wpm * 60 > 230) {
                        resultEmbed.setColor(colors.error)
                        resultEmbed.addField('Alert', 'Copy paste detected', true)
                    }
                    message.channel.send(resultEmbed)
                }
               
            })
        })

    }
}   

 
