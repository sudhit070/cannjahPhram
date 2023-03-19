import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
// import logo from "../common/images/logo.png";
import logo from "../common/images/favicon.png";
import { useFormik } from "formik";
import { ageVerifySchema } from "../services/Schemas/FormsValidation";
import { useNavigate } from "react-router-dom";

const initialValues = {
  userAge: "",
};

export const AgeVerification = () => {
  let navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ageVerifySchema,
      onSubmit: (values, action) => {

        localStorage.setItem("Age", values.userAge);

        if (values.userAge > 18) {
          navigate("/");
        } else {
          navigate("/failed-verification/");
        }
        action.resetForm();
      },
    });

  useEffect(() => {
    document.title = "Age Verification"
  }, []);

  return (
    <>
      <Container fluid className="container-fluid vh-100 verifiction-bg">
        <div className="get-birth-container">
          <img src={logo} alt="logo" className="logo" width="130" />
          <h2 className="text-uppercase pt-5 pb-2 fw-bolder h2">
            Welcome to the Pharm
          </h2>
          <p className="">
            Please enter your age for a <strong>Tour</strong>. 19+ only.
            {/* You must be at least 18 years old to access our website. To enter,
            kindly provide your date of birth in the blanks below. */}
          </p>
          <form className="position-relative" onSubmit={handleSubmit}>
            <div className="py-4 d-flex flex-wrap gap-4 justify-content-center age-verify">
              <div className="input-box">
                <input
                  type="number"
                  value={values.userAge}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="userAge"
                  placeholder="Age"
                /> {errors.userAge && touched.userAge ? (
                  <p className="form-error">{errors.userAge}</p>
                ) : null}
              </div>


              <button type="submit" className="btn btn-primary">
                Pharm→C
              </button>
            </div>

          </form>
          <p className="">
            Vertically Integrated.
          </p>
        </div>
      </Container>
    </>
  );

};
