async function mineAndPlaceSpruceLog(bot) {
  // Subtask 3: Place the spruce log nearby
  await bot.chat("Placing spruce log...");
  const position = bot.entity.position.offset(1, 0, 0); // Offset the position by 1 block in the x-axis
  await placeItem(bot, "spruce_log", position);
}

await mineAndPlaceSpruceLog(bot);