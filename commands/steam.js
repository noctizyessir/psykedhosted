const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { stripIndents } = require('common-tags');
const dateFormat = require('dateformat');

module.exports.run = async (bot, message, args) => {
    const token = "D9635B557524EBFC382D46410738E8F4"

    if(!args[0]) return message.channel.send("provide an account name pls");
    const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

    fetch(url).then(res => res.json()).then(body => {
        if(body.response.success === 42) return message.channel.send('unable to find acct with that name');

            const id = body.response.steamid;
            const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
            const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
            const state = ['Offline', 'Online', 'Busy', 'Away', 'Snooze', 'Looking to trade', 'Looking to play'];
    fetch(summaries).then(res => res.json()).then(body => {
        if(!body.response) return message.channel.send('unable to find an acct with that name');
        const { personaname, avatarfull , realname, personastate, loccountrycode, profileurl, timecreated, lastlogoff } = body.response.players[0];

    fetch(bans).then(res => res.json()).then(body => {
        if(!body.players) return message.channel.send('unable to find an acct with that name');
        const { NumberofVACBans, NumberofGameBans } = body.players[0]


        let embed = new MessageEmbed()
            .setColor('GRAY')
            .setTitle(`Steam Account: ${personaname}`, avatarfull)
            .setThumbnail(avatarfull)
            .addField(`Real Name:`, `${realname || "Unknown"}`, true)
            .addField(`Status:`, `${state[personastate]}`, true)
            .addField(`Country:`, `:flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:`, true)
            .addField(`Account Created at:`, `${dateFormat(timecreated * 1000, "d/mm/yyyy (h:MM:ss TT)")}`, true)
            .addField(`Last Seen:`, `${lastlogoff}`, true)
            .addField(`Profile Link:`, `[${personaname}](${profileurl})`, true)
            .setTimestamp()
        
        message.channel.send(embed)
    })
    })
    })
}




module.exports.config = {
    name: "steam",
    description: "search steam accts with this name",
    usage: ";steam",
    accessableby: "Members",
    aliases: []
}