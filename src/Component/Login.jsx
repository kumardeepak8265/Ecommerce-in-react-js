import React from "react";
import Input from "./Input";
import * as Yup from "yup";
import axios from "axios";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import { WithAlert, WithUser } from "../Providers/WithProvider";
const APICalling = (values, bag) => {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      bag.props.setUser(user);
      JSON.stringify(localStorage.setItem("token", token));

      bag.props.setAlert({ message: " login successfull ", type: "succes" });
    })
    .catch((error) => {
      console.log("catcherror", error);
      bag.props.setAlert({ message: error, type: "error" });
    }, []);
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});
const initialValues = {
  email: "",
  password: "",
};

function Login({
  handleSubmit,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) {
  return (
    <div>
      <div className="border-2 bg-white p-10 border-gray-400 rounded-md m-2">
        <form onSubmit={handleSubmit} className="space-y-8">
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
            LOGIN
          </button>
        </form>
      </div>
      <div className="flex flex-col sm:flex-row justify-center my-10">
        <h1>Don't have an account ?</h1>
        <Link className="text-indigo-600" to="/signup">
          SINGUP
        </Link>
      </div>
    </div>
  );
}
const withFormikLogin = withFormik({
  initialValues: initialValues,
  handleSubmit: APICalling,
  validationSchema: schema,
})(Login);
export default WithAlert(WithUser(withFormikLogin));
