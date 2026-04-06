function solution(num_list) {
    var a = 0;
    var b = 0;
    num_list.map((num) => {
        if(num % 2 === 0) {
            a += 1;
        } else {
            b += 1;
        }
    })
    return [a,b];
}