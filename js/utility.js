
function fullScreen() {
    // Kind of painful, but this is how it works for now
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }
  
  function smolScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

function hide() {
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "hidden";
}
function hidest() {
    document.getElementById("st1").style.visibility = "hidden";
    document.getElementById("st2").style.visibility = "hidden";
    document.getElementById("st3").style.visibility = "hidden";
    document.getElementById("h1").style.visibility = "hidden";
    document.getElementById("h2").style.visibility = "hidden";
    document.getElementById("h3").style.visibility = "hidden";
    document.getElementById("s1").style.visibility = "hidden";
    document.getElementById("s2").style.visibility = "hidden";
    document.getElementById("s3").style.visibility = "hidden";
}

function show() {
    document.getElementById("b1").style.visibility = "visible";
    document.getElementById("b2").style.visibility = "visible";
}
function beginst() {
    if (150 <= document.getElementById("v").currentTime) {
        showst();
    }
    else {
        setTimeout(beginst, 1000);
    }

}

function showst() {
    document.getElementById("st1").style.visibility = "visible";
    document.getElementById("st2").style.visibility = "visible";
    document.getElementById("st3").style.visibility = "visible";
    checkst();
}

function checktime() {
    var i = time % 100;
    var j;
    if (i >= 60) {
        time += parseInt(i / 60) * 40;
    }
    i = time % 100;
    j = parseInt(time / 100);
    document.getElementById("time").value = (j < 10 ? "0" + j : j) + ":" + (i < 10 ? "0" + i : i);
}

function gameover() {
    document.getElementById("v").pause();
    document.getElementById("restart").style.visibility = "visible";
}

function checkst() {
    if (hp == 0 || sp == 0) {
        gameover();
    }      
    switch(hp){
        case 1:{
             document.getElementById("h1").style.visibility = "hidden";
             document.getElementById("h2").style.visibility = "hidden";
            document.getElementById("h3").style.visibility = "visible";
            break;
        }
        case 2:{
            document.getElementById("h1").style.visibility = "hidden";
            document.getElementById("h2").style.visibility = "visible";
            document.getElementById("h3").style.visibility = "visible";
            break;
        }
        case 3:{
            document.getElementById("h1").style.visibility = "visible";
            document.getElementById("h2").style.visibility = "visible";
            document.getElementById("h3").style.visibility = "visible";
            break;
        }
    }
    switch(sp){
        case 1:{
            document.getElementById("s1").style.visibility = "hidden";
            document.getElementById("s2").style.visibility = "hidden";
            document.getElementById("s3").style.visibility = "visible";
            break;
        }
        case 2:{
            document.getElementById("s1").style.visibility = "hidden";
            document.getElementById("s2").style.visibility = "visible";
            document.getElementById("s3").style.visibility = "visible";
            break;
        }
        case 3:{
            document.getElementById("s1").style.visibility = "visible";
            document.getElementById("s2").style.visibility = "visible";
            document.getElementById("s3").style.visibility = "visible";
            break;
        }
    }
}

function start(){
    fullScreen();
    document.getElementById("start").style.visibility = "hidden";
    act();
} 

function act(){
    document.getElementById("v").play();
    switch(stage){
        case 1 : s1(); beginst(); break;
        case 2: s2(); break;
        case 3: s3(); break;
        case 4: s4(); break;
        case 5: s5(); break;
        case 6: s6(); break;
        case 7: s7(); break;
        case 8: s8(); break;
        case 9: s9(); break;
        case 10: s10(); break;
    }
}

function s1(){
    if(166<=document.getElementById("v").currentTime){
        document.getElementById("v").pause();
        show( );
        document.getElementById("b1").onclick = function () { ans=1; choice(); this.onclick = null; };
	    document.getElementById("b2").onclick = function () { ans=2; choice(); this.onclick = null; };
    }
    else{  
           setTimeout(s1,1000);  
    }
} 
 
function s2(){
    switch(ans){
        case 1:{
            if(14<=document.getElementById("v").currentTime){
                  hp-=1;
                 checkst();
                 time+=330; 
                checktime();
                setTimeout(choice,1500);
            }  
            else{
                setTimeout(s2,1000 );
            }
            break;
        } 
        case 2:{
            if(24<=document.getElementById("v").currentTime){
                sp-=1;
                 checkst();
                 time+=200; 
                checktime();
                setTimeout(choice,1500);
            }  
            else{
                setTimeout(s2,1000 );
            }
            break;
        } 
    }
}

function s3(){
    if(28<=document.getElementById("v").currentTime){
        setTimeout(choice,2000);
    } 
    else{   
        setTimeout(s3,1000 );
    }
} 
 
function s4(){
    if(41<=document.getElementById("v").currentTime){
        document.getElementById("v").pause();
        show( );
         document.getElementById("b1").style.top = "50%";
    document.getElementById("b2").style.top = "60%";
    document.getElementById("b1").onclick =   function () { ans=1; choice(); this.onclick = null; };
    ument.getElementById("b2").onclick = function () { ans=2; choice(); this.onclick = null; };
    }
    else{  
    setTimeout(s4,1000);
    }
}
     

function s5(){
    switch(ans){
        case  1:{
             if( 35<=document.getElementById("v").currentTime){
                 sp-=1;
                 checkst(); 
                time+=100;
                checktime();
                setTimeout(choice,1500);
            }
            else{ 
                setTimeout(s5,1000);
            } 
            break; 
        }
        case 2:{
            if(18<=document.getElementById("v").currentTime){
                 time+=30;
                 checktime(); 
                setTimeout(choice,1500);
            }
            else{ 
                setTimeout(s5,1000);
            } 
            break; 
        }
    }
}

