import { useContext, useEffect, useState } from "react";
import SearchResultCard from "./searchResultCard/searchResultCard";
import SearchBar from "../common/searchBar/searchBar";
import CartContext from "../../contexts/cartContext";

const SearchPage = (props) => {
  const getData = async () => {
    try {
      const request = await fetch(
        `https://dummyjson.com/products/search?q=${props.searchText}`
      );
      const data = await request.json();
      // if (props.searchText == "") {
      //   alert("Input field is empty");
      // } else {
      props.setResultData(data.products);
      // }
      // useNavigate("/search");
    } catch (error) {
      console.log("ye hai error :", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="searchPageContainer">
      {/*  */}
      <SearchBar {...props} getData={getData} />
      {/*  */}
      <div className="searchResultContainer">
        <div className="searchResultLeft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. In
          rutrum. Sed ac dolor sit amet purus malesuada congue. Vivamus magna.
          Cras in mi at felis aliquet congue. Ut a est eget ligula molestie
          gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis,
          tellus est malesuada tellus, at luctus turpis elit sit amet quam.
          Vivamus pretium ornare est.
        </div>
        <div className="searchResultRight">
          {props.resultData.map((elm) => {
            return <SearchResultCard key={elm.id} product={elm} />;
          })}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SearchPage;
