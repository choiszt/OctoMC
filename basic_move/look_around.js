const angles = [0, 90, 180, 270];

async function screenshot(){
    const robot = require('robotjs');
    robot.keyTap('f2');
  }
async function look_around() {
  for (let index = 0; index < angles.length; index++) {
    const angle = angles[index];
    await bot.look(angle, 0);
    bot.chat(angle.toString());
    await delay(1000);
    await screenshot();
    // 停留一秒钟
    await delay(500); // 1000毫秒等于1秒
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 调用 look_around 函数
look_around()
  .then(() => {
    // 当所有角度都被处理后的回调
    console.log('All angles looked.');
  })
  .catch((error) => {
    // 处理错误
    console.error('An error occurred:', error);
  });
