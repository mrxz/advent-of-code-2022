let input = [
   // Insert AoC 2022 day 11 input here
]

input = testInput = [
    "Monkey 0:",
    "  Starting items: 79, 98",
    "  Operation: new = old * 19",
    "  Test: divisible by 23",
    "    If true: throw to monkey 2",
    "    If false: throw to monkey 3",
    "",
    "Monkey 1:",
    "  Starting items: 54, 65, 75, 74",
    "  Operation: new = old + 6",
    "  Test: divisible by 19",
    "    If true: throw to monkey 2",
    "    If false: throw to monkey 0",
    "",
    "Monkey 2:",
    "  Starting items: 79, 60, 97",
    "  Operation: new = old * old",
    "  Test: divisible by 13",
    "    If true: throw to monkey 1",
    "    If false: throw to monkey 3",
    "",
    "Monkey 3:",
    "  Starting items: 74",
    "  Operation: new = old + 3",
    "  Test: divisible by 17",
    "    If true: throw to monkey 0",
    "    If false: throw to monkey 1",
]

let monkeys = [];
let monkey = { checks: 0 };
let mi = 0;
for(let i = 0; i < input.length; i++) {
    if(input[i] === "") {
        mi = 0;
        console.log(monkey);
        monkeys.push(monkey);
        monkey = { checks: 0 };
        continue;
    }

    // Monkey header
    const data = input[i].split(":")[1];
    switch(mi) {
        case 0:
            break;
        case 1:
            monkey.items = data.split(",").map(x => x.trim()).map(x => +x);
            break;
        case 2:
            monkey.operation = data.split(" = ")[1].trim();
            break;
        case 3:
            monkey.divisor = +data.split(" by ")[1];
            break;
        case 4:
            monkey.targetTrue = +data.split(" monkey ")[1];
            break;
        case 5:
            monkey.targetFalse = +data.split(" monkey ")[1];
            break;
    }
    mi++;
}
monkeys.push(monkey);

let bigDivisor = monkeys.map(m => m.divisor).reduce((acc, div) => acc*div, 1);
console.log(bigDivisor);

function step() {
    for(let m = 0; m < monkeys.length; m++) {
        const monkey = monkeys[m];
        for(let i = 0; i < monkey.items.length; i++) {
            let newValue = 0;
            let old = monkey.items[i];
            newValue = eval(monkey.operation);

            //newValue = Math.floor(newValue / 3);
            newValue = newValue % bigDivisor;

            // Perform check
            monkey.checks++;
            if((newValue % monkey.divisor) === 0) {
                monkeys[monkey.targetTrue].items.push(newValue);
            } else {
                monkeys[monkey.targetFalse].items.push(newValue);
            }
        }
        monkey.items = [];
    }
}

let result = 0;

for(let r = 0; r < 10000; r++) {
    step();
    console.log("After round ", r);
    monkeys.forEach((m, i) => console.log(i, m.items, m.checks));
}
let scores = monkeys.map(m => m.checks).sort((a,b) => b-a);

result = scores[0] * scores[1];

console.log(result);