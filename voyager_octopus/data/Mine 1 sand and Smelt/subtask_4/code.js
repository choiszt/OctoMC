async function mineAndSmeltSand(bot) {
  // Subtask 4: Smelt the sand in the furnace
  await bot.chat("Smelting the sand...");
  await smeltItem(bot, "sand", "coal", 1); // Smelt 1 sand using coal as fuel
}

await mineAndSmeltSand(bot);