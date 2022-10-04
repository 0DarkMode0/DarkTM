const Discord = require("discord.js"); 
const moment = require("moment")
moment.locale("pt-br")

module.exports = {

  name:"serverinfo",
  category:"Gerais",
  aliases: [''], 

async run(client, message, args) {

  message.delete();

let verifi = {
  NONE: "Nenhuma",
  LOW: "Baixa",
  MEDIUM: "Media",
  HIGH: "Alta",
  VERY_HIGH: "Muito Alta"
}
 
    let serverembed = new Discord.MessageEmbed() 
    .setColor("#010101")
    .setTitle(message.guild.name)
    .setDescription(`<a:Dark_CrownX:889043159257063424> **Dono:** <@${message.guild.ownerID}>\n\n<:Dark_ID:889043402589601803> **Dono ID:** \`${message.guild.ownerID}\`\n\n<:Dark_Calendar:889043552120766505> **Criado:** \`${moment.utc(message.guild.createdAt).format("DD/MM/YYYY")}\`\n\n<:Dark_Guard:889033584868995112> **Level de Verificação:** \`${verifi[message.guild.verificationLevel]}\`\n\n<a:Dark_Cat:889035150745284658> **Emojis** \`${message.guild.emojis.cache.size}\`\n\n<:Dark_Member:889028876125237249> **Membros**\nTotal: \`${message.guild.memberCount}\`\nMembros: \`${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)}\`\nBots: \`${message.guild.members.cache.filter(member => member.user.bot).size}\`\n\n<:Dark_Chat:889044192968474666> **Canais**\nTexto: \`${message.guild.channels.cache.filter(chan => chan.type === 'text').size}\`\nVoz: \`${message.guild.channels.cache.filter(chan => chan.type === 'voice').size}\`\nCategorias: \`${message.guild.channels.cache.filter(chan => chan.type === 'category').size}\``)
    .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
 
    message.channel.send(serverembed);
 }}