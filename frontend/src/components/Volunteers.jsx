import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';
import { useState } from 'react';

const Volunteers = () => {
      const getlist = () => {
        console.log(1);
        axios({
          method: "get",
          url: "http://localhost:3070/volunteer/register",
        }).then((res) => {
          // localStorage.setItem("logindata", JSON.stringify(loginData));
            console.log(res.data.volunteerlist);
            console.log(res);
            
        });
    };
    const [volunteerdata, setvolunteerdata] = useState([])
    return (
       
      <>
       <div>Volunteers</div>
        <Button onClick={() => getlist()} >Get volunteers</Button>
        
      </>
     
  )
}

export default Volunteers