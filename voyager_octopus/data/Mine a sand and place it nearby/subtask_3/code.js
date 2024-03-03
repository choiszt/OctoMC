async function mineAndPlaceSand(bot) {
  // Subtask 3: Place the sand block nearby
  await bot.chat("Placing the sand block...");
  await placeItem(bot, "sand", bot.entity.position.offset(0, 0, 0));
}

await mineAndPlaceSand(bot);