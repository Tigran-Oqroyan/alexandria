import React from "react";
import './UnivercityCard.css';
const UnivercityCard = ({universityName , universityDescription}) => {
  console.log(universityDescription);
  return (
    <div class="university-card">
      <div class="imgBox"></div>
      <div class="university-content">
        <span class="university-name">
          <a href="#">{universityName?.length > 6 ? universityName?.substring(0 ,6) + "..." : universityName}</a>
        </span>
        <ul>
          <li>
            {universityDescription}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UnivercityCard;
