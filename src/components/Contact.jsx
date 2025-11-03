import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Check if EmailJS is configured
      if (
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        // Fallback: Create mailto link with form data
        const subject = encodeURIComponent(`Contact from ${data.name}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        window.location.href = `mailto:ieghonghon@gmail.com?subject=${subject}&body=${body}`;
        setSubmitStatus({
          type: "success",
          message:
            "Opening your email client... If it doesn't open, please email me directly at ieghonghon@gmail.com",
        });
        reset();
        return;
      }

      // Send email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please email me directly at ieghonghon@gmail.com or try again later.",
      });
    }
  };

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
    { icon: FaEnvelope, href: "mailto:ieghonghon@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm open to new opportunities, collaborations, and interesting
            projects. Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-dark-light rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-100">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. Feel free to reach
                out through any of the channels below.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:ieghonghon@gmail.com"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="mr-3 text-xl" />
                  <span>ieghonghon@gmail.com</span>
                </a>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all border border-gray-700 hover:border-primary"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-dark-light rounded-2xl p-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: 10,
                  })}
                  rows="6"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.type === "required"
                      ? "Message is required"
                      : "Message must be at least 10 characters"}
                  </p>
                )}
              </div>

              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-red-500/20 text-red-400 border border-red-500/50"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                {import.meta.env.VITE_EMAILJS_SERVICE_ID ===
                  "YOUR_SERVICE_ID" ||
                !import.meta.env.VITE_EMAILJS_SERVICE_ID ? (
                  <>
                    Note: To enable direct form submission, set up EmailJS
                    environment variables. For now, submitting will open your
                    email client. Or reach me directly at{" "}
                    <a
                      href="mailto:ieghonghon@gmail.com"
                      className="text-primary hover:underline"
                    >
                      ieghonghon@gmail.com
                    </a>
                  </>
                ) : (
                  "Form submissions are sent directly to my email."
                )}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
