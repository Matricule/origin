/* la recherche et les renplacement
en javascript */


var exper=document.querySelector('p');
var r1=/Engagez/i;
var r2=/engagez/ig;

var res1=exper.textContent.match(r1);
var res2=exper.textContent.match(r2);

var result1=document.getElementById('reg');

result1.innerHTML=' 1er recherche specifique donne: '+res1+
 '<br>2eme recherche globale donne: '+res2;
  
 /* nous avons la methode search qui recherche l'element indiqué en donnent sa position dans la phrase */

var r3=/Engagez/i;
var r4=/engagez/;

 var rech1=exper.textContent.search(r3);
var rech2=exper.textContent.search(r4);


var result2=document.getElementById('search');
result2.innerHTML=' 1er recherche specifique donne la position :'+rech1+
'<br>2eme recherche globale donne la position: '+rech2;

/* rechercher et remplacer un element */

var rep1=/vous/;
var rep2=/vous/g;

 var repl1=exper.textContent.replace(rep1 ,'moi');
var repl2=exper.textContent.replace(rep2,'moi');


var result3=document.querySelector('.remplacement');
result3.innerHTML=' 1er recherche et remplacement donne :'+repl1+
'<br>2eme recherche globale donne la position: '+repl2;

/* creation et insertion d'un  paragraphe dans notre element body */
var parent=document.body;
var paraph=document.createElement('p')
paraph.id='test2';
var textintro=document.createTextNode(' 1er recherche et remplacement donne 2eme recherche globale donne la position: ');
paraph.appendChild(textintro);
parent.appendChild(paraph);


// effectuer des test pour voir si le mot existe dans le paragraphe

var ts1=/VOUS/;
var ts2=/VOUS/i;
var result4=document.getElementById('test');
 var text=exper.textContent;
 var tes1=ts1.test(text);
var tes2=ts2.test(text);




result4.innerHTML=' 1er test donne :'+tes1+
'<br>2eme test donne: '+tes2;
// une fonction auto-invoquer pour permettre d'afficher la position de notre mot dans le paragraphe
(
    function () {
        if (tes2){
           alert('il existe a la '+ rech2+' place de notre  paragrache');
        }
        
    }
)()


var charger=document.getElementById('charger');
charger.style.textTransform='uppercase';
charger.addEventListener('click',charge);
function charge() {
    location.reload();
    
    
}

// formulaire

/* avertissement d'un utilisateur qui a mal renpli les champ avant de les valider  */


