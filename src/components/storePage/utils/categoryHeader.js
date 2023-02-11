export const categoryHeader = (params) => {
  switch (params.categoryName) {
    case "allproducts":
      return "https://i.ibb.co/Bn5ppX0/pexels-pixabay-417451.jpg";
    case "accesories":
      return "https://i.ibb.co/LJBrFsL/header-accesories-2.webp";
    case "effects":
      return "https://i.ibb.co/1YCWdgd/header-effects-2.jpg";
    case "bass":
      return "https://i.ibb.co/vP0mBvP/header-bass-3.jpg";
    case "electric":
      return "https://i.ibb.co/kDd2DYm/header-guitar-2.webp";
    case "acoustic":
      return "https://i.ibb.co/6gkZ2yr/header-guitar-3.webp";
    case "amplifier":
      return "https://i.ibb.co/bLjyJbf/header-amp-1.jpg";
    default:
      return "https://i.ibb.co/bLjyJbf/header-amp-1.jpg";
  }
};
