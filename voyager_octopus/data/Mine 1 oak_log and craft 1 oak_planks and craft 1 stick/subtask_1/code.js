async function mineAndCraft(bot) {
  // Subtask 1: Perceive and teleport near the oak_log
  await bot.chat("Teleporting near the oak_log...");
  await teleport(0.00, 11.77); // Teleport to the oak_log
}

await mineAndCraft(bot);