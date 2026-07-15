import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import API_URL from "../config/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.password || !form.confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/api/auth/reset-password/${token}`,
        {
          password: form.password,
        }
      );

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2500);

    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
          "Invalid or expired reset link."
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

                <FaLock
                  size={45}
                  className="text-danger mb-3"
                />

                <h3>Reset Password</h3>

                <p className="text-muted">
                  Enter your new password below.
                </p>

              </div>

              {message && (
                <div className="alert alert-info">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    New Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                </div>

                <button
                  className="btn btn-danger w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Updating..."
                    : "Reset Password"}
                </button>

              </form>

              <div className="text-center mt-4">

                <Link to="/login">
                  Back to Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;
