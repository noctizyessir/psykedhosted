module.exports.run = async (bot, message, args) => {
    message.channel.send('pong!')
  }
  
  
  module.exports.config = {
    name: "pong",
    description: "messages pong!",
    usage: ";ping",
    accessableby: "Members",
    aliases: []
  }