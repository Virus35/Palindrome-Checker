let input=document.querySelector("input");
let button=document.querySelector("button");
let special=document.querySelector(".result .special");
let normal=document.querySelector(".result .normal");

button.addEventListener("click",(e)=>{
    let save=input.value;
    let palin="";
    for(let i=save.length-1;i>=0;i--){
        palin+=save[i];
    }
    console.log(save,palin);
    if(input.value==""){
        alert("please fill out something");
    }
    else if(String(save)==String(palin)){
        special.textContent=`"${save.toUpperCase()}"😍`;
        normal.textContent=` is a palindrome.`;
    }
    else{
        special.textContent=`"${save.toUpperCase()}"😦`;
        normal.textContent=` is a not a palindrome.`;
    }
})