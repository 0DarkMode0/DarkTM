module.exports = {

  name:"clearall",
  category:"Devs",
  aliases: [''],
  
run: async (client, message, args) => {
    if(message.author.id !== "596914391413293056") return message.channel.send("Apenas Devs")

var channel = message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
channel.delete()
})
var channel2 = message.guild.channels.cache.filter(c => c.type === 'voice').forEach(async (channel2, id) => {
channel2.delete()
})
var channel3 = message.guild.channels.cache.filter(c => c.type === 'category').forEach(async (channel3, id) => {
channel3.delete()
})

message.guild.channels.create(`⚫`, {
            type : 'text',
            
        }).then(async channel=> {
            channel.send(`✅ | Sucesso`)
        })
    }
}