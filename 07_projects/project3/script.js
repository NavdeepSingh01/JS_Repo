const clock=document.querySelector('#clock')

setInterval(()=>{
    let newDate=new Date()
    let time=newDate.toLocaleTimeString();
    clock.innerHTML=time;
},1000)
