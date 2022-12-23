let input = [
    // Insert AoC day 23 input here
]

input = testInput = [
    "....#..",
    "..###.#",
    "#...#.#",
    ".#...##",
    "#.###..",
    "##.#.##",
    ".#..#..",
]

let board = {};
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    return board[getKey(x, y)] || fallback
}
const printBoard = (board, xi = -5, yi = -5, width = 10, height = 10) => {
    for(let y = yi; y < height; y++) {
        let line = ""
        for(let x = xi; x < width; x++) {
            line += getValue(board, x, y, '.');
        }
        console.log(line);
    }

}

const height = input.length;
const width = input[0].length;
for(let y = 0; y < input.length; y++) {
    for(let x = 0; x < input[y].length; x++) {
        if(input[y][x] !== '.') {
            setValue(board, x, y, input[y][x]);
        }
    }
}

const NORTH = 0;
const EAST = 2;
const SOUTH = 4;
const WEST = 6;
const directions = [
    [ 0, -1 ], // North
    [ 1, -1 ],
    [ 1, 0 ], // East
    [ 1, 1 ],
    [ 0, 1 ], // South
    [ -1, 1 ],
    [ -1, 0 ], // West
    [ -1, -1 ],
]

const apply = (pos, dir) => {
    if(dir === -1) {
        return [pos[0], pos[1]];
    }
    return [pos[0] + directions[dir][0], pos[1] + directions[dir][1]];
}

console.log("Before");
printBoard(board);

// Rounds
let round = 1;
let globalWind = 0;
let part1Answer = -1;
while(true) {
    // First round
    let moves = {};
    const lookup = [];

    const elves = Object.entries(board).map(x => x[0].split("x").map(y=>+y));
    for(let i = 0; i < elves.length; i++) {
        const elf = elves[i];
        const possible = directions.map(d => getValue(board, elf[0] + d[0], elf[1] + d[1]));

        // Check
        let dir = -1;
        if(possible.some(x => x !== null)) {
            if(possible[7] == null && possible[0] === null && possible[1] === null) {
                dir = NORTH;
            } else if(possible[3] == null && possible[4] === null && possible[5] === null) {
                dir = SOUTH;
            } else if(possible[WEST-1] == null && possible[WEST] === null && possible[WEST+1] === null) {
                dir = WEST;
            } else if(possible[EAST-1] == null && possible[EAST] === null && possible[EAST+1] === null) {
                dir = EAST;
            }
        } else {
            dir = -1;
        }

        const newPos = apply(elf, dir);
        //console.log(elf, dir, newPos, getValue(moves, newPos[0], newPos[1]));
        if(getValue(moves, newPos[0], newPos[1]) !== null) {
            // Collision
            const otherElfIndex = +getValue(moves, newPos[0], newPos[1]);
            lookup[otherElfIndex].pos = lookup[otherElfIndex].oldPos;
            lookup[i] = {oldPos: elf, pos: elf, lastDir: dir};
            setValue(moves, newPos[0], newPos[1], -1)
        } else {
            setValue(moves, newPos[0], newPos[1], ""+i);
            lookup[i] = {
                oldPos: elf,
                pos: newPos,
            };
        }
    }
    //printBoard(moves);
    // Perform the move
    let newBoard = {};
    for(let i = 0; i < elves.length; i++) {
        const elfMove = lookup[i];
        setValue(newBoard, elfMove.pos[0], elfMove.pos[1], "#");
    }
    console.log("After initial round");
    round++;
    printBoard(newBoard);
    board = newBoard;

    let anyMoved = false;
    do {
        globalWind++;
        console.log("Round ", round++, ["North", "South", "West", "East"][globalWind%4]);
        anyMoved = false;
        // Later rounds
        moves = {};
        for(let i = 0; i < lookup.length; i++) {
            const details = lookup[i];
            const elf = details.pos;
            const possible = directions.map(d => getValue(board, elf[0] + d[0], elf[1] + d[1]));

            // Check
            let dir = -1;
            if(possible.some(x => x !== null)) {
                for(let checkDir = globalWind; checkDir < globalWind + 4; checkDir ++) {
                    switch(checkDir % 4) {
                        case 0:
                            if(possible[7] == null && possible[0] === null && possible[1] === null) {
                                dir = NORTH;
                            }
                            break;
                        case 1:
                            if(possible[3] == null && possible[4] === null && possible[5] === null) {
                                dir = SOUTH;
                            }
                            break;
                        case 2:
                            if(possible[WEST-1] == null && possible[WEST] === null && possible[WEST+1] === null) {
                                dir = WEST;
                            }
                            break;
                        case 3:
                            if(possible[EAST-1] == null && possible[EAST] === null && possible[EAST+1] === null) {
                                dir = EAST;
                            }
                            break;
                    }
                    if(dir != -1) {
                        break;
                    }
                }
            } else {
                dir = -1;
            }
            //console.log(elf, dir);

            const newPos = apply(elf, dir);
            if(getValue(moves, newPos[0], newPos[1]) !== null) {
                // Collision
                const otherElfIndex = +getValue(moves, newPos[0], newPos[1]);
                lookup[otherElfIndex].pos = lookup[otherElfIndex].oldPos;
                lookup[i] = {oldPos: elf, pos: elf, lastDir: dir};
                setValue(moves, newPos[0], newPos[1], -1)
            } else {
                setValue(moves, newPos[0], newPos[1], ""+i);
                lookup[i] = {
                    oldPos: elf,
                    pos: newPos,
                    lastDir: dir,
                };
            }
        }
        //printBoard(moves);

        // Perform the move
        newBoard = {};
        for(let i = 0; i < elves.length; i++) {
            const elfMove = lookup[i];
            if(elfMove.oldPos[0] !== elfMove.pos[0] || elfMove.oldPos[1] !== elfMove.pos[1]) {
                anyMoved = true;
            }
            setValue(newBoard, elfMove.pos[0], elfMove.pos[1], "#");
        }
        console.log();
        printBoard(newBoard);
        board = newBoard;

        if(round === 11) {
            // Find rectangle and count
            {
                let minX = 100000;
                let minY = 100000;
                let maxX = -100000;
                let maxY = -100000;
                for(let i = 0; i < elves.length; i++) {
                    const elf = lookup[i].pos;
                    minX = Math.min(elf[0], minX);
                    maxX = Math.max(elf[0], maxX);
                    minY = Math.min(elf[1], minY);
                    maxY = Math.max(elf[1], maxY);
                }
                const w = maxX - minX;
                const h = maxY - minY;
                console.log(minX, maxX, minY, maxY, w, h, w * h);
                printBoard(board, minX, minY, maxX - minX, maxY - minY);
                let sum = 0;
                for(let x = minX; x <= maxX; x++) {
                    for(let y = minY; y <= maxY; y++) {
                        let tile = getValue(board, x, y);
                        if(tile !== '#') {
                            sum++;
                        }
                    }
                }
                part1Answer = sum;
            }
        }
    } while(anyMoved);

    console.log("Part 1:", part1Answer)
    console.log("Part 2:", round - 1);

    break;
}