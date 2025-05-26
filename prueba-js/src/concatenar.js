const capitalizeWord = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export default (json) => {
  if (!Array.isArray(json) || json.length === 0) {
    return "";
  }

  return json
    .map((item) => {
      const parts = [item.nombre, item.apellido, item.apellido2].filter(
        Boolean
      );

      return parts
        .map((part) => {
          return part.split(" ").map(capitalizeWord).join(" ");
        })
        .join(" ");
    })
    .join(", ");
};
