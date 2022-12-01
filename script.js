// creer defilement des photos

// selectionner les photos, si je clique sur la fleche
// haute alors la taille de la 1ere photo devient 0
//si je clique une 2eme fois la taille de la 2eme
// photo devient 0

const photos = document.querySelectorAll(".photo");
const flecheHaute = document.querySelector(".fleche1");
const flecheBas = document.querySelector(".fleche2");

let index=0;


flecheHaute.addEventListener("click",function(){
    if(index < photos.length -1 ){
    photos[index].style.height = '0';
    index++;
    }
});


flecheBas.addEventListener("click",function(){
    if(index > 0){
        index--;
        photos[index].style.height = '100%';
    }
    
    
});
