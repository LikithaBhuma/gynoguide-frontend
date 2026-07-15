import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import API_URL from "../config/api";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email: form.email,
          password: form.password,
        }
      );

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow border-0 rounded-4">

            <div className="card-body p-4">

              <div className="text-center mb-4">

                <FaSignInAlt
                  size={45}
                  className="text-danger mb-2"
                />

                <h3>Welcome Back</h3>

                <p className="text-muted">
                  Login to GynoGuide AI
                </p>

              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-end mb-3">
                  <Link to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <button
                  className="btn btn-danger w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

              </form>

              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link to="/register">
                  Register
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;
