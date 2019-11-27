// MULTAS -------------------------------------------------------------

var multasTrafico = document.getElementById("contenidoMultasTrafico");
var multasLeves = document.getElementById("contenidoMultasLeves");
var multasMedias = document.getElementById("contenidoMultasMedias");
var multasGraves = document.getElementById("contenidoMultasGraves");

// ------------------------------------------------------------

var resultado = document.getElementById("resultado");
// PÁRRAFO DONDE VA LA CANTIDAD TOTAL DE LA MULTA
var total = document.getElementById("parrafoTotal");
var botonAtenuar = document.getElementById("botonAtenuar");

var idMultas = 0; // VARIABLE PARA SABER QUÉ ID TIENE CADA MULTA

var traficPenalties = []; // ARRAY CON LAS MULTAS DE TRÁFICO
var slightPenalties = []; // ARRAY CON LAS MULTAS LEVES
var mediumPenalties = []; // ARRAY CON LAS MULTAS MEDIAS
var severePenalties = []; // ARRAY CON LAS MULTAS MEDIAS

var totalMoney = 0 // DINERO TOTAL DE LAS MULTAS DEL SUJETO
var totalTimeJail = 0; // TIEMPO TOTAL EN PRISIÓN/CÁRCEL QUE PASARÁ EL SUJETO

const TIMEJAILMINIMUM = 20; // TIEMPO MÍNIMO PARA PASAR A FEDERAL
const PORCENTAJEATENUAR = 0.30; // PORCENTAJE PARA ATENUAR MULTAS

const UNIDADESDROGA = 20; // CANTIDAD DE DROGA POR LA QUE AÑADIR DINERO AL TOTAL

// MOSTRAMOS LAS MULTAS DE TRÁFICO
for (var i = 0; i < multas.Trafico.length; i++) {
    multasTrafico.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Trafico[i].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Trafico[i].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Trafico[i].Precio + ' euros / ' + multas.Trafico[i].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '<div class="card-footer"> ' +
        '<button onclick="addPenalty(this)" id="' + i + '" name="tipoTrafico"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//-------------------------------------------------------

// MOSTRAMOS LAS MULTAS LEVES
for (var i = 0; i < multas.Leves.length; i++) {
    multasLeves.innerHTML +=
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
for (var i = 0; i < multas.Medias.length; i++) {
    multasMedias.innerHTML +=
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
for (var i = 0; i < multas.Graves.length; i++) {
    multasGraves.innerHTML +=
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