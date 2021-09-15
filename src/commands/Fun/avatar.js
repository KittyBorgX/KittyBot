const {
  Permissions,
  Client,
  Message,
  MessageEmbed,
  MessageAttachment,
} = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
  name: "avatar",
  description: "Manipulate your avatar!",
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
    const query = args[0];

    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    if (!query) {
      const embed = new MessageEmbed()
        .setTitle("Valid avatar queries: ")
        .setDescription("Example: >avatar trash")
        .addField("trash", "Delete the avatar!")
        .addField("blur", "Blur the avatar!")
        .addField("rainbow", "Add a rainbow filter the avatar!")
        .addField("greyscale", "Greyscale the avatar!")
        .addField("invert", "Invert the avatar colours!")
        .addField("triggered", "Avatar trigger!")
        .addField("discordBlue", "Your avatar in discord black")
        .addField("dicordBlack", "Your avatar in discord blue")
        .addField("bobross", "BobRoss paints you!")
        .setTimestamp();

      return message.channel.send({ embeds: [embed] });
    }

    if (query === "trash") {
      let img = await new DIG.Delete().getImage(avatar);
      let attach = new MessageAttachment(img, "delete.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "blur") {
      let img = await new DIG.Blur().getImage(avatar, 5);
      let attach = new MessageAttachment(img, "blur.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "rainbow") {
      let img = await new DIG.Gay().getImage(avatar);
      let attach = new MessageAttachment(img, "rainbow.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "greyscale") {
      let img = await new DIG.Greyscale().getImage(avatar);
      let attach = new MessageAttachment(img, "greyscale.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "invert") {
      let img = await new DIG.Invert().getImage(avatar);
      let attach = new MessageAttachment(img, "invert.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "triggered") {
      let img = await new DIG.Triggered().getImage(avatar);
      let attach = new MessageAttachment(img, "triggered.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "discordBlue") {
      let img = await new DIG.DiscordBlue().getImage(avatar);
      let attach = new MessageAttachment(img, "discordBlue.png");
      message.channel.send({ files: [attach] });
    }
    if (query === "discordBlack") {
      let img = await new DIG.DiscordBlack().getImage(avatar);
      let attach = new MessageAttachment(img, "discordBlack.png");
      message.channel.send({ files: [attach] });
    }

    if (query === "bobross") {
      let img = await new DIG.Bobross().getImage(avatar);
      let attach = new MessageAttachment(img, "bobross.png");
      message.channel.send({ files: [attach] });
    }
  },
};
