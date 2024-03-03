async function smeltChicken(bot) {
  // Subtask 1: Place a furnace
  await bot.chat("Placing a furnace...");
  const position = bot.entity.position.offset(1, 0, 0); // Offset the position to the right of the bot
  await placeItem(bot, "furnace", position);
}

await smeltChicken(bot);