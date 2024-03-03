// Main function
async function craftChest(bot) {
    // Subtask 2: Craft 2 chests
    await bot.chat("Crafting 2 chests...");
    await craftItem(bot, "chest", 2); // To craft 2 chests
}

await craftChest(bot);