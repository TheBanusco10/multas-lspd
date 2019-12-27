// FUNCIÓN PARA AÑADIR UNA MULTA A LA LISTA DE CÁLCULO
function addPenalty(comp) {

    let id = 0;

    if (comp.name == "tipoTrafico") {
        id = comp.id;
        traficPenalties.push(id)
        addTraficList();
    } else if (comp.name == "tipoLeve") {
        id = comp.id;
        slightPenalties.push(id);
        addSlightList();
    } else if (comp.name == "tipoMedia") {
        id = comp.id;
        mediumPenalties.push(id);
        addMediumList();
    } else {
        id = comp.id;
        severePenalties.push(id);
        addSevereList();
    }



    //----------------------------------------------------

}

function calcTotal() {

    totalMoney = 0;
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

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS MEDIAS
    mediumPenalties.forEach(element => {
        totalMoney += parseFloat(multas.Medias[element].Precio);
        totalTimeJail += parseInt(multas.Medias[element].Federal);
    });

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS GRAVES
    severePenalties.forEach(element => {
        totalMoney += parseFloat(multas.Graves[element].Precio);
        totalTimeJail += parseInt(multas.Graves[element].Federal);
    });

    prepararTotal();
    mostrarTotal(totalMoney, totalTimeJail);

}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO TRÁFICO EN LA LISTA DE CÁLCULO
function addTraficList(index) {
    prepararTotal();
}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO LEVE EN LA LISTA DE CÁLCULO
function addSlightList(index) {
    prepararTotal();
}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO MEDIO EN LA LISTA DE CÁLCULO
function addMediumList(index) {
    prepararTotal();
}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO GRAVE EN LA LISTA DE CÁLCULO
function addSevereList(index) {
    prepararTotal();
}


// MUESTRA EL TOTAL DE LA CONDENA
function mostrarTotal(totalMoney, totalTimeJail) {

    let fecha = new Date();
    let idMulta = parseInt(Math.random() * 1000);
    let nuevoParrafo = document.getElementById("modal-body");

    nuevoParrafo.innerHTML = "";

    nuevoParrafo.innerHTML += `<p id="polcad"><b>/mult IDDELSUJETO ${idMulta} ${totalMoney.toFixed(2)}</b><br></p>`;

    let parrafoPolcad = document.getElementById("polcad");

    traficPenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Trafico[element].Nombre} ${multas.Trafico[element].Precio}€, `;
    });

    slightPenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Leves[element].Nombre} ${multas.Leves[element].Precio}€, `;
    });

    mediumPenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Medias[element].Nombre} ${multas.Medias[element].Precio}€, `;
    });

    severePenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Graves[element].Nombre} ${multas.Graves[element].Precio}€, `;
    });

    parrafoPolcad.innerHTML += `ID: ${idMulta}, `;

    console.log("Ha pasado");

    parrafoPolcad.innerHTML += `<p><b>TOTAL: ${totalMoney.toFixed(2)} / ${totalTimeJail.toFixed(2)} ${calcularEncarcelamiento(totalTimeJail)} (${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()})</p></b>`;
    parrafoPolcad.innerHTML += `<div class="row">
    <div class="col-sm-2">
        <button id="botonAtenuar" class="btn btn-primary" onclick="atenuarMulta()"><i class="fas fa-angle-double-down"></i></button>
    </div>
    <div class="col-sm-2">
        <button id="botonNoCoopera" class="btn btn-danger" onclick="noCoopera()"><i class="fas fa-angle-double-up"></i></button>
    </div>
    <div class="col-sm-8">
        <input id="drogaInput" type="number" placeholder="M / PP.AA">
        <button class="drogaBoton" onclick="calcularDroga()" id="drogaBoton"><span class="fas fa-calculator"></span></button>
    </div>
    </div>`;

}

// ATENUA LA MULTA TOTAL Y ACTUALIZA EL PÁRRAFO CON LA NUEVA CONDENA
function atenuarMulta() {

    let cantidadAtenuadaFederal = 0;
    let cantidadAtenuadaDinero;

    if (totalMoney > 1 && !atenuado) {
        cantidadAtenuadaDinero = totalMoney - (totalMoney * PORCENTAJEATENUAR);

        totalMoney = cantidadAtenuadaDinero;

        if (totalTimeJail > 1) {
            cantidadAtenuadaFederal = totalTimeJail - (totalTimeJail * PORCENTAJEATENUAR);
            totalTimeJail = cantidadAtenuadaFederal;
        }


        mostrarTotal(totalMoney, totalTimeJail);

    }

    atenuado = true;

}

function noCoopera() {

    atenuado = false;

    totalMoney += 1000;

    prepararTotal();
    mostrarTotal(totalMoney, totalTimeJail);
}

function calcularDroga() {
    let cantidad = 0;
    let diferencia = 0;
    let dineroParaAdd = 250;
    let drogaInput = Math.abs(document.getElementById("drogaInput").value);

    if (drogaInput >= UNIDADESDROGA) {

        cantidad += dineroParaAdd;

        diferencia = drogaInput;

        diferencia -= UNIDADESDROGA;

        while (diferencia >= UNIDADESDROGA) {

            cantidad += dineroParaAdd;
            diferencia -= UNIDADESDROGA;
        }

        totalMoney += cantidad;
        prepararTotal();
        mostrarTotal(totalMoney, totalTimeJail);
    }

}

function calcularEncarcelamiento(cantidadTiempo) {
    if (cantidadTiempo < TIMEJAILMINIMUM)
        return "en prisión";
    else
        return "en federal";
}

/*  
 *   FUNCIÓN PARA MOSTRAR LAS MULTAS A CALCULAR Y EL BOTÓN CALCULAR EN EL TOTAL
 *   (JUNTADA CON mostrarTotal(), MUESTRA TODO EL TOTAL COMPLETO)
 */
function prepararTotal() {
    total.innerHTML = `<div
    class = "alert alert-success"
    role = "alert"> 
    <div class="container-fluid">
    <div id = "total" class="row">
    </div>
    </div>
    </div>`;

    let nuevoParrafo = document.getElementById("total");

    traficPenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal col-md-10">${multas.Trafico[element].Nombre}</p>
                                   <button id="${element}" name="tipoTrafico" class="far fa-times-circle quitarMulta col-md-2" onclick="eliminarMulta(this)"></button>`;
    });

    slightPenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal">${multas.Leves[element].Nombre}</p>`;
    });

    mediumPenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal">${multas.Medias[element].Nombre}</p>`;
    });

    severePenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal">${multas.Graves[element].Nombre}</p>`;
    });

    nuevoParrafo.innerHTML += `<button type="button" class="btn btn-primary botonCalcularMultas" data-toggle="modal" data-target="#totalMulta" onclick="calcTotal()">
    Calcular
  </button>`;
}

function mostrarMultasFuncion() {

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
            '<b> ' + multas.Graves[i].Precio + ' euros / ' + multas.Graves[i].Federal + ' meses en federal </b></p> ' +
            '</div> ' +
            '<div class="card-footer"> ' +
            '<button onclick="addPenalty(this)" id="' + i + '" name="tipoGrave"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
            '</div> ' +
            '</div> ';
    }
    //---------------------------------------------------------------
}

function eliminarMulta(objeto) {

    console.log(objeto);

    if (objeto.name == "tipoTrafico") {
        traficPenalties.pop(objeto.id);
        prepararTotal();
    }

    console.log("Dentro eliminarMulta");
}