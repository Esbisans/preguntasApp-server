class Pregunta{

    constructor(id,descripcion, resIncorrecta1, resIncorrecta2, resIncorrecta3, resCorrecta) {
        this.id = id;
        this.descripcion = descripcion;
        this.resIncorrecta1 = resIncorrecta1;
        this.resIncorrecta2 = resIncorrecta2;
        this.resIncorrecta3 = resIncorrecta3;
        this.resCorrecta = resCorrecta;
    }



}
module.exports = Pregunta;