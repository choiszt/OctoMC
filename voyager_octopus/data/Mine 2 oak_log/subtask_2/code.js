async function mineOakLog(bot) {
  // Subtask 2: Mine 2 oak log
  await bot.chat("Mining oak log...");
  await mineBlock(bot, "oak_log", 2);
}

await mineOakLog(bot);