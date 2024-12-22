//Implementación de `osModule.js`

//- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
// - Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

let osModule = () => {
  const os = require("os");

  console.log("Nombre:", os.hostname());
  console.log("Versión:", os.version());
  console.log("Arquitectura:", os.arch());
  console.log("Cantidad de CPUs:", os.cpus().length);

  const total_memory = os.totalmem();
  const free_memory = os.freemem();

  console.log("Memoria Total (MB):", total_memory / (1024 * 1024));
  console.log("Memoria Libre (MB):", free_memory / (1024 * 1024));
};
osModule();

module.exports = osModule;
