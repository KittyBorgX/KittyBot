const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const hangman = require("discord-hangman");

module.exports = {
  name: "hangman",
  description: "Play hangman!",
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
    hangman
      .create(message.channel, "random", { displayWordOnGameOver: false })
      .then((data) => {
        if (!data.game) return; // If the game is cancelled or no one joins it

        if (data.game.status === "won") {
          if (data.selector)
            message.channel.send(
              `Congratulations, you found the word! ${data.selector.username}`
            );
          // data.selector is the user who chose the word (only in custom game mode)
          else message.channel.send("Congratulations you found the word!");
        } else if (data.game.status === "lost") {
          if (data.selector)
            message.channel.send(
              `${data.selector.username} Beat you all! The word was ${data.game.word}.`
            );
          else
            message.channel.send(`You lost! The word was ${data.game.word}.`);
        } else {
          message.channel.send("15 minutes have passed! The game is over."); // If no one answers for 15 minutes
        }
      });
  },
};
