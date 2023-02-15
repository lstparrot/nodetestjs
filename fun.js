function info(){
    console.log("Hello");
    console.log("!");
}

info();


function info1(word){
    console.log(word);
    console.log("!");
}

info1(1);


function info2(a, b){
    var s = a + b;
    info1(s);
}

info2(1, 2);


function arrr(arr){

    var sum = 0;

    for(var i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var array = [1, 2, 3, 4, 10];

arrr(array);


var res1 = arrr(array);

console.log("Result: " + res1);


var num1 = 10; // global var

function num11(){
    console.log(num1); //local var
}

num11();