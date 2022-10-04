const Discord = require("discord.js");

module.exports = {

  name:"ban",
  category:"Moderação",
  aliases: ['banir'],

async run(client, message, args) {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissão`)

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = " Motivo não informado";

const embed = new Discord.MessageEmbed()
        .setTitle(`Você foi banido!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`**Servidor:** \`${message.guild.name}\`\n**Motivo:** ${reason}`)
        .setColor("#010101")
        .setTimestamp()



        if (!args[0]) return message.channel.send(`Use o ID ou Mencione o usuário para banir!`);

        if(!user) return message.channel.send(`Usuário Invalido!`);

        if(!user.bannable) return message.channel.send(`Estou sem permissão para banir!`);

        const embed2 = new Discord.MessageEmbed()
        .setTitle(`<:Dark_Admin:893282527412879370> | Novo Usuário Punido!`)
        .setImage("https://cdn.discordapp.com/attachments/889036518855946290/911101806149509150/Dark_Ban.gif")
        .setDescription(`**Motivo:** \n\`${reason}\`\n\n**Usuário Punido:** \n\n**Tag:** \`${user.user}\`\n**ID:** \`${user.user.id}\`\n\n**Author da Punição:** \`${message.author}\``)
        .setColor("#010101")

        await user.send(embed);
        await user.ban({
            reason: reason
        });
        
        console.clear()
        message.channel.send(embed2);
    }
}
