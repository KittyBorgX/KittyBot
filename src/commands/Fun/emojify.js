const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const { Emojify } = require("discord-gamecord");
const Text = "KittyBorgX";

module.exports = {
  name: "emojify",
  description: "Emojify some text :D",
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
   * @param {String[]} args
   */
  execute: async (client, message, args) => {
    const query = args.join(" ");
    message.channel.send(await Emojify(query));
  },
};
