const Preguntas = require("./preguntas")


const pregunta1 = new Preguntas(1,"¿Cuántas zonas horarias tiene en Rusia?","10","12","15","11")
const pregunta2 = new Preguntas(2,"¿Cuántos días le toma a la tierra dar una vuelta a la órbita del sol?","30","7","369","365")
const pregunta3 = new Preguntas(3,"¿Qué artista pinto el techo de la Capilla Sixtina en Roma?","Leonardo Rafael","Leonardo da Vinci","Vincent van Gogh","Miguel Angel")
const pregunta4 = new Preguntas(4,"¿En que año se inventó la World Wide Web?","1992","1987","1979","1990")
const pregunta5 = new Preguntas(5,"¿Cuántas teclas tiene un piano?","48","63","71","88")
const pregunta6 = new Preguntas(6,"¿En qué año se fundó Netflix?","2005","2001","1995","1997")
const pregunta7 = new Preguntas(7,"¿Cuál fue el primer largometraje de Pixar?","Los Increibles","Buscando a nemo","Monster Inc.","Toy Story")
const pregunta8 = new Preguntas(8,"¿De qué ciudad son originarios los Beatles?","Seattle","Paris","California","Liverpool")
const pregunta9 = new Preguntas(9,"¿Cuantos planetas tiene el sistema solar? (sin contar a pluton)","5","7","9","8")
const pregunta10 = new Preguntas(10,"¿En que año fue el alunizaje del apollo 11?","1970","1975","1971","1969")


let preguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,pregunta10]

class PreguntaList{

    constructor() {

    }

    buscarPorId(id)
    {
        const pregunta = preguntas.find(elemento => elemento.id === id);
        //regresa un objeto, si pregunta es el objeto
        console.log(pregunta)
    }



}
module.exports = PreguntaList;