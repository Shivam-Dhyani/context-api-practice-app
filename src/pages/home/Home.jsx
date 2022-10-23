import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Product from "../../components/product/Product";
import "./Home.css";

const Home = () => {
  // To get consistent(same) random values every time, the page gets reloaded.
  // "facker.seed(X)", here X can be any random number.
  // It dosen't work on the images. Images keeps changing on every reload of the page.
  faker.seed(0);

  // Here 3 steps are done :-
  // 1. [] -> empty array formed
  // 2. '...Array(20)' ->  size of the empty array is set as 20
  // 3. map() -> it is looping over array of size 20, and returning 20 object, which
  //             is then stored in 'productArray'
  let productArray = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
    };
  });

  console.log(productArray);

  // 'productArray' is stored in a useState Hook so that, whenever any changes happens to
  //  the 'productArray' it gets reflected to the user immediately.
  const [productArrayState] = useState(productArray);

  return (
    <div className="productContainer">
      {productArrayState.map((productObject) => {
        return <Product key={productObject.id} productObject={productObject} />;
      })}
    </div>
  );
};

export default Home;
