const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { Snake } = require("discord-gamecord");

module.exports = {
  name: "snake",
  description: "Play snake!",
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
    new Snake({
      message: message,
      embed: {
        title: "Snake Game",
        color: "#5865F2",
        OverTitle: "Game Over",
      },
      snake: { head: "🟢", body: "🟩", tail: "🟢" },
      emojis: {
        board: "⬛",
        food: "🍎",
        up: "⬆️",
        right: "➡️",
        down: "⬇️",
        left: "⬅️",
      },
      othersMessage: "You are not allowed to use buttons for this message!",
    }).startGame();
  },
};
