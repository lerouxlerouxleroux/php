alert ("salut"); // fonction native

// commentaire
/* commentaires sur plusieurs lignes*/
// fonctions natives
 //console.log (5*2) //aller sur le console en page internet "inspecter", le console permet de débuguer assez facilement, TAPER F5 pour ressortir les erreurs (en rouge)
//Var test // declaration
//test=10 // assignation
//var test="salut" // chaine de caractère se met entre guillemets
//=== // sur le type du variable
// déclarations des varVar A-Z, a-z, $

// var demo-1; var demo_, $demo
// variable global 
// variable local, variable que l'on utilise que dans la fonction

var nombre=prompt("Entrez un nombre supérieur à 18:"); // fonction native
if (nombre >= 18) 
{
    console.log ("Vous êtes majeur et vacciné!"+ nombre);
}

var nombre=prompt("Entrez un nombre supérieur à 18:")

if (nombre >= 18) 
{
    console.log ("Vous êtes majeur et vacciné!"+ nombre);
}

if (nombre >= 18 && nombre<=25)
{
    console.log ("Bravo! Vous avez le tarif réduit!!"+ nombre);
}

else if (nombre >= 25 && nombre<=65)
{
    console.log ("Bravo! Vous avez le tarif réduit!!"+ nombre);
}

  console.log (nombre); 
 
 if (nombre < 18)
{
    var resultat = 18-nombre
    console.log ("Vous êtes mineur! Revenez dans "+ resultat+" an");
}


var nb=5; var j=0;
for (var i=0; i < nb; i++) 
    { console.log (i+ "ma boucle");
 }

 var i=0
 while (i < nb) 
 {
    console.log("ma while" +i); /*+i itération*/
    i=i+1;
 }
 
 console.log (i)
 var j=0
 
 do {
    console.log("ma do" +j+ "while");
    
    j++;

     }while(j < nb);


var Etu=[];
Etu =["Moussa", "", "Pierre", "Paul", "Jacques"];
/*parcourir le tableau et sortir tous les prenoms Kevin*/




for (var i=0; i < Etu.length; i++) 
    if (Etu[i] === "Kevin")
    { console.log(Etu[i]);

}
else {
    alert ("pas de Kevin");
}

/*var eleves=[
            {
             Nom: "Moussa", "Kevin", "Perre", "Jaques",
             Moyenne: 8, 10, 9, 11, 
             Admis: false

            }
]*/

/*ou function entier(nombre){}
/* var entier=function(nombre){
 for (var i=2; i<nombre; i++){
 if (nombre%i === 0)
 {
    console.log ("c'est un nombre premier");
    return false
 }
}
    console.log ("pas un nombre premier")
return true
}
entier(11);
*/
function etudiant(nom, prenom){
    console.log(nom)
    if (prenom==undefined) {
        prenom = Aston
    }
    console.log(nom+prenom)
}




function soustraction (a,b){
    return a-b
}
/*faire appeler une fonction dans une autre*/
function addition(a,b,c,d) {
 var res=soustraction(a,b)
{return res+c+d}


}

