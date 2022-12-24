let input = [
    // Insert AoC day 24 input here
]

input = testInput = [
    "#.######",
    "#>>.<^<#",
    "#.<..<<#",
    "#>v.><>#",
    "#<^v^^>#",
    "######.#",
]

let blizzards = []
const height = input.length - 2;
const width = input[0].length - 2;
for(let y = 0; y < input.length; y++) {
    for(let x = 0; x < input[y].length; x++) {
        let blizzard = "^>v<".indexOf(input[y][x]);
        if(blizzard !== -1) {
            blizzards.push({
                pos: [x - 1, y - 1],
                direction: blizzard
            });
        }
    }
}
const isWall = (x, y) => {
    if(x < 0 || x >= width) {
        return true;
    }
    // Exits
    if(x === 0 && y === -1) {
        return false;
    }
    if(x === width-1 && y === height) {
        return false;
    }

    if(y < 0 || y >= height) {
        return true;
    }
    return false;
}


const move = (pos, dir) => {
    if(dir === 0) {
        pos[1]--;
    } else if(dir === 1) {
        pos[0]++;
    } else if(dir === 2) {
        pos[1]++;
    } else if(dir === 3) {
        pos[0]--;
    }

    if(pos[0] === -1) {
        pos[0] = width - 1;
    } else if(pos[0] === width) {
        pos[0] = 0;
    } else if(pos[1] === -1) {
        pos[1] = height - 1;
    } else if(pos[1] === height) {
        pos[1] = 0;
    }
    return pos;
}

const seenKey = (state, r) => state[0]*1_000_000+state[1]*1_000+(r%(width*height));
let phase = 0;

let seen = {};
let round = 0;
let queue = [[0, -1]];
while(queue.length) {
    console.log(`Round ${round}: ${queue.length}`);

    // Move blizzards
    for(let b of blizzards) {
        move(b.pos, b.direction);
    }

    let breakRound = false;
    let nextQueue = [];
    for(let state of queue) {
        // Win condition
        if(phase !== 1) {
            if(state[1] === height) {
                if(phase === 0) {
                    console.log(`REACHED EXIT ON ROUND ${round} GOING BACK FOR SNACKS`);
                    phase++;
                    nextQueue = [];
                    breakRound = true;
                    seen = {};
                } else {
                    console.log(`REACHED EXIT WITH SNACKS ON ROUND ${round}`);
                    nextQueue = [];
                    break;
                }
            }
        } else {
            if(state[1] === -1) {
                console.log(`FOUND SNACKS ON ROUND ${round} BACK TO EXIT`);
                phase++;
                nextQueue = [];
                breakRound = true;
                seen = {};
            }
        }

        const key = seenKey(state, round);
        if(key in seen) {
            continue;
        }
        seen[key] = true;


        // Consider our moves
        {
            // Up
            if((phase === 1 || state[1] > 0) && !isWall(state[0], state[1] - 1)) {
                if(!blizzards.some(b => b.pos[0] === state[0] && b.pos[1] === state[1] - 1)) {
                    nextQueue.push([state[0], state[1] - 1]);
                }
            }
            // Right
            if(!isWall(state[0] + 1, state[1])) {
                if(!blizzards.some(b => b.pos[0] === state[0] + 1 && b.pos[1] === state[1])) {
                    nextQueue.push([state[0] + 1, state[1]]);
                }
            }
            // Down
            if((phase !== 1 || state[1] < height - 1) && !isWall(state[0], state[1] + 1)) {
                if(!blizzards.some(b => b.pos[0] === state[0] && b.pos[1] === state[1] + 1)) {
                    nextQueue.push([state[0], state[1] + 1]);
                }
            }
            // Left
            if(!isWall(state[0] - 1, state[1])) {
                if(!blizzards.some(b => b.pos[0] === state[0] - 1 && b.pos[1] === state[1])) {
                    nextQueue.push([state[0] - 1, state[1]]);
                }
            }
            // Wait
            {
                if(!blizzards.some(b => b.pos[0] === state[0] && b.pos[1] === state[1])) {
                    nextQueue.push([state[0], state[1]])
                }
            }
        }

        if(breakRound) {
            break;
        }
    }

    queue = nextQueue;
    round++;
}