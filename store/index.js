import { products } from "@/assets/products";
import { myRental } from "@/assets/myRental";
// console.log(products);

export const state = () => ({
  textHero:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iust illum quidem asperiores, cum nisi aperiam eius ipsa sapiente odit!",
  products: products,
  myRental: myRental,
});

export const getters = {
  getProductsById: (state) => (id) => {
    return state.products.find((product) => product.id === +id);
  },
};

export const mutations = {
  addItem(state, id) {
    let item = state.products.find((product) => product.id === +id);
    state.myRental.push(item);
  },
};
