let input = [
    // Insert AoC day 19 input here
]

input = testInput = [
    "Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.",
    "Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.",
]

const blueprints = input.map(line => {
    const [idPart, recipeParts] = line.split(": ");
    const id = +idPart.split(" ")[1];

    const inRecipeParts = recipeParts.split(". ");

    const parseCost = (costPart) => {
        if(costPart.endsWith(".")) {
            costPart = costPart.split(".")[0];
        }
        const inCostParts = costPart.split("costs ")[1].split(" and ");
        return Object.fromEntries(inCostParts.map(p => {
            ps = p.split(" ");
            return [ps[1], +ps[0]]
        }));
    };

    const ore = parseCost(inRecipeParts[0]);
    const clay = parseCost(inRecipeParts[1]);
    const obsidian = parseCost(inRecipeParts[2]);
    const geode = parseCost(inRecipeParts[3]);

    return {
        id, ore, clay, obsidian, geode
    }
})

const scoreBlueprint = (blueprint) => {
    // Reason backwards
    const costs = {
        ore: blueprint.ore.ore,
        clay: blueprint.clay.ore,
    }
    costs.obsidian = blueprint.obsidian.ore + blueprint.obsidian.clay * costs.clay;
    costs.geode = blueprint.geode.ore + blueprint.geode.obsidian * costs.obsidian;
    console.log(blueprint, costs);

    let tally = {
        ore: 0,
        oreR: 1,
        clay: 0,
        clayR: 0,
        obsidian: 0,
        obsidianR: 0,
        geode: 0,
        geodeR: 0,

        t: 0,
        delayedBuy: {
            ore: false,
            clay: false,
            obsidian: false,
            geode: false,
        }
    }
    let queue = [tally];
    let seenKey = (tally) => `${tally.ore}|${tally.clay}|${tally.obsidian}|${tally.geode}|${tally.oreR}|${tally.clayR}|${tally.obsidianR}|${tally.geodeR}|${tally.t}`
    let visited = {};
    let i = 0;
    let max = 0;
    let maxGeode = 0;
    let minExpectedGeode = 0;
    let geodeFoundGeneration = -1;
    let maxObsidian = 0;
    while(queue.length) {
        const nextQueue = [];
        console.log('Minute ', i++);

        for(let tally of queue) {
            maxGeode = Math.max(tally.geode, maxGeode);
            if(tally.t >= 32) {
                max = Math.max(tally.geode, max);
                continue;
            }

            if(tally.geode < maxGeode) {
                continue;
            }

            const stateKey = seenKey(tally);
            if(stateKey in visited) {
                continue;
            }
            visited[stateKey] = true

            // Check if we can build any
            let buildings = {};
            if(tally.obsidian >= blueprint.geode.obsidian && tally.ore >= blueprint.geode.ore) {
                if(!tally.delayedBuy['geode']) {
                    buildings['geode'] = true;
                }
            }
            if(tally.clay >= blueprint.obsidian.clay && tally.ore >= blueprint.obsidian.ore) {
                if(!tally.delayedBuy['obsidian']) {
                    buildings['obsidian'] = true;
                }
            }
            if(tally.ore >= blueprint.clay.ore) {
                if(!tally.delayedBuy['clay']) {
                    buildings['clay'] = true;
                }
            }
            if(tally.ore >= blueprint.ore.ore) {
                if(!tally.delayedBuy['ore']) {
                    buildings['ore'] = true;
                }
            }

             // Increment
            tally.ore += tally.oreR;
            tally.clay += tally.clayR;
            tally.obsidian += tally.obsidianR;
            tally.geode += tally.geodeR;
            tally.t += 1;
            tally.delayedBuy = {...tally.delayedBuy, ...buildings};
            nextQueue.push({...tally}); // Don't build

            for(let building of Object.keys(buildings)) {
                const nextTally = {...tally};
                switch(building) {
                    case 'geode':
                        nextTally.ore -= blueprint.geode.ore;
                        nextTally.obsidian -= blueprint.geode.obsidian;
                        nextTally.geodeR++;
                        nextTally.delayedBuy = {};//{...buildings, geode: false};
                        break;
                    case 'obsidian':
                        nextTally.ore -= blueprint.obsidian.ore;
                        nextTally.clay -= blueprint.obsidian.clay;
                        nextTally.obsidianR++;
                        nextTally.delayedBuy = {};//{...buildings, obsidian: false};
                        break;
                    case 'clay':
                        nextTally.ore -= blueprint.clay.ore;
                        nextTally.clayR++;
                        nextTally.delayedBuy = {};//{...buildings, clay: false};
                        break;
                    case 'ore':
                        nextTally.ore -= blueprint.ore.ore;
                        nextTally.oreR++;
                        nextTally.delayedBuy = {};//{...buildings, ore: false};
                        break;
                }
                nextQueue.push(nextTally);
            }
        }

        queue = nextQueue;
    }
    console.log(max, max * blueprint.id);
    // return max * blueprint.id; // Part 1
    return max; // Part 2
}

let result = 0;
//let scores = blueprints.map(b => scoreBlueprint(b)); // Part 1
let scores = [blueprints[0], blueprints[1], blueprints[2]].map(b => scoreBlueprint(b));
console.log(scores.reduce((a,b) => a*b));
