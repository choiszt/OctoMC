// Main function
async function mineStone(bot) {
  // Subtask 2: Mine 1 stone block
  await bot.chat("Mining stone...");
  await mineBlock(bot, "stone", 1); // To collect 1 stone block
}

await mineStone(bot);