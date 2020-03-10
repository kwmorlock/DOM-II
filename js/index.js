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


//first
let bodyColor = document.querySelector("body")

bodyColor.addEventListener("keyup", event => event
.target.style.backgroundColor = "hotpink")

//second


let pColor = document.querySelector("p")

pColor.addEventListener("dblclick", event => event
.target.style.color = "purple")

//third

let pColors = document.querySelector("p")

pColors.addEventListener("click", event => event
.target.style.backgroundColor = "orange")

//fourth


let logos = document.querySelector("h1.logo-heading");
logos.addEventListener("dblclick", event => event 
.target.style.backgroundColor = "red")

//fifth


let logo = document.querySelector("h1.logo-heading");
logo.addEventListener("wheel", event => event 
.target.style.color = "blue")

//sixth

let mainImage = document.querySelector(".intro img")
this.addEventListener("drag", event => {
  
    mainImage.setAttribute("src", "img/boom.png")
    })

//seventh

    let destinationColor = document.querySelector("h4");
destinationColor.addEventListener("mouseover", event => event 
.target.style.color = "lightblue")

// eighth 


let bColor = document.querySelector("h4");
bColor.addEventListener("mousemove", event => event 
.target.style.backgroundColor = "green")

//ninth

let hColor = document.querySelector("h2");
hColor.addEventListener("mousemove", event => event 
.target.style.backgroundColor = "black")

//tenth

let haColor = document.querySelector("h2");
haColor.addEventListener("mouseup", event => event 
.target.style.color = "white")


