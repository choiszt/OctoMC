// Main function
async function craftIronAxe(bot) {
  // Subtask 1: Craft 1 IronAxe
  await bot.chat("Crafting IronAxe...");
  await craftItem(bot, "iron_axe", 1);
}

await craftIronAxe(bot);