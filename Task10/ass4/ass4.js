let div=document.getElementById("div").innerText;
console.log(div)
let counter=setInterval(function(){
    
    div =div-1
    console.log(div)
    document.getElementById("div").innerHTML=div;
    if(div===0){
        location.href="https://elzero.org"
    }
},1000)


