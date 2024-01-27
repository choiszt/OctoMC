async function mineWoodLog(bot) {
  const woodLogNames = ["oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "mangrove_log"];
  // Find a wood log block
  const randomIndex = Math.floor(Math.random() * woodLogNames.length);  
  const randomWoodType = woodLogNames[randomIndex];  
  bot.chat(`Find ${randomWoodType}`);
  const woodLogBlock = await exploreUntil(bot, new Vec3(-1, 0, -1), 100, () => {
    return bot.findBlock({
      // matching: block => woodLogNames.includes(block.name),
      matching: block => block.name=="sand",      
      maxDistance: 32
    });
  });
  if (!woodLogBlock) {
    bot.chat("Could not find a wood log.");
    return;
  }

  // Mine the wood log block
  // await mineBlock(bot, woodLogBlock.name, 1);
  return 1;
}
while (true) {
  await mineWoodLog(bot);
  break;
}