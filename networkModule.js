/*  Implementación de `networkModule.js`

 En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno. */

let networkModule = () => {
  const os = require("os");

  const interfaces = os.networkInterfaces();

  const lista = [
    ...new Set(
      Object.entries(interfaces).flatMap(([name, infos]) =>
        infos.map(
          ({ family, address, internal }) =>
            `${name}: ${family}-${address}-${internal}`
        )
      )
    ),
  ];

  console.log(lista);
};
networkModule();

module.exports = networkModule;
