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

    let idMulta = parseInt(Math.random() * 1000);
    let nuevoParrafo = document.getElementById("modal-body");

    nuevoParrafo.innerHTML = "";

    nuevoParrafo.innerHTML += `<p id="nuevoParrafo"><b>/mult ID ${idMulta} ${totalMoney.toFixed(2)}</b><br></p>`;

    let prueba = document.getElementById("nuevoParrafo");

    traficPenalties.forEach(element => {
        prueba.innerHTML += `${multas.Trafico[element].Nombre} ${multas.Trafico[element].Precio}€, `;
    });

    slightPenalties.forEach(element => {
        prueba.innerHTML += `${multas.Leves[element].Nombre} ${multas.Leves[element].Precio}€, `;
    });

    mediumPenalties.forEach(element => {
        prueba.innerHTML += `${multas.Medias[element].Nombre} ${multas.Medias[element].Precio}€, `;
    });

    severePenalties.forEach(element => {
        prueba.innerHTML += `${multas.Graves[element].Nombre} ${multas.Graves[element].Precio}€, `;
    });

    nuevoParrafo.innerHTML += `TOTAL: ${totalMoney.toFixed(2)} / ${totalTimeJail.toFixed(2)} ${calcularEncarcelamiento(totalTimeJail)}`;

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


        //mostrarTotal(totalMoney, totalTimeJail);
        parrafo = document.getElementById("parrafo");
        parrafo.innerHTML += `<br><hr><p><b>ATENUADO: ${totalMoney.toFixed(2)} euros / ${cantidadAtenuadaFederal.toFixed(2)} meses ${calcularEncarcelamiento(cantidadAtenuadaFederal)}</b></p>`;

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
    total.innerHTML = `<div id="total" class="alert alert-success" role="alert"></div>`;

    let nuevoParrafo = document.getElementById("total");

    traficPenalties.forEach(element => {
        nuevoParrafo.innerHTML += `<p class="multasParrafoTotal">${multas.Trafico[element].Nombre}</p>`;
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

    nuevoParrafo.innerHTML += `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#totalMulta" onclick="calcTotal()">
    Calcular
  </button>`;
}