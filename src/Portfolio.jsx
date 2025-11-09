import resume from './assets/resume.pdf';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Vamsi Krishna Sirimalla
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mb-6"
        >
          AI & ML Engineer | Data Science Enthusiast | Python Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:vamsikrishnasirimalla@gmail.com"
            className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>

          <a
            href="https://github.com/vamsi-sys"
            target="_blank"
            className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/vamsikrishna-sirimalla-57554b228/"
            target="_blank"
            className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>

          <a
            href={resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <FileDown className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Python", "TensorFlow", "Scikit-learn", "SQL", "HTML & CSS", "n8n Automation"].map(
            (skill, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center font-medium hover:shadow-lg transition"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
<section className="py-16 bg-gray-100 px-6 md:px-20">
  <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        title: "Facial Expression Recognition System",
        desc: "Built a real-time emotion detection model using CNN, YOLOv2, and RNN achieving 88% accuracy on the FER-2013 dataset.",
        link: "https://github.com/vamsi-sys/btech-emotion-detector-CNN--OpenCV",
      },
      {
        title: "Cyber Threat Detection using ANN",
        desc: "Developed AI model using CNN and LSTM to detect cyberattacks with reduced false positives.",
        link: "https://github.com/vamsi-sys/btech-event-based-threat-detection",
      },
      {
        title: "Spotify Song Suggestion System",
        desc: "Created a music recommendation model using audio feature similarity and clustering algorithms.",
        link: "https://github.com/vamsi-sys/Spotify-songs-suggestions",
      },
      {
        title: "House Price Prediction",
        desc: "Built regression model using Scikit-learn for accurate price estimation.",
        link: "https://github.com/vamsi-sys/HousePrice_Prediction",
      },
      {
        title: "Iris Classification",
        desc: "Developed an ML model to classify Iris flower species using SVM and decision tree algorithms.",
        link: "https://github.com/vamsi-sys/Iris_Classification",
      },
      {
        title: "Wine Quality Prediction",
        desc: "Implemented regression-based ML model to predict wine quality using chemical parameters.",
        link: "https://github.com/vamsi-sys/wine-quality-prediction",
      },
    ].map((project, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
      >
        <h3 className="text-xl font-semibold mb-2 text-indigo-600">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.desc}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline font-medium"
        >
          View on GitHub
        </a>
      </motion.div>
    ))}
  </div>
</section>


      {/* Education Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-lg mb-2">
              B.Tech in Artificial Intelligence & Machine Learning
            </h3>
            <p>Malla Reddy Institute of Technology and Science, Hyderabad (2021–2025)</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-lg mb-2">Certifications</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Python 101 for Data Science — IBM Skills Network</li>
              <li>AI Training — Corizo</li>
              <li>ML Virtual Internship — Bharat Intern</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-800 text-white">
        <p className="text-sm">
          © 2025 Vamsi Krishna Sirimalla — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
