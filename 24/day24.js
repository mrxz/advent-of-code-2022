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

let board = {};
let blizzards = []
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    return board[getKey(x, y)] || fallback
}
const printBoard = (board, blizzards = []) => {

    for(let y = 0; y < input.length; y++) {
        let line = ""
        for(let x = 0; x < input[y].length; x++) {
            const blizzardsOnTile = blizzards.filter(b => b.pos[0] === x && b.pos[1] === y);
            if(blizzardsOnTile.length === 1) {
                line += "^>v<"[blizzardsOnTile[0].direction];
            } else if(blizzardsOnTile.length > 1) {
                line += blizzardsOnTile.length;
            } else {
                line += getValue(board, x, y, '.');
            }
        }
        console.log(line);
    }

}

const height = input.length;
const width = input[0].length;
for(let y = 0; y < input.length; y++) {
    for(let x = 0; x < input[y].length; x++) {
        let blizzard = "^>v<".indexOf(input[y][x]);
        if(blizzard !== -1) {
            blizzards.push({
                pos: [x, y],
                direction: blizzard
            });
        } else {
            setValue(board, x, y, input[y][x]);
        }
    }
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

    if(pos[0] === 0) {
        pos[0] = width - 2;
    } else if(pos[0] === width - 1) {
        pos[0] = 1;
    } else if(pos[1] === 0) {
        pos[1] = height - 2;
    } else if(pos[1] === height - 1) {
        pos[1] = 1;
    }
    return pos;
}

let seenKey = (state, r) => {
    const prefix = `${state.pos[0]}|${state.pos[1]}|${r}`;

    const sortedBlizzards = Object.values(state.blizzards).map(x => x.pos)
        .sort((a,b) => a.x*(width*10)+a.y - b.x*(width*10)+b.y);
    return prefix + sortedBlizzards.map(x => `${x[0]}|${x[1]}`).join('|');
}
let phase = 0;

let seen = {};
let round = 0;
let queue = [{
    pos: [1, 0],
    blizzards,
    phase,
}];
while(queue.length) {
    console.log(`Round ${round}: ${queue.length}`);

    let nextQueue = [];
    for(let state of queue) {
        if(state.phase !== phase) {
            continue;
        }

        // Win condition
        if(state.phase !== 1) {
            if(state.pos[1] === height - 1) {
                if(state.phase === 0) {
                    console.log("REACHED EXIT GOING BACK FOR SNACKS");
                    phase++;
                    state.phase++;
                } else {
                    console.log("FOUND ", round);
                    nextQueue = [];
                    break;
                }
            }
        } else {
            if(state.pos[1] === 0) {
                console.log("FOUND SNACKS BACK TO EXIT");
                phase++;
                state.phase++;
            }
        }

        const key = seenKey(state, round);
        if(key in seen) {
            continue;
        }
        seen[key] = true;

        // Move blizzards
        let newState = {pos: [...state.pos]};
        newState.blizzards = state.blizzards.map(b => ({pos: [...b.pos], direction: b.direction }));
        for(let b of newState.blizzards) {
            move(b.pos, b.direction);
        }

        //console.log(newState.blizzards)
        //printBoard(board, newState.blizzards);

        // Consider our moves
        {
            let anyMove = false;

            // Up
            if((phase === 1 || state.pos[1] > 1) && getValue(board, state.pos[0], state.pos[1] - 1, '.') === '.') {
                // Check for blizzards.
                const blizzardsOnTile = newState.blizzards.filter(b => b.pos[0] === state.pos[0] && b.pos[1] === state.pos[1] - 1);
                if(!blizzardsOnTile.length) {
                    anyMove = true;
                    nextQueue.push({
                        pos: [state.pos[0], state.pos[1] - 1],
                        blizzards: newState.blizzards,
                        phase: state.phase
                    });
                }
            }
            // Right
            if(getValue(board, state.pos[0] + 1, state.pos[1], '.') === '.') {
                // Check for blizzards.
                const blizzardsOnTile = newState.blizzards.filter(b => b.pos[0] === state.pos[0] + 1 && b.pos[1] === state.pos[1]);
                if(!blizzardsOnTile.length) {
                    anyMove = true;
                    nextQueue.push({
                        pos: [state.pos[0] + 1, state.pos[1]],
                        blizzards: newState.blizzards,
                        phase: state.phase
                    });
                }
            }
            // Down
            if(state.pos[1] < height - 1 && getValue(board, state.pos[0], state.pos[1] + 1, '.') === '.') {
                // Check for blizzards.
                const blizzardsOnTile = newState.blizzards.filter(b => b.pos[0] === state.pos[0] && b.pos[1] === state.pos[1] + 1);
                if(!blizzardsOnTile.length) {
                    anyMove = true;
                    nextQueue.push({
                        pos: [state.pos[0], state.pos[1] + 1],
                        blizzards: newState.blizzards,
                        phase: state.phase
                    });
                }
            }
            // Left
            if(getValue(board, state.pos[0] - 1, state.pos[1], '.') === '.') {
                // Check for blizzards.
                const blizzardsOnTile = newState.blizzards.filter(b => b.pos[0] === state.pos[0] - 1 && b.pos[1] === state.pos[1]);
                if(!blizzardsOnTile.length) {
                    anyMove = true;
                    nextQueue.push({
                        pos: [state.pos[0] - 1, state.pos[1]],
                        blizzards: newState.blizzards,
                        phase: state.phase
                    });
                }
            }
            // Wait
            {
                const blizzardsOnTile = newState.blizzards.filter(b => b.pos[0] === state.pos[0] && b.pos[1] === state.pos[1]);
                if(!blizzardsOnTile.length) {
                    nextQueue.push({
                        pos: [state.pos[0], state.pos[1]],
                        blizzards: newState.blizzards,
                        phase: state.phase
                    })
                }
            }
        }
    }

    queue = nextQueue;
    round++;
}

printBoard(board, blizzards);

console.log(0);