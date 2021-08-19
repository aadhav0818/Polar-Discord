const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    name: 'calc',
    description: 'Calculates an expression',
    usage: '```js\n' + `${config.prefix}calc [expression]` + '```',
    items: '**Tip 1:** Add `d:` before a trig function to change it to **Degree Mode**\n**Tip 2**: To group certain parts, you may use **[]** and **()**\n' + '```css\n' + '[Operators] +, -, /, \*, %, ^\n\n[Trig] sin(), cos(), tan()\n\n[Reciprocal Trig] csc(), sec(), cot()\n\n[Inverse Trig] asin(), acos(), atan()\n\n[Hyperbolic Trig] sinh(), cosh(), tanh()\n\n[Functions] sqrt(), cbrt(), log10(), ln(), abs()\n\n[Constants] {pi}, {e}' + '```',
    example: '```js\n' + `${config.prefix}calc ((1+9)*(4/2))+2` + '```',
    async execute(client, message, args, Discord) {
        try {
            var result = (((message.content).slice(config.prefix.length + this.name.length)).toString()).toLowerCase();
            const expression = result.replace(' ', ""); 
            if(!args[0]) {
                const noArgsEmbed = new Discord.MessageEmbed() 
                    .setTitle('Command Error')
                    .addField('Reason', errors.noArgsErr , false)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send(noArgsEmbed)
            }
            result = result.replace(/ /g, "")

            const operations = 

            /*operator*/ ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\\+', '-', '/', '\\*', '%', 'abs',
            /*cosine*/   'd:acos', 'acos', 'd:cosh','cosh', 'd:cos', 'cos', 'd:sec', 'sec', 
            /*sine*/ 'd:asin', 'asin', 'd:sinh', 'sinh', 'd:sin', 'sin', 'd:csc', 'csc',
            /*tangent*/ 'd:atan', 'atan', 'd:tanh', 'tanh', 'd:tan', 'tan', 'd:cot', 'cot',
            /*exponent*/ '\\^', 'sqrt', 'cbrt', 'ln', 'log',
            /*constants*/ '{pi}', '{e}', 
            /*syntax*/ '\\[', '\\]', '\\(', '\\)', '\\.']
        
            let temp = result;
            for(var i = 0; i < operations.length; i++) {
                const re = new RegExp(operations[i], 'g');
                temp = temp.replace(re, "")
            }
            if(temp != "") {
                const iglCharErr = new Discord.MessageEmbed()
                    .setTitle('Command Error')
                    .addField('Reason', errors.illegalCharErr)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                 return message.channel.send(iglCharErr)
            }
            
            if(!operations.some(words => result.includes(words)) ) {
                const iglCharErr = new Discord.MessageEmbed()
                    .setTitle('Command Error')
                    .addField('Reason', errors.illegalCharErr)
                    .addField('Usage', this.usage, false)
                    .addField('Example', this.example, false)
                    .setColor(config.colors.error)
                return message.channel.send(iglCharErr)
            }

            if(result.match(/sin/gi) && !result.match(/asin/gi) && !result.match(/sinh/gi) && !result.match(/d:sinh/gi) && !result.match(/d:asin/gi) && !result.match(/d:sin/gi)) {
                result = result.replace(/sin/g, 'Math.sin')
                console.log('CALC:  SIN')
            }
            if(result.match(/cos/gi) && !result.match(/acos/gi) && !result.match(/d:cos/gi) && !result.match(/cosh/gi) && !result.match(/d:acos/gi) && !result.match(/d:cosh/gi)) {
                result = result.replace(/cos/gi, 'Math.cos')
                console.log('CALC:  COS')
            }
            if(result.match(/tan/gi) && !result.match(/atan/gi) && !result.match(/d:tan/gi) && !result.match(/tanh/gi) && !result.match(/d:atan/gi) && !result.match(/d:atan/gi)) {
                result = result.replace(/tan/gi, 'Math.tan')
                console.log('CALC:  TAN')
            }
            if(result.match(/asin/gi) && !result.match(/d:asin/gi)) {
                result = result.replace(/asin/gi, 'Math.asin')
                console.log('CALC:  ASIN')
            }
            if(result.match(/acos/gi) && !result.match(/d:acos/gi)) {
                result = result.replace(/acos/gi, 'Math.acos')
                console.log('CALC:  ACOS')
            }
            if(result.match(/atan/gi) && !result.match(/d:atan/gi)) {
                result = result.replace(/atan/gi, 'Math.atan')
                console.log('CALC:  ATAN')
            }
            if(result.match(/csc/gi) && !result.match(/d:csc/gi)) {
                const cscRegex = /csc\([0-9]+(\))/gi
                var matches = result.matchAll(cscRegex);
                for(const match of matches) {
                    result = result.replace(`${match[1]}`, '))')
                }
                result = result.replace(/csc/gi, '(1/Math.sin')
                console.log('CALC:  CSC')
            }
            if(result.match(/sec/gi) && !result.match(/d:sec/gi)) {
                const secRegex = /sec\([0-9]+(\))/gi
                var matches = result.matchAll(secRegex);
                for(const match of matches) {
                    result = result.replace(`${match[1]}`, '))')
                }
                result = result.replace(/sec/gi, '(1/Math.cos')
                console.log('CALC:  SEC')
            }
            if(result.match(/cot/gi) && !result.match(/d:cot/gi)) {
                const cotRegex = /cot\([0-9]+(\))/gi
                var matches = result.matchAll(cotRegex);
                for(const match of matches) {
                    result = result.replace(`${match[1]}`, '))')
                }
                result = result.replace(/cot/gi, '(1/Math.tan')
                console.log('CALC:  COT')
            }
            if(result.match(/sinh/gi) && !result.match(/d:sinh/gi)) {
                result = result.replace(/sinh/gi, 'Math.sinh')
                console.log('CALC:  SINH')
            }
            if(result.match(/cosh/gi) && !result.match(/d:cosh/gi)) {
                result = result.replace(/cosh/gi, 'Math.cosh')
                console.log('CALC:  COSH')
            }
            if(result.match(/tanh/gi) && !result.match(/d:tanh/gi)) {
                result = result.replace(/tanh/gi, 'Math.tanh')
                console.log('CALC:  TANH')
            }
            if(result.match(/sqrt/gi)) {
                result = result.replace(/sqrt/gi, 'Math.sqrt')
                console.log('CALC:  SQRT')
            }
            if(result.match(/cbrt/gi)) {
                result = result.replace(/cbrt/gi, 'Math.cbrt')
                console.log('CALC:  CBRT')
            }
            if(result.match(/{pi}/gi)) {
                result = result.replace(/{pi}/gi, 'Math.PI')
                console.log('CALC:  PI')
            }
             if(result.match(/{e}/gi) && !result.match(/sec/gi)) {
                 result = result.replace(/{e}/gi, 'Math.E')
                 console.log('CALC:  E')
             }
            if(result.match(/ln/gi)) {
                result = result.replace(/ln/gi, 'Math.log')
                console.log('CALC:  LN')
            }
            if(result.match(/log10/gi)) {
                result = result.replace(/log10/gi, 'Math.log10')
                console.log('CALC:  LOG10')
            }
            if(result.match(/abs/gi)) {
                result = result.replace(/abs/gi, 'Math.abs')
                console.log('CALC:  ABS')
            }
        
            if(result.match(/\^/gi)) {
                result = result.replace(/\^/gi, '**')
                console.log('CALC:  ^')
            }

            if(result.match(/d:sin/g) && !result.match(/d:sinh/g)) {
                const dsinRegex = /d:sin\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dsinRegex)
                console.log('CALC:   D:SIN')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:sin/g, "Math.sin")
            }
            if(result.match(/d:cos/g) && !result.match(/d:cosh/g)) {
                const dcosRegex = /d:cos\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dcosRegex)
                console.log('CALC:   D:COS')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:cos/g, "Math.cos")
            }
            if(result.match(/d:tan/g) && !result.match(/d:tanh/g)) {
                const dtanRegex = /d:tan\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dtanRegex)
                console.log('CALC:   D:TAN')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:tan/g, "Math.tan")
            }
            if(result.match(/d:asin/g)) {
                const dasinRegex = /d:asin\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dasinRegex)
                console.log('CALC:   D:ASIN')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:asin/g, "Math.asin")
            }
            if(result.match(/d:acos/g)) {
                const dacosRegex = /d:acos\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dacosRegex)
                console.log('CALC:   D:ACOS')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:acos/g, "Math.acos")
            }
            if(result.match(/d:atan/g)) {
                const datanRegex = /d:atan\(([0-9.]+)\)/gi;
                var matches = result.matchAll(datanRegex)
                console.log('CALC:   D:ATAN')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:atan/g, "Math.atan")
            }
            if(result.match(/d:sinh/g)) {
                const dsinhRegex = /d:sinh\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dsinhRegex)
                console.log('CALC:   D:SINH')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:sinh/g, "Math.sinh")
            }
            if(result.match(/d:cosh/g)) {
                const dcoshRegex = /d:cosh\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dcoshRegex)
                console.log('CALC:   D:COSH')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:cosh/g, "Math.cosh")
            }
            if(result.match(/d:tanh/g)) {
                const dtanhRegex = /d:tanh\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dtanhRegex)
                console.log('CALC:   D:TANH')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI))`)
                  }
                result = result.replace(/d:tanh/g, "Math.tanh")
            }

            if(result.match(/d:csc/g)) {
                const dcscRegex = /d:csc\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dcscRegex)
                console.log('CALC:   D:CSC')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI)))`)
                  }
                result = result.replace(/d:csc/g, "(1/Math.sin")
                console.log(result)
            }
            if(result.match(/d:sec/g)) {
                const dsecRegex = /d:sec\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dsecRegex)
                console.log('CALC:   D:SEC')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI)))`)
            }
                result = result.replace(/d:sec/g, "(1/Math.cos")
            }
            if(result.match(/d:cot/g)) {
                const dcotRegex = /d:cot\(([0-9.]+)\)/gi;
                var matches = result.matchAll(dcotRegex)
                console.log('CALC:   D:COT')
                for (const match of matches) {
                    result = result.replace(`(${match[1]})`, `(((${match[1]}/180) * Math.PI)))`)
                  }
                result = result.replace(/d:cot/g, "(1/Math.tan")
            }

            


            result = eval(result)
            result = result.toLocaleString();
            if(result.includes('NaN')) {
                result = 'Nonreal Value'
            }

            const resultEmbed = new Discord.MessageEmbed() 
                .setTitle('Calculator')
                .addField('Result', '```js\n' + result + '```', 'false')
                .addField('Expression', '```js\n' + expression + '```', false)
                .setColor(config.colors.default)
            return message.channel.send(resultEmbed)

        }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('Command Error')
                .addField('Reason', 'Incorrect Syntax or there was no defined answer')
                .addField('Usage', this.usage, false)
                .addField('Example', this.example, false)
                .setColor(config.colors.error)
            return message.channel.send(errEmbed)
        }
    }
}
