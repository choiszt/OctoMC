async function mineWoodLog(bot) {
  // Subtask 1: Mine 4 oak logs
  await bot.chat("Mining oak logs...");
  await mineBlock(bot, "oak_log", 4); // To collect 4 oak logs
}

await mineWoodLog(bot);