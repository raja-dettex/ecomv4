import { ProductCard } from "./../components/ProductComponent/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "./../components/Filter/Filter";
import { Fragment } from "react";
import "./Product.css";
import Navbar from "./../components/Navbar/Navbar";

export const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { data }
        } = await axios.get("Products.json");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex gap">
        <Filter />
        <main className="main d-flex gap wrap">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </main>
      </div>
    </Fragment>
  );
};
