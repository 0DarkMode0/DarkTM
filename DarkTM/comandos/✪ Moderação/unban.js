const Discord = require('discord.js')
module.exports = {

  name:"unban",
  category:"Moderação",
  aliases: [''],

async run(client, message, args) {

 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissão`)  
        
let user = args[0];
let motivo = args[1]

         if (!user) return message.channel.send(`ID Inválido`)

       if (!motivo) return message.channel.send(`Motivo não valido`)

        message.guild.members.unban(user);
         {
            const embed = new Discord.MessageEmbed()
            .setColor("#010101")
            .setTitle("Usuário Desbanido")
            .setDescription(`**Usuário:** <@${user}> \n**Motivo:** \`${motivo}\`\n**Author:** ${message.author.tag}`)
            message.channel.send(embed);
         }

       
    }
}