/*const puppeteer = require('puppeteer');

async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.github.com');

    await page.screenshot({path: 'example.png', fullPage: true});
    await browser.close();
}
run();
*/
//document.write("JS write");
/*var init1;
init1 = 5;
console.log(init1);
var num = 1;
var num2 = 2;
var res = num - num2;
var num3 = 5;
var num5 = num3 + num;
console.log("1 :" + num5); 
console.log("1 :" + res);
console.log("1 :" + (num - num2));
var str = Number ("1");
var str2 = Number ("3");
console.log(str + str2);
console.log(Math.min(1,2,3,4));*/





var number = 15;

/*if(number == 5){ //>< <= >= !=
    console.log(" OK ");
} else if(number == 15) {
    console.log("OK 2");
}
  else {
    console.log("Not OK");
}

switch(number){
    case "4": 
        console.log("4");
    case 15: 
        console.log(15);
    break;
} */




var arr =[1, 2, 3, "2", true];
arr[6] = 3;
console.log(arr[5]);
console.log(arr.length);


var matrix = [[1,2,3], [4,5,6], [7,8,9]];
matrix[0][0] = 100;

console.log(matrix);
