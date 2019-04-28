function hide(){
	document.getElementById("b1").style.visibility = "hidden";
	document.getElementById("b2").style.visibility = "hidden";
}

function show(){
	document.getElementById("b1").style.visibility = "visible";
	document.getElementById("b2").style.visibility = "visible";
}

function start(){
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("v").play();
    act();
}

function act(){
    hide();
    switch(stage){
        case 1: et=166;
    }
    ct();
}

function ct(){
    if(et<=document.getElementById("v").currentTime){
        document.getElementById("v").pause();
        alert("문제 발생");
        show();
        document.getElementById("b1").onclick = function () { ans=1; choice(); hide(); document.getElementById("v").play(); this.onclick = null; };
	    document.getElementById("b2").onclick = function () { ans=2; choice(); hide(); document.getElementById("v").play(); this.onclick = null; };
    }
    else{
        setTimeout(ct,1000);
    }
}

function st(){
    if(et<=document.getElementById("v").currentTime){
        document.getElementById("st1").style.visibility = "visible";
        document.getElementById("st2").style.visibility = "visible";
        document.getElementById("st3").style.visibility = "visible";
    }
    else{
        setTimeout(ct,1000);
    }
}

function choice(){
    swtich
}