async function killPigs(bot) {
  // Subtask 3: Kill the second pig
  await bot.chat("Killing the second pig...");
  await killMob(bot, "pig", 5000); // To kill the second pig within a timeout of 5000 milliseconds
}

await killPigs(bot);