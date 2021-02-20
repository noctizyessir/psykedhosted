module.exports.run = async (bot, message, args) => {
    message.channel.send('https://open.spotify.com/playlist/4cANsYF9DVRQ62iNgzhgou?si=YJ4_Bb_fQm-49UYErFG40w')

}

module.exports.config = {
    name: "spotifyplaylist",
    description: "noctiz's spotify playlist",
    usage: ";spotfiyplaylist",
    accessableby: "Members",
    aliases: []
}