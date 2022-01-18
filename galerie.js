
// Insertion des images par une boucle

for(let i = 1; i<13; i++){
    document.querySelector(`.item:nth-child(${i})`).style.backgroundImage = `url(images/images-portfolio/img-portfolio${i}.jpg)`
}

// Affichage de la galerie
