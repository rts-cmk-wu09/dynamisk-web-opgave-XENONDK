document.addEventListener("DOMContentLoaded", function () {

    // slå dig løs her... 

    // hero start
    function heroFunction() {
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

    }
    heroFunction()
    // hero end


    // service start
    services.forEach(element => {
        let container = document.createElement("div")
        let title = document.createElement("h1")
        let hyperLink = document.createElement("a")
        let serviceP = document.createElement("p")
        let serviceImg = document.createElement("img")

        serviceImg.src = element.illustration
        title.textContent = element.headline
        hyperLink.href = "#"
        // spørg lukas hvad #! betyder igen
        hyperLink.innerHTML = element.linktext
        serviceP.textContent = element.text

        container.appendChild(serviceImg)
        container.appendChild(title)
        container.appendChild(serviceP)
        container.appendChild(hyperLink)
        document.querySelector(".services").appendChild(container)
    })
    // service end


    // facilities start
    let facilitiesHeadline = document.createElement("h2")
    facilitiesHeadline.textContent = facilities.headline
    document.querySelector(".facilities").appendChild(facilitiesHeadline)

    facilities.options.forEach(element => {
        let container = document.createElement("div")
        let title = document.createElement("h1")
        let facilitiesP = document.createElement("p")
        let FacilitiesImg = document.createElement("img")

        FacilitiesImg.src = element.icon
        title.textContent = element.headline
        facilitiesP.textContent = element.text




        container.appendChild(FacilitiesImg)
        container.appendChild(title)
        container.appendChild(facilitiesP)

        document.querySelector(".facilities").appendChild(container)
    })
    // facilities end


    // sites start
    function siteFunction() {
        let OuterContainer = document.createElement("div")
        let OuterTitle = document.createElement("h1")
        let OuterP = document.createElement("p")
        let outerImg = document.createElement("img")

        OuterTitle.textContent = sites.headline
        OuterP.textContent = sites.text
        outerImg.src = sites.btnicon

        OuterContainer.appendChild(OuterTitle)
        OuterContainer.appendChild(OuterP)
        OuterContainer.appendChild(outerImg)
        document.querySelector(".sites").appendChild(OuterContainer)

        sites.places.forEach(element => {
            let Container = document.createElement("div")
            let Title = document.createElement("h1")
            let city = document.createElement("p")
            let imgCity = document.createElement("img")

            imgCity.src = element.img
            Title.textContent = element.name
            city.textContent = element.city


            Container.appendChild(imgCity)
            Container.appendChild(Title)
            Container.appendChild(city)
            document.querySelector(".sites").appendChild(Container)
        })
    }
    siteFunction()
    // sites end


    // advantages start
    advantages.forEach(element => {
        let Container = document.createElement("div")
        let Title = document.createElement("h1")
        let paragraph = document.createElement("p")
        let img = document.createElement("img")

        img.src = element.icon
        Title.textContent = element.headline
        paragraph.textContent = element.text


        Container.appendChild(img)
        Container.appendChild(Title)
        Container.appendChild(paragraph)
        document.querySelector(".advantages").appendChild(Container)
    })

    // advantages end
    function footerFunction() {
        let footerCreation = document.createElement("footer")
        footerCreation.setAttribute("class", "footer")
        document.body.appendChild(footerCreation)
        
        let OuterContainer = document.createElement("div")
        let OuterTitle = document.createElement("h1")
        let OuterP = document.createElement("p")
        


        OuterTitle.textContent = footer.headline
        OuterP.textContent = footer.slogan
        

        OuterContainer.appendChild(OuterTitle)
        OuterContainer.appendChild(OuterP)
        
        document.querySelector("footer").appendChild(OuterContainer)

        footer.footerNavigation.forEach(element => {
            let Container = document.createElement("div")
            let Title = document.createElement("h1")
            let firstLine = document.createElement("p")
            let secondLine = document.createElement("p")
            let thirdLine = document.createElement("p")
            let fourthLine = document.createElement("p")
            
            Title.textContent = element.title
            firstLine.textContent = element.textOne 
            secondLine.textContent = element.textTwo
            thirdLine.textContent = element.textThree
            fourthLine.textContent = element.textFour

            Container.appendChild(Title)
            Container.appendChild(firstLine)
            Container.appendChild(secondLine)
            Container.appendChild(thirdLine)
            Container.appendChild(fourthLine)
            
          
            document.querySelector(".footer").appendChild(Container)
        })
    }

    
    footerFunction()
    // footer start


    // footer end
    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut