const Canvas = require('canvas');
const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`);
const canvacord = require("canvacord");
const path = require("path");


module.exports = {

    name:"rip",
    category:"Diversão",
    aliases: [''],

    run: async (client, message, args) => {

        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.rip(avatar);
        let attachment = await new Discord.MessageAttachment(image, "rip.png");
        
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(`#010101`)
        .setImage("attachment://rip.png")
        .attachFiles(attachment)
        await message.channel.send(fastembed2);
    }
}