async function mineJungleLog(bot) {
  // Subtask 1: Mine 2 jungle logs
  await bot.chat("Mining jungle logs...");
  await mineBlock(bot, "jungle_log", 2); // To collect 2 jungle logs
}

await mineJungleLog(bot);