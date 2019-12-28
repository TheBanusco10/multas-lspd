var buscarMultasDiv = document.getElementById("buscarMultasDiv");
var resultadoBusqueda;

buscarMultasDiv.innerHTML += '<div class="marginBottomTarjetas col-sm-12" id="contenidoMultasBuscadas">';

function buscarMulta(e) {

    resultadoBusqueda = document.getElementById("contenidoMultasBuscadas");
    resultadoBusqueda.innerHTML = " ";

    var buscarInput = document.getElementById("buscarInput");
    let resultado = buscarInput.value.toLowerCase();

    if (resultado != "") {
        for (let i = 0; i < multas.Trafico.length; i++) {

            if (multas.Trafico[i].Nombre.toLowerCase().includes(resultado)) {
                resultadoBusqueda.innerHTML += '<div class="card col-sm-12"> ' +
                    '<div class="card-header"> ' +
                    multas.Trafico[i].Nombre +
                    '</div> ' +
                    '<div class="card-body"> ' +
                    '<b> ' + multas.Trafico[i].Precio + ' euros / ' + multas.Trafico[i].Federal + ' meses en federal </b></p> ' +
                    '</div> ' +
                    '<div class="card-footer"> ' +
                    '<button onclick="addPenalty(this)" id="' + i + '" name="tipoTrafico"><span class="fas fa-shopping-basket iconoTienda"></span>Añadir</button> ' +
                    '</div> ' +
                    '</div> ';
            }

        }

        for (var i = 0; i < multas.Leves.length; i++) {

            if (multas.Leves[i].Nombre.toLowerCase().includes(resultado)) {
                resultadoBusqueda.innerHTML += '<div class="card col-sm-12"> ' +
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

        }

        for (var i = 0; i < multas.Medias.length; i++) {

            if (multas.Medias[i].Nombre.toLowerCase().includes(resultado)) {
                resultadoBusqueda.innerHTML += '<div class="card col-sm-12"> ' +
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

        }

        for (var i = 0; i < multas.Graves.length; i++) {

            if (multas.Graves[i].Nombre.toLowerCase().includes(resultado)) {
                resultadoBusqueda.innerHTML += '<div class="card col-sm-12"> ' +
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

        }

    }


}