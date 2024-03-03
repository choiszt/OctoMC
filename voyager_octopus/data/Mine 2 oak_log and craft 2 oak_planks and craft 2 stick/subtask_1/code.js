async function mineAndCraft(bot) {
    // Subtask 1: Perceive and teleport near the oak_log in pic1
    await bot.chat("Teleporting near oak_log...");
    await teleport(0, 11.77); // Teleport to the oak_log in pic1
}

await mineAndCraft(bot);