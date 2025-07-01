// assignment 1
let myNumbers = [1,2,3,4,5] ;
let [,,,,a] = myNumbers ;

console.log("assignment 1")
console.log(a) ;

//assignment 2
let mySkills = ['HTML','CSS','JS',['PHP','Python',['Django','Laravel']]];
let [A,b,c,[d,e,[f,g]]]= mySkills ;

console.log("assignment 2")
console.log(`My Skills : ${A}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

//assignment 3
let arr1 = ['Ahmed','Sameh','Sayed'];
let arr2 = ['Mohamed','Gamal','Amir'];
let arr3 = ['Haytham','Shady','Mahmoud'];
let [B,,] = arr1;
let [C,,] =arr2;
let [,E,] =arr3;

console.log("assignment 3")
console.log(`My best friends :${E},${C},${B}`)
