import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "GCA Ministries International",
      description:
        "An online presence platform for a church headquartered in Austria. A modern, responsive website showcasing the church's mission, events, and community engagement.",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://gcaminternational.com",
      githubUrl: null,
    },
    {
      title: "Adedipe & Adedipe Legal Firm",
      description:
        "Online presence platform for a legal firm based in Lagos, Nigeria. Professional website featuring services, team, and legal expertise.",
      tech: ["Wordpress"],
      liveUrl: "https://adedipeadedipe.com",
      githubUrl: null,
    },
    {
      title: "Capital Haven Bank",
      description:
        "The modern banking platform that helps you save, spend, and invest smarter by operating a strict centralized system. Contact me for Admin credentials.",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://ch-client-seven.vercel.app/register",
      githubUrl: null,
    },
    {
      title: "Plain Tees Online Store",
      description:
        "An online store for a clothing brand that sells t-shirts on whatsapp.",
      tech: ["Next.js", "Tailwind CSS", "Whatsapp API"],
      liveUrl: "https://plain-tees.vercel.app",
      githubUrl: null,
    },
    {
      title: "Golden Coral Crafts Online Store",
      description:
        "An online store for a crafts brand that sells coral beads on whatsapp.",
      tech: ["Next.js", "Tailwind CSS", "Whatsapp API"],
      liveUrl: "https://golden-coral-crafts.vercel.app",
      githubUrl: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-dark-light/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-dark rounded-xl p-8 shadow-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-dark-light text-gray-300 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
