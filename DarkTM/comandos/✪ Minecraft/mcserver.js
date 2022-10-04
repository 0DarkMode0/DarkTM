const Discord = require("discord.js"); 
const { response } = require("express");
const util = require('minecraft-server-util');

module.exports = {

  name:"mcserver",
  category:"Minecraft",
  aliases: [''],

run: async (client, message, args) => {

    if(!args[0]) return message.channel.send('Coloque o IP de algum servidor');
  

    util.status(args[0], {port: parseInt('25565')}).then((response) =>{
                const embed = new Discord.MessageEmbed()
                .setColor('#010101')
                .setTitle('Servidor Stats:')
                .setDescription(`**Servidor:** \`${response.host}\``)
                .addField('Jogadores online:', `**-** ${response.onlinePlayers}`)
                .addField('Máximo de Jogadores:', `**-** ${response.maxPlayers}`)
                .addField('Versão:', `**-** ${response.version}`)
                .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${response.host}`);
                message.reply(embed)
        })
        .catch((error) => {
            message.channel.send(`Servidor não encontrado!`);
        });
  }
}