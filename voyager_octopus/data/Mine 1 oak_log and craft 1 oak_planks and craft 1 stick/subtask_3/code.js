// Main function
async function mineAndCraft(bot) {
  // Subtask 2: Craft 1 oak_planks
  await bot.chat("Crafting oak_planks...");
  await craftItem(bot, "oak_planks", 1); // To craft 1 oak_planks
}


await mineAndCraft(bot);