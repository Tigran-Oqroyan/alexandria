import React from 'react'
import './UserCard.css'

const UserCard = ({userName = "unset" , userSurname = "unset", userUniversity = "unset" , userPostsAmount = 0}) => {
  return (
    <div class="user-card">
    <div class="user-box">
      <div class="user-content">
        <h2>{userName} {userSurname} Name Surname <br/> <span>{userUniversity} YSU Student</span></h2>
        <ul>
          <li>Posts<span>{userPostsAmount} 10</span></li>
          {/* <li>Followers<span>120</span></li> */}
          {/* <li>Following<span>180</span></li> */}
        </ul>
        {/* <button>Follow</button> */}
      </div>
    </div>
    <div class="user-circle">
      <div class="user-image-box">
        <img src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg" alt=""/>
      </div>
    </div>
  </div>
  )
}

export default UserCard
