
// Insertion des images par une boucle

console.log(document.querySelector(".item:nth-child(2)"));
for(let i = 1; i<13; i++){
    document.querySelector(`.item:nth-child(${i})`).style.backgroundImage = `url(images/images-portfolio/img-portfolio${i}.jpg)`
}