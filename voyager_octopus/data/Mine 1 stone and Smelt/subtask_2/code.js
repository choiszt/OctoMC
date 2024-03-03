// Main function
async function mineAndSmeltStone(bot) {
  // Subtask 2: Mine the stone block
  await bot.chat("Mining the stone block...");
  await mineBlock(bot, "stone", 1); // To collect 1 stone
}

await mineAndSmeltStone(bot);