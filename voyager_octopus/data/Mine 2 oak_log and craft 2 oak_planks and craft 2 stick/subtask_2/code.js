async function mineAndCraft(bot) {
    // Subtask 2: Mine 2 oak_log
    await bot.chat("Mining oak_log...");
    await mineBlock(bot, "oak_log", 2); // To collect 2 oak_log
}

await mineAndCraft(bot);