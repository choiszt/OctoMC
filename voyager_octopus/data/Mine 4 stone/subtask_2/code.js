// Main function
async function mineStone(bot) {
	
  // Subtask 2: Mine 4 stone block
  await bot.chat("Mining stone...");
  await mineBlock(bot, "stone", 4); // To collect 4 stone
}


await mineStone(bot);