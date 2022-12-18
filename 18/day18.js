let input = [
    // Insert AoC day 18 input here
]

input = testInput = [
    "2,2,2",
    "1,2,2",
    "3,2,2",
    "2,1,2",
    "2,3,2",
    "2,2,1",
    "2,2,3",
    "2,2,4",
    "2,2,6",
    "1,2,5",
    "3,2,5",
    "2,1,5",
    "2,3,5",
]

testInput2 = [
    "1,1,1",
    "2,1,1"
]

let board = {};
const getKey = (x,y,z) => `${x}x${y}x${z}`;
const setValue = (board, x, y, z, value) => {
    board[getKey(x, y, z)] = value;
}
const getValue = (board, x, y, z, fallback = null) => {
    return board[getKey(x, y, z)] || fallback
}

const points = [];
input.forEach(line => {
    const point = line.split(",").map(x => +x);
    points.push(point);
    setValue(board, point[0], point[1], point[2], '#');
})

const countNeighbours = (p, n) => {
    let sum = 0;
    sum += getValue(board, p[0] + 1, p[1], p[2], '.') === n ? 1 : 0;
    sum += getValue(board, p[0] - 1, p[1], p[2], '.') === n ? 1 : 0;

    sum += getValue(board, p[0], p[1] + 1, p[2], '.') === n ? 1 : 0;
    sum += getValue(board, p[0], p[1] - 1, p[2], '.') === n ? 1 : 0;

    sum += getValue(board, p[0], p[1], p[2] + 1, '.') === n ? 1 : 0;
    sum += getValue(board, p[0], p[1], p[2] - 1, '.') === n ? 1 : 0;

    return sum;
}

let pointValues = points.map(p => countNeighbours(p, '.'));
let result = pointValues.reduce((a,b) => a+b, 0);

console.log("Part 1:", result);

// Find the bounds
let minX = 100000;
let maxX = -10000;
let minY = 100000;
let maxY = -10000;
let minZ = 100000;
let maxZ = -10000;

points.forEach(p => {
    minX = Math.min(p[0], minX);
    maxX = Math.max(p[0], maxX);
    minY = Math.min(p[1], minY);
    maxY = Math.max(p[1], maxY);
    minZ = Math.min(p[2], minZ);
    maxZ = Math.max(p[2], maxZ);
})

// Part 2: Bucket fill
const fill = (x, y, z) => {
    if(x < minX -1 || x > maxX + 1 || y < minY - 1 || y > maxY + 1 || z < minZ - 1 || z > maxZ + 1) {
        return;
    }
    if(getValue(board, x, y, z, '.') === '.') {
        setValue(board, x,y,z, 'W')

        fill(x + 1, y, z);
        fill(x - 1, y, z);
        fill(x, y + 1, z);
        fill(x, y - 1, z);
        fill(x, y, z + 1);
        fill(x, y, z - 1);
    }
}
fill(minX, minY, minZ);

let pointValues2 = points.map(p => countNeighbours(p, 'W'));
let result2 = pointValues2.reduce((a,b) => a+b, 0);

console.log("Part 2:", result2);
