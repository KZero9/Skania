
function refresh() {
	document.getElementById("stage").value = stage;
	document.getElementById("hp").value = hp;
	cc("hp");
	if(sanring){
		san=500;
		document.getElementById("san").value = san;
	}
	else{
	document.getElementById("san").value = san;
	cc("san");
	}
	document.getElementById("gold").value = gold;
	if(hp>0&&san>0) setTimeout(refresh,100);
}
function cc(str){
	var k=document.getElementById(str);
	m=parseInt(k.value);
	if(m>=50){
		k.style.color='green';
	}
	else if(m>=30){
		k.style.color='yellow';
	}
	else if(m>=10){
		k.style.color='orange';
	}
	else if(m>0){
		k.style.color='red';
	}
	else{
		k.value="0";
		k.style.color='gray';
		document.getElementById("effect").loop=false;
		document.getElementById("effect").src="bgm/die.mp3";
		next();
	}
}
function next(){
	if(san>0&&hp>0){
		setTimeout(game,2000);
	}
	else setTimeout(gameover,3000);
}
function gameover(){
	location.href="gameover.html";
}
function dot(){
	dm=(type!=1&&type!=4);
	switch (type){
		case 2: hp-=1; break;
		case 3: san-=2; break;
		case 5: hp-=2; break;
	}
	if (dm) setTimeout(dot,1000);	
}
function ms(){
	var k= Math.floor(Math.random()*100 +1);
	if(k<=5){
		k=4;
	}
	else if(k<=10){
		k=3;
	}
	else if(k<=25){
		k=5;
	}
	else if(k<=40){
		k=2;
	}
	else{
		k=1;
	}
	return k;
}
function bg(i){
	switch (i) {
		case 1 :
			document.getElementById("bg").style.background = "url('img/cave.jpg')";
		  	break;
		case 2 :
			document.getElementById("bg").style.background = "url('img/water.jpg')";
			setTimeout(dot,6000);
		  	break;
		case 3 :
			document.getElementById("bg").style.background = "url('img/gold.jpg')";
			dot();
		  	break;
		case 4 :
			document.getElementById("bg").style.background = "url('img/rest.jpg')";
			hp+=20;
			san+=20;
			break;
		case 5 :
			document.getElementById("bg").style.background = "url('img/lava.jpg')";
			setTimeout(dot,1000);
		  	break;
	  }
	  document.getElementById("bg").style.backgroundSize="cover";
}
function mq(){
	var q= Math.floor(Math.random()*100 +1);
	if(type==3){
		treasure();
	}
	else if(q<=15){
		shop();
	}
	else if(q<=30){
		enemy();
	}
	else if(q<=70){
		food();
	}
	else{
		money();
	}
}

function game(){
	show();
	type=ms();
	stage+=1;
	bg(type);
	mq();
}

function hide(){
	document.getElementById("yes").style.visibility = "hidden";
	document.getElementById("no").style.visibility = "hidden";
}

function show(){
	document.getElementById("yes").style.visibility = "visible";
	document.getElementById("no").style.visibility = "visible";
}
