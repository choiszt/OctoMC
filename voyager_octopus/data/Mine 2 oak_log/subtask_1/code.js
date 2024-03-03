async function mineOakLog(bot) {
  // Subtask 1: Perceive and teleport near the oak log at distance 11.51
  await bot.chat("Teleporting near the oak log...");
  await teleport(0, 11.51);
}

await mineOakLog(bot);