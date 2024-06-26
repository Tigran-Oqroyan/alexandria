import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import universities from "../../utils/universities";
import categories from "../../utils/categories";
import UnivercityDashboardBlock from "../../components/UnivercityDashboardBlock/UnivercityDashboardBlock";
import CategoryDashboardBlock from "../../components/CategoryDashboardBlock/CategoryDashboardBlock";
import LectureCard from "../../components/LectureCard/LectureCard";
import { useDispatch, useSelector } from "react-redux";
import LecturePopup from "../../components/LecturePopup/LecturePopup";
import { changeSelectedDashboardCategory } from "../../store/Slices/SelectedDashboardCategorySlie.";
import { changeSelectedDashboardUniversity } from "../../store/Slices/SelectedDashboardUniversitySlice";

const Dashboard = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [lecturesAmount, setLecturesAmount] = useState(0);
  const [allLectures, setAllLectures] = useState([]);
  const [filteredLectures, setFilteredLectures] = useState(allLectures);
  const [currentUser, setCurrentUser] = useState({});
  const [lecturePopup, setLecturePopup] = useState(false);
  const [lectureShowPoup, setLectureShowPoup] = useState(false);

  const [subMenus, setSubMenus] = useState({
    universities: false,
    categories: false,
  });

  const currentDashboardUniversity = useSelector(
    (state) => state.currentDashboardUniversity
  );
  const currentDashboardCategory = useSelector(
    (state) => state.currentDashboardCategory
  );

  const handleUserPage = () => {
    navigate(`/UserPage/${id}`);
  }

  const getAllLectures = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/lectures");
      setLecturesAmount(response.data.length);
      setAllLectures(response.data);
    } catch (error) {
      console.error("Error fetching lectures:", error);
    }
  };

  const filterLectures = (university = null, category = null) => {
    console.log("called");
    const filteredLectures = allLectures?.filter((lecture) => {
      if (university && category) {
        return (
          lecture.university === university && lecture.category === category
        );
      } else if (university && !category) {
        return lecture.university === university;
      } else if (!university && category) {
        return lecture.category === category;
      } else {
        dispatch(changeSelectedDashboardCategory(""));
        dispatch(changeSelectedDashboardUniversity(""));
        return true;
      }
    });

    setFilteredLectures(filteredLectures);
  };

  useEffect(() => {
    console.log("entered");
    const fetchData = async () => {
      await getAllLectures();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getAllLectures();
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${id}`
        );
        setCurrentUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    filterLectures(currentDashboardUniversity, currentDashboardCategory);
  }, [currentDashboardUniversity, currentDashboardCategory]);

  const addNewLecture = (lecture) => {
    setAllLectures((prev) => [...prev, lecture]);
    filterLectures(currentDashboardUniversity, currentDashboardCategory);
  };

  return (
    <div id="full-dashboard">
      <div id="dashboard-sidebar">
        <div id="dashboard-logo">
          <span id="dashboard-logo-name">ALEXANDRIA</span>
        </div>
        <ul id="dashboard-nav-links">
          <li
            id="dashboard-nav-link link1"
            onClick={() => {
              filterLectures();
            }}
          >
            <div className="icon-links">
              <a>
                <i className="bx bx-file"></i>
                <span className="link-name">All lectures</span>
              </a>
            </div>
          </li>

          <li
            id="dashboard-nav-link link2"
            onClick={() => {
              setSubMenus((prev) => {
                return { categories: false, universities: !prev.universities };
              });
            }}
          >
            <div className="icon-links">
              <a>
                <i className="bx bx-buildings"></i>
                <span className="link-name">
                  {currentDashboardUniversity
                    ? currentDashboardUniversity
                    : "Select University"}
                </span>
              </a>
              <i className="bx bx-chevron-down"></i>
            </div>

            {subMenus.universities ? (
              <ul id="universities-sub-menu">
                {universities.map((university) => {
                  return (
                    <UnivercityDashboardBlock
                      universityName={university}
                      key={university}
                    />
                  );
                })}
              </ul>
            ) : null}
          </li>

          <li
            id="dashboard-nav-link link3"
            onClick={() => {
              setSubMenus((prev) => {
                return { universities: false, categories: !prev.categories };
              });
            }}
          >
            <div className="icon-links">
              <a>
                <i className="bx bx-category"></i>
                <span className="link-name">
                  {currentDashboardCategory
                    ? currentDashboardCategory
                    : "Select Category"}
                </span>
              </a>
              <i className="bx bx-chevron-down"></i>
            </div>
          </li>

          {subMenus.categories ? (
            <ul id="categories-sub-menu">
              {categories.map((category) => {
                return (
                  <CategoryDashboardBlock
                    categoryName={category}
                    key={category}
                  />
                );
              })}
            </ul>
          ) : null}
        </ul>

        <div id="dashboard-user-circle" onClick={handleUserPage}>
          {currentUser?.name?.substring(0, 1).toUpperCase()}
        </div>
        <i
          id="dashboard-plus-icon"
          className="bx bx-plus"
          onClick={() => {
            setLecturePopup(!lecturePopup);
          }}
        ></i>
      </div>
      {filteredLectures.length > 0 ? (
        <div id="dashboard-content">
          {filteredLectures?.map((lecture, index) => {
            return (
              <LectureCard
                lectureName={lecture.title}
                lectureTitle={lecture.title}
                studentName={lecture.studentName}
                studentSurname={lecture.studentSurname}
                uploadDate={lecture.uploadDate}
                id={lecture._id}
                key={lecture._id}
              />
            );
          })}
        </div>
      ) : (
        <div id="dashboard-content">
          There is no lectures yet . Find / Add them !
        </div>
      )}
      {lecturePopup ? (
        <LecturePopup
          currentUser={currentUser}
          id={lecturesAmount + 1}
          setLecturePopup={setLecturePopup}
          addNewLecture={addNewLecture}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
