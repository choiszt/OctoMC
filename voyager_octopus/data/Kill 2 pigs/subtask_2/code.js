async function killPigs(bot) {
  // Subtask 2: Kill the first pig
  await bot.chat("Killing the first pig...");
  await killMob(bot, "pig", 5000); // To kill the first pig within a timeout of 5000 milliseconds
}

await killPigs(bot);