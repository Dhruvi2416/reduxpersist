import React, {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmPasswordOfInput,
  setEmailOfInput,
  setLoggedIn,
  setNameOfInput,
  setPasswordOfInput,
  setPhoneNoOfInput,
  setPhotoOfInput,
} from "../actions/Actions";
import { useFormik } from "formik";
import { dataValidation } from "../dataValidation";

const SignUp = () => {
  const state = useSelector((state) => state.reducer);
 
 
  const navigate = useNavigate();
  const fileUpload = useRef(null)
  const initialValues = {
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    photo:"",
    loggedIn:false
   
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: dataValidation,
    onSubmit: (values) => {
      dispatch(setNameOfInput(formik.values.name));
      dispatch(setEmailOfInput(formik.values.email));
      dispatch(setPhoneNoOfInput(formik.values.phoneNo));
      dispatch(setPasswordOfInput(formik.values.password));
      dispatch(setConfirmPasswordOfInput(formik.values.confirmPassword));
      dispatch(setPhotoOfInput(formik.values.photo))
      dispatch(setLoggedIn(true))
      navigate("/home");
    },
  });

  useEffect(()=>{
    if(state.loggedIn)
    navigate("/home")
     
  },[])

  //useState kem? to ekla mate bcoz ahia mare button pr j dispatch karavanu
  //ave su thase normal variable karis to pela undefined avi jase but mare pachi hu jyare function bolais tyare
  //e name ni value to change karse but ee simple variable che to ee render j nai karave and render nai thai
  //to updated value nai male

  //2 approach pelo useState, ne bijo temp value redux ma bcoz hu submit karu to j

  // dispatch(setNameOfInput(e.target.value)) can't dispatch here as without submitting the value will be
  //set hence dispatch on  submit button
  const dispatch = useDispatch();

// function imageUpload(e){
//   const image = URL.createObjectURL(e.target.files[0])
//  setPhoto(image)
// }

  return (
  <>
      <div className="container row">
        <div className="details  col-lg-6">
          <h1>SignUp</h1>

          
          <form onSubmit={formik.handleSubmit}>
            <div className="inputDetails">
            <div className="photo" onClick={()=>fileUpload.current.click()}>Photo+</div>
          <input type="file" name="photo" onChange={(e)=> formik.setFieldValue("photo",(e.currentTarget.files[0]))}  ref={fileUpload} ></input>
          
            {formik.errors.photo? (
                <p className="form-error">{formik.errors.photo}</p>
              ) : null}
              <h6>Name</h6>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.name ? (
                <p className="form-error">{formik.errors.name}</p>
              ) : null}
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              ></input>
              {formik.errors.email && formik.touched.email ? (
                <p className="form-error">{formik.errors.email}</p>
              ) : null}
              <h6>PhoneNo</h6>
              <input
                type="tel"
                name="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.phoneNo ? (
                <p className="form-error">{formik.errors.phoneNo}</p>
              ) : null}
              <h6>Password</h6>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.password ? (
                <p className="form-error">{formik.errors.password}</p>
              ) : null}
              <h6>Confirm Password</h6>
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.confirmPassword ? (
                <p className="form-error">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>
            <div className="buttons d-flex">
              <button type="submit">Submit</button>

              <button type="button" onClick={formik.handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
