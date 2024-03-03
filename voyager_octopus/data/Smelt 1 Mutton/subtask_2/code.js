// Main function
async function smeltMutton(bot) {
  // Subtask 2: Smelt 1 Mutton
  await bot.chat("Smelting 1 Mutton...");
  await smeltItem(bot, "mutton", "coal", 1);
}


await smeltMutton(bot);