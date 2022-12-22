let input = [
    // Insert AoC day 22 input here
]

input = testInput = [
    "        ...#",
    "        .#..",
    "        #...",
    "        ....",
    "...#.......#",
    "........#...",
    "..#....#....",
    "..........#.",
    "        ...#....",
    "        .....#..",
    "        .#......",
    "        ......#.",
    "",
    "10R5L5R10L4R5L5",
]

const code = input[input.length - 1];
input = input.slice(0, input.length - 2);

let board = {};
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    let value = board[getKey(x, y)];
    if(value === null || value === undefined || value === ' ') {
        return ' ';
    }
    return value;
}
const printBoard = (board, pos) => {
    for(let y = pos[1] - 5; y < pos[1] + 5; y++) {
        let line = ""
        for(let x = pos[0] - 5; x < pos[0] + 5; x++) {
            if(x == pos[0] && y === pos[1]) {
                line += "^>V<"[pos[2]];
            } else {
                line += getValue(board, x, y, ' ');
            }
        }
        console.log(line);
    }

}

const height = input.length;
const width = Math.max(...input.map(x => x.length));
for(let y = 0; y < input.length; y++) {
    for(let x = 0; x < input[y].length; x++) {
        setValue(board, x, y, input[y][x]);
    }
}

// Find starting position
let initialX = 0;
for(initialX = 0; initialX < input[0].length; initialX++) {
    if(getValue(board, initialX, 0) === '.') {
        break;
    }
}
let pos = [initialX, 0, 1]; // 0=up, 1=right, etc...

let instructions = [];
let buff = ''
for(let i = 0; i < code.length; i++) {
    if(code[i] === 'R' || code[i] === 'L') {
        instructions.push(+buff);
        instructions.push(code[i]);
        buff = '';
    } else {
        buff += code[i];
    }
}
instructions.push(+buff);