var validation=document.getElementById('valider');
var prenom=document.getElementById('prenom');
var prenom_m=document.getElementById('manque');
var prenom_v=/^[a-zA-ZéèçïîÎÏ][a-zéèçàîï]+([-'\s][a-zA-ZéèîïËÊÏÎ][a-zéèëêçîï]+)?/;
 var tel_m=document.getElementById('telephone');
validation.addEventListener('click',f_valid);

var word=/^[A-Z]/;
var passe_word=document.getElementById('motdepasse');
var word_m=document.getElementById('passeword');

  
function f_valid(e,b) {
    if (prenom.validity.valueMissing) {
    
        e.preventDefault();
        prenom_m.textContent='entres le prenom';
        prenom_m.style.color='red';
        
    }
    else if( prenom_v.test(prenom.value)==false){
        event.preventDefault();
        prenom_m.textContent='forme incorrect';
        prenom_m.style.color='orange';
    }else if(word.test(passe_word.value)==false){
        event.preventDefault();
        word_m.textContent='Le mot de passe doit contenir 8 caracteres differents';
        


    }
    else{

    }
    
    
}

//fin

// canvas : dessiner des rectangle grâce au canvas

var canvas=document.getElementById('canvas1');
var contex=canvas.getContext('2d');

//premier rectangle : bleu, plein,opaque
   contex.fillStyle='blue';
   contex.fillRect(100,50,200,100);

//deuxième rectangle: vert, plein, semi-transparent
    contex.fillStyle='RGBa(50,200,100,0.5)';
    contex.fillRect(50,25,100,50);

 //troisième rectangle: vide , bordure violet

  contex.strokeStyle='violet';
  contex.lineWidth='5';
  contex.strokeRect(250,125,100,50);

  // tracer des ligne

  contex.strokeStyle='orange';
  contex.moveTo(50,50);
  contex.lineTo(350,150);
  contex.lineTo(50,150);
  contex.lineTo(50,50);

  contex.stroke();


  // trancer des ligne de couleur different
   contex.beginPath();
  contex.strokeStyle='green';
  contex.lineWidth='5';
  contex.moveTo(100,50);
  contex.lineTo(300,150);
  contex.stroke();

  contex.beginPath();
  contex.strokeStyle='yellow';
  contex.lineWidth='5';
  contex.moveTo(300,160);
  contex.lineTo(100,160);
  contex.stroke();

  contex.beginPath();
  contex.strokeStyle='red';
  contex.lineWidth='5';
  contex.moveTo(100,150);
  contex.lineTo(300,50);
  contex.stroke();

  /* desiner les arcs de cercle */

  var canvas=document.getElementById('canvas2');
var contex1=canvas.getContext('2d');

contex1.beginPath();
contex1.strokeStyle='red';
contex1.lineWidth='5';
contex1.moveTo(75,100)
contex1.lineTo(300,100)
contex1.stroke();

contex1.beginPath();
contex1.fillStyle='red';
contex1.lineWidth='5';
contex1.arc(75,100,50,0,Math.PI);
contex1.fill();


contex1.beginPath();
contex1.strokeStyle='blue';
contex1.lineWidth='5';
contex1.arc(200,100,50,0,2*Math.PI);
contex1.stroke();

contex1.beginPath();
contex1.strokeStyle='green';
contex1.lineWidth='5';
contex1.arc(325,100,50,0,Math.PI,2*Math.PI);
contex1.stroke();

// Creation de degradé lineaire


 var canvas3=document.getElementById('canvas3');
var contexe=canvas3.getContext('2d');



var lineaire=contexe.createLinearGradient(100,50,300,150);

lineaire.addColorStop(0,'green');
lineaire.addColorStop(0.5,'#48C');
lineaire.addColorStop(1,'violet');

contexe.fillStyle=lineaire;
contexe.fillRect(100,50,200,100);

//creerv des degrader radial

var canvas4=document.getElementById('canvas4');
var cercle=canvas4.getContext('2d');



var radial=cercle.createRadialGradient(200,100,20,200,100,75);


radial.addColorStop(0,'#4C8');

radial.addColorStop(0.5,'#48C');

radial.addColorStop(1,'violet');

cercle.beginPath();
cercle.arc(200,100,100,0,2*Math.PI);
cercle.fillStyle=radial;
cercle.fill();

cercle.beginPath();
cercle.fillStyle='blue';
cercle.arc(40,50,30,0,2*Math.PI);
cercle.fill();

cercle.beginPath();
cercle.lineWidth=5;
cercle.strokeStyle='violet';
cercle.arc(350,50,30,0,2*Math.PI);
cercle.stroke();

// inserer un text a l'interieur d'une canvas

var canvas5=document.getElementById('canvas5');
var cercle1=canvas5.getContext('2d');
 cercle1.font='bold 30px Verdana,Arial,Serif'
cercle1.strokeStyle='violet'
cercle1.strokeText('Bonjour',25,100);


cercle1.font='bold 30px Verdana,Arial,Serif'
cercle1.fillStyle='green'
cercle1.fillText('Bonjour',255,100);

//inserer une image dans un canvas

var insert=document.getElementById('canvas6');
   var entrer=insert.getContext('2d');
var image=document.getElementById('image1');

insert.addEventListener('dblclick',affiche);

function affiche(){
    entrer.drawImage(image,50,25,500,350);
}

//faire la rotation des canvas 

var canvas8=document.getElementById('canvas7');
var contexe1=canvas8.getContext('2d');

contexe1.fillStyle='blue';
contexe1.fillRect(150,25,100,100);

contexe1.rotate(Math.PI/9);
contexe1.fillStyle='RGBa(50,200,100,0.5)';
contexe1.fillRect(150,25,100,100);


contexe1.rotate(Math.PI/9);
contexe1.fillStyle='RGBa(192,64,192,0.6)';
contexe1.fillRect(150,25,100,100);

// translation des case créer dans le canvas

var canvas9=document.getElementById('canvas8');
var contexe2=canvas9.getContext('2d');

contexe2.fillStyle='blue';
contexe2.fillRect(10,10,100,100);

contexe2.translate(100,100);

contexe2.fillStyle='green';
contexe2.fillRect(10,10,100,100);
 
contexe2.translate(100,100);

contexe2.fillStyle='red';
contexe2.fillRect(10,10,100,100);

// combinaisons de translate et rotate

var canvas10=document.getElementById('canvas9');
var contexe3=canvas10.getContext('2d');

contexe3.translate(200,200);

contexe3.fillStyle='green';
contexe3.fillRect(0,0,100,100);

contexe3.rotate(Math.PI/2);
contexe3.fillStyle='RGBa(192,64,192,0.6)';
contexe3.fillRect(0,0,100,100);


contexe3.rotate(Math.PI/2);
contexe3.fillStyle='RGBa(100,64,192,0.6)';
contexe3.fillRect(0,0,100,100);

contexe3.rotate(Math.PI/2);
contexe3.fillStyle="#457";
contexe3.fillRect(0,0,100,100);

// horloge est directe

    var heure=document.getElementById('heure');
     var arrêt=document.getElementById('stop');
    var tempreel=setInterval(horloge,1000);
    function horloge(){
        var temps=new Date();
        heure.innerHTML=temps.toLocaleTimeString()+'et '+ temps.getHours() +':'+temps.getMinutes() +':'+temps.getSeconds()+':'+temps.getMilliseconds() ;
    }


    arrêt.addEventListener('click',arret);
    function arret(){
        clearInterval(tempreel);
    }


    // changer la couleur de font chaque miliseconde

    var parent=document.body;
    var cliquer=document.getElementById('changer');

    cliquer.addEventListener('click',change);
    function change(){
        setTimeout((function(){parent.style.backgroundColor='blue'}),200);
        setTimeout((function(){parent.style.backgroundColor='green'}),400);
        setTimeout((function(){parent.style.backgroundColor='black'}),600);
        setTimeout((function(){parent.style.backgroundColor='#456'}),800);
        setTimeout((function(){parent.style.backgroundColor='#4B3'}),1000);
        setTimeout((function(){parent.style.backgroundColor='#765'}),1200);
        setTimeout((function(){parent.style.backgroundColor='#867'}),1400);
        setTimeout((function(){parent.style.backgroundColor='#123'}),1800);
        setTimeout((function(){parent.style.backgroundColor='#9B4'}),2000);
        setTimeout((function(){parent.style.backgroundColor='white'}),2200);
    }


    // gerer les erreurs

    var b=document.getElementById('test1');
    b.addEventListener('click',testvalue);
    
    function testvalue(){
          var p=document.getElementById('para');
          var x=document.getElementById('nb').value;
          
          try{
             if ((isNaN(x))||(x=='')) {
                throw 'Vous n\' avez pas saisir le nombre exact';
                
             }
             else if ( (x<1)||(x>10)) {
                throw 'vous n\' avez pas saisir le nombre exact ';
                
             }
             else{
                para.innerHTML='Nombre OK';
             }
             
          }
          catch(e){
                para.innerHTML=e;
             }
            finally{
                document.getElementById('nb').value=' ';
            }


    }