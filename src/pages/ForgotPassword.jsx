import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      setMessage(response.data.message);
      setEmail("");

    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
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

                <FaEnvelope
                  size={45}
                  className="text-danger mb-3"
                />

                <h3>Forgot Password</h3>

                <p className="text-muted">
                  Enter your registered email to receive a password reset link.
                </p>

              </div>

              {message && (
                <div className="alert alert-info">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-4">

                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-danger w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Sending..."
                    : "Send Reset Link"}
                </button>

              </form>

              <div className="text-center mt-4">

                <Link to="/login">
                  ← Back to Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;