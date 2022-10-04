const Discord = require("discord.js");
const disbut = require("discord-buttons");

module.exports = {

  name:"avatar",
  category:"Gerais",
  aliases: ['icon'],
  
run: async (client, message, args) => {

  message.delete();

 let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 let avatar = user.avatarURL({ dynamic: true, format: "png", size: 2048 });

 let embed = new Discord.MessageEmbed() 

    .setTitle(`Avatar de ${user.tag}`)
    .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
    .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setColor("#010101")

    const button = new disbut.MessageButton()
  .setStyle('url') 
  .setEmoji(`889029128412602408`)
  .setURL(avatar) 
  .setLabel('Download');
 
message.channel.send({
   buttons: [button],
   embed
}) 
}}