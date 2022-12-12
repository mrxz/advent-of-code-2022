let input = [
    // Insert day 12 input
]

input = testInput = [
    "Sabqponm",
    "abcryxxl",
    "accszExk",
    "acctuvwj",
    "abdefghi",
]

let board = {};
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    const key = getKey(x, y);
    return key in board ? board[key] : fallback
}

let start = [-1,-1];
let target = [-1,-1];

const height = input.length;
const width = input[0].length;
for(let y = 0; y < input.length; y++) {
    for(let x = 0; x < input[y].length; x++) {
        let c = input[y][x];
        if(c === 'S' || c === 'E') {
            if(c === "S") {
                start = [x, y];
                setValue(board, x, y, 0);
            } else {
                target = [x, y];
                setValue(board, x, y, 25);
            }
        } else {
            setValue(board, x, y, c.charCodeAt(0) - 'a'.charCodeAt(0));
        }
    }
}

const getNeighbours = (board, x, y) => {
    let height = getValue(board, x, y, 0);
    let top   = {x,        y: y - 1, h: getValue(board, x, y - 1, 100)};
    let right = {x: x + 1, y,        h: getValue(board, x + 1, y, 100)};
    let down  = {x,        y: y + 1, h: getValue(board, x, y + 1, 100)};
    let left  = {x: x - 1, y,        h: getValue(board, x - 1, y, 100)};

    return [top, right, down, left].filter(n => n.h - height <= 1);
}

let visited = {};
let step = 0;
let queue = [[...start, 0]];
outerLoop:
while(queue.length) {
    let nextQueue = [];

    //console.log(`Step ${step}: ${queue.length}`);

    for(let i = 0; i < queue.length; i++) {
        const node = queue[i];
        const key = getKey(node[0], node[1]);
        if(visited[key]) {
            continue;
        }
        visited[key] = true;

        if(node[0] === target[0] && node[1] === target[1]) {
            console.log("Reached target in ", node[2], "steps");
            break outerLoop;
        }

        // Check neighbours
        const neighbours = getNeighbours(board, node[0], node[1]);
        nextQueue.push(...neighbours.map(n => [n.x, n.y, node[2] + 1]));
    }

    queue = nextQueue;
    step++;
}

const getNeighbours2 = (board, x, y) => {
    let height = getValue(board, x, y, 0);
    let top   = {x,        y: y - 1, h: getValue(board, x, y - 1, -100)};
    let right = {x: x + 1, y,        h: getValue(board, x + 1, y, -100)};
    let down  = {x,        y: y + 1, h: getValue(board, x, y + 1, -100)};
    let left  = {x: x - 1, y,        h: getValue(board, x - 1, y, -100)};

    return [top, right, down, left].filter(n => height - n.h <= 1);
}

distance = {};
visited = {};
queue = [target];
step = 0;
while(queue.length) {
    let nextQueue = [];

    //console.log(`Step ${step}: ${queue.length}`);

    for(let i = 0; i < queue.length; i++) {
        const node = queue[i];
        const key = getKey(node[0], node[1]);
        if(visited[key]) {
            continue;
        }
        visited[key] = true;

        if(getValue(board, node[0], node[1]) === 0) {
            distance[key] = step;
        } else {
            // Check neighbours
            const neighbours = getNeighbours2(board, node[0], node[1]);
            nextQueue.push(...neighbours.map(n => [n.x, n.y]));
        }
    }

    queue = nextQueue;
    step++;
}
console.log(Object.values(distance).sort((a,b) => a-b));
