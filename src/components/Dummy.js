import React, { useEffect, useState } from "react";
import axios from "axios";

function Dummy() {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    let result = await axios.get(
      "http://127.0.0.1:4000/v1/api/getAllCategories"
    );
    setCategory(result.data.data);
    console.log(result);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div>
      {category.map((item, i) => {
        return <p key={i}>{item.categoryName}</p>;
      })}
    </div>
  );
}

export default Dummy;
