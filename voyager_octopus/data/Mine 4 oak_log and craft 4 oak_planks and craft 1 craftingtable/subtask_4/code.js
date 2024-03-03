// Main function
async function craftCraftingTable(bot) {
  // Subtask 1: Craft a crafting table
  await bot.chat("Crafting a crafting table...");
  await craftItem(bot, "crafting_table", 1); // To craft a crafting table
}

await craftCraftingTable(bot);