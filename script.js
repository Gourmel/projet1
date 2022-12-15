// creer defilement des photos

// selectionner les photos, si je clique sur la fleche
// haute alors la taille de la 1ere photo devient 0
//si je clique une 2eme fois la taille de la 2eme
// photo devient 0

const photos = document.querySelectorAll(".photo");
const flecheDuHaut = document.querySelector(".flecheHaut");
const flecheDuBas = document.querySelector(".flecheBas");

let index=0;


flecheDuHaut.addEventListener("click",function(){
    if(index < photos.length -1 ){
    photos[index].style.height = '0';
    index++;
    }
});


flecheDuBas.addEventListener("click",function(){
    if(index > 0){
        index--;
        photos[index].style.height = '100%';
    }
    
    
});









