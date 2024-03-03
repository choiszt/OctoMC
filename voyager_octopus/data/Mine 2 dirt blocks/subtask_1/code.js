async function mineDirt(bot) {
   // Subtask 1: Teleport and approach the dirt block in pic3
   await bot.chat("Approaching the dirt block...");
   await teleport(3.14, 1.22);  
}

await mineDirt(bot);