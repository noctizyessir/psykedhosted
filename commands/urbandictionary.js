const urban = require('urban')
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { replace } = require('ffmpeg-static');


module.exports.run = async (bot, message, args) => {
    if(args < 1 || !["search", "random"].includes(args[0])) return message.channel.send(';ud search (query)')
    let image = 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg'
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random()

        try{
            search.first(res => {
                if(!res) return message.channel.send('no results found')
                let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res


                    let embed = new MessageEmbed()
                    .setColor('GREY')
                    .setAuthor(`Urban Dictionary ${word}`)
                    .setDescription(stripIndents`**Definiton:** ${definition || "No Definition"}
                    **Example:** ${example || "No Example"}`)
                    .setTimestamp()
                    .setFooter(`written by ${author || "Unknown"}`)

                message.channel.send(embed)
            })
        } catch(e) {
            message.channel.send('ERR! please try again')
        }

}


module.exports.config = {
    name: "urbandictionary",
    description: "searches ud",
    usage: ";urbandictionary",
    accessableby: "Members",
    aliases: ['ud']
}


