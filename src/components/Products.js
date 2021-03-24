import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreCount, setHasMoreCount] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://dev2.th3insid3.com/api/products?page=${currentPage}`
      );
      const products = res.data.products;
      setProducts(products);
      console.log(res.data.paginatorInfo.currentPage)
      const hasMorePages = res.data.paginatorInfo.hasMorePages;
      setHasMoreCount(hasMorePages);
      console.log(products);
    }
    fetchData();
  }, [currentPage]);

  const dispatch = useDispatch();
  return (
    <div className="container text-center">
      <h1>Products</h1>
      <div className="d-flex justify-content-center mt-5">
        {currentPage > 1 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            className="btn btn-danger btn-sm"
          >
            Anterior
          </button>
        )}
        {hasMoreCount && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className="btn btn-danger btn-sm mx-3"
          >
            Siguiente
          </button>
        )}
      </div>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 my-2">
            <div className="card" style={{ height: "380px" }}>
              <img
                className="card-img-top"
                src={product.image}
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>Price: {product.price}</p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-warning btn-sm"  
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
