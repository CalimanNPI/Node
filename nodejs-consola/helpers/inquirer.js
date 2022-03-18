const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: `${"1.".blue} Crear tarea`,
      },
      {
        value: 2,
        name: `${"2.".blue} Listar tareas`,
      },
      {
        value: 3,
        name: `${"3.".blue} Listar tareas completadas`,
      },
      {
        value: 4,
        name: `${"4.".blue} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${"5.".blue} Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${"6.".blue} Borrar tarea`,
      },
      {
        value: 0,
        name: `${"0.".blue} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".blue);
  console.log("  Seleccione una opción".blue);
  console.log("=========================\n".blue);
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: " input",
      name: "enter",
      message: `Presione ${"ENTRER".blue} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (mensaje) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message: `${"Descripción:".blue} `,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareas = async (listado) => {
  const listadoTareas = [
    {
      type: "list",
      name: "opcion",
      message: "Seleccione la Tarea a completar",
      choices: listado,
    },
  ];
  console.log("\n");
  const { opcion } = await inquirer.prompt(listadoTareas);
  return opcion;
};
module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareas,
};
