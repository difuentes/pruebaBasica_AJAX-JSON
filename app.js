

//variables

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');


//evento boton 1 
boton1.addEventListener('click', function(){

    //declaracion variables XML request 
    const xhr = new XMLHttpRequest();

    //abrir conexion 
    xhr.open('GET','empleado.json',true);


    xhr.onload = function(){

        if(this.status === 200){
            //convertir en objeto JSOJ
            
            const persona = JSON.parse(this.responseText);

            //crear temprate con el archivo recibido 
            const htmlTemplate = 
            `
              
                        <table>
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Trabajo</th>
                            <th>Empresa</th>
                        </tr>
                        </thead>
                
                        <tbody>
                        <tr>
                            <td>${persona.nombre}</td>
                            <td>${persona.nombre}</td>
                            <td>${persona.empresa}</td>
                        </tr> 
                        </tbody>
                    </table>
            `;

            //contruir element 
            document.getElementById('empleado').innerHTML = htmlTemplate;
        }

    }   
    //enviar el request
    xhr.send();
});

boton2.addEventListener('click',function(){
  //declaracion variables XML request 
  const xhr = new XMLHttpRequest();

  //abrir conexion 
  xhr.open('GET','empleados.json',true);


  xhr.onload = function(){

      if(this.status === 200){
          //convertir en objeto JSOJ
          
          const personas = JSON.parse(this.responseText);

            let htmlTemplate = '';
            personas.forEach(function(personas)
            {
                htmlTemplate  += 
                `
                  
                     
                        <table>
                        <thead>
                          <tr>
                              <th>Nombre</th>
                              <th>Trabajo</th>
                              <th>Empresa</th>
                          </tr>
                        </thead>
                
                        <tbody>
                          <tr>
                            <td>${personas.nombre}</td>
                            <td>${personas.nombre}</td>
                            <td>${personas.empresa}</td>
                          </tr> 
                        </tbody>
                      </table>
                   
                `;

            });
            document.getElementById('texto2').className = '';

            document.getElementById('empleados').innerHTML = htmlTemplate;

    
      }

  }   
  //enviar el request
  xhr.send();



});