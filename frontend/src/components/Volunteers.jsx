import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';
import { useState } from 'react';

const Volunteers = () => {
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
    const [volunteerdata, setvolunteerdata] = useState([])
    return (
       
      <>
       <div>Volunteers</div>
        <Button onClick={() => getlist()} >Get volunteers</Button>
        
      </>
     
  )
}

export default Volunteers