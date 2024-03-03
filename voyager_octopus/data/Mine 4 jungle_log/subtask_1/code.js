async function mineJungleLogs(bot) {
  // Subtask 1: Perceive and teleport near the jungle log in pic4
  await bot.chat("Teleporting near jungle log...");
  await teleport(4.71, 1.22); // Teleport to the direction of the jungle log in pic4 with distance 1.22
}

await mineJungleLogs(bot);