import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import {
  FaBrain,
  FaBookMedical,
  FaVideo,
  FaCapsules,
  FaStickyNote,
  FaHeartbeat,
} from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "AI Learning Assistant",
    description:
      "Get intelligent study support for women's health topics with a future-ready AI interface.",
  },
  {
    icon: FaBookMedical,
    title: "Disease Encyclopedia",
    description:
      "Explore clear explanations of common conditions and educational resources.",
  },
  {
    icon: FaVideo,
    title: "Medical Videos",
    description:
      "Watch curated YouTube videos for visual learning and awareness.",
  },
  {
    icon: FaCapsules,
    title: "Medicine Information",
    description:
      "Understand common medicines with education-first summaries and safety reminders.",
  },
  {
    icon: FaStickyNote,
    title: "Student Notes",
    description:
      "Access concise study notes, revision summaries, and key takeaways.",
  },
  {
    icon: FaHeartbeat,
    title: "Health Awareness",
    description:
      "Build confidence with evidence-informed educational content and guidance.",
  },
];

const HomePage = () => {
  return (
    <>
      <SEO
        title="GynoGuide AI | Home"
        description="A modern women's health learning companion featuring AI support, disease education, notes, and videos."
        keywords="women health, AI learning, gynecology, education"
      />

      <Hero />

      {/* ================= DEVELOPMENT SECTION ================= */}

      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">

          <div
            className="rounded-4 shadow-lg p-5"
            style={{
              background:
                "linear-gradient(135deg,#fff0f5,#ffffff,#ffe4ec)",
            }}
          >
            <div className="text-center">

              <h2
                className="fw-bold mb-3"
                style={{ color: "#d63384" }}
              >
                🚀 GynoGuide AI is Evolving
              </h2>

              <p className="lead">
                Thank you for visiting GynoGuide AI!
              </p>

              <p
                className="text-muted mx-auto"
                style={{ maxWidth: "750px" }}
              >
                Our platform is currently under active development.
                We are continuously adding new AI-powered learning
                tools, educational resources, personalized features,
                and women's healthcare modules to provide the best
                learning experience.
              </p>

            </div>

            {/* Progress */}

            <div className="mt-5">

              <div className="d-flex justify-content-between mb-2">
                <strong>Overall Project Progress</strong>
                <strong>65%</strong>
              </div>

              <div
                className="progress"
                style={{ height: "12px" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  style={{ width: "65%" }}
                ></div>
              </div>

            </div>

            {/* Roadmap */}

            <div className="row mt-5">

              {/* Available */}

              <div className="col-lg-4 mb-4">

                <div className="card border-success shadow-sm h-100">

                  <div className="card-body">

                    <h4 className="text-success text-center">
                      ✅ Available
                    </h4>

                    <hr />

                    <ul className="list-unstyled">

                      <li>✔ AI Learning Assistant</li>

                      <li>✔ Disease Encyclopedia</li>

                      <li>✔ Medicine Information</li>

                      <li>✔ Educational Videos</li>

                      <li>✔ Student Notes</li>

                      <li>✔ Login & Registration</li>

                      <li>✔ Forgot Password</li>

                    </ul>

                  </div>

                </div>

              </div>

              {/* In Progress */}

              <div className="col-lg-4 mb-4">

                <div className="card border-warning shadow-sm h-100">

                  <div className="card-body">

                    <h4 className="text-warning text-center">
                      🚧 In Progress
                    </h4>

                    <hr />

                    <ul className="list-unstyled">

                      <li>⏳ Personalized Dashboard</li>

                      <li>⏳ Learning Progress Tracker</li>

                      <li>⏳ AI Generated Notes</li>

                      <li>⏳ Bookmarks</li>

                      <li>⏳ Smart Recommendations</li>

                      <li>⏳ User Analytics</li>

                    </ul>

                  </div>

                </div>

              </div>

              {/* Coming Soon */}

              <div className="col-lg-4 mb-4">

                <div className="card border-primary shadow-sm h-100">

                  <div className="card-body">

                    <h4 className="text-primary text-center">
                      ⭐ Coming Soon
                    </h4>

                    <hr />

                    <ul className="list-unstyled">

                      <li>🌸 Menstrual Cycle Tracker</li>

                      <li>🤰 Pregnancy Week Guide</li>

                      <li>🩺 AI Symptom Checker</li>

                      <li>📊 Personalized Learning</li>

                      <li>🏆 Certificates</li>

                      <li>👩‍⚕️ Doctor Consultation</li>

                      <li>📄 Download PDF Notes</li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= FEATURES ================= */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-heading font-display mb-3">
              Why learners choose GynoGuide AI
            </h2>

            <p className="page-subtitle">
              A nurturing platform for studying women's health
              with compassion and clarity.
            </p>

          </div>

          <div className="row g-4">

            {features.map((feature, index) => (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="col-md-6 col-lg-4"
              >

                <FeatureCard {...feature} />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <Stats />

      <Testimonials />

      <FAQ />

      {/* ================= NEWSLETTER ================= */}

      <section className="py-5">

        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-4 p-5 text-center text-white hero-glow"
            style={{
              background: "var(--gradient-featured)",
            }}
          >

            <h3
              className="fw-bold font-display mb-2"
              style={{ fontSize: "2rem" }}
            >
              Stay informed with educational updates
            </h3>

            <p
              className="mb-4 mx-auto"
              style={{
                opacity: 0.95,
                maxWidth: "500px",
              }}
            >
              Join our newsletter to receive new learning
              resources, notes, AI updates, and women's
              health educational content.
            </p>

            <div className="row justify-content-center">

              <div className="col-md-6 d-flex gap-2">

                <input
                  className="form-control rounded-pill px-4"
                  placeholder="Email address"
                />

                <button
                  className="btn rounded-pill px-4"
                  style={{
                    background: "#fff",
                    color: "#d63384",
                    fontWeight: "bold",
                  }}
                >
                  Subscribe
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
};

export default HomePage;
