let add = function (){
    console.log(2+3);
};
add();
add();

function runTwice(fun){
    fun();
    fun();
};
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
};



   let messages = 2 ;
let intervalId;
let isDisplayingNotification;

displayNotification();

function displayNotification(){
    if(isDisplayingNotification){
        return;
    }
};
isDisplayingNotification = true;

intervalId = setInterval(function() {
    if(document.title === 'App'){
        document.title = `(${messages}) messages`
    }else{
        document.title = 'App'
    }
    
}, 1000);

function stopNotification(){
    isDisplayingNotification = false;

    clearInterval(intervalId);
    document.title = 'App';
};
