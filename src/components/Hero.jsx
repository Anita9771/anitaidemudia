import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Anita9771/", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/anita-idemudia-va-dev/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/Annietah_IE",
      label: "Twitter",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">Anita Idemudia</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-2xl md:text-3xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software Engineer
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Chemist turned Developer • Tech Enthusiast • Creating beautiful and
            functional web experiences
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center text-gray-300 hover:text-primary transition-colors"
            whileHover={{ y: 5 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mr-2">Learn more about me</span>
            <HiArrowDown />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
