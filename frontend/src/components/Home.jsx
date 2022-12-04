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
  
  const [volunteerdata, setvolunteerdata] = useState([]);
  const [volunteerbylanguage, setvolunteerbylanguage] = useState([]);
  const [volunteerbylocation, setvolunteerbylocation] = useState([]);
  const [isclicked, setisclicked] = useState("")
  
  const checkvolunteer = (language,location) => {
    console.log("check");
    const getlist = () => {
      console.log(1);
      axios({
        method: "get",
        params: { language: language, location: location },
        url: "https://tach-for-india-assignment.vercel.app/volunteer/register",
      }).then((res) => {
        setvolunteerbylanguage(res.data.volunteerlistbylanguage);
        setvolunteerbylocation(res.data.volunteerlistbylocation);
        console.log(res.data.volunteerlistbylanguage);
        console.log(res.data.volunteerlistbylocation);
      });
    };
    getlist()
  }
  const handleclick = (language,location,Id) => {
    checkvolunteer(language, location)
    setisclicked(Id)
  }
  return (
    <div>
      <h3> Name :- {username}</h3>
      <h3> Email :- {email}</h3>
      <div className="classdata">
        {classrooms.map((classroom) => (
          <div className="class" key={classroom.classroomID}>
            <div className="left">
              <h3>Class Id : {classroom.classroomID}</h3>
              <p>Capacity : {classroom.capacity}</p>
              <p>Requirement : {classroom.requirement}</p>
              <p>Subjects : {classroom.subjects}</p>
              <p>
                {classroom.languageRequirement.length > 0
                  ? `Language Requirements : ${classroom.languageRequirement}`
                  : ""}
              </p>
              <p>Location : {classroom.location}</p>
              <div className="submit">
                <Button
                  onClick={() =>
                    handleclick(
                      classroom.languageRequirement,
                      classroom.location,
                      classroom.classroomID
                    )
                  }
                >
                  Check Volunteers
                </Button>
              </div>
            </div>
            {volunteerbylanguage.length > 0 ? (
              <div
                className={`right ${
                  isclicked == classroom.classroomID ? "" : "hidden"
                } `}
              >
                <div className="language">
                  {volunteerbylanguage.length} volunteers know{" "}
                  {volunteerbylanguage[0].language}
                  <div>
                    and availble during{" "}
                    {volunteerbylanguage[0].days.map((day) => (
                      <div key={day}>{day}</div>
                    ))}{" "}
                  </div>
                </div>
                <div className="locatyion">
                  {volunteerbylocation.length > 0 ? (
                    <div>
                      {volunteerbylocation.length} volunteers from{" "}
                      {volunteerbylocation[0].location}
                      <div>
                        and availble during{" "}
                        {volunteerbylocation[0].days.map((day) => (
                          <div key={day}>{day}</div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    "not found by location"
                  )}
                </div>
              </div>
            ) : (
              <p
                className={` ${
                  isclicked == classroom.classroomID ? "" : "hidden"
                } `}
              >
                No volunteers Found
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home