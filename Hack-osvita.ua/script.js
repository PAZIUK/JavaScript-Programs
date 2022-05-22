function magic(){
 let n = document.querySelectorAll(`div.tasks-numbers#tasks-numbers span.number`).length
 let superArr = []
 for(let i=0;i<n;i++){
   let value = Math.ceil(Math.random() * 10)
   let number = i+1
   if(value>5){
      document.querySelector(`span.q${number}.number`).className = `q${number} number super`
    } else {
      document.querySelector(`span.q${number}.number`).className = `q${number} number bad`
    }
 }
  let blocksResult = document.querySelectorAll(".blue-block-test-results div")
  blocksResult[1].querySelector("strong").textContent = document.querySelectorAll(`span.number.super`).length
  blocksResult[2].querySelector("strong").textContent = Math.ceil(document.querySelectorAll(`span.number.super`).length / (n/100))+"%"
  blocksResult[3].querySelector("strong").textContent = (document.querySelectorAll(`span.number.super`).length * 2) + " хв."
  return false
}
