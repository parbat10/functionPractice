let add = function (){
    console.log(2+3);
};
add();
add();

function runTwice(fun){
    fun();
    fun();
}
runTwice( function(){
    console.log('12b');
});
runTwice(add);






function updateButton(){
    const button = document.querySelector('.js-button');

    setTimeout(function(){
        button.innerHTML='loading....';
    },1000);
    setTimeout(function(){
        button.innerHTML='finished!';
    },2000);
    setTimeout(function(){
        button.innerHTML='click'
    },7000);
}



    let timeoutId ;

function addToCart(){
    const paragraph = document.querySelector('.js-paragraph');
    paragraph.innerHTML = 'added';

    clearTimeout(timeoutId);

    timeoutId =setTimeout(function(){
        paragraph.innerHTML='';
    },2000);
}



let message = 0 ;
function addButton(){
    message++;
};

function removeButton(){
    message--;
};


setInterval(function() {
    if(document.title === 'App'){
        document.title = `(${message}) messages`
    }else{
        document.title = 'App'
    }
    
}, 1000);