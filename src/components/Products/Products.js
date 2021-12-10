import React, { useState, useEffect } from "react";
import "./Products.css";
// import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json`
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="pizza-block">
          <Skeleton height={350} />
        </div>
        <div className="pizza-block">
          <Skeleton height={350} />
        </div>
        <div className="pizza-block">
          <Skeleton height={350} />
        </div>
        <div className="pizza-block">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="content__items">
        {filter.map((product) => {
          return (
            <div className="pizza-block" key={product.id}>
              <img
                src={product.imageUrl}
                className="pizza-block__image"
                alt={product.name}
              />
              <h4 className="pizza-block__title">{product.name}</h4>
              <p className={"pizza-block__selector"}>
                <ul>
                  <li>{product.sizes[0]}</li>
                  <li>{product.sizes[1]}</li>
                  <li>{product.sizes[2]}</li>
                </ul>
                <h5>Размер (см)</h5>
              </p>
              <div className="pizza-block__bottom">
                <span className="pizza-block__price">От {product.price} ₽</span>
                <button
                  className="button button--add button--outline"
                  onClick={() => {
                    addProduct(product);
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                      fill="#EB5A1E"
                    />
                    <path
                      d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                      fill="#EB5A1E"
                    />
                  </svg>
                  <span>Добавить</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className="content__title">Все пиццы</h2>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
