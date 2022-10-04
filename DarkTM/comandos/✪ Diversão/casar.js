const Discord = require('discord.js');
const db = require('quick.db')


module.exports = {

  name:"casar",
  category:"Diversão",
  aliases: ['marry'],

  run: async (client, message, args) => {

  
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed1 = new Discord.MessageEmbed()
.setColor("#010101")
.setDescription(`Mencione a pessoa que deseja se casar`)
  if (!user) return message.channel.send(embed1);

    let embed2 = new Discord.MessageEmbed()
.setColor("#010101")
.setDescription(`Você não pode se casar com si mesmo!`)
   if (user == message.member) return message.reply(embed2);

   let casamento = db.fetch(`casamento_${user.id}`)
   let embed4 = new Discord.MessageEmbed()
.setColor("#010101")
.setDescription(`Essa pessoa ja está casada com alguem!`)
   if (casamento) return message.reply(embed4)

     let casamento2 = db.fetch(`casamento__${message.author.id}`)
   let embed5 = new Discord.MessageEmbed()
.setColor("#010101")
.setDescription(`Você ja está casado com alguem, digite **$divorciar** e se divorcie.`)
   if (casamento2) return message.reply(embed5)

  const embed6 = new Discord.MessageEmbed()
  .setColor("#010101")
  .setDescription(`${user} o ${message.author} quer se casar com você, aceita?`)
   message.channel.send(embed6).then(msg => {
  msg.react('<:Dark_Heart:889037965911801856>');

  let filtro = (reaction, usuario) => reaction.emoji.name === 'Dark_Heart' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let embed7 = new Discord.MessageEmbed()
.setColor("#010101")
.setDescription(`<a:Dark_Catt:889038268765720586> **Parabéns ${user} e ${message.author} Agora estão casados!!!**`)
.setImage(`https://cdn.discordapp.com/attachments/889036518855946290/889037128758099978/Dark_Casamento.gif`)
 message.channel.send(embed7)
db.set(`casamento_${user.id}`, message.author.username)
db.set(`casamento_${message.author.id}`, user.user.username)
   })



  })

}}