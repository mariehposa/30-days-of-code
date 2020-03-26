function processData(input) {
    //Enter your code here

    let eachWord = input.split('\n')
    
    for(var i = 0; i < eachWord[0]; i++){
        let filtered = (eachWord[i + 1]).split('')
        let evenContainer = '';
        let oddContainer = '';
        for(var j = 0; j < filtered.length; j++){
            if(j % 2 == 0){
            evenContainer += filtered[j]
            } else {
                oddContainer += filtered[j]
            }   
        }
        console.log(evenContainer + " " + oddContainer )
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
