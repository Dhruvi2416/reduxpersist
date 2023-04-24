import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import {
  setConfirmPasswordOfInput,
  setEmailOfInput,
  setLoggedIn,
  setNameOfInput,
  setPasswordOfInput,
  setPhoneNoOfInput,
} from "../actions/Actions";

const Home = () => {
  const navigate=useNavigate()
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  function logout() {
    dispatch(setNameOfInput(""));
    dispatch(setEmailOfInput(""));
    dispatch(setPhoneNoOfInput(""));
    dispatch(setPasswordOfInput(""));
    dispatch(setConfirmPasswordOfInput(""));
    dispatch(setLoggedIn(false))
  }
  console.log(state.loggedIn)
useEffect(()=>{
  if(!state.loggedIn)
  navigate("/signUp")
   
},[])

  return (
     <>
      
        <div>
          <h1>Hello {state.name}</h1>
          <p>You are registered with the email id: {state.email}</p>
          <p>Phone Number: {state.phoneNo}</p>
          {state.photo?<img src={URL.createObjectURL(state.photo)}/>:null}
          
        </div>
     
      <Link to={"/signup"}>
        <button onClick={() => logout()}>Logout</button>
      </Link>
    </>
  );
};

export default Home;
