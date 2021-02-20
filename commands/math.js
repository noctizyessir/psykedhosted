const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
  let question = message.content.split(" ").slice(1).join(" ")
  const emb = new Discord.MessageEmbed()
    .setTitle('Error')
    .setDescription(`\`\`${question}\`\` is not a mathematical question!`)
    .setColor('GREY')
    .setTimestamp()
  const embe = new Discord.MessageEmbed()
    .setTitle('Error')
    .setDescription('Specify your mathematical question.')
    .setColor('GRAY')
  if(!args[0]) return message.channel.send(embe);
  let resp;
  try{
    resp = math.evaluate(question)
  } 
  catch(e){
    return message.channel.send(emb)
  }
  const embed = new Discord.MessageEmbed()
    .setColor('GREY')
    .setTitle(`Evaluation Result of \`\`${question}\`\``)
    .setDescription(`\`\`\`${resp}\`\`\``)
  message.channel.send(embed);
}

module.exports.config = {
  name: "math",
  description: "calculate things",
  usage: ";math",
  accessableby: "Members",
  aliases: ['calculate']
}