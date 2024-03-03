async function killLlama(bot) {
  // Subtask 1: Perceive and teleport near the llama
  await bot.chat("Teleporting near the llama...");
  await teleport(0.00, 18.18); 
}

await killLlama(bot);