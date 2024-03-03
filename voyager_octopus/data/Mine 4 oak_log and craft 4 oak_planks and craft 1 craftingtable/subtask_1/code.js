async function mineOakLogs(bot) {
  // Subtask 1: Perceive and teleport near the oak logs
  await bot.chat("Teleporting near oak logs...");
  await teleport(0, 4.64); // Teleport to the oak log in pic1
}

await mineOakLogs(bot);