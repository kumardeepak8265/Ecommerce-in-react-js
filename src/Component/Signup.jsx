import React from "react";
import Input from "./Input";
import * as Yup from "yup";
import axios from "axios";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import { WithAlert, WithUser } from "../Providers/WithProvider";

const APICalling = (values, bag) => {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      bag.props.setUser(user);
      localStorage.setItem("token", token);
      console.log("thenerror");
      bag.props.setAlert({ message: " signup successfull ", type: "succes" });
    })
    .catch(({ user }) => {
      if (!user) {
        console.log("catchusereror");
        bag.props.setAlert({ type: "error", massage: "invalid credentials" });
      } else {
        console.log("catchnotusererror");
        bag.props.setAlert({ type: "succes", massage: "signup success" });
      }
    });
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  fullName: Yup.string().required(),
});
const initialValues = {
  email: "",
  password: "",
  fullName: "",
};

function signup({
  handleSubmit,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) {
  return (
    <div>
      <div className=" border-2 bg-white p-10 border-gray-400 rounded-md m-2">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Input
            id="fullName"
            label="fullName"
            placeholder="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.fullName}
            type="fullName"
            name="fullName"
            error={errors.fullName}
            autoComplete="Current-fullName"
            value={values.fullName}
          />
          <Input
            id="email"
            label="email"
            placeholder="E-MAIL"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.email}
            type="email"
            name="email"
            error={errors.email}
            autoComplete="Current-email"
            value={values.email}
          />
          <Input
            id="passeord"
            label="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            type="password"
            name="password"
            error={errors.password}
            autoComplete="Current-password"
            value={values.password}
          />

          <button
            className="p-2 bg-indigo-600  rounded-md text-white"
            type="submit"
          >
            SIGNUP
          </button>
        </form>
      </div>
      <div className="flex justify-center my-10">
        <h1>Already have an account ?</h1>
        <Link className="text-indigo-600 mx-4" to="/">
          LOGIN
        </Link>
      </div>
    </div>
  );
}

const withFormikSignup = withFormik({
  initialValues: initialValues,
  handleSubmit: APICalling,
  validationSchema: schema,
})(signup);
export default WithUser(WithAlert(withFormikSignup));
