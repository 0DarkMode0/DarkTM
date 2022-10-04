const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {

  name:"setwelcome",
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
          .setDescription(`Informe qual canal deseja para setar o Welcome!`)
          return message.channel.send(embed2);
        }

        db.set(`welcomec_${message.guild.id}`, channel.id)

        const embed3 = new Discord.MessageEmbed()
          .setColor('#010101')
          .setDescription(`Welcome setado em ${channel} com sucesso!`)
        message.channel.send(embed3);
}}