import React, { useState } from "react";
import axios from "axios";
import './LecturePopup.css';

const LecturePopup = ({ currentUser, id, setLecturePopup, addNewLecture }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; 
  const day = date.getDate(); 

  const [newLecture, setNewLecture] = useState({
    _id: id,
    studentName: currentUser.name,
    studentSurname: currentUser.surname,
    uploadDate: `${day}/${month}/${year}`,
    username: currentUser.username,
    title: "",
    university: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    university: false,
    category: false,
    description: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLecture((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    let isValid = true;
    let newErrors = {
      title: false,
      university: false,
      category: false,
      description: false,
    };

    if (!newLecture.title) {
      newErrors.title = true;
      isValid = false;
    }
    if (!newLecture.university) {
      newErrors.university = true;
      isValid = false;
    }
    if (!newLecture.category) {
      newErrors.category = true;
      isValid = false;
    }
    if (!newLecture.description) {
      newErrors.description = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      addLecture();
    }
  };

  const addLecture = async () => {
    try {
      await axios.post("http://localhost:5000/api/lectures", newLecture);
      addNewLecture(newLecture); 
      setLecturePopup(false);
    } catch (error) {
      console.error("Error adding lecture:", error);
    }
  };

  return (
    <div id="lecture-popup" onClick={() => setLecturePopup(false)}>
      <div id="lecture-popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Lecture</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title ..."
            value={newLecture.title}
            onChange={handleChange}
            className={errors.title ? "input-error" : ""}
          />
          {errors.title && <span className="error-text">Title is required</span>}

          <input
            name="university"
            placeholder="University ..."
            value={newLecture.university}
            onChange={handleChange}
            className={errors.university ? "input-error" : ""}
          />
          {errors.university && <span className="error-text">University is required</span>}

          <input
            name="category"
            placeholder="Category ..."
            value={newLecture.category}
            onChange={handleChange}
            className={errors.category ? "input-error" : ""}
          />
          {errors.category && <span className="error-text">Category is required</span>}

          <textarea
            name="description"
            placeholder="Description"
            value={newLecture.description}
            onChange={handleChange}
            className={errors.description ? "input-error" : ""}
          />
          {errors.description && <span className="error-text">Description is required</span>}

          <button type="submit">Add Lecture</button>
        </form>
      </div>
    </div>
  );
};

export default LecturePopup;
