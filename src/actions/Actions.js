//changedValue of input field name is dispatched
export const setNameOfInput = (name) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};
//changedValue of input field email is dispatched
export const setEmailOfInput = (email) => {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
};
//changedValue of input field phoneNo is dispatched
export const setPhoneNoOfInput = (phoneNo) => {
  return {
    type: "SET_PHONENUMBER",
    payload: phoneNo,
  };
};
//changedValue of input field password is dispatched
export const setPasswordOfInput = (password) => {
  return {
    type: "SET_PASSWORD",
    payload: password,
  };
};
//changedValue of input field confirmPassword is dispatched
export const setConfirmPasswordOfInput = (confirmPassword) => {
  return {
    type: "SET_CONFIRMPASSWORD",
    payload: confirmPassword,
  };
};
//changedValue of input field photo is dispatched

export const setPhotoOfInput = (photo) => {
  return {
    type: "SET_PHOTO",
    payload: photo,
  };
};
//changedValue of input field loggedIn is dispatched
export const setLoggedIn = (loggedIn) => {
  return {
    type: "SET_LOGGEDIN",
    payload: loggedIn,
  };
};
