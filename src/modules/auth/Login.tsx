import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginInitValues } from "./models/LoginModel";
import { toast } from "react-toastify";
export const Login = () => {
  return (
    <>
      <div>
        <div className="card-header text-center border-0 pt-5">
          <h1 className="card-title">
            <span className="card-label fw-bolder fs-3 mb-1">
              Sign In to {process.env.REACT_APP_NAME}
            </span>
          </h1>
        </div>
        <div className="card-body py-10">
          <Formik
            initialValues={LoginInitValues}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email must be valid")
                .required("Email is required"),
              password: Yup.string()
                .required("Password is required")
                .matches(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  "Password must contain upper and lowercase letters and at least one number"
                ),
            })}
            onSubmit={() => {
              toast.success("Successfully Login");
            }}
          >
            <Form>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="email" className="todos_heading required">
                    Email
                  </label>

                  <Field
                    name="email"
                    placeholder="Email"
                    className="input_box"
                    type="email"
                  />
                  <div className="warning-text">
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="password" className="todos_heading required">
                    Password
                  </label>
                  <Field
                    name="password"
                    placeholder="Password"
                    className="input_box"
                    type="password"
                  />
                  <div className="warning-text">
                    <ErrorMessage name="password" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="submitButton">
                  Login
                </button>
              </div>

              {/* <div className='d-flex justify-content-end mt-10'>
              <Link
                to='/login'
                type='submit'
                className='btn btn-lg btn-light-primary fw-bolder py-4 pe-8 me-3'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                title='Cancel'
              >
                <span className='indicator-label'>Cancel</span>
              </Link>
              <button
                type='submit'
                className='btn btn-lg  btn-primary me-3'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                title='Submit'
                id='liveToastBtn'
              >
                {!loading && 'Submit'}
                {loading && (
                  <span className='indicator-label' style={{display: 'block'}}>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div> */}
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
