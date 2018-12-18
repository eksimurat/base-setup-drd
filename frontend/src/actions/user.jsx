//import { articlesRef } from "../Components/Config/Firebase";
//import { FETCH_USER } from "./Types.jsx";
export const FETCH_USER = "FETCH_USER"

export const fetchUser = () => async dispatch => {
    
        let headers = {"Content-Type": "application/json"};
        fetch("http://localhost:8000/api/user/", {headers, })
          .then(res => res.json())
          .then(user => {
            dispatch({
              type: FETCH_USER,
              payload: user
            })
          })
      
};