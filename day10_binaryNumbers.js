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
    var n = parseInt(readLine(), 10);
    let count = 0;
    let max = 0;
    let quoStorage = []

    while(n > 0){
        var bit = Math.floor(n/2);
        let quotient = n % 2;
        quoStorage.push(quotient)
        n = bit
    }

    for(var i = 0; i < quoStorage.length; i++){
        if(quoStorage[i] == 1){
            count += 1;
        } else if(quoStorage[i] == 0) {
           if(count > max){
               max = count;
           }
           count = 0;
        }
    }

    if (count > max){
        max = count;
    }
    console.log(max)
}
