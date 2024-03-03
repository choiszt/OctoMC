async function killChicken(bot) {
  // Subtask 2: Kill the chicken
  await bot.chat("Killing the chicken...");
  await killMob(bot, "chicken", 5000); // To kill a chicken with a timeout of 5 seconds
}

await killChicken(bot);