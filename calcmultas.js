var multas = {
    "Trafico": [{
            "Nombre": "Uso indebido de la bicicleta",
            "Descripcion": "Uso indebido de la bicicleta.",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Uso indebido de la bocina",
            "Descripcion": "Utilizar la bocina sin motivo importante alguno.",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Vehículo en mal estado",
            "Descripcion": "Vehículo en mal estado.",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Cruzar una línea continua",
            "Descripcion": "Cruzar una línea continua.",
            "Precio": "600",
            "Federal": "0"
        },
        {
            "Nombre": "Giro sin señal que lo permita",
            "Descripcion": "Girar sin señal que lo permita",
            "Precio": "650",
            "Federal": "0"
        },
        {
            "Nombre": "Parada peligrosa y/o no permitida",
            "Descripcion": "Parada peligrosa y/o no permitida.",
            "Precio": "720",
            "Federal": "0"
        },
        {
            "Nombre": "No respetar la prioridad de la derecha",
            "Descripcion": "No respetar la prioridad de la derecha.",
            "Precio": "300",
            "Federal": "0"
        }, 
        {
            "Nombre": "Estacionamiento indebido",
            "Descripcion": "Estacionamiento indebido.",
            "Precio": "700",
            "Federal": "0"
        },
        {
            "Nombre": "Parada peligrosa",
            "Descripcion": "Parada peligrosa.",
            "Precio": "720",
            "Federal": "0"
        },
        {
            "Nombre": "Saltarse un Stop",
            "Descripcion": "Saltarse un Stop.",
            "Precio": "900",
            "Federal": "0"
        },
        {
            "Nombre": "Adelantamiento peligroso",
            "Descripcion": "Adelantamiento peligroso.",
            "Precio": "1100",
            "Federal": "0"
        },
        {
            "Nombre": "Obstruir el tráfico",
            "Descripcion": "Obstruir el tráfico.",
            "Precio": "1200",
            "Federal": "0"
        },
        {
            "Nombre": "Saltarse un semáforo en rojo",
            "Descripcion": "Saltarse un semáforo en rojo.",
            "Precio": "1200",
            "Federal": "0"
        },
        {
            "Nombre": "No llevar protección personal",
            "Descripcion": "No llevar protección personal.",
            "Precio": "1500",
            "Federal": "0"
        },
        {
            "Nombre": "Circular en dirección contraria",
            "Descripcion": "Circular en dirección contraria.",
            "Precio": "2000",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad +10 km/h",
            "Descripcion": "Exceso de velocidad +10 km/h",
            "Precio": "650",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad +11/20 km/h",
            "Descripcion": "Exceso de velocidad +11/20 km/h",
            "Precio": "950",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad +21/40 km/h",
            "Descripcion": "Exceso de velocidad +21/40 km/h",
            "Precio": "1250",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad +41/60 km/h",
            "Descripcion": "Exceso de velocidad +41/60 km/h",
            "Precio": "1550",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad +61 km/h",
            "Descripcion": "Exceso de velocidad +61 km/h",
            "Precio": "1850",
            "Federal": "0"
        },
        {
            "Nombre": "Superar los +170 km/h en ciudad (PG)",
            "Descripcion": "Superar los +170 km/h en ciudad (PG).",
            "Precio": "4000",
            "Federal": "4"
        },
        {
            "Nombre": "Circular sin carné de conducir",
            "Descripcion": "Circular sin carné de conducir",
            "Precio": "4520",
            "Federal": "0"
        },
        {
            "Nombre": "Intento de fuga",
            "Descripcion": "Intento de fuga",
            "Precio": "5500",
            "Federal": "5"
        },
    ],
    "Leves": [
        {
            "Nombre": "Insultar,gritar y/o faltar el respeto a un civil",
            "Descripcion": "Insultar,gritar y/o faltar el respeto a un civil",
            "Precio": "900",
            "Federal": "0"
        },
        {
            "Nombre": "Manifestación ilegal",
            "Descripcion": "Manifestación ilegal",
            "Precio": "1100",
            "Federal": "0"
        },
        {
            "Nombre": "Insultar,gritar y/o faltar el respeto a un agente / EMS",
            "Descripcion": "Insultar,gritar y/o faltar el respeto a un agente / EMS",
            "Precio": "1700",
            "Federal": "0"
        },
        {
            "Nombre": "Degradación de la vía pública",
            "Descripcion": "Degradación de la vía pública",
            "Precio": "2100",
            "Federal": "0"
        },
        {
            "Nombre": "Amenaza verbal o intimidación a los civiles",
            "Descripcion": "Amenaza verbal o intimidación a los civiles",
            "Precio": "3700",
            "Federal": "0"
        },
        {
            "Nombre": "Amenaza verbal o intimidación a los agentes / EMS",
            "Descripcion": "Amenaza verbal o intimidación a los agentes / EMS",
            "Precio": "5500",
            "Federal": "5"
        },
        {
            "Nombre": "Ocasionar problemas a la LSPD / EMS",
            "Descripcion": "Ocasionar problemas a la LSPD / EMS",
            "Precio": "7000",
            "Federal": "7"
        }
    ]
}

