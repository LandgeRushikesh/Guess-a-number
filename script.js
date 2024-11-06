let number = document.querySelector("#ip")
let btnSubmit = document.querySelector(".submit")
let display = document.querySelector(".res")
let attempt = document.querySelector(".attempts")
let replay = document.querySelector(".replay")

let attempts = 10

let generateNum = ()=>{
let min = 1
let max = 100
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
/*
Math.floor()=rounds the value to nearest integer
Math.random()= generates random numbers between 0 to 1
max-min+1 = gives number between range 1 to 100 
                math.random()=0.2
            e.g. 100-1+1=100
                0.2*100
                = 20
+ min = this makes sure the number starts from 1 not 0.
        e.g. if math.random()=0.0
            then randomInt = 1
*/
return randomInt
}

let generatedNum = generateNum()
let winner = false
let checkRes = (num) =>{
    if(num == "" || isNaN(num) || num<1 || num>100){
        display.innerText = `Please enter a valid number between 1 to 100`
    }
    else if(num==generatedNum){
        display.innerText = `You Won!!!,You have taken ${10-attempts} attempts!!!`
        winner = true
    }
    else if(num>generatedNum){
        display.innerText = `The number is lesser than what you have guessed!!!`
    }
    else if(num<generatedNum){
        display.innerText = `The number is greater than what you have guessed!!!`
    }
}

let getNumber=()=>{
    let num = number.value
    checkRes(num)
}

btnSubmit.addEventListener("click",()=>{
    attempts--
    if(attempts>0 && !winner){
        getNumber()
    }
    attempt.innerText = `Attempts Remaining:${attempts}`
    number.value = ""
    if(attempts<=0 || winner){
        reset()
    }
})

let reset=()=>{
    if(!winner){
        display.innerText = `You Lost,the number was ${generatedNum}!!!`
    }
    btnSubmit.classList.add("none")
    replay.classList.remove("none")
}


replay.addEventListener("click",()=>{
    attempts = 10
    display.innerText = `Start the game!!!`
    attempt.innerText = `Attempts Remaining:${attempts}`
    number.value = ""
    replay.classList.add("none")
    btnSubmit.classList.remove("none")
    generatedNum = generateNum()
    console.log(generatedNum)
    winner = false
})