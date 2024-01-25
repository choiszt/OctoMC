async function mineWoodLog(bot) {
  const woodLogName = "oak_log"; // or "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", or "mangrove_log"
  const woodLogCount = 1;
  const oakLogs = await exploreUntil(bot, new Vec3(1, 0, 1), 32, () => {
    const oakLog = bot.findBlock({
      matching: mcData.blocksByName[woodLogName].id,
      maxDistance: 32
    });
    return oakLog;
  });
  if (!oakLogs) {
    bot.chat(`No ${woodLogName} nearby, please explore first`);
    return;
  }
  await mineBlock(bot, woodLogName, woodLogCount);
  const inventoryItem = bot.inventory.findInventoryItem(mcData.itemsByName[woodLogName].id);
  if (!inventoryItem) {
    bot.chat(`Failed to mine the ${woodLogName}. Trying again...`);
    return mineWoodLog(bot);
  }
  bot.chat(`Successfully mined 1 ${woodLogName}.`);
}