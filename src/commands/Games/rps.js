const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { RockPaperScissors } = require("discord-gamecord");

module.exports = {
  name: "rps",
  description: "Play snake!",
  perms: {
    client: [
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.EMBED_LINKS,
    ],
    user: [Permissions.FLAGS.SEND_MESSAGES],
  },
  aliases: ["rockpaperscissors"],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {STring[]} args
   */
  execute: async (client, message, args) => {
    new RockPaperScissors({
      message: message,
      opponent: message.mentions.users.first(),
      embed: {
        title: "Rock Paper Scissors",
        description: "Press a button below to make a choice!",
        color: "#5865F2",
      },
      buttons: {
        rock: "Rock",
        paper: "Paper",
        scissors: "Scissors",
      },
      othersMessage: "You are not allowed to use buttons for this message!",
      chooseMessage: "You choose {emoji}!",
      noChangeMessage: "You cannot change your selection!",
      askMessage:
        "Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!",
      cancelMessage:
        "Looks like they refused to have a game of Rock Paper Scissors. :(",
      timeEndMessage: "Since the opponent didnt answer, i dropped the game!",
      drawMessage: "It was a draw!",
      winMessage: "{winner} won the game!",
      gameEndMessage: "The game went unfinished :(",
    }).startGame();
  },
};
