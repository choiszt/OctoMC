// Main function
async function mineWoodLog(bot) {
  
  // Subtask 2: Craft 4 oak planks
  await bot.chat("Crafting oak planks...");
  await craftItem(bot, "oak_planks", 4); // To craft 4 oak planks
}


await mineWoodLog(bot);