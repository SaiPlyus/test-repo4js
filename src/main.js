(function () {
  let gallery = [
    {
      src: "./images/black-coffee.png",
      width: 200,
      height: 200,
      alt: "Black Coffee",
      ingredients: "Black Coffee",
    },
    {
      src: "./images/latte.png",
      width: 200,
      height: 200,
      alt: "Latte",
      ingredients: ["Espresso", " Steamed milk"],
    },
    {
      src: "./images/cappuccino.png",
      width: 200,
      height: 200,
      alt: "Cappuccino",
      ingredients: ["Espresso", " Steamed Milk", " Foam"],
    },
    {
      src: "./images/americano.png",
      width: 200,
      height: 200,
      alt: "Americano",
      ingredients: ["Expresso", " Hot Water"],
    },
    {
      src: "./images/espresso.png",
      width: 200,
      height: 200,
      alt: "Espresso",
      ingredients: "1oz Espresso",
    },
    {
      src: "./images/doppio.png",
      width: 200,
      height: 200,
      alt: "Doppio",
      ingredients: "2oz Espresso",
    },
    {
      src: "./images/cortado.png",
      width: 200,
      height: 200,
      alt: "Cortado",
      ingredients: ["1oz Espresso", " 1oz Steamed Milk"],
    },
    {
      src: "./images/red-eye.png",
      width: 200,
      height: 200,
      alt: "Red Eye",
      ingredients: ["Coffee", " Espresso"],
    },
    {
      src: "./images/galao.png",
      width: 200,
      height: 200,
      alt: "Galão",
      ingredients: ["1oz Espresso", " 1oz Steamed Milk"],
    },
    {
      src: "./images/lungo.png",
      width: 200,
      height: 200,
      alt: "Lungo",
      ingredients: "Long Pulled Espresso",
    },
    {
      src: "./images/macchiato.png",
      width: 200,
      height: 200,
      alt: "Macchiato",
      ingredients: ["Espresso Shot", " Foam"],
    },
    {
      src: "./images/mocha.png",
      width: 200,
      height: 200,
      alt: "Mocha",
      ingredients: ["Espresso", " Chocolate", " Steamed Milk"],
    },
    {
      src: "./images/ristretto.png",
      width: 200,
      height: 200,
      alt: "Ristretto",
      ingredients: "Short Pulled Expresso",
    },
    {
      src: "./images/flat-white.png",
      width: 200,
      height: 200,
      alt: "Flat White",
      ingredients: ["Espresso", " Steamed Milk"],
    },
    {
      src: "./images/affogato.png",
      width: 200,
      height: 200,
      alt: "Affogato",
      ingredients: ["Espresso", " Ice Cream"],
    },
    {
      src: "./images/cafe-au-lait.png",
      width: 200,
      height: 200,
      alt: "Café Au Lait",
      ingredients: ["Coffee", " Steamed Milk"],
    },
    {
      src: "./images/irish.png",
      width: 200,
      height: 200,
      alt: "Irish",
      ingredients: ["Coffee", " Whiskey", " Sugar", " Cream"],
    },
  ];
  let div = document.getElementById("images");
  for (let i = 0; i < gallery.length; i++) {
    div.innerHTML += `<div id='info'><img src='${gallery[i].src}' width = '${gallery[i].width}' height = '${gallery[i].height}' alt = '${gallery[i].alt}'><p>${gallery[i].alt}</p> <p>${gallery[i].ingredients}</p></div>`;
  }
})();
