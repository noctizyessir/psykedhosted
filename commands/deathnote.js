module.exports.run = async (bot, message, args) => {
    const gifs = ["https://media.giphy.com/media/3pTtbLJ7Jd0YM/giphy.gif","https://media.giphy.com/media/YmZOBDYBcmWK4/giphy.gif","https://media.giphy.com/media/EcnAlQcGnZq9y/giphy.gif","https://media.giphy.com/media/bqm6WOjuLu480/giphy.gif","https://media.giphy.com/media/11Bcs0WCLQDxZe/giphy.gif","https://media.giphy.com/media/fFE9qW2aJj3TG/giphy.gif","https://media.giphy.com/media/ryKkajMOMjYCQ/giphy.gif","https://media.giphy.com/media/VVqUUvtKLrxe0/giphy.gif","https://media.giphy.com/media/Uho05vACGIjMk/giphy.gif","https://media.giphy.com/media/dtw1FNnxY8TqU/giphy.gif"]
    const random = gifs[Math.floor(Math.random() * gifs.length)];

    message.channel.send(random).catch(err => message.reply(`ERR!: ${err}`));
}  


module.exports.config = {
    name: "deathnote",
    description: "sends death note gifs",
    usage: ";deathnote",
    accessableby: "Members",
    aliases: []
}

