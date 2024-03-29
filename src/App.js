import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
  });
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  const menus = [
    {
      name: "Demos",
      submenus: [
        "Demos Header",
        "Demos Layout",
        "Demos Buttons",
        "Gallery Demos",
        "Video Demos",
      ],
    },
    {
      name: "Post",
      submenus: [
        "Post Header",
        "Post Layout",
        "Share Buttons",
        "Gallery Post",
        "Video Post",
      ],
    },
    {
      name: "Features",
      submenus: [
        "Post Header",
        "Post Layout",
        "Share Buttons",
        "Gallery Post",
        "Video Post",
      ],
    },
    {
      name: "Categories",
      submenus: [],
    },
    {
      name: "Shop",
      submenus: [],
    },
    {
      name: "Buy Now",
    },
  ];
  return (
    <div className="App">
      <Header menus={menus}  onChange={handleSearch}/>
      <div className="content">
        {filteredData.length > 0 ? (filteredData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            tags={item.tags}
            author={item.autor}
            img={item.img}
            img2x={item.img_2x}
            date={item.date}
            views={item.views}
          />
        ))) : <h1>No Result</h1>}
      </div>
    </div>
  );
}

export default App;
