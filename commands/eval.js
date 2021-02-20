const Discord = require('discord.js');
const { inspect } = require('util')

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '446691462365708301') return;

    const code = args.join(' ');
    if(!code) return message.channel.send('insert code first');

    try{
        const result = await eval(code);
        let output = result;
        if(typeof result !== 'string') {
            output = inspect(result)
        }
        message.channel.send(output, {code: 'js'})
    } catch (error) {
        console.log(error)
        message.channel.send('Eval ERR!')
    }



}


module.exports.config = {
    name: "eval",
    description: "pls dont",
    usage: ";eval",
    accessableby: "Bot Owner",
    aliases: []
}








