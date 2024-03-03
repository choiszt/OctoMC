// Main function
async function mineAndCraft(bot) {
    // Subtask 3: Craft 2 sticks
    await bot.chat("Crafting sticks...");
    await craftItem(bot, "stick", 2); // To craft 2 sticks
}

await mineAndCraft(bot);