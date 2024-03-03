// Main function
async function killLlama(bot) {
  // Subtask 2: Kill the llama
  await bot.chat("Killing the llama...");
  await killMob(bot, "llama", 5000); // Timeout set to 5000 milliseconds
}

await killLlama(bot);