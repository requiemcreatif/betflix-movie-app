import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../styles/backBtn/backBtn.css";

const BackBtn = () => {
  return (
    <div>
      <Link to="/">
        <div className="back-btn">
          <IoIosArrowBack />
          Back
        </div>
      </Link>
    </div>
  );
};

export default BackBtn;

//   className="back-btn"
//   onClick={() => {
//     window.history.back();
//   }}
