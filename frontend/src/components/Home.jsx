import { Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);
  const classrooms = useSelector((state) => state.auth.classroomdata);
  console.log(classrooms)
  
    const [volunteerdata, setvolunteerdata] = useState([]);
  
  const checkvolunteer = () => {
    console.log("check");
    const getlist = () => {
      console.log(1);
      axios({
        method: "get",
        url: "https://tach-for-india-assignment.vercel.app/volunteer/register",
      }).then((res) => {
        console.log(res.data.volunteerlist);
        console.log(res);
      });
    };
    getlist()
  }
  return (
    <div>
      <h3> Name :- {username}</h3>
      <h3> Email :- {email}</h3>
      <div className="classdata">
        {classrooms.map((classroom) => (
          <div className="class" key={classroom.classroomID}>
            <h3>Class Id : {classroom.classroomID}</h3>
            <p>Capacity : {classroom.capacity}</p>
            <p>Requirement : {classroom.requirement}</p>
            <p>Subjects : {classroom.subjects}</p>
            <p>
              {classroom.languageRequirement.length >0
                ? `Language Requirements : ${classroom.languageRequirement}`
                : ""}
            </p>
            <p>Location : {classroom.location}</p>
            <div className="submit">
              <Button onClick={()=> checkvolunteer()} >Check Volunteers</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home