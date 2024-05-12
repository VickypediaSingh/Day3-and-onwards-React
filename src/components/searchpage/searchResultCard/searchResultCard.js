import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../contexts/cartContext";

const SearchResultCard = ({ product }) => {
  const { cartData, addProductToCart, removeFromCart } =
    useContext(CartContext);
  //
  const normalDeliveryDate = new Date();
  normalDeliveryDate.setDate(normalDeliveryDate.getDate() + 8);
  const fastDeliveryDate = new Date();
  fastDeliveryDate.setDate(fastDeliveryDate.getDate() + 1);
  //
  const getDeliveryDate = (date) => {
    const dateStr = date.toDateString();
    const dayOfWeek = dateStr.substr(0, 3);
    const month = dateStr.substr(4, 3);
    const actualDate = dateStr.substr(8, 2);
    return ` ${dayOfWeek}, ${actualDate} ${month}`;
  };
  //
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img className="imgCard" src={product.thumbnail}></img>
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <br></br>
        <p>
          FREE DELIVERY BY :
          <strong>{getDeliveryDate(normalDeliveryDate)}</strong>
        </p>
        <p>
          GET FAST DELIVERY BY :
          <strong>{getDeliveryDate(fastDeliveryDate)}</strong>
        </p>
        {/*  */}
        <br></br>
        {/*  */}
        <div className="btnContainer">
          <button
            className="incQuantity"
            onClick={() => addProductToCart(product)}
          >
            +
          </button>
          <button className="showQuantity">
            {/* {() => getProductCount(product.id)} */}
            {product.id in cartData ? cartData[product.id].count : 0}
          </button>
          <button
            className="decQuantity"
            onClick={() => removeFromCart(product)}
          >
            -
          </button>
          <br></br>
          <br></br>
        </div>
        <h5 className="card-title">Category - {product.category}</h5>
      </div>
    </div>
  );
};
export default SearchResultCard;
