export const setNameOfInput =(name)=>{
    return{
        type:"SET_NAME",
        payload:name
    }
}

export const setEmailOfInput =(email)=>{
    return{
        type:"SET_EMAIL",
        payload:email
    }
}

export const setPhoneNoOfInput =(phoneNo)=>{
    return{
        type:"SET_PHONENUMBER",
        payload:phoneNo
    }
}

export const setPasswordOfInput =(password)=>{
    return{
        type:"SET_PASSWORD",
        payload:password
    }
}

export const setConfirmPasswordOfInput =(confirmPassword)=>{
    return{
        type:"SET_CONFIRMPASSWORD",
        payload:confirmPassword
    }
}

export const setPhotoOfInput =(photo)=>{
    return{
        type:"SET_PHOTO",
        payload:photo
    }
}

export const setLoggedIn =(loggedIn)=>{
    return{
        type:"SET_LOGGEDIN",
        payload:loggedIn
    }
}