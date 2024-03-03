async function mineSand(bot) {
	// Subtask 2: Mine 3 sand block
	await bot.chat("Mining a sand block...");
	await mineBlock(bot, "sand", 3); // To collect 3 sand block
}

await mineSand(bot);