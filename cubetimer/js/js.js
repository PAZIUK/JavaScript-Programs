"use strict"
const sides = ["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"]
const scrabmleBlock = document.querySelector(".container .sub-container .scramble .code")
const timerBlock = document.querySelector(".container .sub-container .timer")

window.addEventListener("DOMContentLoaded",scrabmle)

let isAct = false
document.addEventListener("keydown",e=>{
    if(e.code == 'Space'){
        if(!isAct){
            timer("red")
        }
    }
})
document.addEventListener("keyup",e=>{
    if(e.code == 'Space'){
        if(isAct){
            isAct = !isAct
            scrabmle()
        } else {
            timer("start")
            isAct = !isAct
        }
    }   
})

function scrabmle(){
    let scrabmleCode = ""
    let scrabmleCodePreset = []
    for (let i = 0; i < 25; i++) {
        let n = Math.floor(Math.random() * (36 - 1) + 1);
        if(n>18){n-=18}
        n--;
        if(scrabmleCodePreset.length>0){
            if(sides[n][0]!=scrabmleCodePreset[scrabmleCodePreset.length-1][0]){
                scrabmleCode += sides[n]+"  "
                scrabmleCodePreset.push(sides[n])
            } else {i--}
        } else {
            scrabmleCode += sides[n]+" "
            scrabmleCodePreset.push(sides[n])
        }
    }
    scrabmleBlock.textContent = scrabmleCode
}

function timer(cmd){
    if(cmd=="red"){
        timerBlock.classList.add("red")
    } else if(cmd=="start"){
        timerBlock.classList.remove("red")
        timerBlock.classList.add("green")
        setTimeout(()=>{timerBlock.classList.remove("green")},200)
        let timerCalc = 0;
        let ms;
        let sc;
        let mt;
        let timerWork = setInterval(()=>{
            timerCalc += 1
            timerCalc += ""
            if(timerCalc.substr(-4)=="6000"){
                timerCalc = +timerCalc - 6000 + 10000 +""
            }
            ms = timerCalc[timerCalc.length-2] ? timerCalc[timerCalc.length-2]+timerCalc[timerCalc.length-1] : "0"+timerCalc[timerCalc.length-1]
            if(timerCalc[timerCalc.length-3]){
                if(timerCalc[timerCalc.length-4]){
                    sc = timerCalc[timerCalc.length-4]+timerCalc[timerCalc.length-3]
                } else {
                    sc = "0"+timerCalc[timerCalc.length-3]
                }
            } else {
                sc = "00"
            }
            if(timerCalc[timerCalc.length-5]){
                if(timerCalc[timerCalc.length-6]){
                    if(timerCalc[timerCalc.length-7]){
                        mt = timerCalc[timerCalc.length-7]+timerCalc[timerCalc.length-6]+timerCalc[timerCalc.length-5]
                    } else {
                        mt = timerCalc[timerCalc.length-6]+timerCalc[timerCalc.length-5]
                    }
                } else {
                    mt = "0"+timerCalc[timerCalc.length-5]
                }
            } else {
                mt = "00"
            }
            timerBlock.querySelector(".miliseconds").textContent = ms
            timerBlock.querySelector(".seconds").textContent = sc
            timerBlock.querySelector(".minutes").textContent = mt
            timerCalc = +timerCalc
            if(timerCalc==1000000){
                isAct = false
                scrabmle()
            }
            if(!isAct){
                clearInterval(timerWork);
            }
        },10)
    }
}