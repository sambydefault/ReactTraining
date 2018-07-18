function Add(a,b,...c){
    console.log(a+b+c.length);
    c.forEach(element =>
        console.log(element));
}

let result = Add(1,2,2,3,4,45,7);