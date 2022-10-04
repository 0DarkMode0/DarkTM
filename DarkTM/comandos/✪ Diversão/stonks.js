const Discord = require("discord.js");


module.exports = {

  name:"stonks",
  category:"Diversão",
  aliases: [''],
  
  run: async (client, message, args) => {
    
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor('#010101')
    .setImage(encodeURI(`https://vacefron.nl/api/stonks?user=${Member.user.displayAvatarURL({ format: "png" })}`))

    return message.channel.send(Embed);
  }
};