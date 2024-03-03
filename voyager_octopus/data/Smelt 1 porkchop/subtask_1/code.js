async function smeltPorkchop(bot) {
    // Subtask 1: Place a furnace
    await bot.chat("Placing a furnace...");
    await placeItem(bot, "furnace", bot.entity.position);
}

await smeltPorkchop(bot);