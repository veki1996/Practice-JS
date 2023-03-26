let input = document.querySelector("#input-fild")
let put = document.querySelector("#put")
let newList = document.querySelectorAll(".radi")
const addsomething=()=>{
  let inputValue = input.value
  put.innerHTML +=  `<li class="newList" >`  +  inputValue + `<button onclick="remove(this)">X</button>`+ `</li>`


}


const remove=(el)=>{
  el.parentElement.remove();

 
}

for(let list of newList){
 list.addEventListener("click", (event)=>{
  let jedan = event.target
  if(jedan.style.textDecoration == "line-through"){
    jedan.style.textDecoration="none"
  }else{
    jedan.style.textDecoration="line-through"
  }
 })
}



put.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


