// Main function
async function mineSand(bot) {
  // Subtask 2: Mine a sand block
  await bot.chat("Mining a sand block...");
  await mineBlock(bot, "sand", 4); // To collect 4 sand block
}

await mineSand(bot);