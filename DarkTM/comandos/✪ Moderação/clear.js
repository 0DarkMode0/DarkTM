const Discord = require("discord.js");

module.exports = {

  name:"clear",
  category:"Moderação",
  aliases: [''],

async run(client, message, args) {
if(!message.member.hasPermission('ADMINISTRATOR')) 
        return message.channel.send('Você não tem permissão')
        

  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.channel.send(
      "Coloque um número de **1-99** Mensagens que serão Excluidas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} Mensagens Deletadas**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar as mensagens devido a: ${error}`)
    );
}}