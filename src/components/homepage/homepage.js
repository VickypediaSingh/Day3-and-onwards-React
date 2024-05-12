import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../common/searchBar/searchBar.js";
import HomeCard from "./homeCard.js";
//
const HomePage = (props) => {
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState([]);
  //
  const redirect = () => {
    if (props.searchText == "") {
      alert("Input field is empty");
    } else {
      navigate("/search");
    }
  };
  //
  const fetchHomeData = async () => {
    try {
      const request = await fetch(`https://dummyjson.com/products`);
      const response = await request.json();
      setHomeData(response.products);
    } catch (error) {
      console.log("this is the error :", error);
    }
  };
  //
  const [randomIndicesArr, setRandomIndicesArr] = useState([]);
  function generateRandomNumber(temp) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 30);
    } while (temp.includes(randomNumber));
    // The while condition checks if the randomNumber already exists in the randomIndicesArr array using the includes() method. If it does, the loop continues, generating a new random number. If not, the loop exits.
    return randomNumber;
  }

  //
  useEffect(() => {
    fetchHomeData();
  }, []);
  //
  useEffect(() => {
    const temp = randomIndicesArr;
    for (let i = 0; i < 5; i++) {
      temp.push(generateRandomNumber(temp));
    }
    setRandomIndicesArr(temp);
  }, []);
  //
  return (
    <div
      className="homeCardContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <SearchBar {...props} getData={redirect} />
      {randomIndicesArr.map((index) => (
        <HomeCard
          key={index}
          // homeData={homeData[index]}
          id={homeData[index]?.id}
          imgSrc={
            homeData[index]?.thumbnail ||
            "https://imgs.search.brave.com/65oFsI1cszj1f8cliOT7XOz82gZrC8_J5tjiTZkiRLA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc"
          }
          rating={homeData[index]?.rating || "UnRated"}
          title={homeData[index]?.title || "No Title"}
          price={homeData[index]?.price || "Price Not Available"}
        />
      ))}
    </div>
  );
};

export default HomePage;

// issue 1 : response dynamically changing if search bar is changed
