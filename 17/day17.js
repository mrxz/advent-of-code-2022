// Replace with AoC day 13 input
let input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>";

// Note: keep track of maxY here to automatically increment it
let maxY = -1;

// Board utils
let board = {};
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    if(value === '#') {
        maxY = Math.max(maxY, y);
    }
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    if(x < 0 || x >= 7 || y < 0) {
        return '#';
    }
    return board[getKey(x, y)] || fallback
}
const printBoard = (board, width, height) => {
    for(let y = height - 1; y >= 0; y--) {
        let line = ""
        for(let x = 0; x < width; x++) {
            line += getValue(board, x, y, '.');
        }
        console.log(line);
    }
}

// Pieces, note the L pieces is flipped, as the board is flipped (Y+ up)
const pieces = [
    [
        "####"
    ],
    [
        ".#.",
        "###",
        ".#.",
    ],
    [
        "###",
        "..#",
        "..#"
    ],
    [
        "#",
        "#",
        "#",
        "#"
    ],
    [
        "##",
        "##"
    ]
];

let part1MaxY = 0;

let currPieceIndex = 0;
let currJetIndex = 0;

const getStateKey = (currPieceIndex, currJetIndex) => `${currPieceIndex % pieces.length}|${currJetIndex % input.length}`;
let uniqueStates = {};

let dropped = 0;
let jumpedY = 0; // The amount jumped during time travel
let target = 100000; // Should be ample to find a cycle within this
while(dropped < target) {
    const key = getStateKey(currPieceIndex, currJetIndex);
    if(key in uniqueStates) {
        // Make sure we encounter the loop twice, otherwise it might be a fluke
        // And only if we haven't jumped already.
        if(jumpedY == 0 && dropped > 2022 && uniqueStates[key].dropped !== uniqueStates[key].originalDropped) {
            console.log('Detected duplicate state at', dropped, key, ' last at ', uniqueStates[key]);

            let stride = dropped - uniqueStates[key].dropped;
            console.log("Stride:", stride);
            let inc = maxY - uniqueStates[key].maxY;
            console.log("Inc:", inc);

            // To the top
            let togo = 1000000000000 - dropped;
            let jumps = togo / stride;
            jumpedY = Math.floor(jumps) * inc;
            let finalToGo = togo % stride;
            console.log("Additional drops to go:", finalToGo);

            // Time travel
            dropped = 0;
            target = finalToGo;
            if(target == 0) {
                // Edge case where the stride fits exactly.
                break;
            }
        }

        uniqueStates[key].dropped = dropped;
        uniqueStates[key].maxY = maxY;
    } else {
        uniqueStates[key] = {
            originalDropped: dropped,
            dropped,
            maxY,
        }
    }
    if(dropped == 2022) {
        part1MaxY = maxY;
    }

    // Drop a piece
    const piece = pieces[currPieceIndex % pieces.length];

    // Spawn the piece
    let pieceX = 2;
    let pieceY = maxY + 4;

    let hasDropped = false;
    while(!hasDropped) {
        // Move by jet
        let jetLeft = input[currJetIndex % input.length] === "<";
        let canMove = true;
        if(jetLeft) {
            // Check if we can move left
            outer:
            for(let px = 0; px < piece[0].length; px++) {
                for(let py = 0; py < piece.length; py++) {
                    if(piece[py][px] !== '.' && getValue(board, pieceX - 1 + px, pieceY + py, '.') !== '.') {
                        canMove = false;
                        break outer;
                    }
                }
            }
            if(canMove) {
                pieceX--;
            }
        } else {
            // Check if we can move right
            outer:
            for(let px = 0; px < piece[0].length; px++) {
                for(let py = 0; py < piece.length; py++) {
                    if(piece[py][px] !== '.' && getValue(board, pieceX + 1 + px, pieceY + py, '.') !== '.') {
                        canMove = false;
                        break outer;
                    }
                }
            }
            if(canMove) {
                pieceX++;
            }
        }

        // Gravity
        canMove = true;
        {
            // Check if we can move right
            outer:
            for(let px = 0; px < piece[0].length; px++) {
                for(let py = 0; py < piece.length; py++) {
                    if(piece[py][px] !== '.' && getValue(board, pieceX + px, pieceY - 1 + py, '.') !== '.') {
                        canMove = false;
                        break outer;
                    }
                }
            }
            if(canMove) {
                pieceY--;
            } else {
                hasDropped = true;
                for(let px = 0; px < piece[0].length; px++) {
                    for(let py = 0; py < piece.length; py++) {
                        if(piece[py][px] !== '.') {
                            setValue(board, pieceX + px, pieceY + py, '#');
                        }
                    }
                }
            }
        }

        currJetIndex++;
    }

    dropped++;
    currPieceIndex++;
}

console.log("=====");
console.log("Part 1:", part1MaxY + 1);
console.log("Part 2:", maxY + jumpedY + 1);
// Note: The +1 makes sense