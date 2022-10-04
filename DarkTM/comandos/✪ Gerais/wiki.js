const Discord = require("discord.js");
const fetch = require("node-fetch");


module.exports = {

  name:"wiki",
  category:"Gerais",
  aliases: ['wikipedia'],

  run: async (bot, message, args) => {

    
    var search = args.join(" ")
    if(!search) {
      message.channel.send('Me de algo para pesquisar')
    } else {
      const body = await fetch(
      `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        search
      )}`
    ).then(res => res.json().catch(() => {}));
    if (!body) return message.channel.send("Página não encontrada :x:");
    if (body.title && body.title === "Não encontrado.")
      return message.channel.send("Erro! Página não encontrada ... :x:");

    const embed = new Discord.MessageEmbed()
      .setTitle(`🌐 ${body.title}`)
      .setDescription(`** ${body.extract} **`)
      .setColor("#010101");
    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
    message.channel.send(embed);
    }
  }
}