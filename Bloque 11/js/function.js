/**
document.getElementById("boton").onclick = function (){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento."
}   

*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("Holamundo desde event listener");
    document.getElementById('demo').innerHTML = ""

});  
    