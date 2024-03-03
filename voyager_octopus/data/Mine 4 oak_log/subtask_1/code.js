async function mineOakLogs(bot) {
  // Subtask 1: Perceive and teleport near the oak logs
  await bot.chat("Teleporting near oak logs...");
  await teleport(0, 10.61); // Teleport to oak logs at distance 10.61

}

await mineOakLogs(bot);