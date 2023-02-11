export const categoryName = (categoryName) => {
  if (
    categoryName === "electric" ||
    categoryName === "acoustic" ||
    categoryName === "bass"
  ) {
    return (
      categoryName.replace(categoryName[0], categoryName[0].toUpperCase()) +
      " Guitars"
    );
  }
  return categoryName.replace(categoryName[0], categoryName[0].toUpperCase());
};
