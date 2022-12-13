let input = [
    // Insert AoC day 13 input here
]

input = testInput = [
    "[1,1,3,1,1]",
    "[1,1,5,1,1]",
    "",
    "[[1],[2,3,4]]",
    "[[1],4]",
    "",
    "[9]",
    "[[8,7,6]]",
    "",
    "[[4,4],4,4]",
    "[[4,4],4,4,4]",
    "",
    "[7,7,7,7]",
    "[7,7,7]",
    "",
    "[]",
    "[3]",
    "",
    "[[[]]]",
    "[[]]",
    "",
    "[1,[2,[3,[4,[5,6,7]]]],8,9]",
    "[1,[2,[3,[4,[5,6,0]]]],8,9]",
]

let pairs = [];
for(let i = 1; i < input.length; i += 3) {
    pairs.push([eval(input[i - 1]), eval(input[i])]);
}

const compare = (left, right) => {
    const leftIsArray = Array.isArray(left);
    const rightIsArray = Array.isArray(right);

    if(leftIsArray && rightIsArray) {
        let equal = true;
        let i = 0;
        while(equal && i < Math.max(left.length, right.length)) {
            if(left.length === i) {
                return -1; // right
            }
            if(right.length === i) {
                return 1; // left
            }

            let result = compare(left[i], right[i]);
            if(result !== 0) {
                return result;
            }

            i++;
        }

        return 0;
    }

    if(leftIsArray) {
        return compare(left, [right]);
    } else if(rightIsArray) {
        return compare([left], right);
    }
    return left - right;

}

// Part 1
let sum = pairs.map((p, i) => {
    let right = compare(p[0], p[1]) < 0;
    return right ? (i + 1) : 0;
}).reduce((a,b) => a+b, 0);
console.log(sum);

// Part 2
let all = pairs.flatMap(p => p);
let div2 = [[2]];
let div6 = [[6]];
div2._hack = true;
div6._hack = true;
all.push(div2)
all.push(div6)
all.sort((a,b) => compare(a, b));

console.log(all.map((x,i) => x._hack ? (i+1) : 1).reduce((a,b) => a*b, 1));
