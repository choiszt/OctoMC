async function mineJungleLogs(bot) {
  // Subtask 2: Mine 4 jungle log
  await bot.chat("Mining a jungle log...");
  await mineBlock(bot, "jungle_log", 4); // To collect 4 jungle log
}

await mineJungleLogs(bot);