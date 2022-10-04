const discord = require("discord.js");
const button = require("discord-buttons");

module.exports = {

    name:"invite",
    category:"Misc",
    aliases: [''],

async run(client, message, args) {

    let button1 = new button.MessageButton()
    .setStyle("url")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=810668573336535071&permissions=8&scope=bot")
    .setEmoji(`889023873427857451`)
    .setLabel("Me Adicione!")

    const embed = new discord.MessageEmbed()

        .setColor(`#010101`)
        .setTitle(`Me adicione no seu Servidor!`)
        .setDescription(`Para me adicionar no seu Servidor click no botão abaixo`)

    return message.channel.send({
      embed: embed,
      component: button1
    });

  }
}