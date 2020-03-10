// Your code goes here

// homelink.addEvenListener(
//     'click',
//     () => {

//         console.log('the link got clicked');
//     }
// )

// document.querySelector('nav').addEventListener('click', () => {
//     console.log('the nav got clicked');
// })

// document.querySelector('header').addEventListener('click', () => {
//     console.log('Theheader got clicked');
// })

// document.body.addEventListener('click', (stuff) => {
//     console.log(stuff);
//     console.log('the body of the page got clicked');
// })

let bodyColor = document.querySelector("body")

bodyColor.addEventListener("keyup", event => event
.target.style.backgroundColor = "hotpink")


let pColor = document.querySelector("p")

pColor.addEventListener("dblclick", event => event
.target.style.color = "purple")

let logo = document.querySelector("h1.logo-heading");
logo.addEventListener("wheel", event => event 
.target.style.color = "blue")



