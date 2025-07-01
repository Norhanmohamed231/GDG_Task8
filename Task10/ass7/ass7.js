let FirstName = document.querySelector(".first");
let SecondName = document.querySelector("#SecondName");
let Password = document.querySelector("#Password");
let SelectItem = document.querySelector("#SelectItem")

function data(FirstName,SecondName,Password){
    this.addEventListener('blur',()=>{
        sessionStorage.setItem("FirstName",FirstName.value)
        
        sessionStorage.setItem("SecondName",SecondName.value)
        sessionStorage.setItem("Password",Password.value)
    
    })
    
}
SelectItem.addEventListener('change',()=>{
    window.sessionStorage.setItem("SelectItem",SelectItem.value)
    
    
})

window.onload=function(){
    FirstName.value=sessionStorage.getItem("FirstName");
    SecondName.value=sessionStorage.getItem("SecondName");
    Password.value=sessionStorage.getItem("Password")
    SelectItem.value=sessionStorage.getItem("SelectItem");
}

data(FirstName,SecondName,Password)





