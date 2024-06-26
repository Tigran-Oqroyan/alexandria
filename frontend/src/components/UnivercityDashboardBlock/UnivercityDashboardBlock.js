import React from "react";
import "./UnivercityDashboardBlock.css";
import { useDispatch } from "react-redux";
import { changeSelectedDashboardUniversity } from "../../store/Slices/SelectedDashboardUniversitySlice";

const UnivercityDashboardBlock = ({ universityName }) => {
  const dispatch = useDispatch();

  const handleOnClick = (universityName) => {
    dispatch(changeSelectedDashboardUniversity(universityName));
  };

  return (
    <li
      id="univercityDashboardBlockLi"
      onClick={() => {
        handleOnClick(universityName);
      }}
    >
      {universityName}
    </li>
  );
};

export default UnivercityDashboardBlock;
