const Discord = require('discord.js')
const disbut = require("discord-buttons");

module.exports = {

  name:"emoji",
  category:"Gerais",
  aliases: [''],
  
run: async (client, message, args) => {

  message.delete();

        let emojiName = args.join(" ");
        let emoji = message.guild.emojis.cache.get(args[0]) || message.guild.emojis.cache.find(emoji => emoji.name === `${emojiName}`) 
        if (!args[0]) return message.channel.send("Me dê o nome ou ID do Emoji")
        if (!emoji) return message.channel.send("Me dê o nome ou ID do Emoji")
        let animado;
        if(emoji.animated) animado = "Sim"
        if(!emoji.animated) animado = 'Não'
        let embed = new Discord.MessageEmbed()

            .addField("Nome:", `${emoji.name}`)
            .addField("ID:", `${emoji.id}`)
            .addField("Servidor:", message.guild.name)
            .addField("Animado?", xd)
            .setThumbnail(emoji.url)
            .setColor("#010101")
            .addField("Formato:", `\`<:${emoji.name}:${emoji.id}>\``)

                const button = new disbut.MessageButton()
  .setStyle('url') 
  .setEmoji(emoji.id)
  .setURL(emoji.url) 
  .setLabel('Download');
 
message.channel.send({
   buttons: [button],
   embed
}) 
    }
}