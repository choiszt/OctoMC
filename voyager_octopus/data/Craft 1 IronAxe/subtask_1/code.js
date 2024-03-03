async function craftIronAxe(bot) {
  // Subtask 1: Place a crafting table nearby
  await bot.chat("Placing a crafting table...");
  const craftingTableName = "crafting_table";
  const position = bot.entity.position.offset(0, 0, -1); // Offset the position by 1 block in the negative Z direction
  await placeItem(bot, craftingTableName, position);
}

await craftIronAxe(bot);