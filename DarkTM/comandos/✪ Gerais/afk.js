const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {

  name:"afk",
  category:"Gerais",
  aliases: [''],
  
run: async (client, message, args) => {

  
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
    
let embed1 = new Discord.MessageEmbed()
.setColor('#010101')
.setDescription(`**${message.author.tag}** Esta AFK! \n**Motivo:** \`${args.join(" ") ? args.join(" ") : "Não informado"}\``)
status.set(message.author.id, args.join(" ") || `AFK`);
if (!afk) return message.channel.send(embed1);

else {

    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
}}
