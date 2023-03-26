let slike = document.querySelectorAll('.imgSlider img')

for (let slika of slike) {
    slika.addEventListener('click', (event) => {
        let TaSlika = event.target
        let URL = TaSlika.getAttribute("src")
        document.querySelector('.glavnaSL').src = URL
        let a = document.querySelectorAll('.imgSlider img')
        for (let d of a) {
            d.style.borderStyle = 'none'
            d.style.filter = "none"
        }
        if (TaSlika) {
            TaSlika.style.borderStyle = "solid"
            TaSlika.style.filter = "grayscale(100%)"
        }
    })
}

const dodaj = (element) => {
    
    let mainEl = element.closest('.shopingText')
    let name = mainEl.querySelector('.name').innerHTML
    let price = mainEl.querySelector('.prices').innerHTML
    let prices = price.substring(1)
    let convert = parseInt(prices)
    let numOfatricle = document.querySelector('#number').innerHTML
    let finallNum = parseInt(numOfatricle)
    let cijena = convert * finallNum
    let div = document.querySelector('.put')
    div.innerHTML = ` <img class="cardImg"  src="images/slika1.jpg"><div class="d"><div class="eks"><p>${name} <p class="dellBTN" onclick="dellB()">X</p></p></div><br><p>${price} X ${finallNum} <b>${cijena}$</b></p></div>`
    let NuminCard = document.querySelector('.numInCard')
    let value = NuminCard.innerHTML
    value ++
    document.querySelector(".numInCard").innerHTML = value
}

document.querySelector('.plus').addEventListener('click', () => {
    let input = document.querySelector('#number')
    let value = input.innerHTML
    value++

    document.querySelector('#number').innerHTML = value
})
document.querySelector('.minus').addEventListener('click', () => {
    let input = document.querySelector('#number')
    let value = input.innerHTML
    value--
    if (value < 0) {
        value = 0
    }
    document.querySelector('#number').innerHTML = value
})

document.querySelector('.korpa').addEventListener('click', () => {
    document.querySelector('.ceck').style.display = "block"
})
document.querySelector('.glavnaSL').addEventListener('click', () => {

})
let images = document.querySelectorAll('.imagesS')
let imgNum = 0
document.querySelector('.plusSlider').addEventListener('click', (e) => {
    displayNone()
    imgNum++
    if (imgNum === images.length) {
        imgNum = 0
    }
    images[imgNum].style.display = "block"

})
document.querySelector('.minusSlider').addEventListener('click', (e) => {
    displayNone()
    imgNum--
    if (imgNum < 0) {
        imgNum = images.length - 1
    }
    images[imgNum].style.display = "block"

})

const displayNone = () => {

    for (let img of images) {
        img.style.display = "none"
    }
}

document.querySelector(".iks").addEventListener('click',()=>{
    document.querySelector(".modalBTN").style.display="none"
})
document.querySelector('.glavnaSL').addEventListener('click',()=>{
    document.querySelector('.modalBTN').style.display="block"
})

dellB=()=>{
    let d = document.querySelector('.d')
    let img = document.querySelector('.cardImg')
    img.remove()
    d.remove()
    let NuminCard = document.querySelector('.numInCard')
    let value = NuminCard.innerHTML
    value = 0
    document.querySelector(".numInCard").innerHTML = value
}

const PicturesF=(element)=>{
    let mainEl = element.closest('.oderPic img')
    let name = element.getAttribute('name')
    let imageS = document.querySelectorAll('.imagesS')
    let images = document.querySelectorAll('.oderPic img')
    for(let img of images){
        img.style.filter="none"
        img.style.borderStyle="none"
    }
    for(let img of imageS){
        img.style.display = "none"
    }
   
    for(let img of imageS){
       if(img.getAttribute('name').includes(name)){
        img.style.display="block"
       }
    }
    mainEl.style.borderStyle="solid"
    mainEl.style.filter="grayscale(100%)"
}