export default (json) => {
  if (!Array.isArray(json) || json.length === 0) {
    return 0;
  }

  let sumaEdades = 0;
  let contadorEdadesValidas = 0;

  json.forEach((item) => {
    if (typeof item.edad === "number" && !isNaN(item.edad)) {
      sumaEdades += item.edad;
      contadorEdadesValidas++;
    }
  });

  if (contadorEdadesValidas === 0) {
    return 0;
  } else {
    return sumaEdades / contadorEdadesValidas;
  }
};
