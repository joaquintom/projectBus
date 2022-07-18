
//colectivos app

const colectivos = [

    {id:1, linea: 10},
    {id:2, linea: 20},
    {id:3, linea: 21},
    {id:4, linea: 50},
    {id:5, linea: 51},
    {id:6, linea: 55}

];



//Dom

const elegirColectivo = document.getElementById("lineaColectivo"); //input number
const btnBuscar = document.getElementById("buscarColectivo");
const resultado = document.getElementById("resultadoColectivo");  //<h4> mostrar elección linea colectivo



//funcion buscar
const buscar = () => {
    resultado.innerHTML = "";
    
    const eleccion = elegirColectivo.value;

    for (let colectivo of colectivos) {
            let lineaTransporte = colectivo.linea;
                if (eleccion.includes(lineaTransporte)) {
                    resultado.innerHTML += `
                    <p>Linea de colectivo: ${colectivo.linea}</p>
                     `;
                } 
    }

                 if (resultado.innerHTML === "") {
                    resultado.innerHTML += `
                    <p>Linea de Colectivo no encontrada...</p>
                    `;
                 }
    
}

//eventos funcion buscar
    btnBuscar.addEventListener("click", buscar)
    elegirColectivo.addEventListener("change", buscar)

        

    // Recorrer el array para encontrar el id 
    colectivos.forEach((colectivo) => {
        console.log(colectivo.id)

        resultado.innerHTML = "";
       
            const idColectivo = colectivos.find((transporte => transporte.id == colectivo.id))      
       
            if(idColectivo === 2){

                resultado.innerHTML += ` 
        
                    <div class="container">
                        <div class="row">
                        <div class="col">
                        <h5>TERM</h5>
                        <p>5:00</p>
                        <p>5:40</p>
                        <p>6:00</p>
                    </div>
    
                    <div class="col">
                        <h5>CENTRO</h5>
                        <p>5:10</p>
                        <p>5:55</p>
                        <p>6:14</p>
                    </div>

                        <div class="col">
                            <h5>7,2</h5>
                            <p>5:25</p>
                            <p>6:10</p>
                            <p>6:30</p>
                        </div>

                        <div class="col">
                            <h5>10</h5>
                            <p>5:30</p>
                            <p>6:15</p>
                            <p>6:35</p>
                        </div>


                        <div class="col">
                            <h5>14,8</h5>
                            <p>5:35</p>
                            <p>6:22</p>
                            <p>6:40</p>
                        </div>
                    
                    
                        <div class="col">
                            <h5>18</h5>
                            <p>5:40</p>
                            <p>6:30</p>
                            <p>6:50</p>
                        </div>
                    
                        <div class="col">
                            <h5>21,4</h5>
                            <p>5:50</p>
                            <p>6:35</p>
                            <p>6:55</p>
                        </div>
                    
                        <div class="col">
                            <h5>LLAO LLAO</h5>
                            <p>5:55</p>
                            <p>6:40</p>
                            <p>7:00</p>
                        </div>
                    </div>
                 `;

         }

    })

   

