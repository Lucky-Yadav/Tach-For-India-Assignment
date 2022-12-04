import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype";

const init = {
    loading: false,
    error: false,
    token:""
}
const classroomdata = [
  {
    classroomID: "AHM01",
    capacity: 5,
    requirement: 2,
    subjects: ["Maths ", "Science "],
    languageRequirement: ["Gujarati ", "Hindi "],
    location: "Ahmedabad",
  },
  {
    classroomID: "AHM02",
    capacity: 5,
    requirement: 4,
    subjects: ["Maths ", "Science ", "English ", "Social  Studies "],
    languageRequirement: [],
    location: "Ahmedabad",
  },
  {
    classroomID: "CHE01",
    capacity: 3,
    requirement: 2,
    subjects: ["English ", "Social Studies "],
    languageRequirement: ["Tamil"],
    location: "Chennai",
  },
  {
    classroomID: "CHE02",
    capacity: 3,
    requirement: 2,
    subjects: ["Maths"],
    languageRequirement: [],
    location: "Chennai",
  },
  {
    classroomID: "BLR01",
    capacity: 3,
    requirement: 2,
    subjects: ["Maths ", "Science "], 
    languageRequirement: [],
    location: "Bengaluru",
  },
  {
    classroomID: "BLR02",
    capacity: 2,
    requirement: 1,
    subjects: ["English"],
    languageRequirement: [],
    location: "Bengaluru",
  },
];

export const reducer = (state = init, {type, payload}) => {
    switch (type) {
        case LOGIN_LOADING :
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            console.log(payload);
            return {
                ...state,
                loading: false,
                error: false,
                token: payload.token,
                username: payload.user.username,
                email: payload.user.email,
                classroomdata: classroomdata
            }
        case LOGIN_ERROR :
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOGOUT_SUCCESS :
            return init
    
        default:
            return state
    }
}