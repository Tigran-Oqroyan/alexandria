import React, { useState, useEffect } from "react";
import axios from 'axios';
import './LectureCard.css';

const LectureCard = ({lectureName , lectureTitle, studentName, studentSurname , uploadDate , id}) => {
  
  const [currLecture, setCurrLecture] = useState({});
  
  const getLecture = () => {
    const lecture = axios.get(`http://localhost:5000/api/lectures/${id}`)
    setCurrLecture(lecture);
  }
  
  useEffect(()=>{
    getLecture();
  },[id])

  return (
    <div id="lecture-card">
      <div id="lecture-card-image"></div>
      <div id="lecture-card-content">
        <span id="lecture-card-name">
          <a href="#">{lectureName} Lecture</a>
        </span>
        <ul id="lecture-card-info">
          <li id="lecture-card-title">{lectureTitle} Title</li>
          <li id="lecture-card-user-description">{studentName } {studentSurname} Student name surname</li>
          <li id="lecture-card-date">
            <i id="bx bxs-calendar"></i> {uploadDate} 06/12/24 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LectureCard;
