const Discord = require('discord.js')

module.exports = {

  name:"reportbug",
  category:"Misc",
  aliases: ['reporte'],

async run(client, message, args, channel) {
  
  let embed1 = new Discord.MessageEmbed()
  .setTitle('ReportBug | <:Dark_Alert:889026589575225345>')
  .setColor('#010101')
  .setDescription('Seja bem vindo(a) ao sistema de Reporte do Dark™')
  .addField('Regras', 'Por favor não brinque na hora de reportar um bug!', false)
  .addField('Report', 'Digite abaixo qual problema você teve como bot', false)
  
  
  message.channel.send(embed1).then(msg1 => {
    let canal = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
      .on('collect', c => {
        let report = c.content

        message.channel.send('> Reporte enviado com sucesso!')
        
        let embed2 = new Discord.MessageEmbed()
        .setTitle('ReportBug | <:Dark_Alert:889026589575225345>')
        .setColor('#010101')
        .addField('Author', `Nome: ${message.author.tag}\nID: \`${message.author.id}\``, false)
        .addField('Servidor', `Nome: ${message.guild.name}\nID: \`${message.guild.id}\``, false)
        .addField('<@596914391413293056>', false)

       
       client.channels.cache.get('976154878965579776').send(embed2)
       client.channels.cache.get('976154878965579776').send(`\`\`\`${report}\`\`\``)
      })
   })
}}