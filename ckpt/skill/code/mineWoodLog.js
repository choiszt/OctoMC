async function mineWoodLog(bot) {
  const woodLog = bot.inventory.findInventoryItem(mcData.itemsByName["oak_log"].id);
  if (woodLog) {
    bot.chat("I already have a wood log.");
  } else {
    const logBlock = bot.findBlock({
      matching: block => {
        return block.name.includes("log");
      },
      maxDistance: 32
    });
    if (logBlock) {
      await mineBlock(bot, logBlock.name, 1);
      bot.chat("I mined a wood log.");
    } else {
      bot.chat("I couldn't find any wood logs nearby.");
    }
  }
}

// Call the function with the bot