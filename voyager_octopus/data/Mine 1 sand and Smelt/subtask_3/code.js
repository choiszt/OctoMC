async function mineAndSmeltSand(bot) {
  // Subtask 3: Place a furnace in front of the bot
  await bot.chat("Placing a furnace...");
  const furnacePosition = bot.entity.position.offset(0, 0, 1); // Calculate the position in front of the bot
  await placeItem(bot, "furnace", furnacePosition); // Place the furnace
}

await mineAndSmeltSand(bot);