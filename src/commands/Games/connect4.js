const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { ConnectFour } = require('djs-games')

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
    const game = new ConnectFour({
      message: message,
      player1: '🔴',
      player2: '🟡',
    })
    game.start()
  },
};
