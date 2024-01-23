async function craftWoodenPickaxe(bot) {
  const woodenPickaxe = bot.inventory.findInventoryItem(mcData.itemsByName["wooden_pickaxe"].id);
  if (woodenPickaxe) {
    bot.chat("I already have a wooden pickaxe.");
    return;
  }
  const woodenPlanks = bot.inventory.findInventoryItem(mcData.itemsByName["oak_planks"].id);
  const sticks = bot.inventory.findInventoryItem(mcData.itemsByName["stick"].id);
  if (!woodenPlanks) {
    await craftItem(bot, "oak_planks", 4);
  }
  if (!sticks) {
    await craftItem(bot, "stick", 2);
  }
  const craftingTable = bot.findBlock({
    matching: mcData.blocksByName.crafting_table.id,
    maxDistance: 32
  });
  if (!craftingTable) {
    bot.chat("No crafting table nearby");
    return;
  }
  await bot.pathfinder.goto(new GoalLookAtBlock(craftingTable.position, bot.world));
  await craftItem(bot, "wooden_pickaxe");
  bot.chat("I have crafted a wooden pickaxe.");
}