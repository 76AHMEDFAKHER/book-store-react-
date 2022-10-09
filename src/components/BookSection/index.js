import React from "react";
import { Link } from "react-router-dom";

const BookSection = ({ data }) => {
  console.log(data);
  return (
    <section className="shop" id="shop">
      <div className="container">
        {data.map((d) => {
          return (
            <div className="box">
              <img alt="book" src={d.thumbnailUrl} />
              <h4>{d.title}</h4>
              <h4>auther: {d.auther}</h4>
              <h5>{d.price}EGP</h5>
              <div className="cart">
                <Link to="#">
                  {d.isDiscount && <div className="bx bx-cart">discount 10%</div>}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BookSection;
