module.exports = {

    name:"ping",
    category:"Gerais",
    aliases: ['latencia', 'ms'],
  
run: async (client, message, args) => {

message.delete();

message.channel.send({embed: {
description: `<a:Dark_Ping:889027365622145033> Meu Ping: **${client.ws.ping}ms**`,
color: "#010101"
}})

}
}