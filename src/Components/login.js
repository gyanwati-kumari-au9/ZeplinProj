import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Glogin from "./Glogin";
import { Link } from 'react-router-dom';


import "./signUp.css";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min")
});

const initialValues = {
  email: "",
  password: ""
};

const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container" style={{marginTop:"100px",textAlign:"center"}}>
            <h1>Great to see you again!</h1>
           
            <Form>
              <div className="form-row">
              <label htmlFor="email"><Glogin/></label><br/>

                <label htmlFor="email">userName/email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div><br/>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div><br/>

              <button style={{backgroundColor:"#419BF9",color:"white"}}
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Login
              </button><br/>
              <label>
                  Don't have an account? <Link to="/signup">Signup</Link>
                </label>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignUp;