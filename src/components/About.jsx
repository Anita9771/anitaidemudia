import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-dark-light/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-dark-light rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I'm{" "}
              <span className="text-primary font-semibold">Anita Idemudia</span>
              , a passionate Frontend Engineer with expertise in full-stack
              development. With a unique background as a Chemist turned
              Developer, I bring analytical thinking and attention to detail to
              every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I specialize in creating beautiful, responsive, and performant web
              applications using modern technologies. Whether it's building user
              interfaces with React, Next.js, or Vue.js, or developing robust
              backend solutions with Node.js and Express, I'm committed to
              delivering high-quality code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm continuously learning and growing as a developer. I'm
              actively seeking opportunities in Software Engineering, Frontend
              Development, UI Engineering, or Technical Writing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
