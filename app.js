import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
import HomePage from "./src/components/homepage/homepage";
import SearchPage from "./src/components/searchpage/searchpage";
import InfoPage from "./src/components/infopage/infoPage";
import { ContextProvider } from "./src/contexts/cartContext";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [resultData, setResultData] = useState([]);
  //
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          searchText={searchText}
          setSearchText={setSearchText}
          resultData={resultData}
          setResultData={setResultData}
        />
      ),
    },
    {
      path: "/search",
      element: (
        <SearchPage
          searchText={searchText}
          setSearchText={setSearchText}
          resultData={resultData}
          setResultData={setResultData}
        />
      ),
    },
    {
      path: "/product/:product_id",
      element: (
        <InfoPage
          searchText={searchText}
          setSearchText={setSearchText}
          resultData={resultData}
          setResultData={setResultData}
        />
      ),
    },
  ]);
  //
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};
root.render(<App />);
