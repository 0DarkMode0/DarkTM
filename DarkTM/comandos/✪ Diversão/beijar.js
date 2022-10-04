const Discord = require('discord.js');


module.exports = {

  name:"beijar",
  category:"Diversão",
  aliases: ['kiss'],
  
  run: async (client, message, args) => {
  
    
var lista = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
  'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
  'https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif'
];

var imagem = lista[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('Mencione um Usuário Valido!');
}

  const embed = new Discord.MessageEmbed()
        .setColor('#010101')
        .setDescription(`<:Dark_Heart:889037965911801856> ${message.author} **Beijou** ${user}**!**`)
        .setImage(imagem)
        .setFooter('Novo casal Será?')
  await message.channel.send(embed);
}}
