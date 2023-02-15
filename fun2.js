function onClickButton(){
    counter++;
    console.log(counter);
}
var counter = 0;


function onClickButton1(el){
    counter++;
    el.innerHTML = counter;
}

function onInput(el){
    if(el.value == "Hello")
    alert("You too");

    console.log(el.value);
}
