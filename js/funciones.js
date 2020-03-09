// FUNCIÓN PARA AÑADIR UNA MULTA A LA LISTA DE CÁLCULO
function addPenalty(comp) {

    let id = 0;
    let cantidad = 0;
    let inputCantidadMultas;

    if (comp.name == "tipoTrafico") {
        id = comp.id;
        inputCantidadMultas = referenciarInputCantidadMultas(comp);
        multas.Trafico[id].Cantidad = inputCantidadMultas;

        if (!traficPenalties.includes(id)) traficPenalties.push(id);

    } else if (comp.name == "tipoLeve") {
        id = comp.id;
        inputCantidadMultas = referenciarInputCantidadMultas(comp);
        multas.Leves[id].Cantidad = inputCantidadMultas;
        if (!slightPenalties.includes(id)) slightPenalties.push(id);
    } else if (comp.name == "tipoMedia") {
        id = comp.id;
        inputCantidadMultas = referenciarInputCantidadMultas(comp);
        multas.Medias[id].Cantidad = inputCantidadMultas;
        if (!mediumPenalties.includes(id)) mediumPenalties.push(id);
    } else {
        id = comp.id;
        inputCantidadMultas = referenciarInputCantidadMultas(comp);
        multas.Graves[id].Cantidad = inputCantidadMultas;
        if (!severePenalties.includes(id)) severePenalties.push(id);
    }

    prepararTotal();


    //----------------------------------------------------

}

function calcTotal() {

    totalMoney = 0;
    totalTimeJail = 0;

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS DE TRÁFICO
    traficPenalties.forEach(element => {
        totalMoney += parseFloat(multas.Trafico[element].Precio * multas.Trafico[element].Cantidad);
        totalTimeJail += parseInt(multas.Trafico[element].Federal * multas.Trafico[element].Cantidad);
    });

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS LEVES
    slightPenalties.forEach(element => {
        totalMoney += parseFloat(multas.Leves[element].Precio * multas.Leves[element].Cantidad);
        totalTimeJail += parseInt(multas.Leves[element].Federal * multas.Leves[element].Cantidad);
    });

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS MEDIAS
    mediumPenalties.forEach(element => {
        totalMoney += parseFloat(multas.Medias[element].Precio * multas.Medias[element].Cantidad);
        totalTimeJail += parseInt(multas.Medias[element].Federal * multas.Medias[element].Cantidad);
    });

    // CALCULAMOS EL DINERO Y LA FEDERAL TOTAL DE LAS MULTAS GRAVES
    severePenalties.forEach(element => {
        totalMoney += parseFloat(multas.Graves[element].Precio * multas.Graves[element].Cantidad);
        totalTimeJail += parseInt(multas.Graves[element].Federal * multas.Graves[element].Cantidad);
    });

    prepararTotal();
    mostrarTotal(totalMoney, totalTimeJail);

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
        parrafoPolcad.innerHTML += `${multas.Trafico[element].Nombre} x${multas.Trafico[element].Cantidad} ${multas.Trafico[element].Precio}$, `;
    });

    slightPenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Leves[element].Nombre} x${multas.Leves[element].Cantidad} ${multas.Leves[element].Precio}$, `;
    });

    mediumPenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Medias[element].Nombre} x${multas.Medias[element].Cantidad} ${multas.Medias[element].Precio}$, `;
    });

    severePenalties.forEach(element => {
        parrafoPolcad.innerHTML += `${multas.Graves[element].Nombre} x${multas.Graves[element].Cantidad} ${multas.Graves[element].Precio}$, `;
    });

    parrafoPolcad.innerHTML += `ID: ${idMulta}, `;

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
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal col-md-10">${multas.Trafico[element].Nombre} x${multas.Trafico[element].Cantidad}</p>
                                   <button id="${element}" name="tipoTrafico" class="far fa-times-circle quitarMulta col-md-2" onclick="eliminarMulta(this)"></button>`;
    });

    slightPenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal col-md-10">${multas.Leves[element].Nombre} x${multas.Leves[element].Cantidad}</p>
                                   <button id="${element}" name="tipoLeve" class="far fa-times-circle quitarMulta col-md-2" onclick="eliminarMulta(this)"></button>`;
    });

    mediumPenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal col-md-10">${multas.Medias[element].Nombre} x${multas.Medias[element].Cantidad}</p>
                                   <button id="${element}" name="tipoMedio" class="far fa-times-circle quitarMulta col-md-2" onclick="eliminarMulta(this)"></button>`;
    });

    severePenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal col-md-10">${multas.Graves[element].Nombre} x${multas.Graves[element].Cantidad}</p>
                                   <button id="${element}" name="tipoGrave" class="far fa-times-circle quitarMulta col-md-2" onclick="eliminarMulta(this)"></button>`;
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
            '<b> ' + multas.Trafico[i].Precio + ' dólares / ' + multas.Trafico[i].Federal + ' meses en federal </b></p> ' +
            '</div> ' +
            '<div class="card-footer"> ' +
            '<button onclick="addPenalty(this)" id="' + i + '" name="tipoTrafico"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
            '<label for="inputCantidadMultas' + i + '">Cantidad: </label> ' +
            '<input class="inputCantidadMultas" type="number" value="1" id="inputCantidadMultasTrafico' + i + '" name="tipoTrafico"> ' +
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
            '<b> ' + multas.Leves[i].Precio + ' dólares / ' + multas.Leves[i].Federal + ' meses en federal </b></p> ' +
            '</div> ' +
            '<div class="card-footer"> ' +
            '<button onclick="addPenalty(this)" id="' + i + '" name="tipoLeve"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
            '<label for="inputCantidadMultas">Cantidad: </label> ' +
            '<input class="inputCantidadMultas" type="number" value="1" id="inputCantidadMultasLeves' + i + '" name="tipoLeve"> ' +
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
            '<b> ' + multas.Medias[i].Precio + ' dólares / ' + multas.Medias[i].Federal + ' meses en federal </b></p> ' +
            '</div> ' +
            '<div class="card-footer"> ' +
            '<button onclick="addPenalty(this)" id="' + i + '" name="tipoMedia"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
            '<label for="inputCantidadMultas">Cantidad: </label> ' +
            '<input class="inputCantidadMultas" type="number" value="1" id="inputCantidadMultasMedias' + i + '" name="tipoMedia"> ' +
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
            '<b> ' + multas.Graves[i].Precio + ' dólares / ' + multas.Graves[i].Federal + ' meses en federal </b></p> ' +
            '</div> ' +
            '<div class="card-footer"> ' +
            '<button onclick="addPenalty(this)" id="' + i + '" name="tipoGrave"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
            '<label for="inputCantidadMultas">Cantidad: </label> ' +
            '<input class="inputCantidadMultas" type="number" value="1" id="inputCantidadMultasGraves' + i + '" name="tipoGraves"> ' +
            '</div> ' +
            '</div> ';
    }
    //---------------------------------------------------------------
}

