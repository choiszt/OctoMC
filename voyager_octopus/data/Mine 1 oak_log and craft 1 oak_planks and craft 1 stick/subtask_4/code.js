// Main function
async function mineAndCraft(bot) {
  // Subtask 3: Craft 1 stick
  await bot.chat("Crafting stick...");
  await craftItem(bot, "stick", 1); // To craft 1 stick
}

await mineAndCraft(bot);