async function mineAndPlaceJungleLog(bot) {
  // Subtask 2: Mine the jungle_log
  await bot.chat("Mining the jungle log...");
  await mineBlock(bot, "jungle_log", 1); // To collect 1 jungle_log
}

await mineAndPlaceJungleLog(bot);