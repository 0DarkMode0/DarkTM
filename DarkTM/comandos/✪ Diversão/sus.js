const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {

  name:"sus",
  category:"Diversão",
  aliases: [''],
  
run: async (client, message, args) => {

    const user = message.mentions.users.first()
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    if(!user) {
      return message.channel.send(`Por favor mencione um usuario para ejetar`)
    }
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const embed = new discord.MessageEmbed()
      .setDescription(`<:Dark_Among:889039395200565248> **${message.author.username}** decidiu ejetar **${user.username}**`)
      .setColor("#010101")
      .setImage(`${data.url}`)

    message.channel.send(embed);
  }
}