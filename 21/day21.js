let input = [
    // Insert AoC day 21 input here
]

input = testInput = [
    "root: pppw + sjmn",
    "dbpl: 5",
    "cczh: sllz + lgvd",
    "zczc: 2",
    "ptdq: humn - dvpt",
    "dvpt: 3",
    "lfqf: 4",
    "humn: 5",
    "ljgn: 2",
    "sjmn: drzm * dbpl",
    "sllz: 4",
    "pppw: cczh / lfqf",
    "lgvd: ljgn * ptdq",
    "drzm: hmdt - zczc",
    "hmdt: 32",
]

let tree = {};
input.forEach(x => {
    const [name, sum] = x.split(": ");
    if(Number.isInteger(+sum)) {
        tree[name] = +sum;
    } else {
        [left, op, right] = sum.split(" ");
        tree[name] = {
            left, op, right
        }
    }
});

const eval = (tree, key) => {
    const node = tree[key];
    if(typeof node !== 'object') {
        const isHuman = key === "humn";
        return {key, val: node, humanL: isHuman, humanR: isHuman, human: isHuman};
    }

    const leftR = eval(tree, node.left);
    const rightR = eval(tree, node.right);
    const left = leftR.val;
    const right = rightR.val;
    const humanL = leftR.humanL || leftR.humanR;
    const humanR = rightR.humanL || rightR.humanR;
    if(key === 'root') {
        return {
            key,
            leftVal: leftR.val,
            rightVal: rightR.val,
            humanL,
            humanR,
            parentL: leftR, parentR: rightR
        }
    }

    switch(node.op) {
        case '-':
            return { key, val: left - right, humanL, humanR, parentL: leftR, parentR: rightR};
        case '+':
            return { key, val: left + right, humanL, humanR, parentL: leftR, parentR: rightR};
        case '*':
            return { key, val: left * right, humanL, humanR, parentL: leftR, parentR: rightR};
        case '/':
            return { key, val: left / right, humanL, humanR, parentL: leftR, parentR: rightR};
    }
}

const result = eval(tree, 'root');
console.log("Part 1: " + (result.leftVal + result.rightVal));

// Dive towards human
let node = result;
let difference = result.rightVal;
// Skip root
node = node.humanL ? node.parentL : node.parentR;
do {
    const treeNode = tree[node.key];
    if(typeof treeNode !== 'object') {
        break;
    } else if(node.humanL) {
        if(treeNode.op === '+') {
            difference -= node.parentR.val;
        } else if(treeNode.op === '-') {
            difference += node.parentR.val;
        } else if(treeNode.op === '*') {
            // Simplifies our work
            difference /= node.parentR.val;
        } else if(treeNode.op === '/') {
            // Makes it harder
            difference *= node.parentR.val;
        }
        node = node.parentL;
    } else if(node.humanR) {
        if(treeNode.op === '+') {
            difference -= node.parentL.val;
        } else if(treeNode.op === '-') {
            // Inverts the requirement
            difference = -difference + node.parentL.val;
        } else if(treeNode.op === '*') {
            // Simplifies our work
            difference /= node.parentL.val;
        } else if(treeNode.op === '/') {
            throw "Help"
        }
        node = node.parentR;
    } else {
        throw "Impossible";
    }
} while(true)
console.log("Part 2: " + difference);

