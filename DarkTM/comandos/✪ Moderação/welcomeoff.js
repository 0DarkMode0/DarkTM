const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {

  name:"welcomeoff",
  category:"Moderação",
  aliases: [''], 

async run(bot, message, args) {
  
    let channel = message.mentions.channels.first()

          if (!message.member.hasPermission("MANAGE_CHANNELS")) {
             return message.channel.send("Você não tem permissão")
           }
      
          if(!channel) {
          const embed2 = new Discord.MessageEmbed()
          .setColor('#010101')
          .setDescription(`${message.author} \n Marque o canal para desativar o Welcome!`)
          return message.channel.send(embed2);
        }

        db.delete(`welcomec_${message.guild.id}`, channel.id)

        message.channel.send(`Welcome foi desativado no canal ${channel}`)
}}