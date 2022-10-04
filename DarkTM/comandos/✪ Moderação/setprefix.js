const db = require('quick.db');

module.exports = {

  name:"setprefix",
  category:"Moderação",
  aliases: ['prefix'],
  
run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.reply(
      "Você não tem permissão"
    )

        if(!args[0]) return message.channel.send('Por favor coloque qual sera o novo prefix.');

        if(args[1]) return message.channel.send('O prefix não pode ter espaços');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Novo prefixo: **${args[0]}**`)
    }
}