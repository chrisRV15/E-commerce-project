import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5050/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("You are login");

        navigate("/");
      } else {
        const text = await response.text();
        console.error("Received non-JSON response:", text);
        throw new Error("Server returned an unexpected response format");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };
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

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-lable">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
