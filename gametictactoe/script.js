window.addEventListener('load', bindEvents)
function bindEvents() {

    var buttons = document.getElementsByTagName('button');
    console.log(buttons)
    for (var i = 0; i < buttons.length; i++) {
        var currentButton = buttons[i];
        currentButton.addEventListener('click', printxorzero);// we have done event binding 

    }
}

function isnotblank(currentButton){
    return currentButton.innerText.trim.length>0;
}

// maintain a counter to check if coun goes greater than 4 than check game over conditions 
function isgameover(){
    // in game over conditions 
    //  row value are sane 
    //columns  value are same 
    // diagonal value are same 
    return isthreesame(button[0],button[1],button[2])
   || isthreesame(button[3],button[4],button[5])
   || isthreesame(button[6],button[7],button[8])
   || isthreesame(button[0],button[3],button[6])
   || isthreesame(button[1],button[4],button[7])
   || isthreesame(button[2],button[5],button[8])
   || isthreesame(button[0],button[4],button[8])
   || isthreesame(button[2],button[4],button[6])

}

function reset(){
    // after completing we have to do reset 
    
}
var flag = true;
var count=0;
function printxorzero() {
    if(this.innerText.trim().length == 0){
       var buttonValue=  flag?"X":"0";
        this.innerText= buttonValue;//<button> 0 <button/>
        flag= !flag;
        if(count>=5){
            if(isgameover()){
                alert('Game Over')
            }
        }
    }
    // alert('You clicked on Button')
}
// javascript event loop philips robert 
// node js 1st presentatin by ryan dahn 