const move = (pos, part1) => {
    let dx = dy = 0;
    if(pos[2] === 0) {
        dy = -1;
    } else if(pos[2] === 1) {
        dx = 1;
    } else if(pos[2] === 2) {
        dy = 1;
    } else if(pos[2] === 3) {
        dx = -1;
    }

    let neighbour = [pos[0], pos[1], pos[2]];
    // Part 1
    if(part1) {
        do {
            neighbour[0] = (neighbour[0] + dx + width) % width;
            neighbour[1] = (neighbour[1] + dy + height) % height;
        } while(getValue(board, neighbour[0], neighbour[1]) === ' ');
    } else {
        // Part 2
        neighbour[0] = neighbour[0] + dx;
        neighbour[1] = neighbour[1] + dy;
        if(getValue(board, neighbour[0], neighbour[1]) === ' ') {
            let handled = false;
    
            // 12
            // 3
            //45
            //6
            //
    
            // Stepped into a fold, determine which one
            if(dy === 0) {
                // Horizontal movement
                if(dx < 0) {
                    if(neighbour[1] >= 0 && neighbour[1] < 50) {
                        // Going left in the top (square 1)
                        // This means you end up on 4 going right
                        neighbour[2] = 1;
                        // X becomes 0
                        neighbour[0] = 0;
                        // Y index becomes inverse
                        neighbour[1] = 100 + 49-neighbour[1];
                        handled = true;
                    } else if(neighbour[1] >= 50 && neighbour[1] < 100) {
                        // Going left in square (3) connects to 4 going down
                        neighbour[2] = 2;
                        // X becomes Y linearly
                        neighbour[0] = neighbour[1] - 50;
                        // Y becomes 100
                        neighbour[1] = 100;
                        handled = true;
                    } else if(neighbour[1] >= 100 && neighbour[1] < 150) {
                        // Going left in square 4
                        // Connects back to square 1 (going right)
                        neighbour[2] = 1;
                        // X becomes 50
                        neighbour[0] = 50;
                        // Y index becomes inverse
                        neighbour[1] = 49 - (neighbour[1] - 100)
                        handled = true;
                    } else if(neighbour[1] >= 150) {
                        // Going left in square 6 connects to top of 1
                        // Going down in 1
                        neighbour[2] = 2;
                        // X is linear to Y
                        neighbour[0] = (neighbour[1] - 150) + 50;
                        // Y becomes 0
                        neighbour[1] = 0;
                        handled = true;
                    }
                } else {
                    if(neighbour[1] >= 0 && neighbour[1] < 50) {
                        // Going right from 2 connects to square 5
                        // Upside down, so going left
                        neighbour[2] = 3;
                        // X will be 99
                        neighbour[0] = 99;
                        // Y will be inverse
                        neighbour[1] = 100 + 49 - neighbour[1];
                        handled = true;
                    } else if(neighbour[1] >= 50 && neighbour[1] < 100) {
                        // Going right from square (3)
                        // Connects to the bottom of 2
                        // Going up
                        neighbour[2] = 0;
                        // X is positive to y
                        neighbour[0] = 100 + neighbour[1] - 50;
                        // Y is 49
                        neighbour[1] = 49;
                        handled = true;
                    } else if(neighbour[1] >= 100 && neighbour[1] < 150) {
                        // Going right in square 5 is going left in 2
                        neighbour[2] = 3;
                        // X becomes 149
                        neighbour[0] = 149;
                        // Y becomes invers
                        neighbour[1] = 49 - (neighbour[1] - 100);
                        handled = true;
                    } else if(neighbour[1] >= 150) {
                        // Going right in square 6 is bottom of 5
                        // Facing up
                        neighbour[2] = 0;
                        // Y becomes X
                        neighbour[0] = (neighbour[1] - 150) + 50;
                        // Y is set to 149
                        neighbour[1] = 149;
                        handled = true;
                    }
                }
            } else {
                // Vertical movement
                if(dy > 0) {
                    if(neighbour[0] >= 0 && neighbour[0] < 50) {
                        // Going down from 6 connects to top of 2
                        // So facing down
                        neighbour[2] = 2;
                        // X is the same???
                        neighbour[0] = neighbour[0] + 100;
                        // Y becomes 0
                        neighbour[1] = 0;
                        handled = true;
                    } else if(neighbour[0] >= 50 && neighbour[0] < 100) {
                        // Going down from 5
                        // Should end up on square six on the side
                        // Going left
                        neighbour[2] = 3;
                        // Y is linear to our x
                        neighbour[1] = 150 + neighbour[0] - 50;
                        // X becomes 49 (right edge)
                        neighbour[0] = 49;
                        handled = true;
                    } else if(neighbour[0] >= 100 && neighbour[0] < 150) {
                        // Going down from 2 is right side of 3
                        neighbour[2] = 3;
                        // Y is positive to X
                        neighbour[1] = (neighbour[0] - 100) + 50;
                        // X is 99
                        neighbour[0] = 99;
                        handled = true;
                    }
                } else {
                    if(neighbour[0] >= 0 && neighbour[0] < 50) {
                        // Going up from 4 connects to right in 3
                        neighbour[2] = 1;
                        // Y is just our x
                        neighbour[1] = neighbour[0] + 50;
                        // X is 50
                        neighbour[0] = 50;
                        handled = true;
                    } else if(neighbour[0] >= 50 && neighbour[0] < 100) {
                        // Going up from 1
                        // Leads to the left side of 6
                        // So, facing right
                        neighbour[2] = 1;
                        // Y is linear to our X
                        neighbour[1] = 150 + neighbour[0] - 50;
                        // X is 0
                        neighbour[0] = 0;
                        handled = true;
                    } else if(neighbour[0] >= 100 && neighbour[0] < 150) {
                        // Going up from 2 is the bottom of 6 (?)
                        // So face up
                        neighbour[2] = 0;
                        // X is the same (???)
                        neighbour[0] = neighbour[0] - 100;
                        // Y becomes 199
                        neighbour[1] = 199;
                        handled = true;
                    }
                }
            }
    
            if(!handled) {
                printBoard(board, [neighbour[0], neighbour[1], pos[2]]);
                throw "Unhandled wrap around";
            }
        }
    }

    // Final check
    if(getValue(board, neighbour[0], neighbour[1], '.') === '.') {
        pos[0] = neighbour[0];
        pos[1] = neighbour[1];
        pos[2] = neighbour[2];
    } else {
        // Wall!
        if(getValue(board, neighbour[0], neighbour[1]) !== '#') {
            console.log(pos, neighbour, getValue(board, neighbour[0], neighbour[1]));
            printBoard(board, pos);
            throw "Impossible";
        }
    }
}

const walk = (part1) => {
    pos = [initialX, 0, 1];
    for(let pc = 0; pc < instructions.length; pc++) {
        const ins = instructions[pc];

        if(ins === 'R') {
            pos[2] = (pos[2] + 1) % 4;
        } else if(ins === 'L') {
            pos[2] = (pos[2] - 1 + 4) % 4;
        } else {
            let steps = ins;
            while(steps--) {
                move(pos, part1);
                //printBoard(board, pos);
            }
        }
    }

    const row = pos[1] + 1;
    const col = pos[0] + 1;
    const facing = (pos[2] - 1 + 4) % 4;
    return 1000*row + 4*col + facing;
}

console.log("Part 1:", walk(true))
if(width !== 150 && height !== 200) {
    console.log("Part 2 doesn't work on the test input");
} else {
    console.log("Part 2:", walk(false));
}
