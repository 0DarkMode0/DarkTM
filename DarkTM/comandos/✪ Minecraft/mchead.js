const Discord = require("discord.js");


module.exports = {

    name:"mchead",
    category:"Minecraft",
    aliases: [''],
  
  run: async (client, message, args) => {


    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('**Digite o nick**')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Cabeça de ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setColor('#010101')
    message.channel.send(embed)
}}