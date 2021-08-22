let almdate=new Date(`1-1-1001 00:00:00`);
console.log(`alarm clock`);
let today=new Date();
// console.log(today);
document.getElementById("btn").addEventListener('click',inputtime);
function inputtime()
{
    // console.log(today);
    let time= today.getTime();
    let day=today.getDate();
    let month=today.getMonth();
    // console.log(month);
    let year=today.getFullYear();
    let option=document.getElementById("opt").value;
    // console.log(option);
    let min=document.getElementById("floatingTextarea").value;
    let regex=/[0-9]{2}/
    if(!regex.test(min)||min<0||min>59)
    {
        alert("Enter the minutes correctly");
        location.reload();
    }
    // console.log(min);
    let disp=document.getElementById('alarmsuccess');
    disp.innerHTML=`<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>ALARM set successfull</p>
    <hr>
  </div>`;
  setTimeout(() => {
      disp.innerHTML=``;
  }, 2000);
    let meri=document.getElementById("meri").value;
    // console.log(meri);
    if(meri==1)
    {
    almdate.setMonth(month);
    almdate.setDate(day);
    almdate.setFullYear(year);
    almdate.setHours(option);
    almdate.setMinutes(min);
    }
    else if(meri==2)
    {
        let x=parseInt(option);
        x=x+12;
        option=x.toString();
        almdate.setMonth(month);
        almdate.setDate(day);
        almdate.setFullYear(year);
        almdate.setHours(option);
        almdate.setMinutes(min);
    }
    setTimeout(() => {
        console.log("alarm triggered");
        let ad=new Audio('alarm.mp3');
        ad.play();
        
        let app=document.getElementById('container');
                app.innerHTML+=`<h1>It is ${almdate}</h1>`;
        app.innerHTML+=`<img src="hello.gif" alt="ALARM RINGING" style="margin:auto;width:400px;height:400px;">`;   
        app.innerHTML+=`<button type="button" class="btn btn-warning" id="newalarm">STOP (add another alarm)</button>`;
        document.getElementById('newalarm').addEventListener('click',()=>{
            ad.pause();
            location.reload();
        })
    }, almdate-today);
    // console.log(almdate);
}
