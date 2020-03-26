'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let arr = Array(6);
    let maximum_sum = -20;
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    for(let x = 0; x <= 3; x++) {
        for(let y = 0; y <=3; y++) {
            let total = (arr[x][y]) + arr[x][y+1] + arr[x][y+2] + arr[x+1][y+1] + arr[x                           +2][y]+ arr[x+2][y+1] + arr[x+2][y+2]

            if(total > maximum_sum){
                maximum_sum = total
            }
        }
    }

    console.log(maximum_sum);
}
