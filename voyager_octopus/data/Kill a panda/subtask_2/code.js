async function killPanda(bot) {
  // Subtask 2: Kill the panda in pic1
  await bot.chat("Killing the panda...");
  await killMob(bot, "panda", 30000); // Kill the panda within a timeout of 30 seconds
}

await killPanda(bot);