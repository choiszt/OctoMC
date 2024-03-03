async function mineDirtBlock(bot) {
  // Subtask 1: Teleport to the dirt block in pic1
  await bot.chat("Teleporting to the dirt block...");
  await teleport(0, 17.93);
}

await mineDirtBlock(bot);