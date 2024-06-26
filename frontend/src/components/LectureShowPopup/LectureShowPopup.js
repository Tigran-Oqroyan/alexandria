import React, { useState, useEffect } from "react";
import "./LectureShowPopup.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import axios from "axios";

const LectureShowPopup = ({ currLecture, setPopup }) => {
  const {id} = useParams();
  console.log(id);
  const [currentUser , setCurrentUser] = useState({});

  useEffect(()=>{
    const fetchData = async() => {
      const resp = await axios.get(`http://localhost:5000/api/users/${id}`);
      setCurrentUser(resp?.data);
    }
   fetchData();
  },[])

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{currLecture.title}</Text>
          <Text>{currLecture.university}</Text>
          <Text>{currLecture.category}</Text>
          <Text>{currLecture.username}</Text>
          <Text>{currLecture.description}</Text>
        </View>
      </Page>
    </Document>
  );

  const downloadPdf = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${currLecture.title}_${currLecture.username}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setPopup(false);
  };

  const likeLecture = async () => {
    if(!currentUser?.lectures?.includes(currLecture._id)){
      console.log(currentUser);
      currentUser?.lectures?.push(currLecture._id);
      console.log("ddddd" , currentUser);
      axios.put(`http://localhost:5000/api/users/${id}` , currentUser );
    }else{
      alert("Already liked");
    }
    setPopup(false)
  }

  return (
    <div
      id="lecture-show-popup"
      onClick={() => {
        setPopup(false);
      }}
    >
      <div id="lecture-show-popup-content" onClick={(e) => e.stopPropagation()}>
        <div id="show-popup-headers-wrapper">
          <h2>{currLecture.title}</h2>
          <h2>{currLecture.university}</h2>
          <h2>{currLecture.category}</h2>
          <h2>{currLecture.username}</h2>
        </div>
        <div id="desc-div">{currLecture.description}</div>
        <div id="popup-actions-wrapper">
          <i
            id="popup-pdf-btn"
            onClick={downloadPdf}
            class="bx bxs-file-pdf"
          ></i>
          <i id="popup-heart-btn" class="bx bx-heart" onClick={likeLecture}></i>
        </div>
      </div>
    </div>
  );
};

export default LectureShowPopup;