function s6(){
    if(6<=document.getElementById("v").currentTime){
        setTimeout(choice,1500);
    }    
    else{ 
        setTimeout(s6,1000);
    } 
} 

function s7(){
    if(28<=document.getElementById("v").currentTime){
        document.getElementById("v").pause();
         show(); 
        document.getElementById("b1").style.top="45%";
        document.getElementById("b2").style.top = "55%";
        document.getElementById("b3").style.top = "65%"; 
        document.getElementById("b3").style.visibility = "visible";
        document.getElementById("b1").onclick =   function () { ans=1; choice(); this.onclick = null; };
        document.getElementById("b2").onclick = function () { ans=2; choice(); this.onclick = null; };
        document.getElementById("b3").onclick = function () { ans = 3; choice(); this.onclick = null; };
    }  
    else{  
        setTimeout(s7,1000);
    } 
} 

function s8(){
    switch(ans){
        case  1:{
             if( 6<=document.getElementById("v").currentTime){
                 sp-=1;
                  hp-=1; 
                checkst();
                time+=30;
                checktime();
                setTimeout(choice,1500);
            }
            else{ 
                setTimeout(s8,1000);
            } 
            break; 
        }
        case 2:{
            if(25<=document.getElementById("v").currentTime){
                 sp+=1;
                 hp+=1; 
                checkst();
                time+=30;
                checktime();
                setTimeout(choice,1500);
            }
            else{ 
                setTimeout(s8,1000);
            } 
            break; 
        }
        case 3:{
            if(5<=document.getElementById("v").currentTime){
                 hp-=1;
                  checkst(); 
                time +=30;
                checktime();
                setTimeout(choice,1500);
            }
            else{ 
                setTimeout(s8,1000);
            } 
            break; 
        }
    }
}

function s9(){
    if(9<=document.getElementById("v").currentTime){
        choice();
    }    
    else{
        setTimeout(s9,1000);
    } 
} 

function s10(){
    if(87<=document.getElementById("v").currentTime){
        document.getElementById("v").pause();
        document.getElementById("end").style.visibility = "visible";
    }    
    else{
        setTimeout(s10,1000);
    } 
} 

function choice(){
    hide();
        switch(stage){
        case 1:{
            if(ans==1){
          
        document.getElementById("v").src="https://www.dropbox.com/s/n11g9g36klh9ybp/S2_Bank.mp4?raw=1";
         }
        else{
                document.getElementById("v").src="https://www.dropbox.com/s/ec2frwkhoq15hxv/S2_internet_banking.mp4?raw=1";
             } 
            break;
        }    
        case 2:{  
            document.getElementById("v").pause();
            hidest();
            document.getElementById("v").src="https://www.dropbox.com/s/55ta0zrz2ar6pm9/S3_son_banking.mp4?raw=1";
            break;
        }
        case 3:{
            document.getElementById("v").pause();
            showst();
            document.getElementById("v").src="https://www.dropbox.com/s/vdncuuojmjxemoa/S4.mp4?raw=1";
            break;  
        }
        case 4:{
            if( ans==1){
                document.getElementById("v").src="https://www.dropbox.com/s/g7zn1796bskqu7d/S4_app.mp4?raw=1";
            }
            else{  
                document.getElementById("v").src="https://www.dropbox.com/s/e6f6aikvlveuhk2/S4_terminal.mp4?raw=1";
            }
            break;
        }    
        case 5:{  
            document.getElementById("v").pause();
            hidest();
            document.getElementById("v").src="https://www.dropbox.com/s/6rpunhtvpuewp3l/S5_son_bus_ticket.mp4?raw=1";
            break;
        }
        case 6:{
            document.getElementById("v").pause();
            showst();
            document.getElementById("v").src="https://www.dropbox.com/s/4v8iyvpugsg191z/S6.mp4?raw=1";
            break;  
        }
        case 7:{
            if( ans==1){
                document.getElementById("v").src="https://www.dropbox.com/s/m57ocxcrv4b8hzy/S6_hasty_selection.mp4?raw=1";
            }
            else if(ans==2){  
                document.getElementById("v").src="https://www.dropbox.com/s/vm10b62cazqgqir/S6_considerably_select.mp4?raw=1";
            }
            else{
                 document.getElementById("v").src="https://www.dropbox.com/s/6d06zeeqf1qhoy4/S6_get_off_from_line.mp4?raw=1";
            }  
            break;
        }    
        case 8:{  
            document.getElementById("v").pause();
            hidest();
            document.getElementById("v").src="https://www.dropbox.com/s/ld2t43obzgynaj8/S7_son_burgerking.mp4?raw=1";
            break;
        }
        case 9:{
            if( time>1100){
                document.getElementById("v").src="https://www.dropbox.com/s/5y1h1o7k0zf3cbl/S10_ending_night.mp4?raw=1";
            }
            else if(time>1000){  
                document.getElementById("v").src="https://www.dropbox.com/s/79klda1l16b02qy/S10_ending_evening.mp4?raw=1";
            }
            else{
                 document. getElementById("v").src="https://www.dropbox.com/s/1bw3qb875xs1shf/S10_ending_on_time.mp4?raw=1";
            }  
            break;
                

            }   
    
    }
    stage+=1;
    if(hp == 0 || sp == 0) gameover();
    else act();
}
