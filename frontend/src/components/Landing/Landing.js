import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="navbar">
        <div id="logo">ALEXANDRIA</div>
      </div>
      <div id="header">
        <div id="header_info1">
          <h1 id="header_info_article">United Educational System !</h1>
          <p id="header_info_description">
            Discover a new era of collaborative learning with Alexandria, the
            premier platform where students across Armenia can unite , share an
            grow. Our mission is to create a centralized hub for educational
            content, fostering a vibrant community where every student can
            contribute and benefit.
          </p>
          <div id="buttons">
            <button id="read_more_btn">
              Read more <i class="bx bx-chevron-right"></i>{" "}
            </button>
            <button
              id="get_start_btn"
              onClick={() => {
                navigate("/SignIn");
              }}
            >
              Get started <i class="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        <div id="header_info2">
          <h2 id="header_info2_article">Why Choose Us</h2>
          <div id="header_info2_item_wrapper">
            <span id="header_info2_item-text">Efficiency</span>
            <span id="header_info2_item-description">
              Save time by easily locating lectures and resources tailored to
              your needs
            </span>
          </div>

          <div id="header_info2_item_wrapper">
            <span id="header_info2_item-text">Community</span>
            <span id="header_info2_item-description">
              Join a supportive community of learners and educators passionate
              about sharing knowledge.
            </span>
          </div>

          <div id="header_info2_item_wrapper">
            <span id="header_info2_item-text">Accessibility</span>
            <span id="header_info2_item-description">
              Access lectures on the go, from any device, ensuring uninterrupted
              learning.
            </span>
          </div>

          <div id="header_info2_item_wrapper">
            <span id="header_info2_item-text">Innovation</span>
            <span id="header_info2_item-description">
              Embrace a modern approach to education with our user-friendly
              platform.
            </span>
          </div>
        </div>
      </div>
      <div id="navbar">
        <div id="logo">FEATURES</div>
      </div>

      <div id="section1">
        <div id="section1_block">
          <h4 id="section1_block_title">Access Armenian University Lectures</h4>
          <span id="section1_block_desc">
            Find and download lectures you want from Armenian universities in
            PDF format
          </span>
        </div>
        <div id="section1_block">
          <h4 id="section1_block_title">Upload New Lectures</h4>
          <span id="section1_block_desc">
            Easily add new lectures to our platform, contributing to the
            educational community
          </span>
        </div>
        <div id="section1_block">
          <h4 id="section1_block_title">Community Chat</h4>
          <span id="section1_block_desc">
            Communicate with other users through our integrated chat feature,
            fostering collaboration and knowledge sharing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
