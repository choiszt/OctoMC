// Main function
async function craftOakBoat(bot) {
  // Subtask 1: Place a crafting table nearby
  await bot.chat("Placing a crafting table...");
  await placeItem(bot, "crafting_table", bot.entity.position);
}

await craftOakBoat(bot);