const discord = require("discord.js");
const button = require("discord-buttons");

module.exports = {

    name:"upvote",
    category:"Misc",
    aliases: [''],

async run(client, message, args) {

    let button1 = new button.MessageButton()
    .setStyle("url")
    .setURL("https://top.gg/bot/810668573336535071/vote")
    .setEmoji(`889023716820934666`)
    .setLabel("Vote - Top.gg")

    const embed = new discord.MessageEmbed()

        .setColor(`#010101`)
        .setTitle(`Upvote Dark™`)
        .setDescription(`Para me ajudar clique no botão **VOTE**!`)

    return message.channel.send({
      embed: embed,
      component: button1
    });

  }
}