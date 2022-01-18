// Slide de la page d'accueil

arrayPictures = ["img1Slide.jpg", "img2Slide.jpg", "img3Slide.jpg"]
cursor = 0

const arrowLeft = document.querySelector(".fleche:nth-child(1)")

const arrowRight = document.querySelector(".fleche:nth-child(2)")

const pictureSlide = document.querySelector(".pictures")

console.log(arrowLeft, arrowRight, pictureSlide);

arrowRight.addEventListener("click", ()=>{
    if (cursor + 1 == 3) {
        cursor = 0
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    else{
        cursor = cursor + 1
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    console.log(cursor);
})

arrowLeft.addEventListener("click", ()=>{
    if (cursor - 1 == -1) {
        cursor = 2
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    else{
        cursor = cursor - 1
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    console.log(cursor);
})

// Animation

arrowRight.addEventListener("mouseover", ()=>{

        pictureSlide.style.transform = "translateX(1%)"

})

arrowRight.addEventListener("mouseleave", ()=>{

    pictureSlide.style.transform = "translateX(0%)"

})

arrowLeft.addEventListener("mouseover", ()=>{

    pictureSlide.style.transform = "translateX(-1%)"

})

arrowLeft.addEventListener("mouseleave", ()=>{

pictureSlide.style.transform = "translateX(0%)"

})

arrowLeft.addEventListener("click", ()=>{
    if (cursor - 1 == -1) {
        cursor = 2
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    else{
        cursor = cursor - 1
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    console.log(cursor);
})

// click sur le menu

const menu = document.querySelector("header")
menuActive = false

menu.addEventListener("click", ()=>{
    if(!menuActive){
        menu.style.height = "400px"
        menuActive = true
    }

    else{
        menu.style.height = "120px"
        menuActive = false
    }
})

menu.addEventListener("mouseover", ()=>{
    menu.style.height = "400px"
})


menu.addEventListener("mouseleave", ()=>{
    menu.style.height = "120px"
})

document.addEventListener("scroll", () => {
    menu.style.height = "120px"
    menuActive = false
})