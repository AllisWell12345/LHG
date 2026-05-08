function MaxOfN(N) {
    const table = [];
    for (var i = 0; i < N; i++) {
        const line = [];
        for (var j = 0; j < N; j++) {
            if (i === 0) {
                line.push(Math.floor(Math.random() * 10 + 1 + j));
            } else {
                line.push(table[i - 1][j] + Math.floor(Math.random() * 10 + 1 + j));
            }
        }
        table.push(line);
    }
    console.log([N, ...table]);
    const numArr = [];
    table.map((item) => {
        for (var k = 0; k < N; k++) {
            numArr.push(item[k]);
        }
    })
    const sortNumArr = numArr.sort((a, b) => b - a);
    const result = sortNumArr[N - 1];
    return result;
}
console.log(MaxOfN(5));