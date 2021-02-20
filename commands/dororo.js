module.exports.run = async (bot, message, args) => {
    const gifs = ["https://media1.tenor.com/images/e54c9d1e283219d4c9d2c21dd482800e/tenor.gif", "https://thumbs.gfycat.com/ThornySpryHamadryas-size_restricted.gif", "https://i.pinimg.com/originals/59/71/2f/59712f122088079b233108210b1c2119.gif", "https://p.favim.com/orig/2019/01/30/anime-anime-boy-hyakkimaru-Favim.com-6843920.gif", "https://i.pinimg.com/originals/e3/d9/f4/e3d9f42107fc0a6ed3632df69f9e177b.gif", "https://s11.favim.com/orig/7/764/7646/76464/anime-boy-gif-anime-Favim.com-7646415.gif", "https://data.whicdn.com/images/327207066/original.gif"]
    const random = gifs[Math.floor(Math.random() * gifs.length)];

    message.channel.send(random).catch(err => message.reply(`bruh theres an error ${err}`));

}

module.exports.config = {
    name: "dororo",
    description: "sends dororo gifs",
    usage: ";dororo",
    accessableby: "Members",
    aliases: ['dororogifs']
}


