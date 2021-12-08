const { Permissions, Client, Message, MessageEmbed } = require("discord.js");
const got = require("got");
module.exports = {
  name: "dog",
  description: "Get a fun meme!",
  perms: {
    client: [
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.EMBED_LINKS,
    ],
    user: [Permissions.FLAGS.SEND_MESSAGES],
  },
  aliases: ["memes"],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {STring[]} args
   */
  execute: async (client, message, args) => {
    const embed = new MessageEmbed();
    // @ts-ignore

        // const [list] = JSON.parse(response.body);
        // const [post] = list.data.children;

        // const permalink = post.data.permalink;
        const memeUrl = `https://www.youtube.com/watch?v=j5a0jTc9S10`;
        // const memeImage = post.data.url;
        // const memeTitle = post.data.title;
        // const memeUpvotes = post.data.ups;
        // const memeNumComments = post.data.num_comments;

        embed.setTitle(`A cute video of a dog! [Click on me!]`);
        embed.setURL(`${memeUrl}`);
        embed.setColor("RANDOM");
        // embed.setImage(memeImage);
        embed.setFooter(`check it out!`);

        message.channel.send({ embeds: [embed] });


  },
};
