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
    let mounted = true;
    if (mounted) {
      const fetchData = async () => {
        const res = await axios.get(
          `https://dev2.th3insid3.com/api/products?page=${currentPage}&search=${nameProduct}`
        );
        const products = res.data.products;
        setProducts(products);
        setPaginatorInfo(res.data.paginatorInfo);
      };
      fetchData();
    }
    mounted = false;
  }, [currentPage, nameProduct]);

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
            <div className="card" style={{ height: "480px" }}>
              <img
                className="card-img-top mb-2"
                src={product.image}
                alt={product.name}
                style={{
                  height: "300px",
                  objectFit: "scale-down",
                }}
              />
              <div className="card-body mb-3">
                <h5 className="card-title">{product.name}</h5>
                <p>Price: {product.price}</p>
              </div>
              <div>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-warning btn-sm m-3"
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
