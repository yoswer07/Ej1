/* Sea un salon de clases en el DCyT, donde se procesan los datos de cada esudiante (nombre, edad y sexo).
El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos registros de estudiantes para
determinar: a. la edad promedio, b. el nombre del estudiante con mayor edad, c. el porcentaje de chicas que
son mayor de edad.
El profesor informa que si asisten Luis(16), Ana(19), Jose(20) y Carmen(18) */

import Cl_Salon from "./Cl_Salon.js";
import Cl_Estudiante from "./Cl_Estudiante.js";

//instanciar el objeto sobre
let estudiante1 = new Cl_Estudiante("Luis", 16, "m");
let estudiante2 = new Cl_Estudiante("Ana", 19, "f");
let estudiante3 = new Cl_Estudiante("Jose", 20, "m");
let estudiante4 = new Cl_Estudiante("Carmen", 18, "f");

let salon = new Cl_Salon();
salon.procesarEstudiante(estudiante1);
salon.procesarEstudiante(estudiante2);
salon.procesarEstudiante(estudiante3);
salon.procesarEstudiante(estudiante4);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Edad promedio = ' + salon.edadPromedio();
salida.innerHTML += '<br> Estudiante con mayor edad = ' + salon.devolverNombreMayor();
salida.innerHTML += '<br> Porcentaje de chicas mayor de edad = ' + salon.porcentajeChicas() + "%";
