
async function perceive(block_name) {
    const blockByName = mcData.blocksByName[block_name];
    const block = bot.findBlock({ // 有可能找到该方块
        matching: (block) => block.name === blockByName.name,
        maxDistance: 32
    });
    return new Promise(async (resolve) => {
      let index = 0;
      async function nextRound() {
        if (index < angles.length) {
          const angle = angles[index];
          bot.look(angle, 0);
          if (block) {
            if (bot.canSeeBlock(block)) {
              bot.chat(`I can see ${block.name}`);
              can_see = true;
              resolve(); // 异步操作完成后解析 Promise
              return;
            } else {
              bot.chat(`I can't see ${block.name}`);
            }
          }
          index++;
          setTimeout(nextRound, delay);
        } else {
          resolve(); // 异步操作完成后解析 Promise
        }
      }
      await nextRound();
      if (can_see==true){
        can_see=false //reset to false
        bot.chat(`I will start to dig the ${block.name}`)
        await mineBlock(bot, block.name, 1);
      }
    });
  }
await perceive("oak_log")