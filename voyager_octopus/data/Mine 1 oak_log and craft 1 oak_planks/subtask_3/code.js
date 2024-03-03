async function mineAndCraft(bot) {
    // Subtask 3: Craft 1 oak plank
    await bot.chat("Crafting oak plank...");
    await craftItem(bot, "oak_planks", 1); // To craft 1 oak plank
}

await mineAndCraft(bot);