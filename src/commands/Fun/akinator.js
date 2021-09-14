const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const akinator = require("discord.js-akinator");

module.exports = {
  name: "akinator",
  description: "Play Akinator!",
  perms: {
    client: [
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.EMBED_LINKS,
    ],
    user: [Permissions.FLAGS.SEND_MESSAGES],
  },
  aliases: ["Aki", "aki"],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {STring[]} args
   */
  execute: async (client, message, args) => {
    const language = "en"; //The Language of the Game
    const childMode = false; //Whether to use Akinator's Child Mode
    const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
    const useButtons = true; //Whether to use Discord's Buttons
    akinator(message, {
      language: language, //Defaults to "en"
      childMode: childMode, //Defaults to "false"
      gameType: gameType, //Defaults to "character"
      useButtons: useButtons, //Defaults to "false"
    });
  },
};
