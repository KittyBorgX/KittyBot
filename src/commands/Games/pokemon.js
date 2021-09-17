const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { GuessThePokemon } = require("discord-gamecord");

module.exports = {
  name: "pokemon",
  description: "Play snake!",
  perms: {
    client: [
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.EMBED_LINKS,
    ],
    user: [Permissions.FLAGS.SEND_MESSAGES],
  },
  aliases: ["guesspoke"],

  /*
   *
   * @param {Client} client
   * @param {Message} message
   * @param {STring[]} args
   */
  execute: async (client, message, args) => {
    new GuessThePokemon({
      message: message,
      embed: {
        title: "Who's This Pokemon?",
        footer: "You have only 1 chance",
        color: "#5865F2",
      },
      time: 60000,
      othersMessage: "You are not allowed to use buttons for this message!",
      winMessage: "Your guess was correct! The pokemon was **{pokemon}**",
      stopMessage: "Better luck next time! It was a **{pokemon}**",
      incorrectMessage:
        "Your guess was incorrect! The pokemon was **{pokemon}**",
    }).startGame();
  },
};
