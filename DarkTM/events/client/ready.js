const Discord = require("discord.js")
const prefix = "$"
module.exports = (client, message) => {

let activities = [
      `${prefix}help`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type:"STREAMING",
        url: "https://www.twitch.tv/darktm__"
      }), 1000 * 20); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.clear()
console.log("Dark™ Online")
console.log(`Ping: ${client.ws.ping}ms`)
};