async function killPanda(bot) {
  // Subtask 1: Approach the panda in pic1
  await bot.chat("Approaching the panda...");
  await teleport(0.00, 17.9); // Teleport to the location of the panda
}

await killPanda(bot);