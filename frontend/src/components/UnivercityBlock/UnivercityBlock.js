import React from 'react'
import {useDispatch} from 'react-redux'
import { changeSelectedUniversity } from '../../store/Slices/SelectedUniversitySlice';
import './UnivercityBlock.css'

const UnivercityBlock = ({name}) => {
  const dispatch = useDispatch();

  const handleOnClick = (universityName) => {
    dispatch(changeSelectedUniversity(universityName));
  }

  return (
    <div id='univercity-block-container'  onClick={()=>{
      handleOnClick(name);
    }}>
      <p id='univercity-block-name'>{name}</p>
    </div>
  )
}

export default UnivercityBlock
