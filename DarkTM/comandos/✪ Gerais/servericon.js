const Discord = require("discord.js");
const disbut = require("discord-buttons");

module.exports = {

  name:"servericon",
  category:"Gerais",
  aliases: ['icon'],
  
run: async (client, message, args) => {

  message.delete();

 let server = message.guild.iconURL({ dynamic: true, format: "png", size: 4096 })

 let embed = new Discord.MessageEmbed() 

    .setTitle(`Icone do Servidor`)
    .setImage(message.guild.iconURL({ dynamic: true, format: "png", size: 4096 }))
    .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setColor("#010101")

    const button = new disbut.MessageButton()
  .setStyle('url') 
  .setEmoji(`889029128412602408`)
  .setURL(server) 
  .setLabel('Download');
 
message.channel.send({
   buttons: [button],
   embed
}) 
}}