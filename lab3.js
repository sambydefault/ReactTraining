function Customer(){
    this.name = 'Sam',
    this.printName = function(){
        console.log(this.name);
    }
} 

var c = new Customer();
c.specialisation = 'Software Engg';
c.printName();
console.log(c.specialisation);

/////////////////////////

function MathsFunction(){
    var a = 9;
    var b = 6;
    function add(){
        return a+b;
    }
    return add;
}

var x = MathsFunction();
var y = x();
console.log(y);