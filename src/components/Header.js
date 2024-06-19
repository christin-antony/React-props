import React from "react";
import "./Header.css";

const Header = ({ data, data1 }) => {
  return (
    <div className="div">
      <h1 className="h1">Product list using props </h1>
      <div className="div0">
        <div className="div00">
          {data.map((data) => (
            <div className="div1">
              <h1 className="h2">{data.name}</h1>
              <h1 className="h2">{data.price}</h1>
              <img src={data.image} alt="" className="image" />
            </div>
          ))}
        </div>

        <div className="div00">
          {data1.map((data1) => (
            <div className="div1">
              <h1 className="h2">{data1.name}</h1>
              <h1 className="h2">{data1.price}</h1>
              <img src={data1.image} alt="" className="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
