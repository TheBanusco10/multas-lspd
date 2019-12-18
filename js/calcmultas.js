// MULTAS -------------------------------------------------------------

//var multasTrafico = document.getElementById("contenidoMultasTrafico");
let mostrarMultas = document.getElementById("multas");
/*var multasLeves = document.getElementById("contenidoMultasLeves");
var multasMedias = document.getElementById("contenidoMultasMedias");
var multasGraves = document.getElementById("contenidoMultasGraves");*/

// ------------------------------------------------------------

var resultado = document.getElementById("resultado"); // DIV DONDE SE MUESTRAN LAS MULTAS A CALCULAR
var parrafo; // PÁRRAFO DONDE VA LA CANTIDAD TOTAL DE LA MULTA
var total = document.getElementById("parrafoTotal"); 
var botonAtenuar = document.getElementById("botonAtenuar");

var idMultas = 0; // VARIABLE PARA SABER QUÉ ID TIENE CADA MULTA

var traficPenalties = []; // ARRAY CON LAS MULTAS DE TRÁFICO
var slightPenalties = []; // ARRAY CON LAS MULTAS LEVES
var mediumPenalties = []; // ARRAY CON LAS MULTAS MEDIAS
var severePenalties = []; // ARRAY CON LAS MULTAS MEDIAS

var totalMoney = 0 // DINERO TOTAL DE LAS MULTAS DEL SUJETO
var totalTimeJail = 0; // TIEMPO TOTAL EN PRISIÓN/CÁRCEL QUE PASARÁ EL SUJETO
var atenuado = false; // VARIABLE PARA PODER UTILIZAR EL BOTOÓN DE ATENUAR SOLO UNA VEZ

const TIMEJAILMINIMUM = 20; // TIEMPO MÍNIMO PARA PASAR A FEDERAL
const PORCENTAJEATENUAR = 0.30; // PORCENTAJE PARA ATENUAR MULTAS
const UNIDADESDROGA = 10; // CANTIDAD DE DROGA POR LA QUE AÑADIR DINERO AL TOTAL

// MOSTRAMOS LAS MULTAS DE TRÁFICO
mostrarMultas.innerHTML += '<h3 id="multasTráficoh3">Multas tráfico</h3>'
for (var i = 0; i < multas.Trafico.length; i++) {
    mostrarMultas.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Trafico[i].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' +
        '<b> ' + multas.Trafico[i].Precio + ' euros / ' + multas.Trafico[i].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '<div class="card-footer"> ' +
        '<button onclick="addPenalty(this)" id="' + i + '" name="tipoTrafico"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//-------------------------------------------------------

// MOSTRAMOS LAS MULTAS LEVES
mostrarMultas.innerHTML += '<h3 id="multasLevesh3">Multas leves</h3>'
for (var i = 0; i < multas.Leves.length; i++) {
    mostrarMultas.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Leves[i].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Leves[i].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Leves[i].Precio + ' euros / ' + multas.Leves[i].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '<div class="card-footer"> ' +
        '<button onclick="addPenalty(this)" id="' + i + '" name="tipoLeve"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//---------------------------------------------------------------

// MOSTRAMOS LAS MULTAS MEDIAS
mostrarMultas.innerHTML += '<h3 id="multasMediash3">Multas medias</h3>'
for (var i = 0; i < multas.Medias.length; i++) {
    mostrarMultas.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Medias[i].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Medias[i].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Medias[i].Precio + ' euros / ' + multas.Medias[i].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '<div class="card-footer"> ' +
        '<button onclick="addPenalty(this)" id="' + i + '" name="tipoMedia"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//---------------------------------------------------------------

// MOSTRAMOS LAS MULTAS GRAVES
mostrarMultas.innerHTML += '<h3 id="multasGravesh3">Multas graves</h3>'
for (var i = 0; i < multas.Graves.length; i++) {
    mostrarMultas.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Graves[i].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Graves[i].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Graves[i].Precio + ' euros / ' + multas.Graves[i].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '<div class="card-footer"> ' +
        '<button onclick="addPenalty(this)" id="' + i + '" name="tipoGrave"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//---------------------------------------------------------------