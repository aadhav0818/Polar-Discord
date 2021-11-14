const Discord = require('discord.js');
const config = require('../../config.json');
const wordlist = require('wordlist-english');

const english_words = wordlist['english'];

let hashMap = new Map();
let primeMap = new Map();
let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
for(let i = 1; i <= 26; i++) {
    primeMap.set(String.fromCharCode(i + 64), primeNumbers[i])
}

for(let i = 0; i < english_words.length; i++) { 
    let primeCombination = 1;
    let charArray = (english_words[i].toUpperCase()).split('');
    charArray.forEach(element => {
        primeCombination = primeCombination * primeMap.get(element);
    });
    if(hashMap.has(primeCombination) == true) {
        hashMap.get(primeCombination).push(english_words[i])   
    }
    else {
        wordArray = [english_words[i]];
        hashMap.set(primeCombination, wordArray)
    }
}

module.exports = {

    name: 'unscramble',
    description: 'Unscrambles a scrambled word',
    usage: '',
    example: '',

     /** 
     * @param {Discord.Message} message
     *  @param {Discord.Client} client;
     **/

    async execute(client, message, args, Discord) {
        let scramble = args[0];
        let scramblePrimeCombination = 1;
        (scramble.toUpperCase()).split('').forEach(element => {
            scramblePrimeCombination = scramblePrimeCombination * primeMap.get(element);
        })
        const embed = new Discord.MessageEmbed()
            .setColor(config.colors.default)
            .setTitle('Unscrambles Found')
            .addField('Attempted Unscramble', `${scramble}`);
        let isunScramble = false;
        if(hashMap.has(scramblePrimeCombination) == true) {
            isunScramble = true;
        }
        else {
            isunScramble = false;
        }
        if(isunScramble == true) {
            embed.addField('Scrambles', `${(hashMap.get(scramblePrimeCombination).toString()).replace(/,/g, '\n')}`);
        }   
        else {
            embed.addField('Scrambles', `⛔ None Found `)
        }
        message.channel.send({ embeds: [embed] })
    }
}