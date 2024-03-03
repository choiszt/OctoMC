// Main function
async function mineAndCraft(bot) {
    // Subtask 2: Craft 2 oak planks
    await bot.chat("Crafting oak planks...");
    await craftItem(bot, "oak_planks", 2); // To craft 2 oak planks
}

await mineAndCraft(bot);