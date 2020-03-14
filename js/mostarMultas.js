// MULTAS -------------------------------------------------------------

let mostrarMultas = document.getElementById("multas");

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
var atenuado = false; // VARIABLE PARA PODER UTILIZAR EL BOTÓN DE ATENUAR SOLO UNA VEZ
var placaAgente = 0; // GUARDA EL NÚMERO DE PLACA DEL AGENTE PARA MOSTRARLO COMO ID EN LA MULTA

const TIMEJAILMINIMUM = 20; // TIEMPO MÍNIMO PARA PASAR A FEDERAL
const PORCENTAJEATENUAR = 0.30; // PORCENTAJE PARA ATENUAR MULTAS
const UNIDADESDROGA = 10; // CANTIDAD DE DROGA POR LA QUE AÑADIR DINERO AL TOTAL


mostrarMultasFuncion();