function eliminarMulta(objeto) {

    let posicion = 0;

    if (objeto.name == "tipoTrafico") {

        multas.Trafico[objeto.id].Cantidad--;
        if (multas.Trafico[objeto.id].Cantidad == 0) {
            posicion = traficPenalties.indexOf(objeto.id);
            traficPenalties.splice(posicion, 1);
        }

    } else if (objeto.name == "tipoLeve") {
        multas.Leves[objeto.id].Cantidad--;
        if (multas.Leves[objeto.id].Cantidad == 0) {
            posicion = slightPenalties.indexOf(objeto.id);
            slightPenalties.splice(posicion, 1);
        }
    } else if (objeto.name == "tipoMedio") {
        multas.Medias[objeto.id].Cantidad--;
        if (multas.Medias[objeto.id].Cantidad == 0) {
            posicion = mediumPenalties.indexOf(objeto.id);
            mediumPenalties.splice(posicion, 1);
        }
    } else {
        multas.Graves[objeto.id].Cantidad--;
        if (multas.Graves[objeto.id].Cantidad == 0) {
            posicion = severePenalties.indexOf(objeto.id);
            severePenalties.splice(posicion, 1);
        }
    }

    prepararTotal();
}

function referenciarInputCantidadMultas(objeto) {

    let input;

    if (objeto.name == "tipoTrafico") {
        return input = Math.abs(document.getElementById("inputCantidadMultasTrafico" + objeto.id).value);
    } else if (objeto.name == "tipoLeve") {
        return input = Math.abs(document.getElementById("inputCantidadMultasLeves" + objeto.id).value);
    } else if (objeto.name == "tipoMedia") {
        return input = Math.abs(document.getElementById("inputCantidadMultasMedias" + objeto.id).value);
    } else {
        return input = Math.abs(document.getElementById("inputCantidadMultasGraves" + objeto.id).value);
    }
}