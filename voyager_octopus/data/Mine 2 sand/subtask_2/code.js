// Main function
async function mineSand(bot) {
  // Subtask 1: Mine 2 sand blocks
  await bot.chat("Mining sand...");
  await mineBlock(bot, "sand", 2); // To collect 2 sand blocks
}

await mineSand(bot);