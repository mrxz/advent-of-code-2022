let input = [
    // Insert AoC day 14 input here
]

input = testInput = [
    "498,4 -> 498,6 -> 496,6",
    "503,4 -> 502,4 -> 502,9 -> 494,9",
]

let board = {};
let maxY = -1;
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    if(y >= maxY + 2) {
        return '$'; // Part 2, for 1 replace '$' with '.'
    }
    return board[getKey(x, y)] || fallback
}
const printBoard = (board, width, height, xi = 0, yi = 0) => {
    for(let y = yi; y < yi + height; y++) {
        let line = ""
        for(let x = xi; x < xi + width; x++) {
            line += getValue(board, x, y, '.');
        }
        console.log(line);
    }

}

const paths = input.map(x => x.split(" -> ").map(x => x.split(",").map(x => +x)));
for(let path of paths) {
    console.log(path);
    let x = path[0][0];
    let y = path[0][1];
    maxY = Math.max(maxY, y);
    setValue(board, x, y, '#');
    for(let i = 1; i < path.length; i++) {
        if(path[i][0] !== x) {
            // Horizontal
            while(x != path[i][0]) {
                x += Math.sign(path[i][0] - x);
                setValue(board, x, y, '#');
            }
        } else {
            while(y != path[i][1]) {
                y += Math.sign(path[i][1] - y);
                maxY = Math.max(maxY, y);
                setValue(board, x, y, '#');
            }
        }
    }
}

printBoard(board, 20, 15, 490, 0)

let sand = 0;
let lastSandX = -1;
let lastSandY = -1;
const addSand = (sandX, sandY) => {
    const maxIterations = 1000;

    for(let i = 0; i < maxIterations; i++) {
        const below = getValue(board, sandX, sandY + 1, '.');
        if(below === '.') {
            sandY += 1;
        } else {
            // Blocked check left
            const belowLeft = getValue(board, sandX - 1, sandY + 1, '.');
            if(belowLeft === '.') {
                sandY += 1;
                sandX -= 1;
            } else {
                const belowRight = getValue(board, sandX + 1, sandY + 1, '.');
                if(belowRight === '.') {
                    sandY += 1;
                    sandX += 1;
                } else {
                    lastSandX = sandX;
                    lastSandY = sandY;
                    setValue(board, sandX, sandY, 'O');
                    return true;
                }
            }
        }
    }
    return false;
}

while(addSand(500, 0)) {
    sand++;
    //printBoard(board, 20, 15, 490, 0)

    if(lastSandX === 500 && lastSandY === 0) {
        break;
    }
}

console.log(sand);