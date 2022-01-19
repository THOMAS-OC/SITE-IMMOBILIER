// Slide de la page d'accueil
menuActive = false
arrayPictures = ["img1Slide.jpg", "img2Slide.jpg", "img3Slide.jpg"]
cursor = 0
console.log(menuActive);



// click sur le menu

const menu = document.querySelector("header")
console.log(menu);

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
    menuActive = true
})


menu.addEventListener("mouseleave", ()=>{
    menu.style.height = "120px"
    menuActive = false
})

document.addEventListener("scroll", () => {
    menu.style.height = "120px"
    menuActive = false
})