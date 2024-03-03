// Main function
async function craftBucket(bot) {
  // Subtask 1: Craft a bucket using the crafting table
  await bot.chat("Crafting a bucket...");
  await craftItem(bot, "bucket", 1); // Craft 1 bucket using the crafting table
}

await craftBucket(bot);