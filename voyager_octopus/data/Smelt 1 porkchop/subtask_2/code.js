async function smeltPorkchop(bot) {
    // Subtask 2: Smelt 1 porkchop
    await bot.chat("Smelting porkchop...");
    await smeltItem(bot, "porkchop", "coal", 1);
}

await smeltPorkchop(bot);