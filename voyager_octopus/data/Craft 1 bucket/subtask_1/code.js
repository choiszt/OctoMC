async function craftBucket(bot) {
  // Subtask 1: Place a crafting table nearby
  await placeItem(bot, "crafting_table", bot.entity.position); // Place a crafting table at the current bot position
}

await craftBucket(bot);