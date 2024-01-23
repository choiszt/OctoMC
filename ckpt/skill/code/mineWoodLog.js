async function mineWoodLog(bot) {
  const logTypes = ["oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "mangrove_log"];

  // Check if you have any wood logs in your inventory
  const woodLog = bot.inventory.items().find(item => logTypes.includes(item.name));
  if (woodLog) {
    bot.chat(`I already have a wood log in my inventory.`);
    return;
  }

  // Find a wood log block using exploreUntil
  const direction = new Vec3(Math.floor(Math.random() * 3) - 1, Math.floor(Math.random() * 3) - 1, Math.floor(Math.random() * 3) - 1);
  const woodLogBlock = await exploreUntil(bot, direction, 32, () => {
    const block = bot.findBlock({
      matching: block => logTypes.includes(block.name),
      maxDistance: 32
    });
    return block;
  });
  if (!woodLogBlock) {
    bot.chat(`I couldn't find a wood log nearby.`);
    return;
  }

  // Mine the wood log block
  await mineBlock(bot, woodLogBlock.name, 1);

  // Check if you successfully mined the wood log
  const minedWoodLog = bot.inventory.items().find(item => logTypes.includes(item.name));
  if (!minedWoodLog) {
    bot.chat(`I couldn't mine the wood log.`);
    return;
  }
  bot.chat(`I successfully mined a wood log.`);
}

// Call your main function