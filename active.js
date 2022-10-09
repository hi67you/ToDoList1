let a=[];
const date=new Date();
const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var month= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
document.querySelector(".date h2").innerHTML=day[date.getDay()]+", "+date.getDate()+"-"+month[date.getMonth()]+"-"+date.getFullYear();

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.querySelector(".clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();

document.querySelector(".btn").addEventListener("click",function(){

    let a=document.querySelector("#todo").value;
    const b=document.createElement("p");
    const e=document.createElement("input");
    e.type="button";
    e.value="x";
    e.classList.add("delete_btn");
    

    //document.body.appendChild(b);
    //console.log(b);
    let c=document.querySelector(".list div");
    if(a==""){
        alert("Please type any value");
    }
    else{
        c.appendChild(b);
        c.appendChild(e);

        b.innerHTML=a;
    }
    e.addEventListener("click", function(){
        c.removeChild(b);
        c.removeChild(e);
    })
    document.querySelector("#todo").value="";
});

