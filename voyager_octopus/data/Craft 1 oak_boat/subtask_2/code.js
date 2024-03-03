// Main function
async function craftOakBoat(bot) {
  // Subtask 2: Craft 1 oak_boat
  await bot.chat("Crafting oak boat...");
  await craftItem(bot, "oak_boat", 1); // To Craft 1 oak_boat
}

await craftOakBoat(bot);