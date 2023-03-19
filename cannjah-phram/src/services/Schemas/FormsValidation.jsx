import * as Yup from "yup";

export const ageVerifySchema = Yup.object({
  userAge: Yup.number().required("Please enter your Age"),
});

export const contactFormSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(2).required("Please enter Message"),
  related: Yup.string().required("Please Select any of them"),
  subject: Yup.string().min(2).required("Please enter Subject"),
});

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter Valid Email"),
  password: Yup.string().min(6).required("Please enter your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});
