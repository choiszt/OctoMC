async function smeltChicken(bot) {
  // Subtask 2: Smelt the chicken
  await bot.chat("Smelting the chicken...");
  await smeltItem(bot, "cooked_chicken", "coal", 1);
}

await smeltChicken(bot);