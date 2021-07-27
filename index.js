const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require('./handlers/command-handler')(client,Discord);
require('./handlers/event-handler')(client,Discord);

client.login(config.discord)
/*\

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
  //@Content Command: Seal
  if (msg.content === '.seal 1') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-fat-queen-bouncing-jumping-gif-16256577')
  } 
  
  if (msg.content === '.seal 2') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/fat-full-food-seal-sassy-gif-7890730')
  }

  if (msg.content === '.seal 3') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/chubby-seal-cute-kiss-gif-13482813')
  }

  if (msg.content === '.seal 4') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/huh-what-is-it-minding-my-business-not-my-problem-idc-gif-14273645')
  }

  if (msg.content === '.seal 5') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-sea-lion-pup-crying-sad-gif-15745199')
  }
  
  if (msg.content === '.seal 6') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-bouncing-plop-flop-gif-11842197')
  }

  if (msg.content === '.seal 7') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-sax-spin-cute-gif-8848340')
  }

  if (msg.content === '.seal 8') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-snow-fat-waddle-bouncy-gif-7428864')

  }

  if (msg.content === '.seal 9') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-wadfilm-wad-waddengebied-waddenzee-gif-12656587')
  
   }

  if (msg.content === '.seal 10') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/seal-slapping-belly-gif-11149184')
    
  }

  if (msg.content === '.seal 11') {
    msg.delete();
  msg.channel.send('https://tenor.com/view/clapping-seal-applause-gif-7820544')
  }

  if(msg.content === '.seal 12') {
    msg.delete();
    msg.channel.send('https://tenor.com/view/attack-of-seals-seals-hundred-of-seals-gif-16654541')
  }

  //@Content Command: Seal Random
  if (msg.content === '.sealrandom') {
    msg.delete();
    const seal = ['https://tenor.com/view/seal-fat-queen-bouncing-jumping-gif-16256577', 'https://tenor.com/view/fat-full-food-seal-sassy-gif-7890730', 'https://tenor.com/view/chubby-seal-cute-kiss-gif-13482813', 'https://tenor.com/view/huh-what-is-it-minding-my-business-not-my-problem-idc-gif-14273645', 'https://tenor.com/view/seal-sea-lion-pup-crying-sad-gif-15745199', 'https://tenor.com/view/seal-bouncing-plop-flop-gif-11842197', 'https://tenor.com/view/seal-sax-spin-cute-gif-8848340', 'https://tenor.com/view/seal-snow-fat-waddle-bouncy-gif-7428864', 'https://tenor.com/view/seal-wadfilm-wad-waddengebied-waddenzee-gif-12656587', 'https://tenor.com/view/clapping-seal-applause-gif-7820544', 'https://tenor.com/view/seal-slapping-belly-gif-11149184', 'https://tenor.com/view/attack-of-seals-seals-hundred-of-seals-gif-16654541']
    const sealRandom = seal[Math.floor(Math.random() * seal.length)]
    msg.channel.send(sealRandom)
  }

  //@Content Command: Seal Repeat
  if (msg.content.startsWith('.sealrepeat')) {
    do {
    msg.delete();
    var count = 0;
    var args = msg.content.split(" ").slice(1) 
    var sealSpam = parseInt(args[0])
    const seal = ['https://tenor.com/view/seal-fat-queen-bouncing-jumping-gif-16256577', 'https://tenor.com/view/fat-full-food-seal-sassy-gif-7890730', 'https://tenor.com/view/chubby-seal-cute-kiss-gif-13482813', 'https://tenor.com/view/huh-what-is-it-minding-my-business-not-my-problem-idc-gif-14273645', 'https://tenor.com/view/seal-sea-lion-pup-crying-sad-gif-15745199', 'https://tenor.com/view/seal-bouncing-plop-flop-gif-11842197', 'https://tenor.com/view/seal-sax-spin-cute-gif-8848340', 'https://tenor.com/view/seal-snow-fat-waddle-bouncy-gif-7428864', 'https://tenor.com/view/seal-wadfilm-wad-waddengebied-waddenzee-gif-12656587', 'https://tenor.com/view/clapping-seal-applause-gif-7820544', 'https://tenor.com/view/seal-slapping-belly-gif-11149184', 'https://tenor.com/view/attack-of-seals-seals-hundred-of-seals-gif-16654541']
    const sealRandom = seal[Math.floor(Math.random() * seal.length)]
    msg.channel.send(sealRandom)
    count++;
  }
    while (count < sealSpam)


  
  }


  if (msg.content.startsWith('.add')) {
    var args = msg.content.split(" ").slice(1)
    var result = parseInt(args[0]) + parseInt(args[1])
    var embed = new
  Discord.MessageEmbed()
    .setTitle('Result')
    .setDescription(result)
    .setColor('GREEN')
    msg.channel.send(embed)


  }
  //@App Command: Distance
  if (msg.content.startsWith('.distance')) {
    var args1 = msg.content.split(" ").slice(1)
    var result1 = Math.sqrt((Math.pow(parseInt(args1[2]) - parseInt(args1[0]), 2) + (Math.pow(parseInt(args1[3]) - parseInt(args1[1]), 2))))
    var embeddistance = new
  Discord.MessageEmbed() 
    .setTitle('Distance Calculation')
    .setDescription('Distance = ' + result1)
    .setColor('YELLOW')
    msg.channel.send(embeddistance)
    
  }

  //@App Command: Quadratic
  if (msg.content.startsWith('.quadratic') || msg.content.startsWith('.root')) {
    var quadargs = msg.content.split(" ").slice(1)
    var a = parseFloat(quadargs[0])
    var b = parseFloat(quadargs[1])
    var c = parseFloat(quadargs[2])
    var root1 = ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/ (2 * a))
    var root2 = ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/ (2 * a))
    var xVer = (-1 * b) / (2 * a)
    var aos = (-1 * b) / (2 * a)
    var yVer = (Math.pow(aos, 2) * a) + (aos * b) + (c)
    var minimum;
    var maximum;
    var endpoint
    if(a > 0) {
        endpoint = 'Minimum'
    }
    if(a < 0) {
        endpoint = 'Maximum'
    }
    var roots = new Discord.MessageEmbed()
      .setTitle('Quadratic Root Calculation')
      .addField('Standard Form', a + 'x^2+' + b + 'x+' + c, true)
      .addField('Vertex Form', a + '(x-' + xVer + ')^2+' + yVer, false)
      .addField('Factor Form', '(x-' + root1 + ')(x-' + root2 + ')', false)
      .addField('Roots', 'x=' + root1 + ' and x=' + root2, true)
      .addField('Vertex', '(' + xVer + ',' + yVer + ')', true)
      .addField('AOS', aos, true)
      .addField(endpoint, aos, true)
      .setColor('DARK_GREEN')
      .setFooter('Disclaimer: Cannot calculate complex roots at the moment')

    msg.channel.send(roots)
  }

//@WIP Command: GPA Calculator
if(msg.content === '.gpacalc') {
  const gpaInitiate = new Discord.MessageEmbed() 
  .setTitle('GPA Calculator')
  .setAuthor(msg.author.username, msg.author.avatarURL({dynamic: true }), 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .setDescription('You have `60` seconds to respond to each prompt\nIf you want an example of the command, use `.gpacalc -e`')
  .addField('Step 1', 'Enter amount of classes as an integer', false)
  .setTimestamp(msg.createdTimestamp)
  .setColor('DARK_GREEN')
  .setFooter('GPA User > ' + msg.author.username)
  msg.channel.send(gpaInitiate)
  const collectorResult = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {max: 1, time: 60000}); 
  collectorResult.on('collect', msg => {  
    if(msg) {
      var classNum = parseInt(msg)
      if(classNum > 0 && classNum < 20) {
      const gpaInitiate1 = new Discord.MessageEmbed() 
      .setTitle('GPA Calculator')
      .setAuthor(msg.author.username, msg.author.avatarURL({dynamic: true }), 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      .setDescription('📙 > On Level\n📘 > PAP/Honors/PLTW\n📗 > AP/IB\n\nYou have `60` seconds to respond to each prompt')
      .addField('Step 1', 'Amount of classes > `' + classNum + '`', false)
      .setTimestamp(msg.createdTimestamp)
      .setColor('DARK_GREEN')
      .setFooter('GPA User > ' + msg.author.username)
      msg.channel.send(gpaInitiate1).then(function(sentMessage) {(sentMessage.react('📙').then(() => sentMessage.react('📘').then(() => sentMessage.react('📗'))))})
      
      msg.awaitReactions((reaction, user) => user.id == msg.author.id && (reaction.emoji.name == '📙' || reaction.emoji.name == '📘' || reaction.emoji.name == '📗'), {max: 1, time: 60000})
        .then(collected => {

          if(collected.first().emoji.name === '📙') {
              msg.reply('ON LEVEL')
          }
          else if(collected.first().emoji.name === '📘') {
              msg.reply('PAP/HONORS/PLTW')
          }
          else if(collected.first().emoji.name === '📗') {
              msg.reply('AP/IB')
          }

        })
        .catch(
          () => {
          msg.reply('Please restart')
        });
      
      
      }
      else {
        const classLimit = new Discord.MessageEmbed()
        .setTitle('Command Error')
        .setDescription('You can not have over 20 classes!')
        .setColor('#6E6D6D')
        msg.channel.send(classLimit)
    }

  }
    })
    }
    

  


if(msg.content === '.gpacalc -e') {
  const gpacalcIE = new Discord.MessageEmbed() 
  .setTitle('GPA Calculator EXAMPLE')
  .setColor('2CE0F7')
  .addField('Step 1', 'Enter amount of classes as an integer', false)
  .addField('User Response', '```js\n.gpa 8```')
  .setFooter('Requested by > ' + msg.author.username)
  msg.channel.send(gpacalcIE)
}


//@Content Command: Bot Insult
const botInsult = ['bad', 'suck', 'trash', 'malfunctional', 'annoying', 'useless', 'no one likes u', 'doesnt work', 'garbage', 'stupid']
const botResponse = ['Hey, thats not very nice', 'no u', 'why you mean to me?', 'k thx', 'lol ok', 'how dare u nub', 'k cool']
const randomResponse = botResponse[Math.floor(Math.random() * botResponse.length)]
  if ((msg.content.includes('polarbot') || msg.content.includes('Polarbot')) && botInsult.some(word => msg.content.includes(word)))  {
    msg.channel.send(randomResponse)
  }



//@WIP Command: Embed
  if(msg.content === '+embed') {
    const promptTitle = new Discord.MessageEmbed() 
      .setDescription('Enter the `title` of your custom embed\n(Type `null` if you do not want a title)');
    const promptDescription = new Discord.MessageEmbed() 
      .setDescription('Enter the `description` of your customembed\n(Type `null` if you do not want a description)');
    const promptFooter = new Discord.MessageEmbed() 
      .setDescription('Enter the `footer` of your custom embed\n(Type `null` if you do not want a footer)');
    const promptTimestamp = new Discord.MessageEmbed() 
      .setDescription('Do you want a `timestamp`\n(Enter `Y or N`)');
    const promptThumbnail = new Discord.MessageEmbed()
      .setDescription('Enter a `discord media link` for your thumbnail\n(Type `null` if you do not want a thumbnail)')
    const promptImage = new Discord.MessageEmbed()
      .setDescription('Enter a `discord media link` for your `IMG/GIF`\n(Type `null` if you do not want an IMG/GIF)')
    const promptColor = new Discord.MessageEmbed() 
      .setDescription('Enter the `color` of your custom embed\n(Type `null` if you want a blank color)');
    
    const prompts = [promptTitle, promptDescription, promptFooter, promptTimestamp, promptThumbnail, promptImage, promptColor]
    let question = 0;
    var embed = new Discord.MessageEmbed()
    const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {max: prompts.length, time: 600000});
    msg.channel.send(prompts[question++])
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
              embed.setTimestamp(msg.createdTimestamp)
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
              msg.channel.send(embed)
            }
       })
    })

   
  }

  
  //@info react roles
  if(msg.content.startsWith('-reactroles')) {
    const args = msg.content.split(' ').slice(1)
    const promptReaction = new Discord.MessageEmbed() 
      .setDescription('How many roles would you like')
    const questions = {}
  }


  if(msg.content === '+colors') {
    var list = "```css\nAQUA: 1752220, GREEN: 3066993, BLUE: 3447003, PURPLE: 10181046, GOLD: 15844367, ORANGE: 15105570, RED: 15158332, GREY: 9807270, DARKER_GREY: 8359053, NAVY: 3426654, DARK_AQUA: 1146986, DARK_GREEN: 2067276, DARK_BLUE: 2123412, DARK_PURPLE: 7419530, DARK_GOLD: 12745742, DARK_ORANGE: 11027200, DARK_RED: 10038562, DARK_GREY: 9936031, LIGHT_GREY: 12370112, DARK_NAVY: 2899536, LUMINOUS_VIVID_PINK: 16580705, DARK_VIVID_PINK: 12320855```";
    list = list.replace(/ /g, '\b')
    list = list.replace(/,/g, '\n')
    list = list.replace(/:/g, ' / ')
    list += "\nFor more **specific colors** visit https://www.google.com/search?q=color+picker"
    const colorList = new Discord.MessageEmbed()
      .setTitle('Discord Embed Colors')
      .setDescription(list)
      .setColor('PURPLE')
    msg.channel.send(colorList)
  }
 
  
//@Moderation Command: Clearchat
  if (msg.content.startsWith('.clearchat')) {
    
    msg.delete();
    var args = msg.content.split(" ").slice(1)
    var deletecount = parseInt(args[0])
    if(deletecount < 1 || deletecount > 100) {
      var deleteError = new Discord.MessageEmbed()
        .setTitle('Could not clear ' + deletecount + ' messages')
        .setDescription('Discord\'s API only allows for up to 100 messages to delete at a time\nWe also prohibit 0 or less messages because that effectively does nothing\n```js\n(node:4729) UnhandledPromiseRejectionWarning: DiscordAPIError: Invalid Form Body limit: int value should be less than or equal to 100.```')
        .setColor('DARK_RED')
        .setFooter(msg.author.username)
        .setTimestamp(msg.createdTimestamp)
        msg.channel.send(deleteError)
    }
    else if(deletecount > 0 && deletecount <= 100) {
    msg.channel.bulkDelete(deletecount);
    var embedclear = new
   Discord.MessageEmbed()
    .setTitle('Chat Cleared')
    .setFooter(args[0] + ' messages cleared by: ' + msg.author.username)
    .setColor('DARK_GREEN')
    .setTimestamp(msg.createdTimestamp)
  msg.channel.send(embedclear)
    }
  }
  if (msg.content.startsWith('.cc')) {
    msg.delete();
    var args = msg.content.split(" ").slice(1)
    var deletecount2 = parseInt(args[0])
    if(deletecount2 < 1 || deletecount2 > 100) {
      var deleteError2 = new Discord.MessageEmbed()
        .setTitle('Could not clear ' + deletecount2 + ' messages')
        .setDescription('Discord\'s API only allows for up to 100 messages to delete at a time\nWe also prohibit 0 or less messages because that effectively does nothing\n```js\n(node:4729) UnhandledPromiseRejectionWarning: DiscordAPIError: Invalid Form Body limit: int value should be less than or equal to 100.```')
        .setColor('DARK_RED')
        .setFooter(msg.author.username)
        .setTimestamp(msg.createdTimestamp)
        msg.channel.send(deleteError2)
    }
    else if(deletecount2 > 0 && deletecount2 <= 100) {
    msg.channel.bulkDelete(deletecount2);
    var embedclear2 = new
   Discord.MessageEmbed()
    .setTitle('Chat Cleared')
    .setFooter(args[0] + ' messages cleared by ' + msg.author.username)
    .setColor('DARK_GREEN')
    .setTimestamp(msg.createdTimestamp)
    msg.channel.send(embedclear2)
  }
}


  if(msg.content === '.cc all' || msg.content === '.clearchat all') {
    var clearchannel = msg.channel.name
    guild.channels.create(clearchannel)
    msg.channel.delete();
    }

 if (msg.content.startsWith('.chatwall'))  {
    var args = msg.content.split(" ").slice(1)
    var spamwall = parseInt(args[0]) 
    let spamcount = 0;
    msg.delete();
      do {
        msg.channel.send('===================================')

      spamcount++;
      
 } while (spamcount < spamwall);

 var embedwall = new3
 Discord.MessageEmbed()
  .setTitle('Summoned Chatwall')
  .setDescription('Chatwall Summoned By: ' + msg.author.username + '\nLength: ' + spamcount)
  .setColor('DARK_GREEN')
  .setTimestamp(msg.createdTimestamp)
  msg.channel.send(embedwall)
}
//@Moderation Command: Chatwall
 if (msg.content.startsWith('.cw'))  {
  var args = msg.content.split(" ").slice(1)
  var spamwall2 = parseInt(args[0]) 
  let spamcount2 = 0;
  msg.delete();
    do {
      msg.channel.send('===================================')

    spamcount2++;
    
} while (spamcount2 < spamwall2);

      

    
    
    var embedwall2 = new
    Discord.MessageEmbed()
     .setTitle('Summoned Chatwall')
     .setDescription('Chatwall Summoned By: ' + msg.author.username + '\nLength: ' + spamcount2)
     .setColor('DARK_GREEN')
     .setTimestamp(msg.createdTimestamp)
     msg.channel.send(embedwall2)
   }
 
  if (msg.content.includes('.gamemode')) {
  var embedgamemode = new
  Discord.MessageEmbed()
    .setTitle(':rotating_light: Error Detected')
    .setDescription("Did you mean .gamecode?")
    .setColor('DARK_RED')
    msg.channel.send(embedgamemode)
  }
  if (msg.content.includes('.chatclear')) {
    var embedgamemode = new
    Discord.MessageEmbed()
      .setTitle('Error Detected')
      .setDescription("Did you mean .clearchat?")
      .setColor('Yellow')
      msg.channel.send(embedgamemode)
    }
//@Info Command: Shortcut
  if(msg.content === '.shortcut') {
    var embedshortcut = new
    Discord.MessageEmbed()
      .setTitle('Shortcut Commands')
      .addField('Moderation Shortcuts', '`.vc muteall` = `.vcm`\n`.vc unmuteall` = `.vcu`\n`.clearchat` = `.cc`', true )
      .addField('Math Shortcuts', '`.quadratic` = `.root`')
      .addField('Search Shortcuts [⛔  Turned off] ', '`.googleimage` = `.gi`')
      .setColor('BLUE')
      msg.channel.send(embedshortcut)
  }
  //@Info Command: Color ID
  if(msg.content === '.colorID') {
    var embedmeaning = new
    Discord.MessageEmbed()
      .setTitle('Embed Color ID List')
      .setDescription('Blue = Command Lists\nGreen = True parameter')
      .setColor('DARK_GREEN')
      msg.channel.send(embedmeaning)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
  //@WIP Command: Mute
  { if(msg.member.roles.cache.find(r => r.name == "Bot Moderator")) {
  if(msg.content.startsWith('.mute')) {

    var role = msg.guild.roles.cache.find(r => r.name == "Muted")
    msg.mentions.members.first().roles.add(role.id)
  
    var muteembed = new
    Discord.MessageEmbed()
      .setTitle('Muted ' + msg.mentions.members.first().displayName)
      .setDescription(msg.author.username + ' muted ' + msg.mentions.members.first().displayName + '\nUser ID: <' + msg.mentions.members.first() + '>')
      .setTimestamp(msg.createdTimestamp)
      .setColor('RED')
      msg.channel.send(muteembed)
  
  }
}
  }
  //@WIP Command: Unmute
if(msg.member.roles.cache.find(r => r.name == "Bot Moderator")) {
{ if(msg.content.startsWith('.unmute')) {

    var role = msg.guild.roles.cache.find(r => r.name == "Muted")
    msg.mentions.members.first().roles.remove(role.id)
    var unmuteembed = new
    Discord.MessageEmbed()
      .setTitle('Unmuted ' + msg.mentions.members.first().displayName)
      .setDescription(msg.author.username + ' unmuted ' + msg.mentions.members.first().displayName + '\nUser ID: <' + msg.mentions.members.first() + '>')
      .setTimestamp(msg.createdTimestamp)
      .setColor('GREEN')
      msg.channel.send(unmuteembed)

  }
}
  }

//@WIP Command: Slowmode
if(msg.content.startsWith('.slowmode') && msg.author.id === '693951478859300956') {//msg.member.roles.cache.find(r => r.name == "Bot Moderator") ) { 
    console.log
      const args = msg.content.split(" ").slice(1)
      const slowmode = parseInt(args[0]) 
      msg.channel.edit({rateLimitPerUser: slowmode})
      const slowembed = new
      Discord.MessageEmbed()
        .setTitle('Slowmode ' + slowmode + 's')
        .setDescription('Slowmode has been changed to `' + slowmode + 's`')
        .setFooter('Slowmode Changed By: ' + msg.author.username)
        .setColor('RED')
       msg.channel.send(slowembed)
}

if(!msg.guild.channels.cache.find(ch => ch.name === 'server-logs') && msg.content === '.setup') {
  const setup1 = new Discord.MessageEmbed()
   .setTitle('PolarBot Setup :wrench:')
   .setDescription('Status: `Starting`')
   .addField('Setup', '🟩', true)
   .setTimestamp(msg.createdTimestamp)
  const setup2 = new Discord.MessageEmbed()
   .setTitle('PolarBot Setup :wrench:')
   .setDescription('Status: `Creating Roles` ')
   .addField('Setup', '🟩🟩', true)
   .setTimestamp(msg.createdTimestamp)
  const setup3 = new Discord.MessageEmbed()
   .setTitle('PolarBot Setup :wrench:')
   .setDescription('Status: `Creating Channels` ')
   .addField('Setup', '🟩🟩🟩', true)
   .setTimestamp(msg.createdTimestamp)
   msg.guild.channels.create('server-logs')
  const setup4 = new Discord.MessageEmbed()
   .setTitle('PolarBot Setup :wrench:')
   .setDescription('Status: `Creating Overwrites` ')
   .addField('Setup', '🟩🟩🟩🟩', true)
   .setTimestamp(msg.createdTimestamp)
  const setup5 = new Discord.MessageEmbed()
   .setTitle('PolarBot Setup :wrench:')
   .setDescription('Status: `Finishing` ')
   .addField('Setup', '🟩🟩🟩🟩🟩', true)
   .setTimestamp(msg.createdTimestamp)
  const setup6 = new Discord.MessageEmbed()
   .setTitle('PolarBot Setup :wrench:')
   .setDescription('Status: `Done` ')
   .addField('Setup', '🟩🟩🟩🟩🟩🟩', true)
   .setTimestamp(msg.createdTimestamp)
   .setColor('GREEN')
   .setFooter('PolarBot has been set up!')
  const newperm = new Discord.MessageEmbed()
   .setTitle('🔓 New Features Unlocked')
   .addField('New Commands', '`.mute <@user>`, `.unmute <@user>`', true)
   .addField('New Features', '`server-log` channel', false )
   .setColor('BLUE')
 
 
   msg.channel.send(setup1).then(msg => {
     setTimeout(async () => {
       await msg.edit(setup2);
     }, 1000);
     setTimeout(async () => {
       await msg.edit(setup3);
     }, 2000);
     setTimeout(async () => {
       await msg.edit(setup4);
     }, 3000);
     setTimeout(async () => {
       await msg.edit(setup5);
     }, 4000);
     setTimeout(async () => {
       await msg.edit(setup6);
     }, 5000);
     setTimeout(async () => {
       await msg.edit(newperm);
     }, 6000);
   });
 
   
 
 }
 
 
 
 
 if(msg.guild.channels.cache.find(ch => ch.name === 'server-logs') && msg.content === '.setup') {
    const setup1f = new Discord.MessageEmbed()
     .setTitle('PolarBot Setup :wrench:')
     .setDescription('Status: `Starting`')
     .addField('Setup', '🟩', true)
     .setTimestamp(msg.createdTimestamp)
    const setup2f = new Discord.MessageEmbed()
     .setTitle('PolarBot Setup :wrench:')
     .setDescription('Status: `Roles Already Exist` ')
     .addField('Setup', '🟩🟥', true)
     .setTimestamp(msg.createdTimestamp)
    const setup3f = new Discord.MessageEmbed()
     .setTitle('PolarBot Setup :wrench:')
     .setDescription('Status: `Channels Already Exist` ')
     .addField('Setup', '🟩🟥🟥', true)
     .setTimestamp(msg.createdTimestamp)
    const setup4f = new Discord.MessageEmbed()
     .setTitle('PolarBot Setup :wrench:')
     .setDescription('Status: `Existing Overwrites Found` ')
     .addField('Setup', '🟩🟥🟥🟥', true)
     .setTimestamp(msg.createdTimestamp)
    const setup5f = new Discord.MessageEmbed()
     .setTitle('PolarBot Setup :wrench:')
     .setDescription('Status: `Finalizing` ')
     .addField('Setup', '🟩🟥🟥🟥🟥', true)
     .setTimestamp(msg.createdTimestamp)
    const setup6f = new Discord.MessageEmbed()
     .setTitle('PolarBot Setup :wrench:')
     .setDescription('Status: `Failed` ')
     .addField('Setup', '🟥🟥🟥🟥🟥🟥', true)
     .setTimestamp(msg.createdTimestamp)
     .setColor('DARK_RED')
     .setFooter('This bot has already been set up!')
   
     msg.channel.send(setup1f).then(msg => {
       setTimeout(async () => {
         await msg.edit(setup2f);
       }, 1000);
       setTimeout(async () => {
         await msg.edit(setup3f);
       }, 2000);
       setTimeout(async () => {
         await msg.edit(setup4f);
       }, 3000);
       setTimeout(async () => {
         await msg.edit(setup5f);
       }, 4000);
       setTimeout(async () => {
         await msg.edit(setup6f);
       }, 5000);
     })
    } 
        
//@WIP Command: Slowmode Error
//LOGGING MODERATION
  if(msg.content.startsWith('.slowmode') && !(msg.member.roles.cache.find(r => r.name == "Bot Moderator")) ) {
    msg.reply('You **do not** have permission to use this command `REQUIRED ROLE: BOT MODERATOR`')
    .then(sentMessage => sentMessage.delete({ timeout: 2500 }))
       .catch(console.error)

    
}
//@WIP Command: VC Muteall Error
if((msg.content === '.vc muteall' || msg.content === '.vc unmuteall') && !(msg.member.roles.cache.find(r => r.name == "Mod")) ) {
  msg.reply('You **do not** have permission to use this command `REQUIRED ROLE: BOT MODERATOR`')
  .then(sentMessage => sentMessage.delete({ timeout: 10000 }))
     .catch(console.error)

  
}

if(msg) {
  console.log('[' + msg.guild.name + '] ' + msg.author.username + ': "' + msg.content + '"')
}
  //@Moderation Channel: Msg Sent Log
if(msg.guild.channels.cache.find(ch => ch.name === 'server-logs')) {
if(msg && !msg.author.bot) {
  const logs = new
  Discord.MessageEmbed()
    .setTitle('Message Sent')
    .addField('User', `<@${msg.author.id}>`, true)
    .addField('\u200B', `\u200B`, true)
    .addField('Channel ', `<#${msg.channel.id}>`, true)
    .addField('Message ', msg.content, false)
    .setTimestamp(msg.createdTimestamp)
    .setColor('DARK_BLUE')
    msg.guild.channels.cache.find(ch => ch.name === 'server-logs').send(logs);
}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VC COMMANDS
//@WIP Command: VC Muteall
if(msg.member.roles.cache.find(r => r.name == "Mod") && (msg.content.startsWith('.vc muteall') || msg.content.startsWith('.vcm')) && msg.member.voice.channel) {
  let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
    for (const [memberID, member] of channel.members) {
      member.voice.setMute(true); }
      var mutevcembed = new
      Discord.MessageEmbed()
        .setTitle('VC Muted Channel')
        .setDescription(msg.author.username + ' muted their VC' )
        .setTimestamp(msg.createdTimestamp)
        .setColor('DARK_RED')
        msg.channel.send(mutevcembed)
    

}


//@WIP Command: VC Unmuteall
if(msg.member.roles.cache.find(r => r.name == "Bot Moderator") && (msg.content.startsWith('.vc unmuteall') || msg.content.startsWith('.vcu')) && msg.member.voice.channel) {
    let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
    for (const [memberID, member] of channel.members) {
      member.voice.setMute(false);  }
      var unmutevcembed = new
    Discord.MessageEmbed()
      .setTitle('VC Unmuted Channel')
      .setDescription(msg.author.username + ' unmuted their VC' )
      .setTimestamp(msg.createdTimestamp)
      .setColor('DARK_GREEN')
      msg.channel.send(unmutevcembed)
    
 
  }
//@WIP Command: Eventcreate
 if (msg.content.startsWith('.eventcreate')) {
  var titleArgs = msg.content.split(" ").slice(1);
  var titleResult = titleArgs.join(" ")
  var descCode = '#' + (Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5))
  var descCodeFinal = descCode.toUpperCase()
  var newEvent = new Discord.MessageEmbed()
    .setTitle(titleResult)
    .setColor('YELLOW')
    .addField('Set Description', '`' + descCodeFinal + ' <Description>`')
  msg.channel.send(newEvent)
 }


//@Content Command: Network
  if (msg.content === '.network') {  
    if(Date.now() - msg.createdTimestamp < 40 && Date.now() - msg.createdTimestamp > 20) {
      var latency = new Discord.MessageEmbed() 
      .setTitle('Network Report')
      .addField('Latency', '`' + (Date.now() - msg.createdTimestamp) + 'ms`', false)
      .addField('API', '`' + (Math.round(client.ws.ping)) + 'ms`', false)
      .setFooter('User: ' + msg.author.username)
      .setColor('GREEN')
      msg.channel.send(latency)

    }
    if(Date.now() - msg.createdTimestamp < 20) {
      var latency = new Discord.MessageEmbed()
      .setTitle('Network Report')
      .addField('Latency', '`' + (Date.now() - msg.createdTimestamp) + 'ms`', false)
      .addField('API', '`' + (Math.round(client.ws.ping)) + 'ms`', false)
      .setFooter('User: ' + msg.author.username)
      .setColor('DARK_GREEN')
      msg.channel.send(latency)


    }
    if(Date.now() - msg.createdTimestamp < 100 && Date.now() - msg.createdTimestamp > 40) {
      var latency = new Discord.MessageEmbed()
      .setTitle('Network Report')
      .addField('Latency', '`' + (Date.now() - msg.createdTimestamp) + 'ms`', false)
      .addField('API', '`' + (Math.round(client.ws.ping)) + 'ms`', false)
      .setFooter('User: ' + msg.author.username)
      .setColor('YELLOW')
    msg.channel.send(latency)
    }
    if(Date.now() - msg.createdTimestamp > 100 && Date.now() - msg.createdTimestamp < 300) {
      var latency = new Discord.MessageEmbed()
      .setTitle('Network Report')
      .addField('Latency', '`' + (Date.now() - msg.createdTimestamp) + 'ms`', false)
      .addField('API', '`' + (Math.round(client.ws.ping)) + 'ms`', false)
      .setFooter('User: ' + msg.author.username)
      .setColor('RED')
    msg.channel.send(latency)
    }

    if(Date.now() - msg.createdTimestamp > 300) {
      var latency = new Discord.MessageEmbed()
        .setTitle('Network Report')
        .addField('Latency', '`' + (Date.now() - msg.createdTimestamp) + 'ms`', false)
        .addField('API', '`' + (Math.round(client.ws.ping)) + 'ms`', false)
       .setFooter('User: ' + msg.author.username)
       .setDescription('Invest in a better internet!')
       .setColor('DARK_RED')
      msg.channel.send(latency)
    }
  }

//@Moderation Command: Fixlag
if(msg.content.startsWith('.fixlag')) {
  msg.mentions.members.first().voice.setMute(true)
  msg.mentions.members.first().voice.setDeaf(true)
  msg.mentions.members.first().voice.setMute(false)
  msg.mentions.members.first().voice.setDeaf(false)
  msg.delete();
}

  //Secret ban command [temporary]

//@WIP Command: Kick
if(msg.author.id === '426926009653264384') {
    if(msg.content.startsWith('.kick')) {
      msg.delete();
    msg.mentions.members.first().kick()
      
    }
  }
//@WIP Command: Unban
    if(msg.content.startsWith('.unban')) {
      msg.delete();
      var args = msg.content.split(" ").slice(1)
      let userID = args[0]
      msg.guild.fetchBans().then(bans => {
      let bUser = bans.find(b => b.user.id == userID)
      msg.guild.members.unban(bUser.user)
    })
      
    }
//@WIP Command: VC Disconnect
if(msg.author.id === '426926009653264384' || msg.author.id === '713136818262114405') {
if(msg.content.startsWith('.dc')) {
  msg.delete()
  var args = msg.content.split(" ").slice(1)
msg.mentions.members.first().voice.kick()
}
}
//@WIP Command: Server Mute
  if(msg.author.id === '426926009653264384') {
    if(msg.content.startsWith('.servermute')) {
      msg.delete();
    msg.mentions.members.first().voice.setMute(true)
}
  }
  //@WIP Command: Unserver mute
  if(msg.author.id === '426926009653264384') {
    if(msg.content.startsWith('.unservermute')) {
      msg.delete();
    msg.mentions.members.first().voice.setMute(false)
}
  }
  //@WIP Command: Server Deaf
  if(msg.author.id === '426926009653264384') {
if(msg.content.startsWith('.serverdeaf')) {
  msg.delete();
msg.mentions.members.first().voice.setMute(true)
}
  }
  //@WIP Command: Unserver Deaf
  if(msg.author.id === '426926009653264384') {
if(msg.content.startsWith('.unserverdeaf')) {
  msg.delete();

msg.mentions.members.first().voice.setMute(false)
}
  }
//@WIP Command: VC Move
if(msg.author.id === '426926009653264384') {
  if(msg.content.startsWith('.move')) {
    var args = msg.content.split(" ").slice(1)
    var channelmove = args[1]
    msg.delete();
    msg.mentions.members.first().voice.setChannel(channelmove)
    }
  }

if(msg.author.id === '426926009653264384') {
  if(msg.content.startsWith('.disconnect')) {
    msg.delete();
    msg.mentions.members.first().voice.kick()
      }
    }
//@WIP Command: Disconnect All
if(msg.author.id === '426926009653264384') {
  if(msg.content.startsWith('.disconnectall')) {
  msg.delete()
  
  let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
    for (const [memberID, member] of channel.members) {
      member.voice.kick(); }
    }
  }
    //@WIP Command: Nickname Change
if(msg.author.id === '426926009653264384')  {
   if(msg.content.startsWith('.nickchange')) {
   msg.delete();
   var args = msg.content.split('=>').slice(1)
   var nickname = args[0]

   msg.mentions.members.first().setNickname(nickname)
 }
    }
   
//@WIP Command: Nickname Reset
if(msg.author.id === '426926009653264384') {
    if(msg.content.startsWith('.nickreset')) {
    msg.delete();
    msg.mentions.members.first().setNickname(msg.mentions.members.first().user.username)
 }
    }

//@Moderation Command: VC Jiggle
if(msg.content.startsWith('.vcjiggle')) {
  var args = msg.content.split(" ").slice(1) 
  var sendNewVC = args[0]
  const prechannel = msg.guild.channels.cache.get(msg.member.voice.channel.id)
  msg.mentions.members.first().voice.setChannel(sendNewVC)
  msg.mentions.members.first().voice.setChannel(prechannel)
  msg.mentions.members.first().voice.setChannel(sendNewVC)
  msg.mentions.members.first().voice.setChannel(prechannel)
  msg.mentions.members.first().voice.setChannel(sendNewVC)
  msg.mentions.members.first().voice.setChannel(prechannel)
  msg.mentions.members.first().voice.setChannel(sendNewVC)
  msg.mentions.members.first().voice.setChannel(prechannel)
}


//@Moderation Command: VC Jiggle All
if(msg.content.startsWith('.jiggleall')) {
  var args = msg.content.split(" ").slice(1)
  var channelmove = args[0]
  if(msg.member.voice.channel) {
    let channel2 = msg.guild.channels.cache.get(msg.member.voice.channel.id);
const prechannel = msg.guild.channels.cache.get(msg.member.voice.channel.id)
  const confirmJiggle = '#' + (Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5))
  const declineJiggle = '#' + (Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5))
  const warningJiggle = new Discord.MessageEmbed() 
  .setTitle('VC Lag Warning - Confirmation')
  .setDescription('Are you sure you want to use this command? This command can cause major API clog and server lag - Type the following codes to Accept/Decline the request')
  .addField('Confirm', '`' + confirmJiggle + '`', true)
  .addField('Decline', '`' + declineJiggle + '`', true)
  .setColor('#6E6D6D')
  msg.channel.send(warningJiggle)
  const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {time: 20000});
  collector.on('collect', msg => { 
  if(msg.content === confirmJiggle) {
  const confirmedJiggle = new Discord.MessageEmbed()
    .setTitle('Approved Command')
    .setDescription('You have confirmed your action for `jiggleall`')
    .setColor('DARK_GREEN')
    msg.channel.send(confirmedJiggle)
  for (const [memberID, member] of channel2.members) {
    member.voice.setChannel(channelmove)
    member.voice.setChannel(prechannel)
    member.voice.setChannel(channelmove)
    member.voice.setChannel(prechannel)
    member.voice.setChannel(channelmove)
    member.voice.setChannel(prechannel)
    member.voice.setChannel(channelmove)
    member.voice.setChannel(prechannel)

  ; }

  }
  else if(msg.content === declineJiggle) {
    const declinedJiggle = new Discord.MessageEmbed()
      .setTitle('Cancelled Command')
      .setDescription('You have declined the `jiggleall` command from operating')
      .setColor('RED')
      msg.channel.send(declinedJiggle)
  }
})
}
else if(!msg.member.voice.channel) {
  const notInAVC = new Discord.MessageEmbed()
  .setTitle('Command Error')
  .setDescription('You are not currently in a voice channel!')
  .setColor('#6E6D6D')
  msg.channel.send(notInAVC)

}
}

//@WIP Command: C Move All
if(msg.author.id === '426926009653264384' || msg.author.id === '786811559862468619') {
  if(msg.content.startsWith('.vcmoveall')) {
    var args = msg.content.split(" ").slice(1)
    var channelmove = args[0]
    msg.delete();
  let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
    for (const [memberID, member] of channel.members) {
      member.voice.setChannel(channelmove); }


  }
  }
  //@WIP Command: Ban
  if(msg.author.id === '426926009653264384' || msg.author.id === '693951478859300956') {
    if(msg.content.startsWith('.ban')) {
      msg.delete();
    msg.mentions.me
    mbers.first().ban()
  
  
    }
    }
  //@WIP Command: VC Free
  if(msg.content.startsWith('.vcfree')) {
    msg.delete();1
    var args = msg.content.split(" ").slice(1)
    msg.mentions.members.first().voice.setDeaf(false)
    msg.mentions.members.first().voice.setMute(false)

  }

if(msg.content === '+dlc') {
  msg.delete();
  msg.channel.delete();
}

   //@WIP Command: Ban Error
  if(msg.author.id != '426926009653264384' && (msg.content.startsWith('.ban') || msg.content.startsWith('.unban') || msg.content.startsWith('.kick') || msg.content.startsWith('.servermute') || msg.content.startsWith('.unservermute') || msg.content.startsWith('.serverdeaf') || msg.content.startsWith('.unserverdeaf') || msg.content.startsWith('.vcmove') || msg.content.startsWith('.disconnect') || msg.content.startsWith('.nickchange') || msg.content.startsWith('.nickreset'))) {
    const notpolar = new Discord.MessageEmbed()
      .setTitle('Insufficient Permissions!')
      .setDescription('The creator of the bot did not grant you permission to use this command!')
      .setFooter('Contact P0LARB34R#4038 if you want an attempt in gaining power')
      .setColor('DARK_RED')
      msg.channel.send(notpolar)
  }

   //@App Command: Array Convert
if(msg.content.startsWith('.arrayconvert')) {
var args = msg.content.split(' => ').slice(1)
var conversionArray = args[0].replace(/ /g, '\', \'')
msg.channel.send('```js\n' + conversionArray + '```')
}

//@Info User Settings: Bot Status
    

//tickettooool
function padLeft(nr, n, str){
  return Array(n-String(nr).length+1).join(str||'0')+nr;
}
let ticketNumber = 0;
ticketNumber = ticketNumber.toFixed(0000)
var userList = 'USER-COLLECTION:'
if(msg.content === '+ticket setup') {
const ticketEmoji = '🎫';
const cancelEmoji = '⛔';
var channelList = ''
var ticketID = 0;
var targetUser;
const setupMessageEmbed = new Discord.MessageEmbed() 
      .setTitle('Create Support Ticket')
      .setDescription('React to start a new support ticket! A staff member will consult with you shortly')
      .addField('Warning', 'Troll Tickets will result in punishment', false)
      .setColor('#c186ff')
      .setFooter('Cosmic Events • Ticket Tool');
let setupMessage = await msg.channel.send(setupMessageEmbed);

setupMessage.react(ticketEmoji)

client.on('messageReactionAdd', async (reaction, user) => {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();
  if(user.bot) return;
  if(!reaction.message.guild) return;
  if(reaction.message.id == reaction.message.id) {
    if(reaction.emoji.name === ticketEmoji && reaction.message == setupMessage) {
      console.log('Reaction detected!')

      const userReactions = setupMessage.reactions.cache.filter(reaction => reaction.users.cache.has(user.id) && (user.id !== client.user.id));

        for (const reaction of userReactions.values()) {
          await reaction.users.remove(user.id);
        }
        ticketNumber++;
        var ticketName = user.username.toLowerCase() + '-ticket-' + padLeft(ticketNumber, 4);
        console.log('USERLIST-RESOLVED: ' + userList) 
        if(!(userList.includes((user.id).toString(user.id)))) {
        const newChannel = await msg.guild.channels.create(ticketName, {
            type: 'text',
            permissionOverwrites: [
              {
                id: msg.guild.id,
                deny: ['VIEW_CHANNEL'],
              },
              {
                id: user.id,
                allow: ['VIEW_CHANNEL'],

              },
            ],
        });
        let supportTeam = 'Support Team'
        supportTeam.toLowerCase()
        const newTicket = new Discord.MessageEmbed()
          .setTitle('New Support-Ticket by ' + user.username)
          .setFooter('User ID • ' + user.id)
          .setDescription('A staff member will be with you shortly! Please be patient\nReact to close this ticket')
          .setColor('#c186ff');

        let ticketMessage = await newChannel.send(newTicket)
        const supportRole = ticketMessage.guild.roles.cache.find(r => r.name == supportTeam).id
        if(supportRole) {
            newChannel.updateOverwrite((supportRole), {VIEW_CHANNEL: true})
        }

        else {
            await newChannel.send('Please create a new role called `Support Team` (Not Case Sensitive) and assign it to the desired members to allow people beyond `ADMINISTRATOR` to view the ticket!')
        }

        ticketID = newChannel.id;
        ticketMessage.react(cancelEmoji)
        cancelTicket = true;
       channelList += ticketID + '\n'
       console.log(ticketName)
       targetUser = msg.member
      
       console.log('Created a new channel for ' + user.username)
        userList += (user.id).toString(user.id) + ' ';
        console.log('USERLIST-RESOLVED: ' + userList)
      }
      else {
        const existingTicket = new Discord.MessageEmbed()
          .addField('Ticket Error', 'Unable to create a new channel for ' + user.username, false)
          .addField('Reason', '1/1 Tickets Created', false) 
          .setColor('#c186ff')
        msg.channel.send(existingTicket).then(msg => {
          msg.delete({timeout: 3000})
        })
      }

    }
    if(reaction.emoji.name === cancelEmoji && (await reaction.message.guild.members.fetch(user)).hasPermission('MANAGE_CHANNELS') && channelList.includes(reaction.message.channel.id)) {
      console.log('Deleting a support ticket!')
      const fetchChannel = msg.guild.channels.cache.find(ch => ch.id == reaction.message.channel.id)
      const fetchUser = fetchChannel.permissionOverwrites.get(user.id).id
      userList = userList.replace(fetchUser.toString(fetchUser), '') 
      console.log(userList)
      fetchChannel.delete();

  }
  }
})

  
}

//Join2Create
    if(msg.content === ('+createNewVoice setup').toLowerCase()) {
      if(msg.guild.channels.cache.find(ch => ch.name === '➕ | Join to Create')) {
        msg.delete();
        const existingCreateNewVoice = new Discord.MessageEmbed()
          .addField('Creation Error', 'Unable to create new `createNewVoice` channel', false)
          .addField('Reason', 'Existing `createNewVoice` channel found')
          .setColor('#c186ff')
        msg.channel.send(existingCreateNewVoice).then(msg => {
          msg.delete({timeout: 3000})
        })

      }
      else {
        msg.guild.channels.create('➕ | Join to Create', {type: "voice"})
        const createNewVoice = new Discord.MessageEmbed()
          .addField('Success', 'Successfully created a new `createNewVoice` channel!', false)
          .addField('Info', 'The new channel will be located at the `top` of the server!\nMove if necessary')
          .setColor('#c186ff')
        msg.channel.send(createNewVoice).then(msg => {
          msg.delete({timeout: 3000})
      })
    }
    


}
if(msg.content === 'join_channel') {
  msg.member.voice.channel.join()
  const deny = msg.guild.emojis.cache.get("817070624152223779");
const approve = msg.guild.emojis.cache.get("817070603126702090");
  msg.react(approve)
  .then(connection => console.log('Connected!'))
.catch(console.error);
}

if(msg.content === '+testnewemoji') {
const deny = msg.guild.emojis.cache.get("817070624152223779");
const approve = msg.guild.emojis.cache.get("817070603126702090");
  msg.react(deny)
  msg.react(approve)
}
if(msg.content === '+testregularemoji') {
  const deny = '👎'
  const approve = '👍'
    msg.react(deny)
    msg.react(approve)
  }

}) 
var channelName = '' ;
let activeChannels = 'ac: ';
client.on('voiceStateUpdate', async (oldState, newState) => {
  let targetChannel = newState.guild.channels.cache.find(ch => ch.name === '➕ | Join to Create');
  if((newState.channel !== null && oldState.channel === null) || (newState.channel !== null && oldState.channel !== null)) {
  if(newState.channel.name == targetChannel.name) {
    console.log('User joined voice channel')
    let category = newState.guild.channels.cache.find(ch => ch.name === '➕ | Join to Create').parentID
    console.log(category)
    channelName = newState.member.user.username + '\'s channel'
    console.log(channelName)
    var vcID = 0;
    await newState.guild.channels.create(channelName, {type: "voice"}).then(async voiceChannel => {
      await voiceChannel.setParent(category)
      vcID = voiceChannel.id;
      console.log(vcID)
      await voiceChannel.updateOverwrite(newState.guild.roles.everyone, {'CONNECT': false})
      console.log('Updated overwrite: CONNECT: FALSE')
      await voiceChannel.updateOverwrite(newState.member.user, {'MOVE_MEMBERS': true})
      console.log('Updated overwrite: MOVE_MEMBERS: TRUE')
      await voiceChannel.updateOverwrite(newState.member.user, {'DEAFEN_MEMBERS': true})
      console.log('Updated overwrite: DEAFEN_MEMBERS: TRUE')
      await voiceChannel.updateOverwrite(newState.member.user, {'MUTE_MEMBERS': true})
      console.log('Updated overwrite: MUTE_MEMBERS: TRUE')
      await newState.member.voice.setChannel(vcID)
      console.log('Moved member to ' + vcID)
      activeChannels += (newState.channel.id).toString(newState.channel.id) + '\n';
      console.log('Added Channel ID to list!')
      console.log('ACTIVE CHANNELS:' + activeChannels)
    })

    console.log(vcID)
    console.log('Changed category for ' + channelName)
    console.log('Created new voice channel for ' + newState.member.user.username)
  }
  
}
if((newState.channel === null && oldState.channel !== null) || (newState.channel !== null && oldState.channel !== null)) {
  console.log('User left voice channel')
  const voiceChannels = newState.guild.channels.cache.find(ch => ch.name == channelName)
  console.log(channelName)
if(activeChannels.toString().includes((oldState.channel.id).toString())) {
  console.log('voiceChannels: TRUE')
  if(oldState.channel.members.size == 0) {
    console.log('voiceChannelsDelete: TRUE')
    activeChannels = activeChannels.replace(((oldState.channel.id).toString()) + '\n', '')
    oldState.channel.delete();
    console.log(activeChannels)
}
}
}
})



//@Moderation Channel: Msg Delete Log
client.on('messageDelete', msg => {if(msg.guild.channels.cache.find(ch => ch.name === 'server-logs')) {
  if(!msg.author.bot) {
  const logs1 = new Discord.MessageEmbed()
    .setTitle('Message Deleted')
    .addField('User', `<@${msg.author.id}>`, true)
    .addField('\u200B', `\u200B`, true)
    .addField('Channel ', `<#${msg.channel.id}>`, true)
    .addField('Message ', msg.content, false)
    .setTimestamp(msg.createdTimestamp)
    .setColor('RED')
    msg.guild.channels.cache.find(ch => ch.name === 'server-logs').send(logs1); 
}
}
})
  //@Moderation Channel: Msg Edit Log
client.on('messageUpdate', (oldMessage, newMessage) => 
{ if(newMessage.guild.channels.cache.find(ch => ch.name === 'server-logs')) {
  if(!newMessage.author.bot) {
  const logs1 = new Discord.MessageEmbed()
    .setTitle('Message Edited')
    .addField('User', `<@${newMessage.author.id}>`, true)
    .addField('\u200B', `\u200B`, true)
    .addField('Channel ', `<#${newMessage.channel.id}>`, true)
    .addField('Old Message ', oldMessage, false)
    .addField('New Message ', newMessage, true)
    .setTimestamp(newMessage.createdTimestamp)
    .setColor('YELLOW')
    newMessage.guild.channels.cache.find(ch => ch.name === 'server-logs').send(logs1);
    

}
  }
})
//music bot!

 
    
//@WIP Command: Typing Test
/*  if(msg.content === '.typingtest words') {
    const getResults = '#' + (Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5))
const wordDict = ['Tumefacient', 'precounseled', 'subaudibleness', 'hoggin', 'decried', 'toelike', 'pathognomy', 'asterope', 'kachina', 'shipbuilder', 'faintish', 'theiler', 'oslo', 'semimetallic', 'nicklaus', 'egyptian', 'larina', 'stipo', 'gelatinize', 'adie', 'suberous', 'gargantuan', 'literator', 'subpastor', 'further', 'unpertaining', 'overland', 'oph', 'everyplace.', 'Cwtch', 'sombrero', 'digitising', 'hateable', 'harpylike', 'inconsiderateness', 'tunelessly', 'fiercen', 'hanefiyeh', 'mirthless', 'untinseled', 'barbary', 'sour', 'unforaged', 'impend', 'laticiferous', 'sabmoved', 'episcopalian', 'approvedness', 'essonne', 'citylike', 'triglyceride', 'bilabial', 'karaitic', 'philanderer', 'questor', 'collyria', 'polypoid', 'boardwalk.', 'Galatea', 'albarello', 'enregister', 'halbe', 'nonsolvable', 'grafton', 'thymier', 'pregame', 'grangerised', 'preshortage', 'agnathous', 'indued', 'paleopathologist', 'louvre', 'unraving', 'beanshooter', 'simulating', 'xylographic', 'sidewheel', 'spireless', 'maqui', 'undestroyed', 'subhyaloid', 'lurkingly', 'jenice', 'supereffective', 'chandlery', 'nonjudicatory', 'evangelize.', 'Enthalpy', 'oldster', 'izzard', 'reinvade', 'kten', 'cocainism', 'garth', 'troat', 'hyperaltruistic', 'contracture', 'luks', 'macleod', 'heliocentricity', 'pashalic', 'jabalpur', 'cubicalness', 'interneship', 'syncline', 'bioassaying', 'enticingly', 'ring', 'hemocytoblast', 'aspergilla', 'peke', 'superaqueous', 'decerebrate', 'albuquerque', 'drouthier', 'veridic.', 'Constable', 'unruliness', 'burg', 'crookback', 'thingumabob', 'shalwar', 'sinlessness', 'bawdier', 'counterreformation', 'fruitage', 'anabasis', 'megapenthes', 'aunt', 'despiteous', 'ofm', 'jackey', 'bangor', 'prespecifying', 'norwalk', 'asexualizing', 'uncommanderlike', 'cindery', 'piedmontese', 'woodhewer', 'minorite', 'bakeware', 'baziotes', 'nonheroical', 'fuscous.Humboldt', 'difflugia', 'palmaceous', 'bilateral', 'crystallizable', 'herbartianism', 'epistemic', 'gilberte', 'canal', 'endomorphism', 'shadower', 'nanosecond', 'nickeling', 'testacean', 'technicality', 'lahore', 'unfeminised', 'hosannaed', 'uningested', 'cannes', 'overbetted', 'driftfishes', 'polaroid', 'bionomic', 'furrily', 'vagarious', 'undualistic', 'photoelectric', 'soppiness.', 'Undercommander', 'cocker', 'bastardry', 'oxidasic', 'fibrillose', 'pasteurising', 'reassumed', 'previsitor', 'demoralising', 'menad', 'halitherses', 'custodial', 'infortunately', 'clough', 'commandable', 'nondelegation', 'inveiglement', 'intermissive', 'undividable', 'ullage', 'distastefulness', 'lithemia', 'preequipped', 'negro', 'slant', 'schipperke', 'unhealthily', 'solly', 'pepsinating.', 'Gil', 'heidelberg', 'repaginate', 'marshiness', 'overaffliction', 'elfland', 'noteless', 'uniformizing', 'nontransitional', 'harebell', 'courage', 'fiche', 'hierodeacon', 'prelicensed', 'nonpurifying', 'dermatoglyphics', 'tenpin', 'skimpily', 'estivated', 'senussian', 'epidemicity', 'nonenergetic', 'fortifying', 'kymry', 'pompadour', 'ness', 'copï¾¡n', 'rousseau', 'primer.', 'Busker', 'azle', 'razorless', 'epibolic', 'amundsen', 'subirrigating', 'entertainer', 'bernalillo', 'fiducial', 'undiluted', 'liney', 'noisome', 'jurat', 'genae', 'labialize', 'knavishness', 'nonuniversity', 'tenantlike', 'cyclized', 'dictynna', 'mear', 'arthritis', 'unfrowning', 'planetesimal', 'impaste', 'mending', 'odometer', 'recomposition', 'hexyl.', 'Strathspey', 'olney', 'overflown', 'deviation', 'lacustrine', 'luxullianite', 'secchi', 'birken', 'jezabel', 'reasoning', 'transferred', 'superscientific', 'undistorted', 'terne', 'overeater', 'vanish', 'argo', 'undiscovered', 'bolsheviks', 'unvendable', 'villanage', 'brewton', 'olympic', 'holophyte', 'resetter', 'semiglobular', 'durr', 'imprecatorily', 'superlogical.', 'Nonindurated', 'clavicylinder', 'hawthornesque', 'redemptible', 'hylomorphist', 'skilful', 'pseudosatirical', 'torsion', 'supervening', 'aporia', 'misquotation', 'prepay', 'traumatise', 'peeress', 'miching', 'outdrink', 'caracoling', 'overglut', 'saprogenic', 'gracchus', 'barbarization', 'reduplicated', 'billings', 'realiser', 'heptastich', 'setbal', 'unherolike', 'unplantable', 'lapidist.', 'Jeopardising', 'execrably', 'diode', 'alleyfiredest', 'interproducing', 'obtrusiveness', 'prey', 'bascinet', 'lute', 'ostrogothic', 'domesticable', 'overserene', 'hemangioma', 'sulphonation', 'borghese', 'overderisive', 'mouill', 'mithras', 'nontaxonomic', 'geotactically', 'clemency', 'grouchier', 'physoclistous', 'anime', 'boetius', 'separativeness', 'footed', 'stonecast', 'operosely.', 'Curative', 'deputise', 'scanner', 'acetonic', 'polyclad', 'nymphomania', 'synalepha', 'torbernite', 'defy', 'biannual', 'transection', 'yavar', 'balboa', 'outsinging', 'nondurability', 'choriambic', 'unenergetically', 'sinful', 'kirghizes', 'nonatheistic', 'shockstall', 'rocketry', 'lactonize', 'appear', 'serais', 'strudel', 'platyrrhinian', 'underwrapped', 'perm.', 'Craniometry', 'tarne', 'grandioso', 'mishanter', 'kittenlike', 'senusian', 'antiradical', 'substantivally', 'nuttily', 'coenesthesia', 'honeydew', 'sulfation', 'unsimular', 'eaves', 'rem', 'orthostichy', 'subfulgent', 'pomona', 'mains', 'cagney', 'accroach', 'limassol', 'unrecaptured', 'crampedness', 'exotoxic', 'dicastic', 'pauraque', 'windingly', 'russianize.', 'Unshrunken', 'foundationary', 'tutelar', 'asconoid', 'angiosperm', 'parliamentarism', 'unmigrating', 'interventionist', 'permutable', 'crowstep', 'overliterariness', 'unsketchable', 'huamuchil', 'icebox', 'examine', 'telegraphically', 'chairborne', 'antispiritualistic', 'balkanised', 'mouser', 'superfemale', 'gluttingly', 'omophagia', 'reverencer', 'fritillaries', 'inhalator', 'retaker', 'subfamily', 'overspiced.', 'Woken', 'maharajah', 'tourney', 'couplet', 'vesiculate', 'misdeed', 'detour', 'hyperadrenia', 'reassociate', 'hypocycloid', 'sale', 'humulone', 'adduced', 'unwatery', 'navete', 'meanspirited', 'camphene', 'deckpipe', 'uncoopered', 'vitriolling', 'undefaulted', 'closedown', 'pest', 'unsanctitude', 'cautiously', 'gadolinium', 'zygophore', 'astroid', 'dottier.', 'Crofter', 'prefrozen', 'gilbert', 'banjoist', 'foziest', 'penobscot', 'haberdasher', 'palliasse', 'postxiphoid', 'heterogamous', 'pyic', 'chuppoth', 'ellisville', 'gametangium', 'fifo', 'exterritoriality', 'unfatiguing', 'conon', 'undescried', 'superdensity', 'gorgonian', 'weirdo', 'ahmadiya', 'bloomingdale', 'carrington', 'supersubstantial', 'pegbox', 'whitebelt', 'stow.', 'Jewett', 'whistler', 'revile', 'altogether', 'fortnight', 'pocketing', 'coumarin', 'cerigo', 'opacification', 'chipboard', 'arquebus', 'outspied', 'unlabialize', 'unbd', 'corroborative', 'cipherer', 'aegeus', 'outscoring', 'jeris', 'holyhead', 'sidebone', 'bimolecularly', 'untransforming', 'menseless', 'empathize', 'patentor', 'conquian', 'compassless', 'intestable.', 'Sukkahs', 'tweediness', 'cradler', 'wamefull', 'uninferrable', 'stamin', 'semeiotic', 'nondispensable', 'doltishness', 'apostrophize', 'issuable', 'municipalization', 'consultive', 'tubulating', 'minuit', 'lipoma', 'juturna', 'displacing', 'porelike', 'cymoid', 'metabolism', 'generative', 'unhumorous', 'speedboat', 'encaenia', 'bedspread', 'wast', 'sphygmic', 'noninterference.', 'Outtinkle', 'prequalifying', 'aubretia', 'batholite', 'nonbigoted', 'infection', 'pedagogically', 'unrestored', 'bonsoir', 'undealable', 'heroin', 'champer', 'scroddled', 'cesium', 'diluvia', 'unmotile', 'whitret', 'catting', 'reinfer', 'weldment', 'myatonia', 'esau', 'jauntiest', 'pseudophilanthropic', 'dissatisfiedness', 'iconium', 'gillespie', 'coif', 'codetta.', 'Unlovableness', 'underdevelope', 'bally', 'quebecois', 'onlap', 'sideswiping', 'nonobscurity', 'endoangiitis', 'unsliding', 'preconceal', 'neckcloth', 'requicken', 'cunning', 'alias', 'louisbourg', 'coiner', 'apodeictically', 'polygenistic', 'chittagong', 'unrust', 'pikeville', 'overliberalize', 'chronographic', 'fellow', 'plashiest', 'servitude', 'annamese', 'crematorium', 'martnet.', 'Dior', 'rgenoscope', 'dasyphyllous', 'germinative', 'yapp', 'palatalize', 'phanerogamic', 'apiology', 'trichomonadal', 'sulphone', 'talcott', 'claque', 'nonassignment', 'feverishness', 'protamine', 'superregistration', 'classificational', 'chromolithography', 'brattier', 'titleholder', 'haploidic', 'unproducible', 'awakeningly', 'frotteur', 'scission', 'nonumbilical', 'fordize', 'aerating', 'chimborazo.', 'Uninfixed', 'depolymerized', 'nondramatic', 'rubrically', 'isherwood', 'psephologist', 'uninterpleaded', 'ghats', 'croquet', 'inexpediency', 'aristide', 'wakeless', 'fluorination', 'harper', 'unemulous', 'foredating', 'maple', 'okavango', 'impairment', 'apprizer', 'noncommiserative', 'peashooter', 'untenuous', 'adiponitrile', 'reapproach', 'poetastry', 'flippancy', 'coherently', 'bisk.', 'Toadstool', 'humber', 'prehesitancy', 'preextent', 'havocking', 'obligedness', 'nonpublication', 'denization', 'recreativeness', 'yaup', 'hippopotamuses', 'unneighbourliness', 'scandalmonger', 'antinaturalism', 'propone', 'klansman', 'stereoisomer', 'mithridatizing', 'tollbooth', 'receivability', 'pleadings', 'autokinesis', 'attila', 'qadi', 'sighful', 'rapturousness', 'recirculation', 'nonuniteable', 'norwich.', 'Ejaculated', 'appropriable', 'wavy', 'unblamable', 'undercast', 'caiaphas', 'monroe', 'promonopolistic', 'rotatably', 'ungrassed', 'casual', 'fionn', 'witloof', 'preantepenult', 'perfectively', 'apsidal', 'inurbanely', 'nth', 'chromatophilic', 'smelling', 'antananarivo', 'orthochromatic', 'auzout', 'claromontanus', 'helmont', 'caltrap', 'sibilating', 'perioecid', 'subclavicular.'
,'Rousedness', 'evaluating', 'flyless', 'pseudoroyal', 'intumesce', 'arp', 'preselector', 'womanized', 'forbearingly', 'dropsicalness', 'kontakia', 'chikamatsu', 'cochlear', 'ungruesome', 'potenty', 'lowly', 'arson', 'methodizing', 'ephesian', 'superexpenditure', 'nivse', 'convertive', 'prenasal', 'cruller', 'superbenevolence', 'rawalpindi', 'doggiest', 'groovelike', 'fraternizer.', 'Artificially', 'qst', 'nonmonistic', 'scalenohedron', 'overly', 'polyandrist', 'eugenol', 'unfulgent', 'myeloma', 'mesh', 'subpost', 'gemlike', 'shelterless', 'blindcat', 'farm', 'impoliticness', 'outdare', 'epexegetically', 'melder', 'hexangular', 'waf', 'outscorn', 'remital', 'l', 'otage', 'trilemma', 'unshabby', 'gazeless', 'fulbert', 'rsv.', 'Unbaptized', 'slavery', 'saugh', 'colloblast', 'kranj', 'hyperemesis', 'restharrow', 'affranchising', 'mersin', 'ecotone', 'nonhereditable', 'hematocryal', 'como', 'misinferring', 'appreciatory', 'nonworker', 'transuterine', 'overhumanize', 'silverlike', 'blameless', 'jargonised', 'cabezone', 'extensor', 'falciform', 'wobbly', 'noncloistered', 'repercussiveness', 'nonpredicative', 'mallia.', 'Decussate', 'germens', 'aesthesia', 'jacobian', 'interdetermine', 'manifestant', 'loot', 'occultly', 'longsome', 'preexecution', 'mcsherrystown', 'hanratty', 'rotative', 'anilin', 'unendowed', 'dicynodont', 'lilac', 'nephritic', 'premenacing', 'jimmied', 'preadopt', 'uncontentious', 'unpoured', 'wiriest', 'esteban', 'taming', 'hetairist', 'pilothouse', 'reflexness.', 'Zhivkov', 'bouffant', 'brown', 'unremittency', 'helier', 'bimethyl', 'biddable', 'subleader', 'evictee', 'beldame', 'opsonize', 'senti', 'deface', 'joceline', 'unequestrian', 'helotage', 'geometrise', 'rutherfurd', 'subminiaturize', 'scruffiest', 'pygmoid', 'antitrust', 'chryssee', 'unentreatable', 'salutational', 'emanative', 'moneybags', 'preprint', 'winslow.', 'Unwagged', 'preinspire', 'caracalla', 'taeniacide', 'fabergï¿¥ï¾½', 'desmontes', 'svarabhakti', 'mesmerizer', 'silique', 'tricentennial', 'coronation', 'preaction', 'pavia', 'pannini', 'potentness', 'staking', 'hypoidrosis', 'commendingly', 'myokymia', 'epicycloidal', 'guianan', 'utricle', 'insuppressibly', 'console', 'fictitiously', 'axiom', 'rouser', 'overbid', 'sunbeamy.', 'Binomialism', 'streptothricin', 'rapine', 'republican', 'mucin', 'carnified', 'coccic', 'tannish', 'polje', 'dithyramb', 'twyer', 'overraked', 'realize', 'nondefamatory', 'jarash', 'noniconoclastically', 'faceable', 'abortively', 'marxist', 'nijinsky', 'weatherman', 'shoemaking', 'queasiness', 'unawardable', 'preknowledge', 'amino', 'denaturalised', 'reattach', 'nonserviceableness.', 'Man', 'yank', 'baa', 'ferine', 'pederastic', 'gamester', 'leibnitzian', 'comptrollership', 'unlobed', 'delegalizing', 'substriate', 'quaggier', 'curio', 'sleeplessly', 'uninvaginated', 'henotheism', 'glyptograph', 'monolater', 'diversified', 'incommensurable', 'reformistic', 'mansion', 'orontius', 'fere', 'anticorona', 'expounder', 'softness', 'toolless', 'vanadious.', 'Thunderhead', 'jejune', 'engagement', 'l', 'avare', 'multimetallic', 'proportionateness', 'germproof', 'flexibly', 'prebudget', 'chauffeuse', 'syriac', 'quatercentenary', 'underjailer', 'roarer', 'spherulate', 'curtain', 'rawlinson', 'ouster', 'dilettante', 'ottonian', 'rhadamanthys', 'mulligatawny', 'serif', 'dissident', 'cicatriser', 'unreiterated', 'dispraiser', 'talion', 'idolizing.', 'Maximation', 'superinquisitive', 'germanium', 'discursion', 'restudies', 'mutate', 'drunkenly', 'heterodox', 'motocross', 'dhak', 'boussingault', 'stifle', 'duenna', 'neisseria', 'fellmongering', 'buckbean', 'multilobar', 'melpomene', 'quintain', 'gamelike', 'haloesque', 'puri', 'dracaena', 'ricky', 'oosporic', 'kicksorter', 'gestative', 'hydrate', 'stirpiculture.', 'Locomotivity', 'disgregating', 'operculate', 'zestful', 'nondilation', 'stover', 'megaloblast', 'hairlessness', 'bowlike', 'hypervitaminosis', 'chatelaines', 'interprofessional', 'cambodia', 'argonaut', 'incumbency', 'unemphatic', 'metaplasia', 'atheistic', 'wreckage', 'desiring', 'canebrake', 'dilatometric', 'crassly', 'stragglier', 'nonboding', 'tassie', 'goldwyn', 'snowbird', 'repress.', 'Poenology', 'pushingness', 'crudded', 'castaway', 'uninfiltrated', 'unowing', 'rosï¿¥ï¾½', 'hypochloridemia', 'insentiency', 'aracaju', 'unliteral', 'solidarize', 'resonate', 'unafraid', 'fortitudinous', 'sulfatizing', 'ambush', 'fumelike', 'nonseasonableness', 'precolluded', 'emmylou', 'wiltshire', 'nondebilitating', 'intervascular', 'mezail', 'semisocialistic', 'conglomerated', 'apuleius', 'swisser.', 'Waistcloth', 'agitation', 'unadulterated', 'neurilemma', 'preintimating', 'unwilting', 'illegalizing', 'dumpiest', 'parishioner', 'trinary', 'unwrenched', 'ward', 'anesthetist', 'ammoniating', 'unvenerated', 'appendix', 'petrozavodsk', 'toothache', 'postcontract', 'phraseograph', 'echion', 'chorused', 'civilised', 'nestlike', 'tussaud', 'bullterrier', 'tetrazzini', 'ghibli', 'unabandoned.', 'Besmircher', 'simeonism', 'malapertness', 'unforeshortened', 'amesbury', 'conant', 'epithecial', 'hï¿¥ï¾¸gel', 'postpartum', 'haematoma', 'decimator', 'kuvaszok', 'socialization', 'jagatai', 'brownout', 'immaculateness', 'dynamometry', 'nonbodily', 'lyngi', 'tribunitial', 'ensphere', 'beltline', 'reconsult', 'tuva', 'overvalue', 'arkose', 'genouillre', 'psammophyte', 'lunular.', 'Palaeogene', 'discomposed', 'electropolish', 'tellin', 'semite', 'nuncios', 'fractionization', 'companionate', 'abridgeable', 'cherryvale', 'salutarily', 'geomorphologist', 'doutiming', 'bedsitter', 'gaulish', 'pinier', 'osteotome', 'comedial', 'rtl', 'kamloops', 'delirium', 'mengtsu', 'halterlike', 'acrobatically', 'underbox', 'arris', 'magelhanz', 'winona', 'unknitting.', 'Dignified', 'helterskelteriness', 'concussive', 'doubtable', 'truthful', 'renationalized', 'likuta', 'tony', 'sylphid', 'sibylic', 'kaffir', 'cruelty', 'circuity', 'lappeenranta', 'orthographically', 'anastasis', 'ochring', 'labourite', 'preinaugurating', 'columbaria', 'ohv', 'dyspneic', 'patriotism', 'lyrism', 'falster', 'doctrine', 'herculis', 'reading', 'cloisterless.', 'Annie', 'garrotter', 'unpredicting', 'jehovic', 'wheeziness', 'fortune', 'romanizer', 'karachi', 'eustace', 'trammeled', 'unciae', 'hexafluoride', 'valeric', 'sarpanch', 'cuprite', 'binate', 'unkindly', 'ironicalness', 'adiaphorism', 'linda', 'incendiary', 'subserrated', 'liking', 'cultivably', 'paynimhood', 'harebrainedness', 'macrogamete', 'moschatel', 'liquidus.', 'Expediency', 'costrel', 'squadron', 'carding', 'overstepped', 'nonaphoristic', 'prerequiring', 'unlacquered', 'coalsack', 'greenboard', 'readying', 'ergodic', 'unshattered', 'rebent', 'disliking', 'shogging', 'lanciform', 'kerflop', 'noncirculating', 'wappenshawing', 'distemperedness', 'goutily', 'noncompulsorily', 'unaspiring', 'prelusorily', 'uranometry', 'inveterateness', 'unparceling', 'lixiviating.', 'Gallantly', 'unchested', 'calche', 'buckaroo', 'uncircumspective', 'marcher', 'unled', 'nielloing', 'confusable', 'electrometallurgy', 'unluminescent', 'undeterminable', 'frontlash', 'shrink', 'phenylketonuria', 'subcortically', 'estimableness', 'fauvism', 'yellow', 'intercomplexity', 'churchill', 'musher', 'superlogicality', 'clubbiest', 'admeasure', 'forecast', 'nkomo', 'ascidium', 'spessartite.', 'Bristol', 'athos', 'unshakeable', 'repanelling', 'stauroscopic', 'controvertible', 'faggot', 'chisimaio', 'searching', 'gymnosophist', 'orthognathous', 'cachucha', 'enthronement', 'galle', 'heliac', 'young', 'remention', 'depolarization', 'zamenhof', 'roscoe', 'bragdon', 'epiphenomenalism', 'wickiup', 'lindsay', 'cobbett', 'etherizing', 'japhetic', 'serotherapy', 'subinvoluted.']
var args = msg.content.split(" ").slice(1)
var points = 0
var word1 = wordDict[Math.floor(Math.random() * wordDict.length)] 
var word2 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word3 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word4 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word5 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word6 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word7 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word8 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word9 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word10 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word11 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word12 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word13 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word14 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word15 = wordDict[Math.floor(Math.random() * wordDict.length)] + " "
var word16 = wordDict[Math.floor(Math.random() * wordDict.length)] + "."

const sendTest = new Discord.MessageEmbed()
.setTitle('Typing Test')
.setDescription('Type in the prompt below: End the test with `-end` to conclude your test```js\n' + word1 + word2 + word3 + word4 + word5 + word6 + word7 + word8 + word9 + word10 + word11 + word12 + word13 + word14 + word15 + word16 + '```')
.setColor('BLUE')
.addField('Test Information', 'GameType: `Word Test`\nLanguage: `English`\nLength: `16 Words / 1 Sentence`')
msg.channel.send(sendTest)

const collectorTestType = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {time: 30000});
let sendresult = true
  collectorTestType.on('collect', msg => { 
if(args[0] = word1) {
points++
}
if(args[1] = word2) {
  points++

}if(args[2] = word3) {
    points++

}if(args[3] = word4) {
      points++

}if(args[4] = word5) {
        points++

}if(args[5] = word6) {
          points++

}if(args[6] = word7) {
            points++

          }if(args[7] = word8) {
              points++

              }if(args[8] = word9) {
                points++

                }if(args[9] = word10) {
                  points++

                  }if(args[10] = word11) {
                    points++

                    }if(args[11] = word12) {
                      points++

                      }if(args[12] = word13) {
                        points++

                        }if(args[13] = word14) {
                          points++

                          }if(args[14] = word15) {
                            points++
        
                            }if(args[15] = word16) {
                              points++
                              
                              
                              }
                                
                                

if(msg.content.endsWith('-end')) {
  const resultRequestWords = new Discord.MessageEmbed() 
  .setTitle('Typing Test Concluded')
  .setDescription('Type: `Word Test`\nLength: `16 Words`')
  .addField('Result Key', '`' + getResults + '`', true)
  .setColor('BLUE')
  msg.channel.send(resultRequestWords)  
}
})                          
      var incorrect = 16 - points          
      const collectorResult = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {time: 30000}); 
collectorResult.on('collect', msg => {            
      if(msg.content === getResults) {
        const typingtestResult = new Discord.MessageEmbed()
        .setTitle('TypingTest Results')
        .setDescription('```js\nAmount Correct >>> ' + (points - 16) + '/16\nAmount Incorrect >>> ' + (incorrect - 16) + '/16\nAccuracy >>> ' + (Math.round((points - 16) / 16)) * 100 + '%\nElapsed Time >>> [WORK IN PROGRESS]\nWPM >>> [WORK IN PROGRESS]```')
        .setColor('BLUE')
         msg.channel.send(typingtestResult)
           
      }
    })
  }
*/

