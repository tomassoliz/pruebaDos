const { leerJSON, escribirJSON } = require('../data')
const Tarea = require('./Tarea')

module.exports = {
    tareas: leerJSON(),
    listar: function (tareas = this.tareas) {
        tareas.forEach(({ clase, titulo, estado }) => {
            console.log(`CLASE: ${clase}: ${titulo} --> ${estado}`);
        });
    },
    agregar: function (clase, titulo) {
        const tareas = this.tareas;
        let tarea = new Tarea(clase, titulo)

        tareas.push(tarea)
        escribirJSON(tareas);
        return `La tarea ${tarea.titulo} de la clase ${tarea.clase} se agregó exitosamente.`
    },
    filtrar: function (estado) {
        const tareasFiltradas = this.tareas.filter(tarea => tarea.estado === estado); //destructuring aca no conviene 
        if (!tareasFiltradas.length) {
            return console.log(`INFO: No hay tareas con el estado: ${estado}`);
        }
        this.listar(tareasFiltradas)
    },
    editar: function (clase, estado) {
        const tareas = this.tareas;
        const tarea = tareas.find((tarea) => tarea.clase === clase)
        if (!tarea) {
            return console.log(`ERROR: la clase ${clase} no se encuentra`);
        }
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.clase === clase) {
                tarea.estado = estado.toLowerCase()
                //return tarea //modificado
            }
            return tarea //sin modificar
        })

        escribirJSON(tareasActualizadas)
        return `El estado de la clase ${tarea.titulo} ahora es ${estado}.`
    }
}

//find devuelve el elemento
//filter busca el array