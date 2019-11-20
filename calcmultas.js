var multas = {
    "Trafico": [{
            "Nombre": "Uso abusivo de la bocina",
            "Descripcion": "Utilizar la bocina sin motivo importante alguno",
            "Precio": "300",
            "Federal": "0"
        },
        {
            "Nombre": "No respetar la distancia de seguridad",
            "Descripcion": "No respetar la distancia de seguridad.",
            "Precio": "300",
            "Federal": "0"
        },
        {
            "Nombre": "Parada peligrosa y/o no permitida",
            "Descripcion": "Parada peligrosa y/o no permitida.",
            "Precio": "300",
            "Federal": "0"
        },
        {
            "Nombre": "No respetar la prioridad de la derecha",
            "Descripcion": "No respetar la prioridad de la derecha.",
            "Precio": "300",
            "Federal": "0"
        },
        {
            "Nombre": "Vehículo en mal estado",
            "Descripcion": "Vehículo en mal estado.",
            "Precio": "300",
            "Federal": "0"
        }, 
        {
            "Nombre": "Cruzar con línea continua",
            "Descripcion": "Cruzar con línea continua.",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Giro sin señal que lo permita",
            "Descripcion": "Girar sin señal que lo permita",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Estacionamiento peligroso y/o no permitido",
            "Descripcion": "Estacionamiento peligroso y/o no permitido",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "No respetar la prioridad de otro vehículo",
            "Descripcion": "No respetar la prioridad de otro vehículo",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Adelantamiento peligroso",
            "Descripcion": "Adelantamiento peligroso",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad < 5 km/h",
            "Descripcion": "Exceso de velocidad < 5 km/h",
            "Precio": "500",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad < 5-15 km/h",
            "Descripcion": "Exceso de velocidad < 5 km/h",
            "Precio": "750",
            "Federal": "0"
        },
        {
            "Nombre": "Saltarse un Stop",
            "Descripcion": "Saltarse un Stop",
            "Precio": "800",
            "Federal": "0"
        },
        {
            "Nombre": "Saltarse un semáforo",
            "Descripcion": "Saltarse un semáforo",
            "Precio": "1000",
            "Federal": "0"
        },
        {
            "Nombre": "Exceso de velocidad < 15-30 km/h",
            "Descripcion": "Exceso de velocidad < 15-30 km/h",
            "Precio": "1000",
            "Federal": "0"
        },
        {
            "Nombre": "Circular en dirección contraria",
            "Descripcion": "Circular en dirección contraria",
            "Precio": "1500",
            "Federal": "0"
        },
        {
            "Nombre": "Circular fuera de la calzada",
            "Descripcion": "Circular fuera de la calzada",
            "Precio": "1500",
            "Federal": "0"
        },
        
        {
            "Nombre": "Exceso de velocidad > 30 km/h",
            "Descripcion": "Exceso de velocidad > 30 km/h",
            "Precio": "1500",
            "Federal": "0"
        },
        
        {
            "Nombre": "Circular sin carné de conducir",
            "Descripcion": "Circular sin carné de conducir",
            "Precio": "5000",
            "Federal": "0"
        },
        
        {
            "Nombre": "Intento de fuga",
            "Descripcion": "Intento de fuga",
            "Precio": "5000",
            "Federal": "0"
        },
    ],
    "Leves": [
        {
            "Nombre": "Insultar,gritar y/o faltar el respeto a un civil",
            "Descripcion": "Insultar,gritar y/o faltar el respeto a un civil",
            "Precio": "400",
            "Federal": "0"
        },
        {
            "Nombre": "Obstruir el trafico",
            "Descripcion": "Obstruir el trafico",
            "Precio": "1000",
            "Federal": "0"
        },
        {
            "Nombre": "Insultar,gritar y/o faltar el respeto a un agente",
            "Descripcion": "Insultar,gritar y/o faltar el respeto a un agente",
            "Precio": "1000",
            "Federal": "0"
        },
        {
            "Nombre": "Manifestacion ilegal",
            "Descripcion": "Manifestacion ilegal",
            "Precio": "1000",
            "Federal": "0"
        },
        {
            "Nombre": "Tentar a la corrupcion",
            "Descripcion": "Tentar a la corrupcion",
            "Precio": "1000",
            "Federal": "0"
        },
        {
            "Nombre": "Degradacion de la via publica",
            "Descripcion": "Degradacion de la via publica",
            "Precio": "2000",
            "Federal": "0"
        },
        {
            "Nombre": "Amenaza verbal o intimidacion a los civiles",
            "Descripcion": "Amenaza verbal o intimidacion a los civiles",
            "Precio": "4000",
            "Federal": "0"
        },
        {
            "Nombre": "Amenaza verbal o intimidacion a los agentes",
            "Descripcion": "Amenaza verbal o intimidacion a los agentes",
            "Precio": "6000",
            "Federal": "0"
        },
        {
            "Nombre": "Ocasionar problemas al CNP",
            "Descripcion": "Ocasionar problemas al CNP",
            "Precio": "8000",
            "Federal": "0"
        },
        {
            "Nombre": "Obstruir una intervencion policial",
            "Descripcion": "Obstruir una intervencion policial",
            "Precio": "8000",
            "Federal": "0"
        }
    ]
}

var multasTrafico = document.getElementById("contenidoMultasTrafico");
var multasLeves = document.getElementById("contenidoMultasLeves");
var resultado = document.getElementById("resultado");
var total = document.getElementById("total");

var idMultas = 0; // VARIABLE PARA SABER QUÉ ID TIENE CADA MULTA

var traficPenalties = []; // ARRAY CON LAS MULTAS DE TRÁFICO
var slightPenalties = []; // ARRAY CON LAS MULTAS LEVES

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

    total.innerHTML = "El total es: <b>" + totalMoney + " euros </b> y <b>" + totalTimeJail + " meses en federal </b>";

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