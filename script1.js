var navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}


window.onscroll =() =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// cette partie representre notre horloge qui va apparaitre en haut de notre site
var heur=document.getElementById('heure');

var min=document.getElementById('minute');

var sec=document.getElementById('seconde');


setInterval(() => {
    var temps=new Date();
    heur.innerHTML=temps.getHours();
    min.innerHTML=temps.getMinutes();
    sec.innerHTML=temps.getSeconds();
}, 1000);


// fin de l'horloge

// cette partir va permettre de montrer a nos utilisteur le nombre de produits qu'il prevoir achéter
var achat=document.querySelectorAll('.achéter');
 var compteur=1;
 var nombre=document.getElementById('compter');
 for ( j = 0; j<20; j++) {
    achat[j].addEventListener('click',decompte);
 }
 
function decompte (){
    nombre.innerText=compteur;
    compteur++
}


// fin de notre decompte