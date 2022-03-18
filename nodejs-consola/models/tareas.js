const Tarea = require("./tarea");
class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listado() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push({
        value: this._listado[key].id,
        name: `${this._listado[key].desc.blue}`,
      });
    });
    return listado;
  }

  get listadoCompletadas() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      if (this._listado[key].completado !== null) {
        listado.push({
          value: this._listado[key].id,
          name: `${this._listado[key].desc.blue}`,
        });
      }
    });
    return listado;
  }

  get listadoPendientes() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      if (this._listado[key].completado === null) {
        listado.push({
          value: this._listado[key].id,
          name: `${this._listado[key].desc.blue}`,
        });
      }
    });
    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  completarTarea(id) {
    var date = Date.now();
    Object.keys(this._listado).forEach((key) => {
      if (this._listado[key].id === id) {
        this._listado[key].completado = date; 
        console.log('Tarea completada');
      }
    });
  }

  borrarTarea(id) {}
}

module.exports = Tareas;
