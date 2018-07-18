class Customer{
    constructor(cName, age){
        this.cName = cName;
        this.age = age;
    }
    Save(){
        console.log(`Customer Name ${this.cName}  age ${this.age}`);
    }
}

let c = new Customer("Sam",27);
c.Save();