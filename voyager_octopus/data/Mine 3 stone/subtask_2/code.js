async function mineStone(bot) {
  // Subtask 2: Mine a stone block
  await bot.chat("Mining a stone block...");
  await mineBlock(bot, "stone", 2); // To collect 2 stone block
}

await mineStone(bot);