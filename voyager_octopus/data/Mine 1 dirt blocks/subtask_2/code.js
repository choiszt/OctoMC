async function mineDirtBlock(bot) {
  // Subtask 2: Dig the dirt block
  await bot.chat("Mining dirt block...");
  await mineBlock(bot, "dirt", 1); // To collect 1 dirt block
}

await mineDirtBlock(bot);