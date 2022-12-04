import { Checkbox } from '@mui/material';
import { Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import React from 'react'
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from 'react';
import axios from "axios";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Forms = () => {
    const [contact, setcontact] = useState("");
    const [location, setlocation] = useState("");
    const [language, setlanguage] = useState("");
    const [axioserr, setaxioserr] = useState("")
    var days = [];
    
      const Weekdays = [
        { title: "Monday" },
        { title: "Tuesday" },
        { title: "Wednesday" },
        { title: "Thrusday" },
        { title: "Friday" },
        { title: "Saturday" },
    ];
  
    const workdays = (props) => {
       
        if (props) {
            days = [];
            for (let i = 0; i < props.length; i++){
            days.push(props[i].props.label)
        }
        }
    }
    
  
    const handleregister = () => {
          var loginData = {
            contact: contact,
            location: location,
            language: language,
            days,
          };
         
        console.log(loginData);
        console.log(days);
       axios({
         method: "post",
         url: "http://localhost:3070/volunteer/register",
         data: loginData,
       })
         .then((res) => {
             console.log(res);
             alert("form registered")
         })
         .catch((err) => {
           console.log(err);
           setaxioserr(err.response.data.message);
         });
     };
    return (
      <div className='forms'>
        <div className="forminput">
          <TextField
            id="contact"
            label="Contact"
            onChange={(e) => setcontact(e.target.value)}
            variant="standard"
          />
          <TextField
            id="contact"
            label="Location"
            onChange={(e) => setlocation(e.target.value)}
            variant="standard"
          />
          <TextField
            id="contact"
            label="Language"
            onChange={(e) => setlanguage(e.target.value)}
            variant="standard"
          />
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={Weekdays}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  key={props.key}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  label="Availability"
                  placeholder="Add Workdays"
                />

                {workdays(params.InputProps.startAdornment)}
              </>
            )}
                />
                <h3>{ axioserr}</h3>
        </div>
        <div className="submit">
          <Button onClick={() => handleregister()}> Register </Button>
        </div>
      </div>
    );
}

export default Forms