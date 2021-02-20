const Discord = require('discord.js')
var Scraper = require('images-scraper')

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})



module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1)
    const image_query = args.join(' ');
    message.channel.startTyping(true)
    if(!image_query) return message.channel.send('enter another image name cause theres none');

    const image_results = await google.scrape(image_query, 1);
    const embed = new Discord.MessageEmbed()
    .setTitle('Image Result for ' + image_query)
    .setImage(image_results[0].url)
    message.channel.send(embed);
    message.channel.stopTyping(true)
}

module.exports.config = {
    name: "image",
    description: "sends images",
    usage: ";image",
    accessableby: "Members",
    aliases: ['img']
}