const {v4 : uuidv4} = require('uuid')

const Tarea = function(clase, titulo){
    this.id = uuidv4();
    this.clase = clase;
    this.titulo = titulo;
    this.estado = "pendiente";
    this.fecha = new Date();
}

module.exports = Tarea;