setTimeout(function(){
    let popup=document.createElement('div')
    popup.id="popup";
    popup.innerHTML=`<h1>welcome</h1>
    <p>Welcome To Elzero Web School</p>
    <button onclick=closepopup()>X<button>`;
    
    document.body.appendChild(popup)
},5000)

function closepopup(){
const pop=document.getElementById("popup")
if(pop){
    pop.remove()
}
}


