// Main function
async function mineAndSmeltStone(bot) {

  // Subtask 4: Smelt the stone
  await bot.chat("Smelting the stone...");
  await smeltItem(bot, "stone", "coal", 1); // To smelt 1 stone using coal as fuel
}

await mineAndSmeltStone(bot);