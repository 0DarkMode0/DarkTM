const Discord = require("discord.js");
const db = require("quick.db")


module.exports = {

    name:"config",
    category:"Moderação",
    aliases: ['configs', 'panel', 'painel'],

run: async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) 
        return message.channel.send('Você não tem permissão')


  // Welcome - GoodBye
  let canalWel = db.get(`welcomec_${message.guild.id}`)
  let canalGod = db.get(`goodbyec_${message.guild.id}`)

  //InviteBlock
  let invBlock = db.get(`inviteop_${message.guild.id}`)

  
    let reason = args.slice(0).join(' ');

    let embed = new Discord.MessageEmbed()

        .setColor('#010101')
        .setTitle(`<:Dark_Guard:889033584868995112> Server Config`)
        .setDescription(`**Canal Welcome:** ${canalWel ? `<#${canalWel}>` : "Nenhum"}\n**Canal GoodBye:** ${canalGod ? `<#${canalGod}>` : "Nenhum"}\n\n**InviteBlock:** ${invBlock ? "<:Dark_ON:889047269687590953>" : "<:Dark_OFF:889047269708533791>"}`)
        .setThumbnail(`${message.guild.iconURL({ dynamic: true, format: "png", size: 2048 })}`)
        
    message.channel.send(embed)
}}