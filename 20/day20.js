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

const performRound = (annotated, mutable) => {
    for(let i = 0; i < annotated.length; i++) {
        // Find index in mutable
        const index = mutable.indexOf(annotated[i]);
        let newIndex = index + annotated[i].val;
        if(newIndex < 0) {
            newIndex %= mutable.length - 1;
            newIndex += mutable.length - 1;
        }
        if(newIndex >= mutable.length) {
            newIndex %= mutable.length - 1;
        }

        mutable.splice(index, 1);
        if(newIndex == 0) {
            newIndex = mutable.length;
        }
        mutable.splice(newIndex, 0, annotated[i]);
    }
}

const printScore = (mutable) => {
    const zeroIndex = mutable.findIndex(x => x.val === 0);
    console.log("1000th after 0:", mutable[(zeroIndex + 1000) % mutable.length].val)
    console.log("2000th after 0:", mutable[(zeroIndex + 2000) % mutable.length].val)
    console.log("3000th after 0:", mutable[(zeroIndex + 3000) % mutable.length].val)
    console.log(
        mutable[(zeroIndex + 1000) % mutable.length].val +
        mutable[(zeroIndex + 2000) % mutable.length].val +
        mutable[(zeroIndex + 3000) % mutable.length].val);
}

const annotated = input.map((x, i) => ({val: x, i}));

// Part 1
{
    console.log(" ==== Part 1 ==== ");
    let mutable = [...annotated];
    performRound(annotated, mutable);
    printScore(mutable);
}

// Rounds (part 2)
{
    console.log(" ==== Part 2 ==== ");

    annotated.forEach(x => x.val *= 811589153);
    let mutable = [...annotated];
    for(let r = 0; r < 10; r++) {
        performRound(annotated, mutable)
    }
    printScore(mutable);
}



