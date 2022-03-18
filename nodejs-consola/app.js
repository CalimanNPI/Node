require("colors");

const { inquirerMenu, pausa, leerInput, listadoTareas } = require("./helpers/inquirer");
const {guardarBD} = require('./helpers/guardarArchivo')
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt;
  const tareas = new Tareas();
  var date = Date.now();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const desc = await leerInput();
        tareas.crearTarea(desc);
        break;
      case 2:
        const id = await listadoTareas(tareas.listado);
        tareas.crearTarea(id);
        break;
      case 3:
        console.log(tareas.listadoCompletadas);
        break;
      case 4:
        console.log(tareas.listadoPendientes);
        break;
      case 5:
        break;
      case 6:
        break;

      default:
        break;
    }
    guardarBD(tareas.listado);
    await pausa();
    
  } while (opt !== 0);
};

main();
