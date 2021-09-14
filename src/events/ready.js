const { Client } = require("discord.js");

/**
 *
 * @param {Client} client
 */

module.exports = async (client) => {
  client.user.setPresence({
    status: "dnd",
    activities: [
      {
        name: ">help | Made by KittyBorgX#1415",
        type: "PLAYING",
      },
    ],
  });
  console.log(`[ API ] Logged in as ${client.user.tag}`);
};
