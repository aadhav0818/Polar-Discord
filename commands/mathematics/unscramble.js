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
    let charArray = (english_words[i].split(''));
    charArray.forEach(element => {
        primeCombination = primeCombination * primeMap.get(element);
    });
    hashMap.set(primeCombination, `${english_words[i]}`)
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
        scramble.forEach(element => {
            scramblePrimeCombination = scramblePrimeCombination * primeMap.get(element);
        })
        if(hashMap.has(scramblePrimeCombination) == true) {
            return message.channel.send(`Scramble Found: ${hashMap.get(scramblePrimeCombination)}`)
        }
        else {
            return message.channel.send(`Scramble not found! Attempted string: ${scramble}`)
        }
    }
}