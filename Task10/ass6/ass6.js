let font = document.getElementById("font");
let color = document.getElementById("color");
let size = document.getElementById("size");

font.addEventListener('change',()=>{
    document.body.style.fontFamily=font.value ;
    localStorage.setItem("font",font.value);
   
})

size.addEventListener('change',()=>{
    document.body.style.fontSize=size.value + 'px';
    localStorage.setItem("size",size.value);
})
color.addEventListener('change',()=>{
    document.body.style.color=color.value ;
    localStorage.setItem("color",color.value);
})

window.onload=function(){
if(localStorage.font){
    font.value=localStorage.font;
    document.body.style.fontFamily=localStorage.font;
}
if(localStorage.size){
    size.value=localStorage.size;
    document.body.style.fontSize=localStorage.size + 'px';
}
if(localStorage.co){
    color.value=localStorage.color;
    document.body.style.color=localStorage.color;
}
}





