async function mineAndCraft(bot) {
  // Subtask 1: Mine the oak_log
  await bot.chat("Mining the oak_log...");
  await mineBlock(bot, "oak_log", 1); // To collect 1 oak_log
}

await mineAndCraft(bot);