// Slide de la page d'accueil

arrayPictures = ["img1Slide.jpg", "img2Slide.jpg", "img3Slide.jpg"]
cursor = 0

const arrowLeft = document.querySelector(".fleche:nth-child(1)")

const arrowRight = document.querySelector(".fleche:nth-child(2)")

const pictureSlide = document.querySelector("div:nth-child(2)")

console.log(arrowLeft, arrowRight, pictureSlide);

arrowRight.addEventListener("click", ()=>{
    if (cursor + 1 == 3) {
        cursor = 0
        pictureSlide.style.backgroundImage = `url(/images/${arrayPictures[cursor]})`;

    }
    else{
        cursor = cursor + 1
        pictureSlide.style.backgroundImage = `url(/images/${arrayPictures[cursor]})`;

    }
    console.log(cursor);
})

arrowLeft.addEventListener("click", ()=>{
    if (cursor - 1 == -1) {
        cursor = 2
        pictureSlide.style.backgroundImage = `url(/images/${arrayPictures[cursor]})`;

    }
    else{
        cursor = cursor - 1
        pictureSlide.style.backgroundImage = `url(/images/${arrayPictures[cursor]})`;

    }
    console.log(cursor);
})