import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// importing all actions
import picture from "../image.png";
import {
  setConfirmPasswordOfInput,
  setEmailOfInput,
  setLoggedIn,
  setNameOfInput,
  setPasswordOfInput,
  setPhoneNoOfInput,
  setPhotoOfInput,
} from "../actions/Actions";
// formik: file handling
import { useFormik } from "formik";
// yup: for dataValidation
import { dataValidation } from "../dataValidation";

const SignUp = () => {
  // selects the given reducer to access its states
  const state = useSelector((state) => state.reducer);

  //  navigates different components
  const navigate = useNavigate();

  //ref to access input field of type file with the help of div Photo+
  const fileUpload = useRef(null);
  const initialValues = {
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    photo: "",
    loggedIn: false,
  };

  const formik = useFormik({
    //stores initialValues this can be handled by formik instated of using useState
    initialValues: initialValues,
    //validationSchema a property of formik where dataValidation through Yup is checked
    validationSchema: dataValidation,
    //if all validation are true then and then only onSubmit will allow to submit
    onSubmit: () => {
      dispatch(setNameOfInput(formik.values.name));
      dispatch(setEmailOfInput(formik.values.email));
      dispatch(setPhoneNoOfInput(formik.values.phoneNo));
      dispatch(setPasswordOfInput(formik.values.password));
      dispatch(setConfirmPasswordOfInput(formik.values.confirmPassword));
      dispatch(setPhotoOfInput(formik.values.photo));
      dispatch(setLoggedIn(true));
      //on submit then navigate to home
      navigate("/home");
    },
  });
  // used useEffect so it will check at the time of first rendered only so when component renders it will check if it is loggedIn then and then only it will alolow to navigate to home
  useEffect(() => {
    if (state.loggedIn) navigate("/home");
  }, []);

  //can use useState for handling the event changed in input

  const dispatch = useDispatch();

  return (
    <>
      <div className="container row">
        <div className="details  col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8">
          <h1>SignUp</h1>

          {/* formik's handleSubmit will handle the submits after validation */}
          <form onSubmit={formik.handleSubmit}>
            <div className="inputDetails">
              {/* clicks the file upload of input type file */}
              <div className="photo" onClick={() => fileUpload.current.click()}>
                Photo+
              </div>
              {/* ref={fileUpload} gives its ref to photo so tha tphoto can access all actions of input and is disables as per lms not shown */}
              <input
                type="file"
                id="disable"
                name="photo"
                onChange={(e) =>
                  formik.setFieldValue("photo", e.currentTarget.files[0])
                }
                ref={fileUpload}
              ></input>
              {/* {formik.values.photo!=""?<p id="photoLink">{URL.createObjectURL(new Blob([formik.values.photo]))}</p>:null} */}
              {/* if photo is uploaded shows photo uploaded */}
              {formik.values.photo != "" ? (
                <p id="photoUpload">Photo Uploaded</p>
              ) : null}
              {/* if errors and touched then only shows errors */}
              {formik.errors.photo ? (
                <p className="form-error">{formik.errors.photo}</p>
              ) : null}
              <h6>Name</h6>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                // formik's handleChange will handle the changed values
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
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.password ? (
                <p className="form-error">{formik.errors.password}</p>
              ) : null}
              <h6>Confirm Password</h6>
              <input
                type="text"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.confirmPassword ? (
                <p className="form-error">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>
            {/* will submit after validations */}
            <div className="buttons d-flex">
              <button id="submit" type="submit">
                Submit
              </button>
              {/* this button also by default submits infact every buttons submits by default for formik but due to type or due to handleReset of it will reset every thing which is changed by formik's handleChange */}
              <button id="reset" type="button" onClick={formik.handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
        {/* picture as per lms */}
        <div className="signUpPic  col-sm-2 col-md-2 col-lg-4 col-xl-4">
          <img src={picture} />
        </div>
      </div>
    </>
  );
};

export default SignUp;
