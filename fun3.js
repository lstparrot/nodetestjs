var text = document.getElementById('text');
console.log(text.title);
text.title = "New text";

text.style.color = "white";
text.style.backgroundColor = "black";

text.innerHTML = "New </br> String";

document.getElementById('text').style.color = "white";


//var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple');

for(var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}

function checkForm(el){


    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;


    if(name =="" || pass =="" || state =="")
    {
        fail = "Check fields";
    } else if (name.length <= 1 || name.length > 50){
    fail = "check fail";
    }
    else if (pass.split("@").length > 1){
        fail = "check fail";
        }

    return false;
}


