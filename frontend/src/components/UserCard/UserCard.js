import React from "react";
import "./UserCard.css";

const UserCard = ({
  userName = "unset",
  userSurname = "unset",
  userUniversity = "unset",
  userPhone = "unset",
  userPostsAmount = 0,
}) => {
  return (
    <div class="user-card">
      <div class="user-box">
        <div class="user-content">
          <h2>
            {userName} {userSurname} <br />
            <hr/>
            {userPhone} <br />
            <span>{userUniversity}</span>
          </h2>
          <ul>
            <li>
              Posts<span>{userPostsAmount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
