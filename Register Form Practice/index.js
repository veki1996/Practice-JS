//VJEZBA POSLIJE ŠESTE LEKCIJE  


// let obj = [{
//     name:"Bojan",
//     laseName:"Vecernovic",
//     DateOfBirth: new Date(1996, 03, 04)
// }];

// sessionStorage.setItem("login", JSON.stringify(obj))
// let container = document.querySelector("#container")

// const login=(e)=>{
//   e.preventDefault()
//   let UserName = document.querySelector("#username-input").value
//   let pasword = document.querySelector("#password-input").value
//   if(UserName.length > 3 && pasword.length >3 ){
//     sessionStorage.setItem('loggedIn', '1');
//     showPersons()
//   }else{
//     alert("unesite podatek")
//   }
// }


// const showPersons=()=>{
//   container.innerHTML = " "
//   let users = JSON.parse(sessionStorage.getItem("login"))
//   for(let user of users){
//     container.innerHTML +=user.name +" " + user.laseName + " " + user.DateOfBirth
//   }
//   container.innerHTML += `<button onclick="showaddPerson()">add person</button>`
// }

// const showaddPerson=()=>{
//   container.innerHTML = `<form onsubmit="addPerson(event)">
//                               <input type="text" placeholder="First Name" id="first-name-input">
//                               <input type="text" placeholder="Last Name" id="last-name-input">
//                               <input type="date" id="date-input">
//                               <input type="submit" value="Add Person">
//                             </form>`

// }
// const addPerson=(event)=>{
//   event.preventDefault()

//   let FirstName = document.querySelector("#first-name-input").value
//   let lastName = document.querySelector("#last-name-input").value
//   let date = document.querySelector("#date-input")
//   if(FirstName !== " " && lastName !== " " && date !== " "){
//     obj.push({
//       name:FirstName,
//       laseName:lastName,
//       DateOfBirth:date
//     });
//     sessionStorage.setItem('persons', JSON.stringify(obj));
//     showPersons()
//   }


// }
// if (sessionStorage.getItem('loggedIn')) {
//   let personsStr = sessionStorage.getItem('obj');
//   persons = personsStr ? JSON.parse(personsStr) : obj;
//   showPersons();
// }

// let objekat = [
//   {
//        email:"bojan.vecernovic@gmail.com",
//        password:"12345",
//        repeatPassword:"12345"
// }
// ]

// sessionStorage.setItem("Users", JSON.stringify(objekat))

// const register=(event)=>{
//   event.preventDefault()
//   let emails = document.querySelector("#email").value
//   let pasword = document.querySelector("#psw").value
//   let repeatPasword = document.querySelector("#psw-repeat").value

//   if(emails.length > 3 && pasword.length> 3 ){
//     objekat.push({
//       email:email,
//       password:pasword,
//       repeatPassword:repeatPasword
//     })
//    sessionStorage.setItem("Users", JSON.stringify(objekat))

//   }
//   let users = JSON.parse(sessionStorage.getItem("Users"))
//   if( users.find(x=> x.email == emails)){
//     alert("mail postoji")
//   }
// }



 // ISTO KAO NA KUSU 

// let inputs = document.querySelectorAll("input")
// let errors = {
//   "ime_prezime":[],
//   "Korisnicko_ime":[],
//   "email":[],
//   "lozinka":[],
//   "ponovi_lozinku":[]
// }

// for(let input of inputs){
//   input.addEventListener("change", (event)=>{
//     let currentInput = event.target
//     let inputValue = currentInput.value
//     let inputName = currentInput.getAttribute("name")
//    if(inputValue.length > 4 ){
//      errors[inputName] =[]
//     switch(inputName){
//       case "ime_prezime":
//         let validation= inputValue.trim()
//        validation =  validation.split(" ")
//       if(validation.length<2){
//         errors[inputName].push("moras napisati i ime i prezime ")
//       }
//       break
//       case "email":
//         if(!validateEmail(email)){
//         errors[inputName].push("neispravna email adresa")
//         }
//         break;
//         case "ponovi_lozinku":
//           let lozinka = document.querySelector(`input[name="lozinka"]`).value
//           if(inputValue !== lozinka){
//             errors[inputName].push("lozinke se ne poklapaju")
//           }
//           break;
//     }
//    }else{
//     errors[inputName]= ["polje ne moze imati manje od 5 karaktera"]
//    }
//    populateErrors()
//   })
// }
// const populateErrors=()=>{
//   for(let element of document.querySelectorAll("ul")){
//     element.remove()
//   }
//   for(let key of Object.keys(errors)){
//     let input = document.querySelector(`input[name="${key}"]`)
//     let parentElement = input.parentElement;
//     let errorsElement = document.createElement('ul')
//     parentElement.appendChild(errorsElement)
//     console.log(parentElement)

//     errors[key].forEach(error => {
//       let li = document.createElement("li")
//       li.innerText = error
//       errorsElement.appendChild(li)
//     });
//   }

// }

// const validateEmail = email =>{
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
//   return true
//  }else{
//    return false
//  }

// }

 

let inputs = document.querySelectorAll("input")

for(let input of inputs){
  input.addEventListener("change", (event)=>{
    let currentInput = event.target
    let inputValue = currentInput.value
    let inputName = currentInput.getAttribute("name")
    
    let ime = document.querySelector("#ime")
    let K_ime = document.querySelector("#K_ime")
    let emails = document.querySelector("#emails")
    let lozinka = document.querySelector("#lozinka")
    let ponovi_lozinke = document.querySelector("#ponovi_lozinke")
    
    switch(inputName){
      case "ime_prezime":
        let validation = inputValue.trim()
        validation = validation.split(" ");
        if(validation.length<2){
          ime.innerText = "moras napisati i ime i prezime"
        }else{
          ime.innerText = ""
        }
    if(inputValue.length<4){
    ime.innerText = "Mora imati vise od 4 karaktera"
    }else{
      ime.innerText = ""
    }
    break;
    case "Korisnicko_ime":
      if(inputValue.length<4){
        K_ime.innerText = "Mora imati vise od 4 karaktera"
        }else{
          K_ime.innerText = ""
        }
        break;
        case "email": 
        if(!validateEmail(email)){
              emails.innerText = "Neispravna email adresa"
               }else{
                 emails.innerText = ""
               }
              break;
        case "ponovi_lozinku":
          let sifra = document.querySelector("#lozinka")
          let ponoviSifru = document.querySelector("#ponovi_lozinku")
              sifra = sifra.value
              ponoviSifru = ponoviSifru.value
            if(sifra !== ponoviSifru){
              ponovi_lozinke.innerText = "sifre se ne poklapaju"
            }else if (sifra == ponoviSifru){
              ponovi_lozinke.innerText = ""
            }
              
            
          break;
    }
  }
)}


 const validateEmail = email =>{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
   return true
 }else{
  }
 }