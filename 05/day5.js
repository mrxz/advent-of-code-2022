let ins = [
    "move 2 from 4 to 6",
    "move 4 from 5 to 3",
    "move 6 from 6 to 1",
    "move 4 from 1 to 4",
    "move 4 from 9 to 4",
    "move 7 from 2 to 4",
    "move 1 from 9 to 3",
    "move 1 from 2 to 6",
    "move 2 from 9 to 5",
    "move 2 from 6 to 8",
    "move 5 from 8 to 1",
    "move 2 from 6 to 9",
    "move 5 from 8 to 3",
    "move 1 from 5 to 4",
    "move 3 from 7 to 2",
    "move 10 from 4 to 7",
    "move 7 from 4 to 3",
    "move 1 from 4 to 7",
    "move 1 from 7 to 9",
    "move 1 from 2 to 3",
    "move 11 from 1 to 7",
    "move 12 from 3 to 7",
    "move 8 from 3 to 8",
    "move 29 from 7 to 2",
    "move 3 from 7 to 3",
    "move 3 from 9 to 2",
    "move 4 from 5 to 3",
    "move 7 from 3 to 5",
    "move 28 from 2 to 3",
    "move 1 from 7 to 5",
    "move 2 from 8 to 5",
    "move 2 from 4 to 1",
    "move 2 from 1 to 4",
    "move 1 from 7 to 6",
    "move 1 from 7 to 1",
    "move 3 from 2 to 8",
    "move 1 from 1 to 7",
    "move 9 from 5 to 3",
    "move 12 from 3 to 1",
    "move 1 from 4 to 3",
    "move 1 from 6 to 4",
    "move 3 from 2 to 9",
    "move 16 from 3 to 7",
    "move 2 from 9 to 6",
    "move 5 from 7 to 2",
    "move 1 from 9 to 7",
    "move 1 from 4 to 2",
    "move 13 from 7 to 2",
    "move 13 from 2 to 7",
    "move 12 from 7 to 8",
    "move 2 from 6 to 4",
    "move 16 from 8 to 1",
    "move 4 from 3 to 1",
    "move 3 from 3 to 2",
    "move 1 from 5 to 7",
    "move 1 from 5 to 3",
    "move 3 from 4 to 6",
    "move 19 from 1 to 3",
    "move 5 from 8 to 4",
    "move 6 from 3 to 2",
    "move 5 from 4 to 2",
    "move 1 from 7 to 4",
    "move 1 from 4 to 9",
    "move 3 from 6 to 7",
    "move 1 from 9 to 2",
    "move 16 from 2 to 4",
    "move 9 from 1 to 8",
    "move 10 from 4 to 2",
    "move 2 from 7 to 5",
    "move 5 from 8 to 4",
    "move 12 from 2 to 9",
    "move 2 from 7 to 4",
    "move 12 from 9 to 5",
    "move 11 from 5 to 6",
    "move 3 from 1 to 9",
    "move 1 from 5 to 7",
    "move 2 from 9 to 2",
    "move 10 from 3 to 2",
    "move 1 from 9 to 2",
    "move 2 from 8 to 9",
    "move 1 from 7 to 8",
    "move 1 from 8 to 4",
    "move 7 from 2 to 6",
    "move 1 from 1 to 5",
    "move 5 from 3 to 1",
    "move 1 from 5 to 1",
    "move 2 from 3 to 9",
    "move 2 from 1 to 6",
    "move 3 from 9 to 8",
    "move 14 from 6 to 1",
    "move 1 from 3 to 5",
    "move 5 from 4 to 6",
    "move 1 from 9 to 6",
    "move 7 from 6 to 9",
    "move 1 from 6 to 2",
    "move 8 from 1 to 4",
    "move 7 from 1 to 7",
    "move 10 from 2 to 1",
    "move 4 from 7 to 6",
    "move 10 from 4 to 6",
    "move 5 from 8 to 2",
    "move 1 from 5 to 9",
    "move 2 from 2 to 6",
    "move 2 from 4 to 7",
    "move 1 from 2 to 7",
    "move 5 from 9 to 2",
    "move 1 from 2 to 9",
    "move 14 from 6 to 8",
    "move 2 from 8 to 4",
    "move 1 from 2 to 6",
    "move 4 from 9 to 3",
    "move 2 from 6 to 8",
    "move 5 from 4 to 5",
    "move 5 from 8 to 3",
    "move 1 from 2 to 4",
    "move 3 from 7 to 1",
    "move 2 from 2 to 7",
    "move 1 from 4 to 7",
    "move 1 from 4 to 5",
    "move 1 from 2 to 8",
    "move 1 from 4 to 9",
    "move 8 from 8 to 2",
    "move 3 from 1 to 5",
    "move 7 from 2 to 9",
    "move 8 from 1 to 6",
    "move 6 from 7 to 2",
    "move 2 from 2 to 8",
    "move 5 from 1 to 8",
    "move 3 from 6 to 8",
    "move 4 from 3 to 6",
    "move 3 from 6 to 2",
    "move 8 from 9 to 2",
    "move 11 from 5 to 7",
    "move 12 from 2 to 6",
    "move 2 from 3 to 7",
    "move 12 from 7 to 2",
    "move 10 from 6 to 9",
    "move 1 from 7 to 1",
    "move 12 from 8 to 7",
    "move 2 from 3 to 2",
    "move 8 from 9 to 7",
    "move 6 from 2 to 5",
    "move 1 from 1 to 6",
    "move 3 from 2 to 6",
    "move 1 from 3 to 7",
    "move 5 from 5 to 3",
    "move 10 from 7 to 2",
    "move 2 from 3 to 7",
    "move 8 from 7 to 6",
    "move 20 from 2 to 8",
    "move 5 from 8 to 1",
    "move 5 from 8 to 6",
    "move 1 from 5 to 7",
    "move 1 from 1 to 4",
    "move 4 from 1 to 2",
    "move 1 from 9 to 6",
    "move 3 from 3 to 1",
    "move 4 from 7 to 5",
    "move 1 from 9 to 8",
    "move 11 from 8 to 7",
    "move 1 from 4 to 9",
    "move 2 from 7 to 5",
    "move 31 from 6 to 9",
    "move 4 from 2 to 3",
    "move 6 from 5 to 1",
    "move 4 from 1 to 2",
    "move 7 from 7 to 8",
    "move 1 from 7 to 6",
    "move 1 from 1 to 7",
    "move 24 from 9 to 4",
    "move 2 from 7 to 8",
    "move 2 from 9 to 2",
    "move 2 from 7 to 5",
    "move 2 from 5 to 9",
    "move 3 from 4 to 1",
    "move 20 from 4 to 2",
    "move 1 from 6 to 1",
    "move 16 from 2 to 1",
    "move 4 from 3 to 1",
    "move 1 from 4 to 8",
    "move 5 from 8 to 5",
    "move 5 from 8 to 1",
    "move 1 from 5 to 2",
    "move 3 from 5 to 6",
    "move 33 from 1 to 6",
    "move 6 from 9 to 4",
    "move 15 from 6 to 7",
    "move 6 from 4 to 3",
    "move 1 from 5 to 3",
    "move 7 from 3 to 9",
    "move 11 from 7 to 5",
    "move 10 from 5 to 8",
    "move 2 from 7 to 3",
    "move 5 from 8 to 9",
    "move 1 from 7 to 5",
    "move 1 from 5 to 8",
    "move 1 from 5 to 7",
    "move 2 from 3 to 8",
    "move 2 from 7 to 5",
    "move 2 from 8 to 7",
    "move 1 from 5 to 9",
    "move 1 from 7 to 6",
    "move 3 from 8 to 6",
    "move 22 from 6 to 9",
    "move 1 from 7 to 6",
    "move 27 from 9 to 4",
    "move 18 from 4 to 8",
    "move 5 from 4 to 1",
    "move 1 from 5 to 1",
    "move 3 from 6 to 3",
    "move 2 from 3 to 5",
    "move 2 from 5 to 2",
    "move 1 from 2 to 6",
    "move 1 from 6 to 3",
    "move 9 from 8 to 6",
    "move 3 from 9 to 8",
    "move 9 from 6 to 5",
    "move 1 from 6 to 9",
    "move 15 from 8 to 5",
    "move 1 from 3 to 4",
    "move 6 from 1 to 8",
    "move 1 from 3 to 7",
    "move 8 from 5 to 8",
    "move 2 from 5 to 6",
    "move 3 from 4 to 6",
    "move 1 from 7 to 6",
    "move 2 from 5 to 3",
    "move 5 from 5 to 1",
    "move 2 from 3 to 7",
    "move 1 from 8 to 1",
    "move 10 from 2 to 9",
    "move 5 from 6 to 3",
    "move 7 from 8 to 5",
    "move 4 from 3 to 5",
    "move 1 from 2 to 1",
    "move 2 from 7 to 6",
    "move 5 from 1 to 5",
    "move 1 from 3 to 7",
    "move 1 from 7 to 6",
    "move 3 from 8 to 5",
    "move 4 from 6 to 4",
    "move 1 from 2 to 9",
    "move 5 from 4 to 6",
    "move 21 from 5 to 3",
    "move 2 from 8 to 4",
    "move 3 from 4 to 1",
    "move 1 from 8 to 4",
    "move 18 from 3 to 5",
    "move 2 from 3 to 6",
    "move 2 from 6 to 9",
    "move 2 from 6 to 2",
    "move 1 from 2 to 9",
    "move 19 from 9 to 4",
    "move 3 from 6 to 3",
    "move 2 from 9 to 4",
    "move 1 from 1 to 2",
    "move 1 from 3 to 7",
    "move 16 from 5 to 2",
    "move 4 from 1 to 9",
    "move 3 from 3 to 4",
    "move 4 from 9 to 8",
    "move 3 from 5 to 1",
    "move 22 from 4 to 5",
    "move 1 from 7 to 2",
    "move 22 from 5 to 9",
    "move 2 from 5 to 2",
    "move 2 from 4 to 6",
    "move 10 from 9 to 5",
    "move 1 from 8 to 3",
    "move 13 from 9 to 2",
    "move 1 from 6 to 3",
    "move 19 from 2 to 7",
    "move 2 from 7 to 4",
    "move 1 from 8 to 4",
    "move 1 from 8 to 2",
    "move 11 from 5 to 7",
    "move 3 from 1 to 7",
    "move 8 from 7 to 8",
    "move 1 from 3 to 5",
    "move 1 from 8 to 3",
    "move 1 from 5 to 3",
    "move 6 from 2 to 3",
    "move 1 from 8 to 7",
    "move 1 from 6 to 1",
    "move 1 from 1 to 8",
    "move 4 from 8 to 1",
    "move 1 from 4 to 6",
    "move 8 from 3 to 9",
    "move 2 from 2 to 3",
    "move 3 from 8 to 5",
    "move 1 from 8 to 2",
    "move 4 from 2 to 7",
    "move 5 from 9 to 7",
    "move 1 from 6 to 3",
    "move 4 from 2 to 4",
    "move 23 from 7 to 5",
    "move 4 from 1 to 2",
    "move 3 from 9 to 6",
    "move 2 from 4 to 8",
    "move 2 from 8 to 3",
    "move 2 from 6 to 1",
    "move 1 from 6 to 8",
    "move 8 from 5 to 3",
    "move 5 from 2 to 6",
    "move 5 from 6 to 3",
    "move 1 from 8 to 3",
    "move 4 from 4 to 7",
    "move 15 from 5 to 2",
    "move 1 from 1 to 9",
    "move 2 from 5 to 1",
    "move 4 from 3 to 7",
    "move 1 from 4 to 9",
    "move 4 from 7 to 1",
    "move 2 from 5 to 6",
    "move 7 from 1 to 2",
    "move 6 from 2 to 3",
    "move 16 from 2 to 5",
    "move 1 from 6 to 3",
    "move 1 from 6 to 3",
    "move 9 from 7 to 4",
    "move 6 from 4 to 6",
    "move 1 from 9 to 8",
    "move 23 from 3 to 9",
    "move 1 from 3 to 4",
    "move 3 from 4 to 5",
    "move 9 from 5 to 2",
    "move 6 from 9 to 7",
    "move 7 from 7 to 5",
    "move 5 from 5 to 3",
    "move 1 from 4 to 6",
    "move 3 from 3 to 8",
    "move 6 from 2 to 1",
    "move 3 from 5 to 6",
    "move 4 from 7 to 1",
    "move 2 from 3 to 9",
    "move 5 from 6 to 8",
    "move 19 from 9 to 6",
    "move 1 from 9 to 2",
    "move 9 from 5 to 9",
    "move 4 from 8 to 3",
    "move 5 from 6 to 1",
    "move 4 from 6 to 1",
    "move 2 from 3 to 8",
    "move 17 from 1 to 7",
    "move 2 from 1 to 2",
    "move 6 from 6 to 9",
    "move 4 from 8 to 5",
    "move 3 from 8 to 2",
    "move 3 from 5 to 6",
    "move 4 from 6 to 8",
    "move 2 from 6 to 9",
    "move 4 from 8 to 7",
    "move 9 from 9 to 5",
    "move 5 from 9 to 4",
    "move 7 from 2 to 8",
    "move 1 from 2 to 1",
    "move 3 from 6 to 5",
    "move 6 from 8 to 5",
    "move 1 from 3 to 4",
    "move 1 from 3 to 1",
    "move 12 from 7 to 2",
    "move 5 from 2 to 7",
    "move 8 from 7 to 5",
    "move 1 from 9 to 3",
    "move 5 from 2 to 8",
    "move 3 from 6 to 3",
    "move 2 from 2 to 3",
    "move 1 from 2 to 4",
    "move 2 from 3 to 4",
    "move 1 from 1 to 6",
    "move 14 from 5 to 6",
    "move 1 from 8 to 6",
    "move 3 from 3 to 7",
    "move 4 from 7 to 1",
    "move 9 from 4 to 3",
    "move 3 from 1 to 4",
    "move 1 from 1 to 2",
    "move 1 from 8 to 4",
    "move 8 from 3 to 1",
    "move 1 from 3 to 2",
    "move 5 from 7 to 6",
    "move 3 from 1 to 6",
    "move 2 from 2 to 8",
    "move 13 from 5 to 3",
    "move 5 from 1 to 3",
    "move 3 from 4 to 5",
    "move 1 from 9 to 2",
    "move 4 from 3 to 9",
    "move 1 from 1 to 7",
    "move 2 from 5 to 8",
    "move 1 from 7 to 5",
    "move 2 from 5 to 4",
    "move 1 from 2 to 6",
    "move 1 from 4 to 5",
    "move 7 from 3 to 6",
    "move 31 from 6 to 1",
    "move 25 from 1 to 7",
    "move 2 from 3 to 2",
    "move 13 from 7 to 9",
    "move 1 from 1 to 6",
    "move 1 from 4 to 1",
    "move 2 from 2 to 9",
    "move 1 from 4 to 6",
    "move 3 from 7 to 1",
    "move 7 from 8 to 3",
    "move 1 from 8 to 2",
    "move 1 from 2 to 8",
    "move 4 from 3 to 4",
    "move 1 from 8 to 7",
    "move 3 from 6 to 9",
    "move 5 from 7 to 6",
    "move 1 from 4 to 7",
    "move 5 from 7 to 9",
    "move 5 from 3 to 6",
    "move 3 from 4 to 7",
    "move 1 from 5 to 4",
    "move 4 from 7 to 9",
    "move 32 from 9 to 1",
    "move 1 from 6 to 5",
    "move 1 from 5 to 9",
    "move 4 from 3 to 8",
    "move 5 from 1 to 4",
    "move 4 from 4 to 9",
    "move 6 from 1 to 7",
    "move 4 from 9 to 8",
    "move 4 from 7 to 8",
    "move 1 from 7 to 1",
    "move 1 from 7 to 6",
    "move 7 from 6 to 3",
    "move 1 from 9 to 5",
    "move 2 from 4 to 7",
    "move 25 from 1 to 6",
    "move 1 from 7 to 1",
    "move 1 from 3 to 4",
    "move 18 from 6 to 8",
    "move 1 from 5 to 1",
    "move 3 from 1 to 6",
    "move 21 from 8 to 3",
    "move 1 from 8 to 4",
    "move 2 from 4 to 2",
    "move 1 from 8 to 1",
    "move 1 from 7 to 6",
    "move 5 from 6 to 3",
    "move 30 from 3 to 1",
    "move 4 from 8 to 6",
    "move 1 from 2 to 9",
    "move 1 from 8 to 5",
    "move 9 from 6 to 5",
    "move 2 from 8 to 7",
    "move 3 from 5 to 9",
    "move 2 from 3 to 4",
    "move 1 from 2 to 1",
    "move 1 from 5 to 8",
    "move 1 from 8 to 3",
    "move 2 from 4 to 6",
    "move 1 from 3 to 1",
    "move 1 from 5 to 6",
    "move 5 from 5 to 7",
    "move 4 from 6 to 8",
    "move 3 from 8 to 2",
    "move 1 from 1 to 5",
    "move 1 from 8 to 7",
    "move 4 from 9 to 6",
    "move 1 from 5 to 1",
    "move 4 from 6 to 8",
    "move 6 from 7 to 3",
    "move 4 from 3 to 9",
    "move 2 from 2 to 7",
    "move 1 from 3 to 5",
    "move 3 from 7 to 6",
    "move 2 from 9 to 8",
    "move 1 from 2 to 4",
    "move 1 from 3 to 4",
    "move 5 from 8 to 4",
    "move 1 from 9 to 2",
    "move 1 from 7 to 5",
    "move 3 from 4 to 5",
    "move 1 from 9 to 1",
    "move 1 from 2 to 7",
    "move 1 from 7 to 1",
    "move 5 from 5 to 4",
    "move 4 from 1 to 4",
    "move 19 from 1 to 9",
    "move 6 from 6 to 2",
    "move 12 from 9 to 1",
    "move 1 from 8 to 6",
    "move 1 from 9 to 4",
    "move 4 from 4 to 8",
    "move 1 from 6 to 5",
    "move 1 from 5 to 3",
    "move 2 from 8 to 9",
    "move 5 from 4 to 6",
    "move 5 from 9 to 4",
    "move 1 from 4 to 3",
    "move 2 from 2 to 9",
    "move 1 from 6 to 5",
    "move 1 from 6 to 9",
    "move 7 from 1 to 5",
    "move 1 from 3 to 1",
    "move 2 from 8 to 3",
    "move 1 from 5 to 7",
    "move 2 from 9 to 8",
].map(l => l.split(" ")).map(p => ({ count: +p[1], from: (+p[3])-1, to: (+p[5])-1 }));

ins2 = [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
].map(l => l.split(" ")).map(p => ({ count: +p[1], from: (+p[3])-1, to: (+p[5])-1 }));

let towers = [
    "NRGP",
    "JTBLFGDC",
    "MSV",
    "LSRCZP",
    "PSLVCWDQ",
    "CTNWDMS",
    "HDGWP",
    "ZLPHSCMV",
    "RPFLWGZ"
].map(t => t.split(""));

towers2 = [
    "ZN",
    "MCD",
    "P",
].map(t => t.split(""));

for(let i = 0; i < ins.length; i++) {
    const instruction = ins[i];
    console.log(instruction);

    const count = instruction.count;
    const length = towers[instruction.from].length;
    const taken = towers[instruction.from].splice(length - count, count);
    //taken.reverse();
    towers[instruction.to].push(...taken);

    console.log(towers.map(x => x[x.length - 1]).join(''));
}

let result = 0;

let top = towers.map(x => x[x.length - 1]).join('');
console.log(top);