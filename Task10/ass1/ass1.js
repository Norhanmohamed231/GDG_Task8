let input = prompt("Print Number From - To","Example:5-20");
let parts=input.split("-")
console.log(parts)
let num1=parts[0].trim();
let num2=parts[1].trim();

let start=Math.min(num1,num2)
let end=Math.max(num1,num2)
let numbers=document.querySelector("#numbers")

let Counter=function(){
    let result="";
    for(let i=start;i<=end;i++){
        console.log (i);
         result+=i+"<br>";
    }
    numbers.innerHTML=result;
}
Counter();



