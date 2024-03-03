async function mineAndPlaceSpruceLog(bot) {
  // Subtask 2: Mine the spruce log
  await bot.chat("Mining spruce log...");
  await mineBlock(bot, "spruce_log", 1); // To collect 1 spruce log
}

await mineAndPlaceSpruceLog(bot);