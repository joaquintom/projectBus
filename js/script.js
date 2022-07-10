
//colectivos web
const colectivos = [

    {id:1, linea: 50},
    {id:2, linea: 20}

];


//Dom
const elegirColectivo = document.getElementById("lineaColectivo"); //input number
const btnBuscar = document.getElementById("buscarColectivo");
const resultado = document.getElementById("resultadoColectivo");  //<p> donde mostrar resultado

//funcion filtrar
const filtrar = () => {
    resultado.innerHTML = "";
    //console.log(elegirColectivo.value)

    const eleccion = elegirColectivo.value;

    for (let colectivo of colectivos) {
            let lineaTransporte = colectivo.linea;
                if (eleccion.includes(lineaTransporte)) {
                    resultado.innerHTML += `
                    <p>id: ${colectivo.id} <br> linea de colectivo: ${colectivo.linea}</p>
                    `;
                 }
     }

        if (resultado.innerHTML === "") {
            resultado.innerHTML += `
        <p>Linea de Colectivo no encontrada...</p>
        `;
        }

}


//evento click
    btnBuscar.addEventListener("click", filtrar)
    elegirColectivo.addEventListener("change", filtrar)


