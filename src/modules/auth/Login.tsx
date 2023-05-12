import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginInitValues } from "./models/LoginModel";
export const Login = () => {
  return (
    <>
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
        onSubmit={() => {}}
      >
        <Form>
          <h1 className="heading">Sign In to {process.env.REACT_APP_NAME}</h1>

          <div className="todos_heading label">
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <Field
              name="email"
              placeholder="Email"
              className="input_box"
              type="email"
            />
          </div>

          <div className="text-danger">
            <ErrorMessage name="email" />
          </div>

          <div className="todos_heading label">
            <label htmlFor="password">Password</label>
          </div>

          <Field
            name="password"
            placeholder="Password"
            className="input_box"
            type="password"
          />
          <div className="text-danger">
            <ErrorMessage name="password" />
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

          <button type="submit" className="submitButton">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
