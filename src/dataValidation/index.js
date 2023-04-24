import * as Yup from "yup";
//for inidan number starts qith +91 or 0 and if they are not there then starts with 6,7,8,9 and rest any 9 digits
const phoneRegExp = /^(\+91|0)?[6789]\d{9}$/;

const MAX_FILE_SIZE = 2 * 1024 * 1024; //100KB

const validFileExtensions = { image: ["jpg", "png"] };
//file type jgp or png checking
function isValidFileType(fileName, fileType) {
  return fileName
    ? fileName &&
        validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    : true;
}
// function validatePassword(password) {
//   const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=])$/;
//   return regex.test(password);
// }

export const dataValidation = Yup.object({
  // name must be string minimum 15 chars and required
  name: Yup.string().min(15).required("Please enter your name"),
  //email must be string type email and required
  email: Yup.string().email().required("Please enter your Email"),
  //phone must be Indian number checks with min 10 must match phoneRegExp else error and required
  phoneNo: Yup.string()

    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone number"),
  //min 8 char password
  password: Yup.string().min(8).required("Please enter Password"),
  // .test("ise-valid","Password invalid",(value)=>
  // validatePassword(value)),
  //confirmpassword oneOf means can be any of the one and added ref of password so will check oneOf password

  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),
  //mixed as it can be any type max 2 mb and format should be in jpg or png
  photo: Yup.mixed()
    .test("is-valid-size", "Max allowed size is 2 MB", (value) =>
      value ? value && value.size <= MAX_FILE_SIZE : true
    )
    .test(
      "is-valid-type",
      "Image type should be either in png or jpg format",
      (value) => isValidFileType(value && value.name.toLowerCase(), "image")
    ),
});
