const { Client, Message } = require("discord.js")

module.exports = {

  name:"ticket",
  category:"Gerais",
  aliases: [''],

    run: async(client, message, args) => {

        message.delete()

        const tick = message.guild.channels.cache.find(ch => ch.name === `${message.author.id}`);

        if (tick) return message.channel.send(`<:Dark_Alert:889026589575225345> | ${message.author} seu ticket atual já está aberto em: ${tick}!`).then(msg => msg.delete({timeout: 15000}));

        message.guild.channels.create(`${message.author.id}`, {
            type : 'text',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                }
            ]
        }).then(async channel=> {
            message.channel.send(`<:Dark_Aprovado:889044631701045248> | ${message.author} Ticket criado com **sucesso:** ${channel}`).then(msg => msg.delete({timeout: 19000}));
            channel.send(`<:Dark_Ticket:889044692078043186> _Olá ${message.author}, este é o seu ticket!_ \`Para fechar o ticket use $cticket\``)
        })
    }
}