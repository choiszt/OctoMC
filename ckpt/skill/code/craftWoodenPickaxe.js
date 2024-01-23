async function craftWoodenPickaxe(bot) {
  // Check if the bot already has a wooden pickaxe
  const woodenPickaxe = bot.inventory.findInventoryItem(mcData.itemsByName["wooden_pickaxe"].id);
  if (woodenPickaxe) {
    bot.chat("I already have a wooden pickaxe.");
    return;
  }

  // Check if the bot has enough wooden planks and sticks
  const woodenPlanks = bot.inventory.count(mcData.itemsByName["oak_planks"].id);
  const sticks = bot.inventory.count(mcData.itemsByName["stick"].id);
  if (woodenPlanks < 3 || sticks < 2) {
    bot.chat("I need more materials to craft a wooden pickaxe.");
    await mineBlock(bot, "oak_log", 1); // Collect more wooden planks
    await craftItem(bot, "oak_planks", 3); // Craft wooden planks
    await craftItem(bot, "stick", 2); // Craft sticks
  }

  // Find a nearby crafting table
  const craftingTable = bot.findBlock({
    matching: mcData.blocksByName.crafting_table.id,
    maxDistance: 32
  });

  // Check if a crafting table was found
  if (!craftingTable) {
    bot.chat("I cannot find a crafting table nearby.");
    return;
  }

  // Craft the wooden pickaxe using the crafting table
  await bot.pathfinder.goto(new GoalLookAtBlock(craftingTable.position, bot.world));
  await craftItem(bot, "wooden_pickaxe", 1);
  bot.chat("I have successfully crafted a wooden pickaxe.");
}