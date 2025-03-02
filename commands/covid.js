const fetch = require("node-fetch");

const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  const messageArray = message.content.split(' ');
  const args = messageArray.slice(1)
    let countries = args.join(" ");

    const noArgs = new Discord.MessageEmbed()
      .setTitle("ERR!")
      .setColor(0xff0000)
      .setDescription("please specify a country or type all")
      .setTimestamp();

    if (!args[0]) return message.channel.send(noArgs);

    if (args[0] === "all") {
      fetch(`https://covid19.mathdro.id/api`)
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString();
          let recovered = data.recovered.value.toLocaleString();
          let deaths = data.deaths.value.toLocaleString();

          const embed = new Discord.MessageEmbed()
            .setTitle(`Worldwide COVID-19 Stats 🌎`)
            .addField("Confirmed Cases", confirmed)
            .addField("Recovered", recovered)
            .addField("Deaths", deaths);

          message.channel.send(embed);
        });
    } else {
      fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString();
          let recovered = data.recovered.value.toLocaleString();
          let deaths = data.deaths.value.toLocaleString();

          const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Stats for **${countries}**`)
            .addField("Confirmed Cases", confirmed)
            .addField("Recovered", recovered)
            .addField("Deaths", deaths);

          message.channel.send(embed);
        })
        .catch(err => {
          return message.channel.send("Invalid country provided");
        });
    }
};


module.exports.config = {
    name: "covid",
    description: "sends covid cases",
    usage: ";covid",
    accessableby: "Members",
    aliases: ['c19']
}