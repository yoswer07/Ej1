export default class Cl_Salon {
    constructor(){
        this.acumEdad = 0;
        this.nombreMayor = "";
        this.auxEdadMayor = 0;
        this.contEdadChicas = 0;
        this.contEstudiantes = 0;
        this.contChicas = 0;
    }

    //metodos
    procesarEstudiante(Estudiante) {
        this.acumEdad += Estudiante.edad;
        if(Estudiante.edad > this.auxEdadMayor) {
            this.nombreMayor = Estudiante.nombre;
            this.auxEdadMayor = Estudiante.edad;
        }
        if(Estudiante.sexo === "f") {
            this.contChicas++;
        }
        if(Estudiante.edad > 17 && Estudiante.sexo === "f") {
            this.contEdadChicas++;
        }
        this.contEstudiantes++;
    }

    edadPromedio() {
        return this.acumEdad / this.contEstudiantes;
    }

    porcentajeChicas() {
        return (this.contEdadChicas / this.contChicas) * 100;
    }

    devolverNombreMayor() {
        return this.nombreMayor;
    }
}