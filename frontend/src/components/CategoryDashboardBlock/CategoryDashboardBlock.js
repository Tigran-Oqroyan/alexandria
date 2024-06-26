import React from "react";
import { useDispatch } from "react-redux";
import { changeSelectedDashboardCategory } from "../../store/Slices/SelectedDashboardCategorySlie.";
import "./CategoryDashboardBlock.css";

const CategoryDashboardBlock = ({ categoryName }) => {
  const dispatch = useDispatch();

  const handleOnClick = (categoryName) => {
    dispatch(changeSelectedDashboardCategory(categoryName));
  };

  return (
    <li
      id="categoryDashboardBlockLi"
      onClick={() => {
        handleOnClick(categoryName);
      }}
    >
      {categoryName}
    </li>
  );
};

export default CategoryDashboardBlock;
