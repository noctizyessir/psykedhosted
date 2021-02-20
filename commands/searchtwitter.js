const Discord = require('discord.js');
const request = require('node-superfetch');
let { stripIndents } = require('common-tags');
let bearer = 'AAAAAAAAAAAAAAAAAAAAAGoYMwEAAAAAvt6w3%2FhsrlRY2ZfxB9%2Bc0GfKiJw%3Dvx72p0rn1BOoO6laE2EH1nnHcwr43sOwCZYYdMry9fwNy3mgFn'
let urly = 'https://twitter.com/'





module.exports.run = async (bot, message, args) => {
    let username = args[0];
    if(!username) return message.channel.send('provide username pls')

    try {
        const {body} = await request.get("https://api.twitter.com/1.1/users/show.json")
        .set({Authorization: `Bearer ${bearer}`}).query({screen_name: username});

        const embed = new Discord.MessageEmbed()
        .setAuthor(`@${body.screen_name.toLowerCase()}`)
        .setDescription(body.description)
        .setFooter(`Twitter User ID: ${body.id}`, 'https://icons-for-free.com/iconfiles/png/512/twitter+twitter+logo+website+icon-1320190502299816317.png')
        .addField('Info:', stripIndents`
        **Followers:** ${(body.followers_count).toLocaleString()}
        **Following:** ${(body.friends_count).toLocaleString()}
        **Tweets:** ${(body.statuses_count).toLocaleString()}
        `, true)
        .addField("Created At:", body.created_at, true)
        .setThumbnail(body.profile_image_url_https.replace('_normal', ''))

        return message.channel.send(embed)
    } catch (error) {
        if (error.status === 403) return message.channel.send("this user is either private or deactivated the account")
        else if (error.status === 404) return message.channel.send('user not found')
        else return message.channel.send(`Unknown ERR!: ${error.message}`)
    }

}


module.exports.config = {
    name: "searchtwitter",
    description: "search someones twitter",
    usage: ";searchtwitter",
    accessableby: "Members",
    aliases: ['st']
}