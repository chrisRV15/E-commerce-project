import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow" style={{ width: "500px", maxWidth: "100%" }}>
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4">Create an Account</h2>

          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
              <div className="form-text">
                We'll never share your email with anyone else
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeTerms"
                required
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the{" "}
                <a href="#" className="text-decoration-none">
                  Terms and Condition
                </a>
              </label>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark w-100 fw-semibold">
                Register
              </button>
            </div>

            <hr className="my-4" />

            <div className="text-center">
              <p className="mb-0">Already have an account?</p>
              <button className="btn btn-dark w-100 fw-semibold">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
