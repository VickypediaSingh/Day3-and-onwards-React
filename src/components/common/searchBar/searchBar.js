import { useContext, useState } from "react";
import UIModal from "../modal/uiModal";
import CartContext from "../../../contexts/cartContext";
import { Link } from "react-router-dom";
const SearchBar = (props) => {
  const [visible, setVisible] = useState(false);
  const { cartData } = useContext(CartContext);

  const f = (e) => {
    props.setSearchText(e.target.value);
  };
  const getProductsCount = () => {
    const arr = Object.values(cartData);
    const res = arr.reduce((acc, item) => acc + item.count, 0);
    return res;
  };

  return (
    <div className="search-bar">
      <div>
        <Link to="/" className="homeIcon">
          ⌂
        </Link>
      </div>
      <div className="category-dropdown">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={props.searchText}
          onChange={(e) => f(e)}
        />
        <button className="searchBtn" onClick={props.getData}>
          🔎
        </button>
      </div>
      <div className="cartIcon" onClick={() => setVisible(!visible)}>
        {getProductsCount()}
      </div>

      <UIModal
        cartData={cartData}
        toggle={() => setVisible(!visible)}
        visible={visible}
      />
    </div>
  );
};
export default SearchBar;
