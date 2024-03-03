async function mineAndCraft(bot) {
    // Subtask 2: Mine 1 oak log
    await bot.chat("Mining oak log...");
    await mineBlock(bot, "oak_log", 1); // To collect 1 oak log
}

await mineAndCraft(bot);