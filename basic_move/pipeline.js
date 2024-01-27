const blockByName = mcData.blocksByName['sand'];
const block = bot.findBlock({ // 有可能找到该方块
    matching: (block) => block.name === blockByName.name,
    maxDistance: 32
});
const angles = [0, 90, 180, 270];
const delay = 1000; // 1秒
let can_see = false;

async function walk() {
  return new Promise((resolve) => {
    bot.setControlState('forward', true); // 开始向前移动
    setTimeout(() => {
      bot.setControlState('forward', false); // 停止向前移动
      resolve(); // 异步操作完成后解析 Promise
    }, 5000);
  });
}

async function lookAndChatWithDelay() {
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
async function walk() {
  return new Promise((resolve) => {
    bot.setControlState('forward', true); // 开始向前移动
    setTimeout(() => {
      bot.setControlState('forward', false); // 停止向前移动
      resolve(); // 异步操作完成后解析 Promise
    }, 5000);
  });
}
async function reset() {
  return new Promise((resolve) => {
    bot.chat('/tp @s -270 64 251 0 0', () => {
      setTimeout(() => {
        resolve(); // 异步操作完成后解析 Promise
      }, 1000);
    });
  });
}

async function wanderAndClearPathfinder() {
  return new Promise((resolve) => {
    const x =
      bot.entity.position.x +
      Math.floor(Math.random() * 20 + 10);
    const y =
      bot.entity.position.y 
      // +Math.floor(Math.random() * 20 + 10);
    const z =
      bot.entity.position.z 
      // +Math.floor(Math.random() * 20 + 10);
    let goal = new GoalNear(x, y, z);
    bot.pathfinder.setGoal(goal);
    setTimeout(() => {
      // 停止向前移动
      resolve(); // 异步操作完成后解析 Promise
      bot.pathfinder.setGoal(null); // 清空 pathfinder 的目标
    }, 5000); // 10 秒
  });
}

function wander() {
  return new Promise((resolve) => {
    bot.setControlState('forward', true);
    const base_ori = 0;
    const min = -90; // 最小望向角度
    const max = 90;  // 最大望向角度
    const random_ori = Math.floor(Math.random() * (max - min + 1)) + min;
    bot.chat(`looking at ${base_ori + random_ori}`);
    bot.look(base_ori+random_ori,0);
    setTimeout(() => {
      bot.setControlState('forward', false); // 停止向前移动
      resolve(); // 异步操作完成后解析 Promise
    }, 10000);
  });
}


async function main() {
  bot.chat("start to perceive1");
  await lookAndChatWithDelay();
  bot.chat("start to walk2");
  await wanderAndClearPathfinder();
  // await walk();
  bot.chat("start to perceive3");
  await lookAndChatWithDelay(); // 调用函数开始执行
  bot.chat("start to walk4");
  await wanderAndClearPathfinder();
  bot.chat("start to perceive5")
  await lookAndChatWithDelay();
  bot.chat("walk completed6");
  // await reset()
}
main();
