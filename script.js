//console.log('hi')

// const h1 = document.querySelector('h1')
// h1.style.color = "red"
// console.log(document.querySelector('h1'))
//const key = "It's a secret to everybody."
const messageSecret = 'Princess Zelda is a great sorcesress.'
localStorage.setItem("It's a secret to everybody.", messageSecret)
console.log(localStorage.getItem("It's a secret to everybody."))

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


let message = ""
if (isMorning){
    message = "Good Morning"
}
else if (isAfternoon){
    message = "Good Afternoon"
}
else if (isEvening) {
    message = "Good Evening"
}

/* document.getElementById('welcome').innerHTML = message */
document.querySelector('#welcome').innerHTML = message