//@Info CS Lang Color Themes
/* since you were wondering
```diff
- text after minus
```
- text after minus


```scss
[ text between brackets ]
```
[ text between brackets ]


```dts
# hashtag before text
```
# hashtag before text


```fix
normal text
```
normal text


```css
normal text
```
normal text


```yaml
normal text
```
normal text


```ini
[ text between brackets ]
```
[ text between brackets ]


```md
# hashtag before text
```
# hashtag before text


```bf
normal text
```
normal text


```tex
$ dollar sign before text  
  
\
tex
$ dollar sign before text
```
*/

//@WIP Command: Google Image
/*
var cheerio = require("cheerio"); 
var request = require("request");
 

client.on("message", function(message) {
 
    var parts = message.content.split(" "); 
 
    
    if (parts[0] === ".gi" || parts[0] === '.googleimage') {
 
        image(message, parts); 
 
    }
 
});
 
function image(message, parts) {
 
    var search = parts.slice(1).join(" "); 
 
    var options = {
        url: "" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
        $ = cheerio.load(responseBody); 
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            return;
        }
        message.channel.send( urls[0] );
    })
 
} 
*/
//VC COMMANDS
/* { if(msg.member.roles.cache.find(r => r.name == "Guard")) {
if(msg.content.startsWith('.vc muteall')) {
  
  var role = msg.guild.roles.cache.find(r => r.name == "Voice Muted")
  msg.channel.first().roles.add(channel.id)
  msg.channel.first().voice.setMute(true)
  msg.channel.first().voice.setDeaf(true)
  var mutevcembed = new
  Discord.MessageEmbed()
    .setTitle('VC Muted ' + msg.channel.first().displayName)
    .setDescription(msg.author.username + ' VC Muted ' + msg.mentions.members.first().displayName + '\nUser ID: <' + msg.mentions.members.first() + '>')
    .setTimest1amp(msg.createdTimestamp)
    .setColor('DARK_RED')
    msg.channel.send(mutevcembed)
  }
}
}
{if(msg.member.roles.cache.find(r => r.name == "Moderator")) {
if(msg.content.startsWith('.vc muteall')) {
  var role = msg.guild.roles.cache.find(r => r.name == "Voice Muted")
  msg.channel.first().roles.remove(role.id)
  msg.channel.first().voice.setMute(false)
  msg.channel.first().voice.setDeaf(false)
  var unmutevcembed = new
  Discord.MessageEmbed()
    .setTitle('VC Unmuted ' + msg.channel.first().displayName)
    .setDescription(msg.author.username + ' VC Unmuted ' + msg.mentions.members.first().displayName + '\nUser ID: <' + msg.mentions.members.first() + '>')
    .setTimestamp(msg.createdTimestamp)
    .setColor('DARK_GREEN')
    msg.channel.send(unmutevcembed)
    

     .then(sentMessage => sentMessage.react('🗑️'))
      msg.awaitReactions(msg, { max: 2, time: 60000, errors: ['time'] })
      	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🗑️ ') {
    msg.delete()
		} 
		
} 
}
}
*/
//SETUP


 /* if(Discord.Guild.member.join) {
    msg.guild.channels.cache.find(r => r.name === 'Member').roles.add(roles.id)
    
  }
  */

  //@Moderation Command: Setup 
  
  
    
  



