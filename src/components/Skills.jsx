import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaServer,
  FaPalette,
  FaToolbox,
  FaCloud,
  FaUsers,
} from "react-icons/fa";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Soft Skills",
      icon: FaUsers,
      skills: [
        "Communication",
        "Design and Analytical Thinking",
        "Collaboration",
        "Teamwork",
        "Leadership",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Languages",
      icon: FaCode,
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Stack",
      icon: FaPalette,
      skills: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Astro.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Backend Stack",
      icon: FaServer,
      skills: [
        "Node.js",
        "Express.js",
        "Mongoose",
        "MongoDB",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools",
      icon: FaToolbox,
      skills: [
        "Figma",
        "Photoshop",
        "Generative AI Tools",
        "Git/GitHub",
        "Jira",
        "Slack",
        "MS Teams",
        "MS/Google Suite",
        "Postman",
        "Swagger",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Platforms",
      icon: FaCloud,
      skills: ["Azure", "Vercel"],
      color: "from-teal-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-dark-light rounded-xl p-6 shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
              >
                <category.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                    className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-gray-700 hover:border-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
