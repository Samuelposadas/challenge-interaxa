import * as Yup from "yup";

export const initialValues = {
  name: "",
  lastName: "",
  nationality: "",
  email: "",
  age: null,
};

export const validationSchema = {
  name: Yup.string()
    .min(3, "the minimum of characters is 3")
    .required("the name field is required"),
  lastName: Yup.string()
    .min(5, "the minimum of characters is 5")
    .required("the lastName field is required"),
  nationality: Yup.string().required("the nationality field is required"),
  email: Yup.string().email().required("the email field is required"),
  age: Yup.number()
    .min(6, "the minimum of age is 6")
    .max(100, "the max of age is 100")
    .required("the userId field is required"),
};
