async function mineAndPlaceLog(bot) {
  // Subtask 2: Mine the birch_log
  await bot.chat("Mining birch log...");
  await mineBlock(bot, "birch_log", 1); // To collect 1 birch_log
}

await mineAndPlaceLog(bot);