var multas = {
    "Trafico": [
        {"Nombre" : "Huir de la justicia", "Descripcion" : "Huir del cuerpo de la policía.", "Precio" : "20", "Federal" : "0"},
        {"Nombre" : "Adelantamiento peligroso", "Descripcion" : "Adelantar a otro vehículo pudiendo poner una vida en peligro.", "Precio" : "20", "Federal" : "0"},
        {"Nombre" : "Adelantamiento peligroso", "Descripcion" : "Adelantar a otro vehículo pudiendo poner una vida en peligro.", "Precio" : "25", "Federal" : "10"},
        {"Nombre" : "Adelantamiento peligroso", "Descripcion" : "Adelantar a otro vehículo pudiendo poner una vida en peligro.", "Precio" : "8", "Federal" : "16"},
        {"Nombre" : "Adelantamiento peligroso", "Descripcion" : "Adelantar a otro vehículo pudiendo poner una vida en peligro.", "Precio" : "10", "Federal" : "5"},
        {"Nombre" : "Adelantamiento peligroso", "Descripcion" : "Adelantar a otro vehículo pudiendo poner una vida en peligro.", "Precio" : "35", "Federal" : "20"},
        {"Nombre" : "Adelantamiento peligroso", "Descripcion" : "Adelantar a otro vehículo pudiendo poner una vida en peligro.", "Precio" : "5", "Federal" : "7"}
    ]
}

var p = document.getElementById("contenido");
var resultado = document.getElementById("resultado");
var total = document.getElementById("total");

console.log(p);

var penalties = [];

for (var i = 0; i < multas.Trafico.length; i++) {
    p.innerHTML +=
        '<div class="card"> ' +
        '<div class="card-body"> ' +
        '<h5 class="card-title">' + multas.Trafico[i].Nombre + '</h5> ' +
        '<p class="card-text">' + multas.Trafico[i].Descripcion + '<br/><br/>' +
        '<b> ' + multas.Trafico[i].Precio + 'k euros / ' + multas.Trafico[i].Federal + ' meses en federal </b></p> ' +
        '<button onclick="addPenalty(this)" id="' + i + '">Añadir</button> ' +
        '</div> ' +
        '</div> ';
}

function addPenalty(comp) {

    let index = comp.id;
    penalties.push(index);

    console.log("Array: " + index);

    resultado.innerHTML += '<div class="card"> ' +
    '<div class="card-body"> ' +
    '<h5 class="card-title">' + multas.Trafico[index].Nombre + '</h5> ' +
    '<p class="card-text">' + multas.Trafico[index].Descripcion + '<br/><br/>' +
    '<b> ' + multas.Trafico[index].Precio + 'k euros / ' + multas.Trafico[index].Federal + ' meses en federal </b></p> ' +
    '</div> ' +
    '</div> ';
    
}

function calcTotal() {
    
    let suma = 0;

    penalties.forEach(element => {
        suma += parseFloat(multas.Trafico[element].Precio);
    });

    total.innerHTML = "El total es: " + suma + "k euros";

}