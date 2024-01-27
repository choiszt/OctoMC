const blockByName = mcData.blocksByName['sand'];
const block = bot.findBlock({ // 有可能找到该方块
    matching: (block) => block.name === blockByName.name,
    maxDistance: 32
});
const angles = [0, 90, 180, 270];
const delay = 1000; // 1秒
let can_see = false;

function walk() {
  return new Promise((resolve) => {
    bot.setControlState('forward', true); // 开始向前移动
    setTimeout(() => {
      bot.setControlState('forward', false); // 停止向前移动
      resolve(); // 异步操作完成后解析 Promise
    }, 5000);
  });
}

function lookAndChatWithDelay() {
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
      can_see==false //reset to false
      bot.chat("can see")
    }
  });
}
async function reset() {
  return new Promise((resolve, reject) => {
    bot.chat('/execute as bot at @s run tp @s -270 64 251', (err) => {
      if (err) {
        reject(err); // 如果传送命令出错，拒绝 Promise
      } else {
        resolve(); // 传送成功，解决 Promise
      }
    });
  });
}

async function main() {
  bot.chat("start to perceive")  
  await lookAndChatWithDelay(); // 调用函数开始执行
  bot.chat("start to walk");
  await walk();
  bot.chat("walk completed");
  reset()
}

main();
