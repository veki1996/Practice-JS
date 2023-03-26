menu.addEventListener("click", ()=>{
    let menu = document.querySelector("#menu");
    let header = document.querySelector(".header ul")

    if(menu.innerText == "MENU"){
  header.style.display="block"
  menu.innerText = "CLOSE"
    }
    else if(menu.innerText == "CLOSE"){
        header.style.display="none"
        menu.innerText = "MENU"
    }
})


let rightBtn = document.querySelector("#right-btn")
let leftBtn = document.querySelector("#left-btn")
let pictures = document.querySelectorAll(".slider-images img")
imgNum = 0
rightBtn.addEventListener("click", ()=>{
    
    picturesNone()
    imgNum++ 
    if(imgNum == pictures.length){
        imgNum = 0
        
    }
    pictures[imgNum].style.display="block"
   
})
leftBtn.addEventListener("click", ()=>{
    
    picturesNone()
    imgNum --
    if(imgNum == -1){
        imgNum = pictures.length -1
    }
    pictures[imgNum].style.display="block"
})

const picturesNone=()=>{
    for(let img of pictures){
        img.style.display="none"
    }
}

// let sve = document.querySelector("#sve")
// let portfolioItems = document.querySelectorAll(".portfolio-single-item")
// let restorani = document.querySelector("#restorani")
// let hoteli = document.querySelector("#hoteli")
// let korporacije = document.querySelector("#korporacije")
// let ostalo = document.querySelector("#ostalo")
// let Benzinske = document.querySelector("#Benzinske")
// let moteli = document.querySelector("#moteli")

// sve.addEventListener("click", ()=>{
//    for(let item of portfolioItems){
//        item.style.display="none"
//        if(sve.innerText == "Sve"){
//         item.style.display="block"
//     }
//    }
  
// })

// restorani.addEventListener("click", ()=>{
//     for(let item of portfolioItems){
//         item.style.display="none"
//         if(item.getAttribute("data-category").includes("restorani")){
//             item.style.display="block"
//         }
//     }
// })
// hoteli.addEventListener("click", ()=>{
//     for(let item of portfolioItems){
//         item.style.display="none"
//         if(item.getAttribute("data-category").includes("hoteli")){
//             item.style.display="block"
//         }
//     }
// })


// korporacije.addEventListener("click", ()=>{
//     for(let item of portfolioItems){
//         item.style.display="none"
//         if(item.getAttribute("data-category").includes("korporacije")){
//             item.style.display="block"
//         }
//     }
// })

// ostalo.addEventListener("click", ()=>{
//     for(let item of portfolioItems){
//         item.style.display="none"
//         if(item.getAttribute("data-category").includes("ostalo")){
//             item.style.display="block"
//         }
//     }
// })

// Benzinske.addEventListener("click", ()=>{
//     for(let item of portfolioItems){
//         item.style.display="none"
//         if(item.getAttribute("data-category").includes("Benzinske")){
//             item.style.display="block"
//         }
//     }
// })

// moteli.addEventListener("click", ()=>{
//     for(let item of portfolioItems){
//         item.style.display="none"
//         if(item.getAttribute("data-category").includes("moteli")){
//             item.style.display="block"
//         }
//     }
// })

let btns = document.querySelectorAll(".portfolio-categories button")
let portfolioItems = document.querySelectorAll(".portfolio-single-item") 
for(let btn of btns){
    btn.addEventListener("click", ()=>{
        let categorys = btn.getAttribute("data-category")
        for(let item of portfolioItems){
            item.style.display= "none"
        }

        if(btn.innerText == "Sve"){
            for(let item of portfolioItems){
                item.style.display= "block"
                
            }
        }
            for(let item of portfolioItems){
        if(item.getAttribute("data-category").includes(categorys)){
            item.style.display="block"
        }
    }
    })
}


let modal = document.querySelector("#modal")
let popupModal =document.querySelector(".popup-modal")
let overlay = document.querySelector(".overlay")
let closeModal= document.querySelector("#closeModal")
modal.addEventListener("click", ()=>{
    popupModal.style.display="block"
    overlay.style.display="block"
})

closeModal.addEventListener("click", ()=>{
    popupModal.style.display="none"
    overlay.style.display="none"
})

let popupLiv = document.querySelector(".popup-liv")
let liv = document.querySelector("#liv")

liv.addEventListener("click", ()=>{
    alert("da li ste sigurni da zelite da napustite stranicu")
    popupLiv.style.display = "block"
    overlay.style.display="block"

})

let closeModalBtn = document.querySelector("#closeModalBtn")

closeModalBtn.addEventListener("click", ()=>{
    popupLiv.style.display = "none"
    overlay.style.display="none"
})