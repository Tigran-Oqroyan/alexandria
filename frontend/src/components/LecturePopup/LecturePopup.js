import React, { useState } from "react";
import axios from "axios";
import './LecturePopup.css';

const LecturePopup = ({ currentUser, id , setPopup}) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const [newLecture, setNewLecture] = useState({
    _id: id,
    studentName: currentUser.name,
    studentSurname: currentUser.surname,
    uploadedDate: `${day}/${month}/${year}`,
    title: "",
    university: "",
    category: "",
    description: "",
  });

  const addLecture = () => {
    axios.post("http://localhost:5000/api/lectures", newLecture);
  };

  return (
    <div id="lecture-popup" onClick={()=>{
        setPopup(false);
    }}>
        <div id="lecture-popup-content" onClick={(e)=>[
            e.stopPropagation()
        ]}>
            <h2>Popup</h2>
            <p>This is simple popup</p>
        </div>
    </div>
  )
};

export default LecturePopup;
