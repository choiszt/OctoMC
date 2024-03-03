async function mineAndSmeltSand(bot) {
  // Subtask 1: Perceive and go near the sand block
  await bot.chat("Heading towards the sand block...");
  await teleport(0.00, 1.22);
}

await mineAndSmeltSand(bot);