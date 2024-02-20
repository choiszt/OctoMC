// Blocks = require("./blocks")
const { Observation } = require("./base");

class Voxels extends Observation {
    constructor(bot) {
        super(bot);
        this.name = "voxels";
    }

    observe() {
        return Array.from(get_see_SurroundingBlocks(this.bot, Math.abs(Math.floor(100*Math.sin(this.bot.entity.yaw))), 2, Math.abs(Math.floor(100*Math.cos(this.bot.entity.yaw)))));
    }
    // observe() {
    //     return Array.from(getSurroundingBlocks(this.bot, 32, 2, 32));
    // }
}

class BlockRecords extends Observation {
    constructor(bot) {
        super(bot);
        this.name = "blockRecords";
        this.records = new Set();
        this.tick = 0;
        bot.on("physicsTick", () => {
            this.tick++;
            if (this.tick >= 100) {
                const items = getInventoryItems(this.bot);
                getSurroundingBlocks(this.bot, 8, 2, 8).forEach((block) => {
                    if (!items.has(block)) this.records.add(block);
                });
                this.tick = 0;
            }
        });
    }

    observe() {
        return Array.from(this.records);
    }

    reset() {
        this.records = new Set();
    }
}

function getSurroundingBlocks(bot, x_distance, y_distance, z_distance) {
    const surroundingBlocks = new Set();

    for (let x = -x_distance; x <= x_distance; x++) {
        for (let y = -y_distance; y <= y_distance; y++) {
            for (let z = -z_distance; z <= z_distance; z++) {
                const block = bot.blockAt(bot.entity.position.offset(x, y, z));
                if (block && block.type !== 0) {
                    surroundingBlocks.add(block.name);
                }
            }
        }
    }
    // console.log(surroundingBlocks);
    return surroundingBlocks;
}

function get_see_SurroundingBlocks(bot, x_distance, y_distance, z_distance) {
    const surroundingBlocks = new Set();
    if ((Math.sin(bot.entity.yaw))>=0 && (Math.cos(bot.entity.yaw))>=0){  //-x -z
        for (let x = -x_distance; x <= 0; x++) {
            for (let y = -y_distance; y <= y_distance; y++) {
                for (let z = -z_distance; z <= 0; z++) { 
                    const block = bot.blockAt(bot.entity.position.offset(x, y, z));
                    if (block && block.type !== 0) {
                        if (bot.canSeeBlock(block)){ //if the bot can see the block
                            surroundingBlocks.add(block.name);
                        }
                        
                    }
                }
            }
        }
    }
    if ((Math.sin(bot.entity.yaw))>=0 && (Math.cos(bot.entity.yaw))<=0){  //-x +z
        for (let x = -x_distance; x <= 0; x++) {
            for (let y = -y_distance; y <= y_distance; y++) {
                for (let z =0; z <= z_distance; z++) { 
                    const block = bot.blockAt(bot.entity.position.offset(x, y, z));
                    if (block && block.type !== 0) {
                        if (bot.canSeeBlock(block)){ //if the bot can see the block
                            surroundingBlocks.add(block.name);
                        }
                        
                    }
                }
            }
        }
    }

    if ((Math.sin(bot.entity.yaw))<=0 && (Math.cos(bot.entity.yaw))<=0){  //+x +z
        for (let x = 0; x <= x_distance; x++) {
            for (let y = -y_distance; y <= y_distance; y++) {
                for (let z =0; z <= z_distance; z++) { 
                    const block = bot.blockAt(bot.entity.position.offset(x, y, z));
                    if (block && block.type !== 0) {
                        if (bot.canSeeBlock(block)){ //if the bot can see the block
                            surroundingBlocks.add(block.name);
                        }
                        
                    }
                }
            }
        }
    }

    if ((Math.sin(bot.entity.yaw))<=0 && (Math.cos(bot.entity.yaw))>=0){  //+x -z
        for (let x = 0; x <= x_distance; x++) {
            for (let y = -y_distance; y <= y_distance; y++) {
                for (let z =z_distance; z <= 0; z++) { 
                    const block = bot.blockAt(bot.entity.position.offset(x, y, z));
                    if (block && block.type !== 0) {
                        if (bot.canSeeBlock(block)){ //if the bot can see the block
                            surroundingBlocks.add(block.name);
                        }
                        
                    }
                }
            }
        }
    }
    // console.log(surroundingBlocks);
    return surroundingBlocks;
}

function getInventoryItems(bot) {
    const items = new Set();
    bot.inventory.items().forEach((item) => {
        if (item) items.add(item.name);
    });
    return items;
}

module.exports = { Voxels, BlockRecords };
