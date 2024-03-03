async function mineAndSmeltSand(bot) {
  // Subtask 2: Mine the sand block
  await bot.chat("Mining the sand block...");
  await mineBlock(bot, "sand", 1); // To collect 1 sand block
}

await mineAndSmeltSand(bot);