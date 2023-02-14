document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 

    
    const createImg = document.createElement("img")
    createImg.src = hero.image
    
    const heroSection = document.querySelector(".hero")

    heroSection.appendChild(createImg)

    const createContainer = document.createElement("div")
    const headingOne = document.createElement("h1")
    const heroText = document.createElement("p")

    createContainer.appendChild(headingOne)
    headingOne.textContent = hero.headline

    createContainer.appendChild(heroText)
    heroText.textContent = hero.copy

    heroSection.appendChild(createContainer)

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut