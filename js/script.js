

let horarios10 = ["4:14", "5:14", "6:14", "7:14", "7:14"];
let horarios20 = ["5:00", "5:40", "6:00"];


const colectivos = [

    {id:1, linea: 10, horario: horarios10 },
    {id:2, linea: 20, horario: horarios20 },
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
                            resultado.innerHTML += `
                  
                                <div>
                                    <h5>Linea de colectivo: ${colectivo.linea}</h5>
                                    <p class="horariosBondi">${colectivo.horario}</p>  
                                    
                                </div>
                                    `;            
                                
                            console.log('>>>',lineaTransporte, horariosTransporte)
                            } 
                            
                }            
        
                if (resultado.innerHTML === "") {
                        resultado.innerHTML += `
                        <p>Linea de Colectivo no encontrada...</p>
                        `;
                }
    
     }

     //eventos de la funcion buscar
    btnBuscar.addEventListener("click", buscar)
    

                     

    /*
    
    
    
let horarios10 = ["4:14", "5:14", "6:14", "7:14", "7:14"];
let horarios20 = ["5:00", "5:40", "6:00"];


const colectivos = [

    {id:1, linea: 10, horario: horarios10 },
    {id:2, linea: 20, horario: horarios20 },
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
                    if (eleccion.includes(lineaTransporte)) {
                            resultado.innerHTML += `
                  
                                <div>
                                    <h5>Linea de colectivo: ${colectivo.linea}</h5>
                                    <p class="horariosBondi">${colectivo.horario}</p>  
                                </div>
                                    `;            
                                
                            console.log('>>>',lineaTransporte, colectivo.horario)
                            } 
                            
                }            
        
                if (resultado.innerHTML === "") {
                        resultado.innerHTML += `
                        <p>Linea de Colectivo no encontrada...</p>
                        `;
                }
    
     }

     //eventos de la funcion buscar
    btnBuscar.addEventListener("click", buscar)
    
    */




            /* Si agrego un if acá me muestra los horarios, pero la funcion se va a un nivel de complejidad muy alto, lo cual no está bueno.
                        
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

/*
    // Recorrer el array para encontrar el id y con dicho id mostrar los horarios 
   
    
    colectivos.forEach((colectivo) => {
        console.log(colectivo.id)

             let idColectivo = colectivos.find((transporte => transporte.id == colectivo.id))  
                    
})

*/



/* 
//error is not a function
  
inputNumber.addEventListener("change", () => {
        
        let buscador = inputNumber;

        let colectivosFiltro = colectivos.filter(colectivo => colectivo.linea.includes(buscador)) 
    
        colectivosFiltro.forEach(colectivo => {
            if(buscador == 20)
            resultado.innerHTML +=`
            <p> hola ${colectivo.linea}</p>`;
            
        });
    })
     */  

    /*
    

/*
colectivos app

Idea: A través de un buscador poder ingresar la linea de colectivo y que muestra los horarios de dicho colectivo.

class colectivos {
    constructor (id, linea){
        this.id = id;
        this.linea = linea;

    }
}

const colectivo10 = new colectivos (1,10);
const colectivo20 = new colectivos (2,20);

let horarios10 = ["4:14", "5:14", "6:14", "7:14"];
let horarios20 = [];

// desestructuracion: const {id, linea, horarios} = element;

const lineaColectivo = document.getElementById("lineaColectivo"); //input number
const buscarColectivo = document.getElementById("buscarColectivo"); // boton buscar
const resultado = document.getElementById("resultado"); //innerHtml



*/