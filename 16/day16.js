let input = [
    // Insert AoC day 16 input here
]

input = testInput = [
    "Valve AA has flow rate=0; tunnels lead to valves DD, II, BB",
    "Valve BB has flow rate=13; tunnels lead to valves CC, AA",
    "Valve CC has flow rate=2; tunnels lead to valves DD, BB",
    "Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE",
    "Valve EE has flow rate=3; tunnels lead to valves FF, DD",
    "Valve FF has flow rate=0; tunnels lead to valves EE, GG",
    "Valve GG has flow rate=0; tunnels lead to valves FF, HH",
    "Valve HH has flow rate=22; tunnel leads to valve GG",
    "Valve II has flow rate=0; tunnels lead to valves AA, JJ",
    "Valve JJ has flow rate=21; tunnel leads to valve II",
]

let parts = input.map(x => x.split("; "));
const nodes = {};
const lookUp = [];
const valves = Object.fromEntries(parts.map(x => x[0]).map(x => x.split(" ")).map((x, i) => {
    nodes[x[1]] = {};
    lookUp[i] = x[1];
    return [x[1], +x[4].split("=")[1]];
}));

parts.map(x => x[1].replace("valve ", "valves ")).map(x => x.split(" valves ")[1].split(x => x.split(", "))).map((xs, i) => {
    nodes[lookUp[i]] = xs[0].split(", ");
});

let totalFlow = 0;
let minute = 0 ;
let pos = 'AA';

// BFS to get all distances
const bfs = (start) => {
    let step = 0;
    let result = {};
    let queue = [start];
    while(queue.length) {
        let nextQueue = [];

        for(let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if(node in result) {
                continue; // Already visited
            }
            result[node] = step;

            nextQueue.push(...nodes[node]);
        }

        queue = nextQueue;
        step++;
    }
    return result;
}
let distances = {};
for(let node in nodes) {
    distances[node] = bfs(node);
}

let queue = [
    {t: 0, pos: 'AA', active: {}, parent: null, total: 0} // Starting pos, nothing open
];

let finals = [];

outerLoop:
while(queue.length) {
    let nextQueue = [];

    console.log(`Iteration: ${queue.length}`)

    for(let i = 0; i < queue.length; i++) {
        const node = queue[i];
        if(node.t > 30) {
            continue;
        }
        const inactiveValves = Object.entries(valves).filter(x => x[1] > 0 && !node.active[x[0]]).map(x => x[0]);

        // Check the movement
        inactiveValves.forEach(dest => {
            const distance = distances[node.pos][dest];
            const currentFlow = Object.entries(node.active).filter(x => x[1]).map(x => valves[x[0]]).reduce((a,b) => a+b, 0);
            const nextTotal = node.total + (distance+1) * currentFlow;
            const nextTime = node.t + distance + 1;
            const nextActive = {...node.active, [dest]: true};
            if(nextTime > 30) {
                finals.push(node);
                return;
            }

            nextQueue.push({
                t: nextTime,
                pos: dest,
                total: nextTotal,
                active: nextActive,
                parent: node
            });
        });

        if(inactiveValves.length == 0) {
            finals.push(node);
        }
    }

    queue = nextQueue;
}

const finalTotals = finals.map(f => {
    const remaining = 30 - f.t;
    const currentFlow = Object.entries(f.active).filter(x => x[1]).map(x => valves[x[0]]).reduce((a,b) => a+b, 0);
    return f.total + currentFlow * remaining;
})
console.log(finalTotals.sort((a,b) => b-a)[0])