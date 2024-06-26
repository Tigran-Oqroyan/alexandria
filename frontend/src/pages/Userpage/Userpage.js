import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import universities from "../../utils/universities";
import UserCard from "../../components/UserCard/UserCard";
import UnivercityCard from "../../components/UnivercityCard/UnivercityCard";
import axios from "axios";
import "./Userpage.css";
import LectureCard from "../../components/LectureCard/LectureCard";

const Userpage = () => {
  const { id } = useParams();
  const [content, setContent] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [buttons, setButtons] = useState({
    users: false,
    universities: false,
    userLectures: false,
    userFavorites: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      setCurrentUser(response?.data);
    };
    fetchData();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setContent(response?.data);
  };

  const getUniversities = () => {
    setContent(universities);
  };

  const getUserLectures = async () => {
    const response = await axios.get("http://localhost:5000/api/lectures");
    const filteredLectures = response?.data?.filter((lecture) => {
      return lecture?.username === currentUser?.username;
    });
    setContent(filteredLectures);
  };

  const getUserFavorites = async () => {
    const response = await axios.get("http://localhost:5000/api/lectures");
    const filteredLectures = response?.data?.filter((lecture) => {
      return currentUser?.lectures?.includes(lecture?._id);
    });
    setContent(filteredLectures);
  };

  return (
    <div id="user-page-wrapper">
      <div id="user-page-sidebar">
        <div id="user-page-logo">
          <span id="user-page-logo-name">ALEXANDRIA</span>
        </div>
        <ui id="user-page-nav-links">
          <li
            id="user-page-nav-link"
            onClick={() => {
              getUsers();
              setButtons({
                users: true,
                universities: false,
                userLectures: false,
                userFavorites: false,
              });
            }}
          >
            <div className="user-page-icon-links">
              <a>
                <i class="bx bx-user"></i>
                <span className="user-page-link-name">All users</span>
              </a>
            </div>
          </li>

          <li
            id="user-page-nav-link"
            onClick={() => {
              getUniversities();
              setButtons({
                users: false,
                universities: true,
                userLectures: false,
                userFavorites: false,
              });
            }}
          >
            <div className="user-page-icon-links">
              <a>
                <i class="bx bx-buildings"></i>
                <span className="user-page-link-name">All universities</span>
              </a>
            </div>
          </li>

          <li
            id="user-page-nav-link"
            onClick={() => {
              getUserLectures();
              setButtons({
                users: false,
                universities: false,
                userLectures: true,
                userFavorites: false,
              });
            }}
          >
            <div className="user-page-icon-links">
              <a>
                <i class="bx bx-file"></i>
                <span className="user-page-link-name">My lectures</span>
              </a>
            </div>
          </li>

          <li
            id="user-page-nav-link"
            onClick={() => {
              getUserFavorites();
              setButtons({
                users: false,
                universities: false,
                userLectures: true,
                userFavorites: false,
              });
            }}
          >
            <div className="user-page-icon-links">
              <a>
                <i class="bx bx-heart"></i>
                <span className="user-page-link-name">Favorites</span>
              </a>
            </div>
          </li>
        </ui>
      </div>
      <div id="user-page-content">
        {buttons.users
          ? content.map((user) => {
              return (
                <UserCard
                  userName={user?.name}
                  userSurname={user?.surname}
                  userUniversity={user?.univercity}
                  userPhone={user?.phone}
                  userPostAmount={user?.lecture?.length}
                />
              );
            })
          : null}
        {buttons.universities
          ? content.map(() => {
              return <UnivercityCard />;
            })
          : null}
        {buttons.userLectures
          ? content.map((lecture) => {
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
            })
          : null}
      </div>
    </div>
  );
};

export default Userpage;
