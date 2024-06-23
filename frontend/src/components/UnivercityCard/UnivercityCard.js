import React from "react";
import './UnivercityCard.css';

const UnivercityCard = ({universityName , universityDescription}) => {
  return (
    <div class="university-card">
      <div class="imgBox"></div>
      <div class="university-content">
        <span class="university-name">
          <a href="#">{universityName} YSU</a>
        </span>
        <ul>
          <li>
            {universityDescription}
            Yerevan State University is the largest and leading university of
            RA, which offers the widest, most modern, and constantly updated
            educational programs.The university has a three-level education
            system: Undergraduate, Master's, and Postgraduate.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UnivercityCard;
