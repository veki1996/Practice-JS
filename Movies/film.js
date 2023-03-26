let allTotal =  0
let add = document.querySelector("#add")
const buttonf=(element)=>{
    let mainEl = element.closest(".single-card")
    let name = mainEl.querySelector(".tittle").innerText
    let price = mainEl.querySelector("h2").innerText
    let button = mainEl.querySelector("button")
    let total = document.querySelector("#total")
    price = price.slice(0,-1)
   add.innerHTML += `<p> KUPILI STE: ` + name + " " + parseInt(price) + "$" +`</p> <hr>`
   allTotal += parseInt(price)
   console.log(allTotal)
   button.innerText = "dodato"
   if(button.innerText == "dodato"){
       button.setAttribute("disabled", 'true')
      mainEl.style.backgroundColor ="#dddddd"
      
   }
   total.innerHTML = "TOTAL: "+  allTotal + "$"
}