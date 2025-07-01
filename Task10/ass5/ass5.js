let div=document.getElementById("div").innerText;
console.log(div)
let counter=setInterval(function(){
    
    div =div-1
    console.log(div)
    document.getElementById("div").innerHTML=div;
    if(div===5){
        
        window.open("https://elzero.org","_blank","left=500 ,top=100,width=300,height=300")
    }
    if(div===0){
        clearInterval(counter)
    }
},1000)


