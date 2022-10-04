const Discord = require("discord.js");

module.exports = {

    name:"votação",
    category:"Moderação",
    aliases: [''],

async run(client, message, args) {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Você não tem permissão")
    }

    message.delete();
    const content = args.join(" ");

    if (!args[0]) {
        return message.channel.send(`${message.author}, Escreva o Motivo após o Comando `)
    } else if (content.length > 1000) {
        return message.channel.send(`${message.author}, Faça uma votaçao de pelo menos 20 caracteres.`);
    } else {
        const msg = await message.channel.send(
            new Discord.MessageEmbed()
                .setColor("#010101")
                .addField("Autor:", message.author)
                .addField("Votar", content)
                .setTimestamp()
        );

        const emojis = ["<:Dark_Aprovado:889048703455887402>", "<:Dark_Negado:889042255271313429>"];

        for (const i in emojis) {
            await msg.react(emojis[i])
        }
    }
}}