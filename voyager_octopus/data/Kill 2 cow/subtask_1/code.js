async function killCows(bot) {
    // Subtask 1: Perceive and go near the cow
    await bot.chat("Finding cows...");
    await teleport(0.00, 17.9); // Teleport to the location where the cow is
}

await killCows(bot);