var multasTrafico = document.getElementById("contenidoMultasTrafico");
var multasLeves = document.getElementById("contenidoMultasLeves");
var resultado = document.getElementById("resultado");
var total = document.getElementById("parrafoTotal");

var idMultas = 0; // VARIABLE PARA SABER QUÉ ID TIENE CADA MULTA

var traficPenalties = []; // ARRAY CON LAS MULTAS DE TRÁFICO
var slightPenalties = []; // ARRAY CON LAS MULTAS LEVES
const TIMEJAILMINIMUM = 20;

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
        '<button onclick="addPenalty(this)" id="' + idMultas++ + '"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//-------------------------------------------------------


// MOSTRAMOS LAS MULTAS LEVES
for (var i = 0; i < multas.Leves.length; i++) {
    console.log(i);
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
        '<button onclick="addPenalty(this)" id="' + idMultas++ + '"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
        '</div> ' +
        '</div> ';
}
//---------------------------------------------------------------

// FUNCIÓN PARA AÑADIR UNA MULTA A LA LISTA DE CÁLCULO
function addPenalty(comp) {

    let index = 0;

    // COMPROBAMOS A QUÉ MULTA PERTENECE EL BOTÓN PULSADO
    if (comp.id > multas.Trafico.length-1) {
        index = comp.id - multas.Trafico.length;
        addSlightList(index);
        slightPenalties.push(index);
    }else {
        index = comp.id;
        addTraficList(index);
        traficPenalties.push(index);
    }
    //----------------------------------------------------

    console.log("Array: " + index);

}

function calcTotal() {

    let totalMoney = 0,
        totalTimeJail = 0;

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS DE TRÁFICO
    traficPenalties.forEach(element => {
        totalMoney += parseFloat(multas.Trafico[element].Precio);
        totalTimeJail += parseInt(multas.Trafico[element].Federal);
    });

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS LEVES
    slightPenalties.forEach(element => {
        totalMoney += parseFloat(multas.Leves[element].Precio);
        totalTimeJail += parseInt(multas.Leves[element].Federal);
    });

    total.innerHTML = "El total es: <b>" + totalMoney + " euros </b> y ";

    if (totalTimeJail < TIMEJAILMINIMUM)
        total.innerHTML += "<b>" + totalTimeJail + " meses en prisión </b>";
    else
        total.innerHTML += "<b>" + totalTimeJail + " meses en federal </b>";

}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO TRÁFICO EN LA LISTA DE CÁLCULO
function addTraficList(index) {
    resultado.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Trafico[index].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Trafico[index].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Trafico[index].Precio + ' euros / ' + multas.Trafico[index].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '</div> ';
}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO LEVE EN LA LISTA DE CÁLCULO
function addSlightList(index) {
    resultado.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Leves[index].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Leves[index].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Leves[index].Precio + ' euros / ' + multas.Leves[index].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '</div> ';
}