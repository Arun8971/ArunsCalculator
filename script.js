let arun=document.getElementById("screen");

function input(x){
    arun.value=arun.value+x;
}

function del(){
    arun.value=arun.value.slice(0,-1);
}

function allclear(){
    arun.value='';
}

function eqto(){
    try{
            if(arun.value.includes("^")
               {
                arun.value=eval(arun.value.replace("^","**"));
               }
        else if(arun.value.includes("&Sqrt")){
            arun.value=eval(arun.value.replace("&Sqrt","Math.sqrt");
        }
        else{
            arun.value=eval(arun.value);
        }
    }
    catch{
        arun.value='error';
    }
}





