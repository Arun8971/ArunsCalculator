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
        if(arun.value.includes("sin"))
        {
            arun.value=eval(arun.value.replace("sin","Math.sin")).toFixed(3);
        }
        else if(arun.value.includes("^"))
            {
                arun.value=eval(arun.value.replace("^","**"));
            }
    }
    catch{
        arun.value='error';
    }
}





