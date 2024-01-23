async function craftWoodenPickaxe(bot) {
  const woodenPlanksCount = bot.inventory.count(mcData.itemsByName["oak_planks"].id);
  const sticksCount = bot.inventory.count(mcData.itemsByName["stick"].id);
  if (woodenPlanksCount >= 2 && sticksCount >= 2) {
    // We have enough materials, craft the wooden pickaxe
    await craftItem(bot, "wooden_pickaxe", 1);
    bot.chat("Crafted a wooden pickaxe!");
  } else {
    // We don't have enough materials, gather them
    bot.chat("Gathering materials...");

    // Step 1: Gather birch logs
    await exploreUntil(bot, new Vec3(1, 0, 1), 60, () => {
      // Check if we have enough birch logs after each exploration
      const birchLogsCount = bot.inventory.count(mcData.itemsByName["birch_log"].id);
      if (birchLogsCount >= 2) {
        return true; // Stop exploring, we have enough birch logs
      }
    });

    // Check if we have enough birch logs after exploring
    const birchLogsCount = bot.inventory.count(mcData.itemsByName["birch_log"].id);
    if (birchLogsCount >= 2) {
      // Step 2: Craft birch logs into wooden planks
      await craftItem(bot, "oak_planks", 2);

      // Step 3: Gather sticks
      await exploreUntil(bot, new Vec3(1, 0, 1), 60, () => {
        // Check if we have enough sticks after each exploration
        const sticksCount = bot.inventory.count(mcData.itemsByName["stick"].id);
        if (sticksCount >= 2) {
          return true; // Stop exploring, we have enough sticks
        }
      });

      // Check if we have enough sticks after exploring
      const sticksCount = bot.inventory.count(mcData.itemsByName["stick"].id);
      if (sticksCount >= 2) {
        // Step 4: Craft the wooden pickaxe
        await craftItem(bot, "wooden_pickaxe", 1);
        bot.chat("Crafted a wooden pickaxe!");
      } else {
        bot.chat("Could not gather enough sticks to craft a wooden pickaxe.");
      }
    } else {
      bot.chat("Could not gather enough birch logs to craft a wooden pickaxe.");
    }
  }
}