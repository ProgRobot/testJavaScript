//Fonction anonyme => elle n'a pas de nom
(function (id,message){
    console.log("Message: "+message);
    document.getElementById(id).innerHTML=message;
})("special4","Un dernier contenu.");