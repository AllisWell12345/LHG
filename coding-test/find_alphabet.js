function FindAlp(S) {
    const arrS = S.split('');

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const changeOfNumber = alphabet.map((alp) => {
        if (arrS.includes(alp)) {
            return arrS.indexOf(alp);
        } else {
            return -1;
        }
    });

    const result = changeOfNumber.join(' ');
    return result;
}

console.log(FindAlp('eulji'));