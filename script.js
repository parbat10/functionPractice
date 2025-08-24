let add = function addition(){
    console.log(2+3);
}
setTimeout(add,1000);
setTimeout(add,2000);

function runTwice(fun){
    fun;
    fun;
}
runTwice( function(){
    console.log(add);
});
runTwice(add);
