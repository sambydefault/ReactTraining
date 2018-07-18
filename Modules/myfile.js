define(["exports"],function(e){
    function getString(){
        return getString2();
    }
    function getString2(){
        return "I am modular";
    }
    e.mymodule = getString;
})