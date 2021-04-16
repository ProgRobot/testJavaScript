function afficher(id,message){
    console.log("Message: "+message);
    document.getElementById(id).innerHTML=message;
}

//Attention au nom de la fonction
afficher("special1","<p>special1 a changé</p>");
afficher("special2","Non seulement special 1 change moi aussi :)");

//Déclaration d'une variable => REMARQUE:: pas de type
var monMessage = "<p>Du contenu bien frais !</p>";

afficher("bloc1",monMessage);
afficher("bloc2",monMessage);


//Déclaration de trois variable différentes
var monMessage2="<p>ceci est un autre contenu bien frais!!</p>";
var monNombre = 17.2;
var maFonction = function(id,message){
    console.log("Message: "+message);
    document.getElementById(id).innerHTML = message;
}
maFonction("bloc1",monMessage2);
