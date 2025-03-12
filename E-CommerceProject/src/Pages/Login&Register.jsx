import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card shadow"
          style={{ width: "400px", maxWidth: "100%" }}
        >
          <div className="card-body p-4">
            <h2 className="card-title text-center mb-4">Account Login</h2>

            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-lable">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-dark w-100 fw-semibold"
                >
                  Login
                </button>
              </div>

              <div className="text-center mt-3">
                <button className="btn btn-dark w-100 fw-semibold">
                  Forgot password?
                </button>
              </div>

              <hr className="my-4"></hr>

              <div className="text-center">
                <p className="mb-0">Don't have an account</p>
                <Link to="/register" className="btn btn-dark w-100 fw-semibold">
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
