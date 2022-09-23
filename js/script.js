

const idaHorarios10 = 
[
    ["5:40 <br> 8:00 <br> 10:15 <br> 13:20 <br> 16:35 <br> 19:00 <br> 21:30"], // TERM [0]
    ["5:50 <br> 8:15 <br> 11:05 <br> 13:35 <br> 16:50 <br> 19:15 <br> 21:45"], // CENTRO [1]
    ["5:55 <br> 8:30 <br> 11:20 <br> 13:50 <br> 17:05 <br> 19:30 <br> 22:00"], // KM 7,2 [2]
    ["6:00 <br> 8:35 <br> 11:25 <br> 13:55 <br> 17:10 <br> 19:35 <br> 22:05"], // PTO. MOR [3]
    ["6:05 <br> 8:40 <br> 11:30 <br> 14:00 <br> 17:15 <br> 19:40 <br> 22:10"], // KM 14,8 [4]
    ["6:10 <br> 8:45 <br> 11:35 <br> 14:05 <br> 17:20 <br> 19:45 <br> 22:15"], // KM 18 [5]
    ["6:12 <br> 8:50 <br> 11:40 <br> 14:10 <br> 17:25 <br> 19:50 <br> 22:20"], // TREBOL [6]
    ["6:25 <br> 9:00 <br>       <br> 14:20 <br>       <br>       <br> 22:40"], // COLONIA [7]
    ["6:35 <br> 9:20 <br>       <br> 14:40 <br>       <br>       <br> 22:50"], // B° LOPEZ [8]
    
];

const idaHorarios20 = [
    ["5:00 <br> 5:40 <br> 6:00"], // TERM [0]
    ["5:00 <br> 5:40 <br> 6:00"], // CENTRO [1]
    ["5:00 <br> 5:40 <br> 6:00"], // KM 7,2 [2]
    ["5:00 <br> 5:40 <br> 6:00"], // KM 10 [3]
];



const colectivos = [

    {id:1, linea: 10, horario: idaHorarios10, paradas:["TERM", "CENTRO", "KM 7,2", "PTO. MOR", "KM 14,8", "KM 18", "TREBOL", "COLONIA", "B° LOPEZ"]},
    {id:2, linea: 20, horario: idaHorarios20, paradas:["TERM", "CENTRO", "KM 7,2", "KM 10" ]},
    {id:3, linea: 21},
    {id:4, linea: 50},
    {id:5, linea: 51},
    {id:6, linea: 55}

];



//Dom

    const elegirColectivo = document.getElementById("lineaColectivo"); //input number
    const btnBuscar = document.getElementById("buscarColectivo"); // boton buscar
    const resultado = document.getElementById("resultadoColectivo");  //<h4> mostrar elección linea colectivo


//funcion buscar
    const buscar = () => {
        resultado.innerHTML = "";

            const eleccion = elegirColectivo.value;
                
                for (let colectivo of colectivos) {
               
                let lineaTransporte = colectivo.linea;
                let horariosTransporte = colectivo.horario;

               
                if (eleccion.includes(lineaTransporte)) {
                            
                        horariosTransporte.forEach((index, item) =>{
                            console.log(item,index)//recorriendo el array
                        
                        resultado.innerHTML =`

                        <div class="container">
                         <div class="row">
                            <div class="col">
                                <h5>${colectivo.paradas[0]}</h5>
                                <p>${horariosTransporte[0]}</p>
                                
                            </div>

                            <div class="col">
                                <h5>${colectivo.paradas[1]}</h5>
                                <p>${horariosTransporte[1]}</p>
                                
                            </div>

                            <div class="col">
                            <h5>${colectivo.paradas[2]}</h5>
                            <p>${horariosTransporte[2]}</p>
                             </div>

                             <div class="col">
                             <h5>${colectivo.paradas[3]}</h5>
                             <p>${horariosTransporte[3]}</p>
                             </div>
                            
                             <div class="col">
                             <h5>${colectivo.paradas[4]}</h5>
                             <p>${horariosTransporte[4]}</p>
                             </div>

                             <div class="col">
                             <h5>${colectivo.paradas[5]}</h5>
                             <p>${horariosTransporte[5]}</p>
                             </div>

                             <div class="col">
                             <h5>${colectivo.paradas[6]}</h5>
                             <p>${horariosTransporte[6]}</p>
                             </div>

                             <div class="col">
                             <h5>${colectivo.paradas[7]}</h5>
                             <p>${horariosTransporte[7]}</p>
                             </div>

                             <div class="col">
                             <h5>${colectivo.paradas[8]}</h5>
                             <p>${horariosTransporte[8]}</p>
                             </div>
                            
                        `
                        })
                    } 
                
                } 
                
                if (resultado.innerHTML === "") {
                        resultado.innerHTML += `
                        <p class="mensajeError"><strong>Ups!</strong> Por favor, ingrese una línea de colectivo valida.</p>
                        `;
                }
    
     }

     //eventos de la funcion buscar
    btnBuscar.addEventListener("click", buscar)
    


    //[10] indice 10 = 13:35
                     
  /*
                        
                        if((eleccion.includes(lineaTransporte)) && lineaTransporte == 20){

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
                     }*/

                     /*

             }

                 if (resultado.innerHTML === "") {
                    resultado.innerHTML += `
                    <p>Linea de Colectivo no encontrada...</p>
                    `;
                 }
                 
}


*/ 


