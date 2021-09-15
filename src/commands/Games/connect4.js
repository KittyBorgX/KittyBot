const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { Connect4 } = require("discord-gamecord");

module.exports = {
  name: "connect4",
  description: "Play snake!",
  perms: {
    client: [
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.EMBED_LINKS,
    ],
    user: [Permissions.FLAGS.SEND_MESSAGES],
  },
  aliases: ["cn4"],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {STring[]} args
   */
  execute: async (client, message, args) => {
    new Connect4({
      message: message,
      opponent: message.mentions.users.first(),
      embed: {
        title: "Connect 4",
        color: "#5865F2",
      },
      emojis: {
        player1: "🔵",
        player2: "🟡",
      },
      turnMessage: "{emoji} | Its now **{player}** turn!",
      winMessage: "{emoji} | **{winner}** won the game!",
      gameEndMessage: "The game went unfinished :(",
      drawMessage: "It was a draw!",
      askMessage:
        "Hey {opponent}, {challenger} challenged you for a game of Connect 4!",
      cancelMessage: "Looks like they refused to have a game of Connect4. :(",
      timeEndMessage: "Since the opponent didnt answer, i dropped the game!",
    }).startGame();
  },
};
