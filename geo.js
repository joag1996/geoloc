//info geolocalizacion




//funcion interna de geolocalizacion del navegador
const geo = navigator.geolocation;
//mi posicion
var salida = document.getElementById("output");
var mapaImg = document.getElementById("boxmap");

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

setInterval(detectGeo,7000);

var i = 0;
//mostrar en pantalla resultado
function showResult(input,output){
    console.log(i);
    output.innerHTML="<h1>Latitude: </h1><span>"+input.latitude+"</span><br>"+"<h1>Longitud: </h1><span>"+input.longitude+"</span>";
    ++i;
}


//Retorna la longitud y latitud
function showPosition(pos){
    showmap(pos.coords.latitude,pos.coords.longitude)

    
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
            clearInterval();
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


//dibujar mapa
/*function mostrarCoordenada(posicion,map) {
        var direccion = posicion.coords.latitude + "," + posicion.coords.longitude;
        var mapa = "http://maps.googleapis.com/maps/api/staticmap?center="
           +direccion+"&zoom=14&size=500x500&sensor=false";
        map.innerHTML = "<img src='"+mapa+"'>";    
 }*/


function showmap(lat,log){
    
var demoMap = L.map('map').setView([lat, log], 6);
	var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {
	    minZoom: 5,
	    maxZoom: 16,
	    attribution: osmAttrib
	});
}

