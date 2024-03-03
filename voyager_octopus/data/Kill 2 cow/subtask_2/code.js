// Main function
async function killCows(bot) {

    // Subtask 2: Kill the first cow
    await bot.chat("Killing the first cow...");
    await killMob(bot, "cow", 10); // Kill the cow within 10 seconds

}

await killCows(bot);