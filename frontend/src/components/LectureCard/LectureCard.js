import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LectureCard.css";
import LectureShowPopup from "../LectureShowPopup/LectureShowPopup";

const LectureCard = ({
  lectureName,
  lectureTitle,
  studentName,
  studentSurname,
  uploadDate,
  id,
}) => {
  const [popupState, setPopup] = useState(false);
  const [currLecture, setCurrLecture] = useState({});

  const getLecture = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/lectures/${id}`
      );
      setCurrLecture(response.data);
    } catch (error) {
      console.error("Error fetching lecture:", error);
    }
  };

  useEffect(()=>{
    getLecture();
  },[id])

  return (
    <div id="lecture-card">
      <div id="lecture-card-image"></div>
      <div id="lecture-card-content">
        <span id="lecture-card-name">
          <a
            href="#"
            onClick={async () => {
              setPopup(true);
            }}
          >
            {lectureName}
          </a>
        </span>
        <ul id="lecture-card-info">
          <li id="lecture-card-title">{lectureTitle}</li>
          <li id="lecture-card-user-description">
            {studentName} {studentSurname}
          </li>
          <li id="lecture-card-date">
            <i id="bx bxs-calendar"></i> {uploadDate}
          </li>
        </ul>
      </div>
      {popupState ? (
        <LectureShowPopup currLecture={currLecture} setPopup={setPopup} />
      ) : null}
    </div>
  );
};

export default LectureCard;
