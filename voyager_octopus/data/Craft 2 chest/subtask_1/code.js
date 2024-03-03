async function craftChest(bot) {
    // Subtask 1: Place a crafting table nearby
    await bot.chat("Placing a crafting table...");
    const position = bot.entity.position.offset(2, 0, 0); // Offset the position to the right of the bot
    await placeItem(bot, "crafting_table", position);
}

await craftChest(bot);