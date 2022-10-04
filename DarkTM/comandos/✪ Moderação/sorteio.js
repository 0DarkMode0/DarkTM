const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {

  name:"sorteio",
  category:"Moderação",
  aliases: ['sortear'],
  
  run: async (bot, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "Você não tem permissão"
    )
    if (!args[0]) return message.channel.send(`Como usar o comando?:\n$sorteio 10s #canal Premio`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `Você não escreveu o comando certo`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Isso não é um Número`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Não encrontrei esse canal no servidor`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Prêmio não Especificado`);
    message.channel.send(`*Sorteio criado em ${channel}*`);
    let tempo = args[0]
    let Embed = new MessageEmbed()
      .setTitle(`**SORTEIO**`)
      .setDescription(
        `Sorteio feito por: ${message.author} 
        
        Prêmio do Sorteio: **${prize}**
        
        Tempo do Sorteio: **${tempo}**`
        )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`#010101`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Poucas pessoas reagiram para que eu iniciasse o sorteio de um vencedor!`
        );
      }

      let winner = m.reactions.cache
      .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `<a:Dark_Fast:889048261523025931> O Vencedor do sorteio foi ${winner} Prêmio: **${prize}** <a:Dark_Fast:889048261523025931>`
      );
    }, ms(args[0]));
  },
};