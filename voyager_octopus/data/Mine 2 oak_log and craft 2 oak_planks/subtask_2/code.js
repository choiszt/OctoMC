// Main function
async function mineOakLog(bot) {
  // Subtask 1: Mine 2 oak logs.
  await bot.chat("Mining oak logs...");
  await mineBlock(bot, "oak_log", 2); // To collect 2 oak logs.
}

await mineOakLog(bot);