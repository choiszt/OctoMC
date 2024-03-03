async function mineStone(bot) {
  // Subtask 1: Perceive and teleport near the stone block
  await bot.chat("Teleporting near the stone block...");
  await teleport(0.00, 1.22); // Teleport to the stone block at yaw=0.00, distance=1.22
}

await mineStone(bot);