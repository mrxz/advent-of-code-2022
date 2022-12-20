let input = [
    // Insert AoC day 20 input here
].map(x => +x);

input = testInput = [
    1,
    2,
    -3,
    3,
    -2,
    0,
    4,
]

const performRound = (annotated, mutable) => annotated.forEach(a => {
    const index = mutable.indexOf(a);
    let newIndex = index + a.val;
    newIndex %= mutable.length - 1;
    if(newIndex < 0) newIndex += mutable.length - 1;

    mutable.splice(index, 1);
    mutable.splice(newIndex, 0, a);
});

const printScore = (mutable) => {
    const zeroIndex = mutable.findIndex(x => x.val === 0);
    console.log(
        mutable[(zeroIndex + 1000) % mutable.length].val +
        mutable[(zeroIndex + 2000) % mutable.length].val +
        mutable[(zeroIndex + 3000) % mutable.length].val);
}

const annotated = input.map(x => ({val: x}));

// Part 1
{
    console.log(" ==== Part 1 ==== ");
    const mutable = [...annotated];
    performRound(annotated, mutable);
    printScore(mutable);
}

// Rounds (part 2)
{
    console.log(" ==== Part 2 ==== ");

    annotated.forEach(x => x.val *= 811589153);
    const mutable = [...annotated];
    for(let r = 0; r < 10; r++) {
        performRound(annotated, mutable)
    }
    printScore(mutable);
}
