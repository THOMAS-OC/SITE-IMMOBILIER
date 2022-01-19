const arrowLeft = document.querySelector(".fleche:nth-child(1)")

const arrowRight = document.querySelector(".fleche:nth-child(2)")

const pictureSlide = document.querySelector(".pictures")
console.log(document.title);

arrowRight.addEventListener("click", ()=>{
    if (cursor + 1 == 3) {
        cursor = 0
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
    else{
        cursor = cursor + 1
        pictureSlide.style.backgroundImage = `url(images/${arrayPictures[cursor]})`;

    }
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
})