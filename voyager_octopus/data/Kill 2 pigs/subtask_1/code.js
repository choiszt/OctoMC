async function killPigs(bot) {
  // Subtask 1: Teleport and search for pigs in different directions
  await bot.chat("Searching for pigs...");
  await teleport(yaw=0, distance=30);
}

await killPigs(bot);