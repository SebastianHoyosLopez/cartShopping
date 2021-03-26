import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "rc-pagination";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameProduct, setNameProduct] = useState("");
  const [paginatorInfo, setPaginatorInfo] = useState({});

  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://dev2.th3insid3.com/api/products?page=${currentPage}&search=${nameProduct}`
      );
      const products = res.data.products;
      setProducts(products);
      setPaginatorInfo(res.data.paginatorInfo);
    }
    fetchData();
  }, [currentPage, nameProduct, cart]);

  const dispatch = useDispatch();

  return (
    <div className="container text-center">
      <h1>Products</h1>
      {cart.length >= 1 && (
        <h3 className="mt-2">products in cart {cart.length}</h3>
      )}
      <div className="d-flex justify-content-center mt-5">
        <h4>{cart.length >= 1}</h4>
        <div className="form-outline mx-4">
          <input
            type="search"
            onChange={(e) => setNameProduct(e.target.value)}
            id="form1"
            className="form-control"
            placeholder="Buscar"
          />
        </div>
        <Pagination
          onChange={(page) => setCurrentPage(page)}
          pageSize={20}
          total={paginatorInfo?.total}
        />
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 my-5">
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
