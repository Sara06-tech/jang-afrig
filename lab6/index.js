"use strist" ;
(function () {
    window.addEventListener ("load",init) ;
    function init ( ) {
 
        id("sm").addEventListener("click" , sayHi);
        id("start").addEventListener("click" , increment);
    }
    function sayHi() {
        let n=id("nom").value ;
        let a=id("prenom").value;
        let par=id("message");
        par.textContent=`Bonjour ${a} ${n}` ;
    }
    function increment(){
        let v=id("chrono").textContent ;
        v=Number(v)+1 ;
        id("chrono").textContent=v ;
    }

    function id (unId){
        return document.getElementById (unId) ;
    }
    function qs (unsel){
        return document.querySelector (unsel) ;
    }
} ) ();