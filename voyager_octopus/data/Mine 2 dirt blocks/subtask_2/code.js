async function mineDirt(bot) {
    // Subtask 2: Mine the dirt block
    await bot.chat("Mining the dirt block...");
    await mineBlock(bot, "dirt", 2); // To mine 2 dirt blocks
}

await mineDirt(bot);