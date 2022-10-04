const Discord =  require ('discord.js')
const db = require('quick.db')

module.exports = {

  name:"inviteblock",
  category:"Moderação",
  aliases: ['inviteblocker', 'antiinvite'],
  
run: async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) 
        return message.channel.send('Você não tem permissão')
        
    const op = args[0]

    let embed1 = new Discord.MessageEmbed()
    .setColor('#010101')
    .setDescription('**Para ativar o InviteBlock use \`on\` na frente do comando, Para desativar use \`off\`**')
    
    if (!op) message.channel.send(embed1)
    
    if(op == 'off') {
      let embed2 = new Discord.MessageEmbed()
      .setColor('#010101')
      .setDescription('<:Dark_OFF:889047269708533791> **|** Anti-Invite **OFF**')
      
      db.delete(`inviteop_${message.guild.id}`)
      message.delete();
      message.channel.send(embed2)
    }

    if(op == 'on') {
      let embed3 = new Discord.MessageEmbed()
      .setColor('#010101')
      .setDescription('<:Dark_ON:889047269687590953> **|** Anti-Invite **ON**')
      
      db.set(`inviteop_${message.guild.id}`, 'on')
      message.delete();
      message.channel.send(embed3)
    }
  }
}