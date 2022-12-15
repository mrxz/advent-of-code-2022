let input = [
    // Insert AoC day 15 input here
]

input2 = testInput = [
    "Sensor at x=2, y=18: closest beacon is at x=-2, y=15",
    "Sensor at x=9, y=16: closest beacon is at x=10, y=16",
    "Sensor at x=13, y=2: closest beacon is at x=15, y=3",
    "Sensor at x=12, y=14: closest beacon is at x=10, y=16",
    "Sensor at x=10, y=20: closest beacon is at x=10, y=16",
    "Sensor at x=14, y=17: closest beacon is at x=10, y=16",
    "Sensor at x=8, y=7: closest beacon is at x=2, y=10",
    "Sensor at x=2, y=0: closest beacon is at x=2, y=10",
    "Sensor at x=0, y=11: closest beacon is at x=2, y=10",
    "Sensor at x=20, y=14: closest beacon is at x=25, y=17",
    "Sensor at x=17, y=20: closest beacon is at x=21, y=22",
    "Sensor at x=16, y=7: closest beacon is at x=15, y=3",
    "Sensor at x=14, y=3: closest beacon is at x=15, y=3",
    "Sensor at x=20, y=1: closest beacon is at x=15, y=3",
]

let board = {};
const getKey = (x,y) => `${x}x${y}`;
const setValue = (board, x, y, value) => {
    board[getKey(x, y)] = value;
}
const getValue = (board, x, y, fallback = null) => {
    return board[getKey(x, y)] || fallback
}
const printBoard = (board, xi, yi, width, height) => {
    for(let y = yi; y < height; y++) {
        let line = ""
        for(let x = xi; x < width; x++) {
            line += getValue(board, x, y, '.');
        }
        console.log(line);
    }

}

const dist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

// Parse
const sensors = [];
input.forEach(x => {
    let [sensor, beacon] = x.split(":");
    sensor = sensor.split(" at ")[1].split(", ").map(p => +p.split("=")[1]);
    setValue(board, sensor[0], sensor[1], 'S');

    beacon = beacon.split(" at ")[1].split(", ").map(p => +p.split("=")[1]);
    setValue(board, beacon[0], beacon[1], 'B');
    sensors.push({
        pos: sensor,
        beacon: beacon,
        d: dist(sensor, beacon)
    });
})

const count = (board, y, sensors) => {
    // Compute range it can't be for each sensor
    const ranges = [];
    sensors.forEach(s => {
        const heightDiff = Math.abs(s.pos[1] - y);
        const width = s.d - heightDiff;
        if(width < 0) {
            return;
        }

        ranges.push([s.pos[0] - width, s.pos[0] + width]);
        /* old code for part 1
        console.log(y, s.pos[0] - width, s.pos[0] + width);
        for(let x = s.pos[0] - width; x <= s.pos[0] + width; x++) {
            if(s.beacon[0] === x && s.beacon[1] === y) {

            } else {
                setValue(board, x, y, '#');
            }
        }*/
    });

    if(ranges.length == 0) {
        return [];
    }

    ranges.sort((a,b) => a[0] - b[0]);
    let newRanges = [];
    curr = [...ranges[0]];
    for(let r = 1; r < ranges.length; r++) {
        let next = ranges[r];
        if(next[0] >= curr[0] && next[0] <= curr[1] + 1) {
            // Overlap
            curr[1] = Math.max(curr[1], next[1]);
        } else {
            newRanges.push(curr);
            curr = [...next];
        }
    }
    newRanges.push(curr);
    return newRanges;
}

const unavailable = count(board, 2000000, sensors).map(c => c[1]-c[0]).reduce((a,b) => a+b, 0);
console.log(unavailable);

let x = 0, y;
for(y = 0; y <= 4000000; y++) {
    let counts = count(board, y, sensors);
    if(counts.length > 1) {
        x = counts[0][1] + 1; // We know there should be 1
        break;
    }
}

console.log(x * 4000000 + y);

