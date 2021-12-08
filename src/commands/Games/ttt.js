const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { TicTacToe } = require('djs-games')

module.exports = {
  name: "ttt",
  description: "Play ttt!",
  perms: {
    client: [
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.EMBED_LINKS,
    ],
    user: [Permissions.FLAGS.SEND_MESSAGES],
  },
  aliases: [],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {STring[]} args
   */
  execute: async (client, message, args) => {
    const game = new TicTacToe({
        message: message,
        xEmote: '❌', // The Emote for X
        oEmote: '0️⃣', // The Emote for O
        xColor: 'PRIMARY',
        oColor: 'PRIMARY', // The Color for O
        embedDescription: 'Tic Tac Toe', // The Description of the embed
      })
      game.start()
  },
};
