export default (word1, word2) => {
  const limpiarYNormalizar = (palabra) => {
    return palabra
      .toLowerCase()
      .normalize("NFD")
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  };
  const p1Normalizada = limpiarYNormalizar(word1);
  const p2Normalizada = limpiarYNormalizar(word2);

  return p1Normalizada === p2Normalizada;
};
