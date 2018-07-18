var b = 6;
console.log(b);

a =10;
console.log(a);

function abcd(){
    var b=6;
    if(b>2){
        var a =5;
    }
}
abcd();
console.log(b);
console.log(a);

"use strict";
c = 10;
console.log(c);
x = 3.14;       // This will not cause an error. 
myFunction();

function myFunction() {
   "use strict";
    y = 3.14;   // This will cause an error
}