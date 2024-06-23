import React from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div id="dashboard-sidebar">
      <div id="dashboard-logo">
        <span id="dashboard-logo-name">ALEXANDRIA</span>
      </div>
      <ul id="dashboard-nav-links">
        <li id="dashboard-nav-link link1">
          
          <div class="icon-links">
            <a href="#">
              <i class="bx bx-buildings"></i>
              <span class="link-name">University</span>
            </a>
            <i class="bx bx-chevron-down"></i>
          </div>

          <ul id="universities-sub-menu">
            <li>
              <a href="">Yerevan State University</a>
            </li>
            <li>
              <a href="">
                National University of Architecture and Construction of Armenia
              </a>
            </li>
            <li>
              <a href="">Yerevan State Medical University</a>
            </li>
            <li>
              <a href="">Armenian State Pedagogical University</a>
            </li>
            <li>
              <a href="">
                National University of Architecture and Construction of Armenia
              </a>
            </li>
          </ul>
        </li>

        <li id="dashboard-nav-link link2">
          <div class="icon-links">
            <a href="#">
              <i class="bx bx-file"></i>
              <span class="link-name">Lectures</span>
            </a>
          </div>
        </li>

        <li id="dashboard-nav-link link3">
          <div class="icon-links">
            <a href="#">
              <i class="bx bx-category"></i>
              <span class="link-name">Category</span>
            </a>
            <i class="bx bx-chevron-down"></i>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Dashboard;
