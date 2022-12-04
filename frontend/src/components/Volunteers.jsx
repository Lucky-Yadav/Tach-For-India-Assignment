import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';
import { useState } from 'react';

const Volunteers = () => {
    const [volunteers, setvolunteers] = useState([])
      const getlist = () => {
        console.log(1);
        axios({
          method: "get",
          url: "https://tach-for-india-assignment.vercel.app/volunteer/register",
        }).then((res) => {
          setvolunteers(res.data.volunteerlist);
          console.log(res);
        });
    };
    
    return (
      <>
        <div>Volunteers</div>
        <Button onClick={() => getlist()}>Get volunteers</Button>
        <div className="volunteers">
          <p> Total volunteers applied {volunteers.length} </p>
          {volunteers.map((volunteer) => (
            <div key={volunteer.contact} className="volunteer">
              <p>volunteer's contact {volunteer.contact}</p>
              <p>volunteer's location {volunteer.location}</p>
              <p>volunteer's language {volunteer.language}</p>
                  <div className='days'>Day's when they available {volunteer.days.map(day => <div key={day}>{ day }</div>)}</div>
            </div>
          ))}
        </div>
      </>
    );
}

export default Volunteers