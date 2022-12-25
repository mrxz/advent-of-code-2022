let input = [
    // Insert AoC day 25 input here
]

input = testInput = [
    "1=-0-2",
    "12111",
    "2=0=",
    "21",
    "2=01",
    "111",
    "20012",
    "112",
    "1=-1=",
    "1-12",
    "12",
    "1=",
    "122",
]


let total = 0;
for(let n of input) {
    let sum = 0;
    let power = Math.pow(5, n.length - 1);
    for(let d = 0; d < n.length; d++) {
        sum += ("=-012".indexOf(n[d]) - 2) * power;
        power /= 5;
    }
    console.log(n, sum);
    total += sum;
}
console.log("------------ +")
console.log(total);

console.log();
let result = "";
for(let d = 25; d >= 0; d--) {
    const denom = Math.pow(5, d);
    let times = (total / denom);
    times = Math.round(times);
    //console.log(d, total, denom, total / denom, times);
    total -= denom * times;
    result = result + "=-012"[times + 2];
}
// Strip leading 0's
result = result.substring(/^0*/.exec(result)[0].length);

console.log(result);
