
//funcion interna de geolocalizacion del navegador
const geo = navigator.geolocation;
//mi posicion
var salida = document.getElementById("output");

console.log(geo);

//obtener geo posición (getCurrentPosition(success,error,options))

//fuente info: https://medium.com/zurvin/obtener-la-geolocalizaci%C3%B3n-con-javascript-b0ff7f1d0cd7


//opciones de geo localizacion
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

//detectar posicion 
function detectGeo(e){
    if(geo){
        geo.getCurrentPosition((e)=>{console.log(showPosition(e));showResult(showPosition(e),salida)},(e)=>{console.log(errorDetected(e))},options);
    }else alert("Este navegador no soporta la geolocalización");
}
/*if(geo){
    geo.getCurrentPosition((e)=>{console.log(showPosition(e))},(e)=>{console.log(errorDetected(e))},options);
}else alert("Este navegador no soporta la geolocalización");*/

//detectar posicion actual del dispositivo

setInterval(detectGeo,10000);

var i = 0;
//mostrar en pantalla resultado
function showResult(input,output){
    alert("Actualizando "+ i)
    console.log(i);
    output.innerHTML="<h1>Latitude: </h1><span>"+input.latitude+"</span><br>"+"<h1>Longitud: </h1><span>"+input.longitude+"</span>";
    ++i;
}


//Retorna la longitud y latitud
function showPosition(pos){
    return {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
    };
}

/*function showPosition(pos){
    return {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
    };
}*/

//Retorna el tipo de error
function errorDetected(error){
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return "Permiso de geolocalización denegado";
            break;
        case error.PERMISSION_UNVAILABLE:
            return "La informacion de geolocalización no esta disponible";
            break;
        case error.TIMEOUT:
            return "La peticion de geolocalizacion a expirado";
            break;
    
    }

}

