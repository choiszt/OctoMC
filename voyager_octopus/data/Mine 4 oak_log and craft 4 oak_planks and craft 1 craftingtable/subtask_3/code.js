// Main function
async function craftOakPlanks(bot) {
  // Subtask 1: Craft 4 oak planks
  await bot.chat("Crafting oak planks...");
  await craftItem(bot, "oak_planks", 4); // To craft 4 oak planks
}

await craftOakPlanks(bot);