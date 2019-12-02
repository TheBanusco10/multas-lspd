// FUNCIÓN PARA AÑADIR UNA MULTA A LA LISTA DE CÁLCULO
function addPenalty(comp) {

    let id = 0;

    if (comp.name == "tipoTrafico") {
        id = comp.id;
        addTraficList(id);
        traficPenalties.push(id)
    } else if (comp.name == "tipoLeve") {
        id = comp.id;
        addSlightList(id);
        slightPenalties.push(id);
    } else if (comp.name == "tipoMedia") {
        id = comp.id;
        addMediumList(id);
        mediumPenalties.push(id);
    } else {
        id = comp.id;
        addSevereList(id);
        severePenalties.push(id);
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

    mostrarTotal(totalMoney, totalTimeJail);

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

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO MEDIO EN LA LISTA DE CÁLCULO
function addMediumList(index) {
    resultado.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Medias[index].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Medias[index].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Medias[index].Precio + ' euros / ' + multas.Medias[index].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '</div> ';
}

// FUNCIÓN PARA MOSTRAR LA MULTA DE TIPO GRAVE EN LA LISTA DE CÁLCULO
function addSevereList(index) {
    resultado.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-header"> ' +
        multas.Graves[index].Nombre +
        '</div> ' +
        '<div class="card-body"> ' +
        '<p class="card-text">' + multas.Graves[index].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Graves[index].Precio + ' euros / ' + multas.Graves[index].Federal + ' meses en federal </b></p> ' +
        '</div> ' +
        '</div> ';
}


// MUESTRA EL TOTAL DE LA CONDENA
function mostrarTotal(totalMoney, totalTimeJail) {

    console.log(total);
    console.log(totalMoney);
    console.log(totalTimeJail);

    total.innerHTML = '<div id="total" class="alert alert-success" role="alert">' +
        '<h4 class="alert-heading">TOTAL</h4>' +
        '<hr>' +
        '<p id="parrafo"><b>' + totalMoney.toFixed(2) + ' euros / ' + totalTimeJail + ' meses ' + calcularEncarcelamiento(totalTimeJail) + '</b></p>' +
        '<div class="row">' +
            '<div class="col-sm-6">' +
            '<button id="botonAtenuar" onclick="atenuarMulta()">Atenuar total</button>' +
            '</div>' +
            '<div class="col-sm-6">' +
            '<button id="botonNoCoopera" onclick="noCoopera()">No coopera</button>' +
            '</div>' +
        '</div>' +
            '<div class="col-sm-12">' +
            '<input id="drogaInput" type="number" placeholder="Cantidad droga">' +
            '<button class="drogaBoton" onclick="calcularDroga()" id="drogaBoton"><span class="fas fa-calculator"></span></button>' +
            '</div>' +
        '<hr>' +
        '<p>Sistema LSPD</p>' +
        '</div>';

    parrafo = document.getElementById("parrafo");

    /*console.log(parrafo);

    if (totalTimeJail < TIMEJAILMINIMUM)
        parrafo.innerHTML += " <b>" + totalTimeJail + " meses en prisión </b>";
    else
        parrafo.innerHTML += " <b>" + totalTimeJail + " meses en federal </b>";*/

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

        parrafo.innerHTML += `<br><hr><p><b>ATENUADO: ${totalMoney.toFixed(2)} euros / ${cantidadAtenuadaFederal} meses ${calcularEncarcelamiento(cantidadAtenuadaFederal)}</b></p>`;

        console.log("Parrafo nuevo de multa: " + parrafo);

    }

    atenuado = true;

}

function noCoopera() {
    totalMoney += 1000;
    
    mostrarTotal(totalMoney, totalTimeJail);
}

function calcularDroga() {
    let cantidad = 0;
    let diferencia = 0;
    let dineroParaAdd = 1500;
    let drogaInput = Math.abs(document.getElementById("drogaInput").value);
                
    if (drogaInput >= 20) {
                    
        cantidad += dineroParaAdd;
                    
        diferencia = drogaInput;
                    
        diferencia -= 20;
                    
        while(diferencia >= 20) {
            
            cantidad += 1000;
            diferencia -= 20;
        }
        
        totalMoney += cantidad;
        mostrarTotal(totalMoney, totalTimeJail);
    }
                    
}

function calcularEncarcelamiento(cantidadTiempo) {
    if (cantidadTiempo < TIMEJAILMINIMUM)
        return "en prisión";
    else
        return "en federal";
}