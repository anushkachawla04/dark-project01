let btn =document.getElementById("btn");
let currmode="light"; //dark
btn.addEventListener("click",() =>{
    // console.log("YOU ARE TRYING TO chnage mode")
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.background="black"
        console.log("dark")

    }
    else{
        currmode="light";
        document.querySelector("body").style.background="white"
        console.log("light")


    }
    
})