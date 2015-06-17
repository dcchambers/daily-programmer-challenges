// Reddit /r/dailyprogrammer challenge #218 - easy.
// By: Dakota Chambers

//NOT WORKING YET.

var readline = require('readline');

var list = ['test','test2'];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

while(1){
    console.log("TODO:");
    console.log(list);
    
    rl.question(">>", function(answer) {
    list.push(answer);
    console.log(list)
    
});
}
