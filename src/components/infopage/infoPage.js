import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../common/searchBar/searchBar";
import CartContext from "../../contexts/cartContext";

const InfoPage = (props) => {
  const { product_id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const navigate = useNavigate();
  const { cartData, addProductToCart, removeFromCart } =
    useContext(CartContext);
  //
  const normalDeliveryDate = new Date();
  normalDeliveryDate.setDate(normalDeliveryDate.getDate() + 8);
  const fastDeliveryDate = new Date();
  fastDeliveryDate.setDate(normalDeliveryDate.getDate() + 1);
  const getDeliveryDate = (date) => {
    const dateStr = date.toDateString();
    const dayOfWeek = dateStr.substr(0, 3);
    const month = dateStr.substr(4, 3);
    const actualDate = dateStr.substr(8, 2);
    return ` ${dayOfWeek}, ${actualDate} ${month}`;
  };
  //
  const getData = async () => {
    try {
      const request = await fetch(
        `https://dummyjson.com/products/${product_id}`
      );
      const response = await request.json();
      setProductInfo(response);
    } catch (error) {
      console.log("Error fetching product info:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const redirect = () => {
    if (props.searchText === "") {
      alert("Input field is empty");
    } else {
      navigate("/search");
    }
  };

  return (
    <div className="infoPage">
      <SearchBar {...props} getData={redirect} />
      {productInfo && (
        <>
          <img src={productInfo.thumbnail} alt="Product Thumbnail" />
          <div>
            <h1>{productInfo.title}</h1>
            <h2>Rs. {productInfo.price * 82}</h2>
            <h3>{productInfo.description}</h3>
            <br />
            <br />
            <h5 className="card-title">Category - {productInfo.category}</h5>
            <br />
            <br />
            <p>
              FREE DELIVERY BY :{" "}
              <strong>{getDeliveryDate(normalDeliveryDate)}</strong>
            </p>
            <p>
              GET FAST DELIVERY BY :{" "}
              <strong>{getDeliveryDate(fastDeliveryDate)}</strong>
            </p>
            <div className="btnContainer">
              <button
                className="incQuantity"
                onClick={() => addProductToCart(productInfo)}
              >
                +
              </button>
              <button className="showQuantity">
                {productInfo.id in cartData
                  ? cartData[productInfo.id].count
                  : 0}
              </button>
              <button
                className="decQuantity"
                onClick={() => removeFromCart(productInfo)}
              >
                -
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default InfoPage;
