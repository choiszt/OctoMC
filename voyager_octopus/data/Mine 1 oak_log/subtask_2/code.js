async function mineOakLog(bot) {
  // Subtask 2: Mine the oak_log
  await bot.chat("Mining oak log...");
  await mineBlock(bot, "oak_log", 1); // To collect 1 oak_log
}

await mineOakLog(bot);