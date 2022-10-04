module.exports = {

  name:"closeticket",
  category:"Gerais",
  aliases: ['cticket'],

    run: async(client, message, args) => {
        
        message.delete();

        if(message.channel.name !== `${message.author.id}`) return message.channel.send(`<:Dark_Negado:889042255271313429> | ${message.author} Comando apenas para fechar o **ticket!**`).then(msg => msg.delete({timeout:15000}));
        
        message.channel.delete()
    }
}