import * as Yup from "yup";

const phoneRegExp = /^(\+91|0)?[6789]\d{9}$/;

const MAX_FILE_SIZE = 2 * 1024 * 1024; //100KB

const validFileExtensions = { image: ["jpg", "png"] };

function isValidFileType(fileName, fileType) {
  return fileName
    ? fileName &&
        validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    : true;
}

export const dataValidation = Yup.object({
  name: Yup.string().min(15).required("Please enter your name"),
  email: Yup.string().email().required("Please enter Email"),

  phoneNo: Yup.string()
    .min(10)
    .max(13)
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone number"),
  password: Yup.string().min(8).required("Please enter Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),

  photo: Yup.mixed()
  .test("is-valid-size", "Max allowed size is 2 MB", (value) =>
      value ? value && value.size <= MAX_FILE_SIZE : true
    )
    .test("is-valid-type", "Image type should be either png or jpg", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image")
    )
    
});
