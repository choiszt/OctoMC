async function perceive(block_name) {
  const current_spot_x=bot.entity.position.x
  const current_spot_y=bot.entity.position.y 
  const current_spot_z=bot.entity.position.z 
  bot.chat(`Current spot at X: ${current_spot_x}, Y: ${current_spot_y}, Z: ${current_spot_z}`);
  const blockByName = mcData.blocksByName[block_name];
  const block = bot.findBlock({ // 有可能找到该方块
    matching: (block) => block.name === blockByName.name,
    maxDistance: 1
  });

  if (block) {
    // 获取方块坐标
    const x = block.position.x.toString();
    const y = block.position.y.toString();
    const z = block.position.z.toString();
    bot.chat(((current_spot_x+x)/2).toString())
    bot.chat(`Found ${block_name} at X: ${x}, Y: ${y}, Z: ${z}`);
    let goal = new GoalNear(block.position.x,block.position.y,block.position.z);
    bot.pathfinder.setGoal(goal);

    // 返回 x 坐标
  } else {
    bot.chat(`Did not find ${block_name}.`);
    return
  }
}


// await perceive("sand")
