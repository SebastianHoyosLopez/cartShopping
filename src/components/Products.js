import axios from 'axios';
import Pagination from 'rc-pagination';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [paginatorInfo, setPaginatorInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://dev2.th3insid3.com/api/products?page=${currentPage}`
      );
      setProducts(res.data.products);
      setPaginatorInfo(res.data.paginatorInfo);
    }
    fetchData();
  }, [currentPage]);

  const dispatch = useDispatch();
  return (
    <div className="container text-center mb-4">
      <h1>Products</h1>

      <div className="row mb-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 my-2">
            <div className="card" style={{ height: '380px' }}>
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

      <Pagination
        onChange={(page) => setCurrentPage(page)}
        pageSize={20}
        total={paginatorInfo?.total}
      />
    </div>
  );
};

export default Products;
