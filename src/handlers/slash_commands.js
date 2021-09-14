const { Client } = require("discord.js");
const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */

module.exports = async (client) => {
  const array = [];
  readdirSync("./slash_commands/").forEach((dir) => {
    const commands = readdirSync(`./slash_commands/${dir}/`).filter((files) =>
      files.endsWith(".js")
    );
    for (const file of commands) {
      const command = require(`../slash_commands/${dir}/${file}`);
      if (!command.name) throw new Error("Please provide a slash command name");
      if (!command.description)
        throw new Error("Please provide a slash command description");

      client.slashcommands.set(command.name, command);
      array.push(command);
      console.log(`Application (/) Command Loaded: ${command.name} (${dir})`);
    }
  });

  client.on("ready", async () => {
    await client.application.commands
      .set(array)
      .then(async () => {
        console.log(
          `Total Application (/) Commands: ${client.slashcommands.size}`
        );
      })
      .catch(() => {});
  });
};
