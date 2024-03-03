// Main function
async function mineDirtBlock(bot) {
  // Subtask 2: Mine the dirt block in pic1
  await bot.chat("Mining the dirt block...");
  await mineBlock(bot, "dirt", 4); // To collect 4 dirt blocks
}

await mineDirtBlock(bot);