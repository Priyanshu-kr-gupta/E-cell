import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "../Css/About.css";
import TeamDefinition from "../Components/TeamDefinition";

export default function About() {
  // Refs for animations
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const teamRef = useRef(null);
  const orgRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const heroControls = useAnimation();
  const cardsControls = useAnimation();
  const teamControls = useAnimation();
  const orgControls = useAnimation();
  const ctaControls = useAnimation();

  // View states
  const heroInView = useInView(heroRef, { once: false, threshold: 0.3 });
  const cardsInView = useInView(cardsRef, { once: false, threshold: 0.2 });
  const teamInView = useInView(teamRef, { once: false, threshold: 0.3 });
  const orgInView = useInView(orgRef, { once: false, threshold: 0.2 });
  const ctaInView = useInView(ctaRef, { once: false, threshold: 0.3 });

  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isGlowing, setIsGlowing] = useState(false);

  // Services data with enhanced content
  const services = [
    {
      id: 1,
      title: "Immersive Workshops",
      description:
        "Our hands-on workshops bridge theory and practice, providing participants with experiential learning opportunities guided by industry experts. Each session is meticulously designed to spark creativity and foster skill development.",
      icon: "🔧",
      color: "from-cyan-500 to-blue-600",
      hoverColor: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      title: "Inspiring Talks",
      description:
        "Our curated talk series features visionary entrepreneurs and thought leaders who share insights, challenges, and success stories. These sessions provide invaluable perspectives on navigating the entrepreneurial landscape.",
      icon: "💬",
      color: "from-purple-500 to-pink-600",
      hoverColor: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Innovative Competitions",
      description:
        "Our competitive events challenge participants to push boundaries and develop innovative solutions to real-world problems. These platforms offer recognition, mentorship, and resources to transform winning concepts into viable enterprises.",
      icon: "🏆",
      color: "from-amber-500 to-orange-600",
      hoverColor: "from-amber-400 to-orange-500",
    },
  ];

  // Stats data
  const stats = [
    { label: "Students Impacted", value: "2,500+", icon: "👥" },
    { label: "Startups Launched", value: "48", icon: "🚀" },
    { label: "Annual Events", value: "15+", icon: "📅" },
    { label: "Industry Partners", value: "25", icon: "🤝" },
  ];

  // Trigger animations when elements come into view
  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (cardsInView) cardsControls.start("visible");
    if (teamInView) teamControls.start("visible");
    if (orgInView) orgControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [
    heroInView,
    cardsInView,
    teamInView,
    orgInView,
    ctaInView,
    heroControls,
    cardsControls,
    teamControls,
    orgControls,
    ctaControls,
  ]);

  // Glow effect timer
  useEffect(() => {
    const glowInterval = setInterval(() => {
      setIsGlowing((prev) => !prev);
    }, 5000);
    return () => clearInterval(glowInterval);
  }, []);

  // Advanced blob animation
  useEffect(() => {
    const createBlob = () => {
      const blob = document.createElement("div");
      blob.className = "absolute rounded-full blur-3xl opacity-10";

      // Random size
      const size = Math.random() * 300 + 200;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;

      // Random position
      const posX = Math.random() * window.innerWidth;
      const posY =
        Math.random() * (document.documentElement.scrollHeight - size);
      blob.style.left = `${posX}px`;
      blob.style.top = `${posY}px`;

      // Random color
      const colors = [
        "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
        "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
        "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
        "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
      ];
      blob.className += ` ${colors[Math.floor(Math.random() * colors.length)]}`;

      // Add to background container
      const container = document.getElementById("background-blobs");
      if (container) {
        container.appendChild(blob);

        // Animate and remove
        const keyframes = [
          { opacity: 0, transform: "scale(0.8)" },
          { opacity: 0.1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" },
        ];

        const animation = blob.animate(keyframes, {
          duration: 20000,
          easing: "ease-in-out",
        });

        animation.onfinish = () => {
          blob.remove();
        };
      }
    };

    // Create initial blobs
    for (let i = 0; i < 5; i++) {
      createBlob();
    }

    // Create new blobs periodically
    const interval = setInterval(createBlob, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const staggeredFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggeredCards = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <>
      {/* Background Blobs Container */}
      <div
        id="background-blobs"
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      ></div>

      <div className="w-full overflow-hidden bg-gradient-to-b from-[#0a0a18] via-[#141429] to-[#1e1e38] text-white min-h-screen font-sans">
        {/* Hero Section with Advanced Parallax */}
        <div
          ref={heroRef}
          className="w-full h-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Parallax Background */}
          <div className="absolute inset-0 bg-cover bg-center" />

          {/* Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a18]/70 via-[#141429]/80 to-[#1e1e38]/90 backdrop-blur-sm"></div>

          {/* Grid Lines Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-grid-pattern"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial="hidden"
              animate={heroControls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div className="overflow-hidden mb-6" variants={fadeInUp}>
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md border border-cyan-500/20">
                    NIT Jamshedpur
                  </span>
                </motion.div>
              </motion.div>

              <motion.div className="overflow-hidden" variants={fadeInUp}>
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                >
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    About E-Cell
                  </span>
                </motion.h1>
              </motion.div>

              <motion.div
                className="relative w-24 h-1 mx-auto mb-8"
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </motion.div>

              <motion.div className="overflow-hidden" variants={fadeInUp}>
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light text-gray-300"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                >
                  Where <span className="text-cyan-400 font-medium">Ideas</span>{" "}
                  Meet{" "}
                  <span className="text-purple-400 font-medium">
                    Innovation
                  </span>
                  . We foster entrepreneurship through mentorship, resources,
                  and a vibrant community. Our mission is to transform visionary
                  concepts into sustainable ventures that drive positive change.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12">
                <button className="interactive relative group overflow-hidden px-10 py-4 rounded-full bg-transparent border border-cyan-500 text-white font-medium tracking-wide transition-all duration-500">
                  <span className="relative z-10">Our Vision</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div
                    className={`absolute inset-0 opacity-0 ${
                      isGlowing ? "animate-pulse opacity-25" : ""
                    } bg-cyan-500 rounded-full blur-md transition-opacity duration-1000`}
                  ></div>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-sm font-light text-gray-400 mb-2">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-1"
            >
              <motion.div
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="w-full py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={staggeredFadeIn}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 h-full flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-all duration-300">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <motion.h3
                      className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-cyan-300"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={cardsRef} className="w-full py-24 relative">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              animate={cardsControls}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md border border-cyan-500/20">
                What We Do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 py-2">
                Empowering Innovation
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-36 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-8"
              />
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Through our comprehensive ecosystem of programs and initiatives,
                we provide the tools, knowledge, and network needed to turn
                entrepreneurial visions into reality.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={cardsControls}
              variants={staggeredCards}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="interactive relative group"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 group-hover:border-cyan-500/30 overflow-hidden z-10">
                    {/* Glass effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Background glow */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div
                        className={`text-4xl mb-6 bg-gradient-to-r ${service.color} rounded-full w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}
                      >
                        {service.icon}
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="mt-8 overflow-hidden h-8">
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex items-center text-cyan-400 font-medium"
                        >
                          Explore More
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="w-full py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              animate={teamControls}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md border border-cyan-500/20">
                Our People
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                The Visionaries
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-8"
              />
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Meet the creative minds and passionate leaders who laid the
                foundation for our thriving entrepreneurial ecosystem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                teamInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full flex justify-center perspective"
            >
              <div className="relative rounded-2xl overflow-hidden group interactive max-w-4xl transform-style-3d">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-70 rounded-2xl blur-lg transform group-hover:scale-105 transition-all duration-700"></div>

                {/* Card content */}
                <div className="relative bg-black/30 backdrop-blur-sm p-1 rounded-2xl z-10">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/assets/about/team.webp"
                      alt="Founding Team"
                      className="w-full object-cover rounded-xl transform transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white/90">
                        Founding Members
                      </h3>
                      <div className="w-0 h-0.5 bg-cyan-400 group-hover:w-20 transition-all duration-500 mb-4"></div>
                      <p className="text-gray-300 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Established in 2018, our founding team brought diverse
                        expertise and shared vision to create an innovation hub
                        that continues to inspire the next generation of
                        entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div
          ref={orgRef}
          className="w-full py-24 bg-gradient-to-b from-[#2C3E50] to-[#1a2e44]"
        >
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={orgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Our Structure
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="SVG_animates sm:px-0 px-1">
                <svg
                  width="631"
                  height="374"
                  viewBox="0 0 631 374"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M292 33V107.5M292 182V107.5M292 107.5H162M292 107.5H49M292 107.5V218M49 107.5H162M49 107.5V191M556 182V122.5C556 114.216 549.284 107.5 541 107.5H417M417 107.5V182M417 107.5H162M417 107.5V341M162 107.5V269"
                    stroke="#fff"
                    stroke-width="4"
                  />
                  <path
                    className="rotate"
                    d="M260.391 22V6H271.172V8.78906H263.773V12.6016H270.617V15.3906H263.773V19.2109H271.203V22H260.391ZM281.275 12.6797V15.3203H273.979V12.6797H281.275ZM298.291 11.6016H294.869C294.807 11.1589 294.679 10.7656 294.486 10.4219C294.294 10.0729 294.046 9.77604 293.744 9.53125C293.442 9.28646 293.093 9.09896 292.697 8.96875C292.307 8.83854 291.882 8.77344 291.424 8.77344C290.596 8.77344 289.874 8.97917 289.26 9.39062C288.645 9.79687 288.169 10.3906 287.83 11.1719C287.492 11.9479 287.322 12.8906 287.322 14C287.322 15.1406 287.492 16.099 287.83 16.875C288.174 17.651 288.653 18.237 289.268 18.6328C289.882 19.0286 290.593 19.2266 291.4 19.2266C291.854 19.2266 292.273 19.1667 292.658 19.0469C293.049 18.9271 293.395 18.7526 293.697 18.5234C293.999 18.2891 294.249 18.0052 294.447 17.6719C294.65 17.3385 294.791 16.9583 294.869 16.5312L298.291 16.5469C298.202 17.2812 297.981 17.9896 297.627 18.6719C297.278 19.349 296.807 19.9557 296.213 20.4922C295.624 21.0234 294.921 21.4453 294.104 21.7578C293.291 22.0651 292.372 22.2187 291.346 22.2187C289.919 22.2187 288.643 21.8958 287.518 21.25C286.398 20.6042 285.512 19.6693 284.861 18.4453C284.215 17.2214 283.893 15.7396 283.893 14C283.893 12.2552 284.221 10.7708 284.877 9.54688C285.533 8.32292 286.424 7.39062 287.549 6.75C288.674 6.10417 289.939 5.78125 291.346 5.78125C292.273 5.78125 293.132 5.91146 293.924 6.17187C294.721 6.43229 295.426 6.8125 296.041 7.3125C296.656 7.80729 297.156 8.41406 297.541 9.13281C297.932 9.85156 298.182 10.6745 298.291 11.6016ZM300.717 22V6H311.498V8.78906H304.1V12.6016H310.943V15.3906H304.1V19.2109H311.529V22H300.717ZM314.187 22V6H317.57V19.2109H324.43V22H314.187ZM326.67 22V6H330.053V19.2109H336.912V22H326.67Z"
                    fill="#fff"
                  />
                  <path
                    className="rotate"
                    d="M14.098 205.547H10.9872C10.9304 205.144 10.8144 204.787 10.6392 204.474C10.464 204.157 10.2391 203.887 9.96449 203.665C9.68987 203.442 9.37263 203.272 9.01278 203.153C8.65767 203.035 8.27178 202.976 7.85511 202.976C7.10227 202.976 6.4465 203.163 5.88778 203.537C5.32907 203.906 4.89583 204.446 4.58807 205.156C4.2803 205.862 4.12642 206.719 4.12642 207.727C4.12642 208.764 4.2803 209.635 4.58807 210.341C4.90057 211.046 5.33617 211.579 5.89489 211.939C6.4536 212.299 7.09991 212.479 7.83381 212.479C8.24574 212.479 8.62689 212.424 8.97727 212.315C9.33239 212.206 9.64725 212.048 9.92188 211.839C10.1965 211.626 10.4238 211.368 10.6037 211.065C10.7884 210.762 10.9162 210.417 10.9872 210.028L14.098 210.043C14.0175 210.71 13.8163 211.354 13.4943 211.974C13.1771 212.59 12.7486 213.142 12.2088 213.629C11.6738 214.112 11.0346 214.496 10.2912 214.78C9.55256 215.059 8.71686 215.199 7.78409 215.199C6.48674 215.199 5.3267 214.905 4.30398 214.318C3.28598 213.731 2.48106 212.881 1.8892 211.768C1.30208 210.656 1.00852 209.309 1.00852 207.727C1.00852 206.141 1.30682 204.792 1.90341 203.679C2.5 202.566 3.30966 201.719 4.33239 201.136C5.35511 200.549 6.50568 200.256 7.78409 200.256C8.62689 200.256 9.40814 200.374 10.1278 200.611C10.8523 200.848 11.4938 201.193 12.0526 201.648C12.6113 202.098 13.0658 202.649 13.4162 203.303C13.7713 203.956 13.9986 204.704 14.098 205.547ZM21.1754 215.213C20.0722 215.213 19.1181 214.979 18.3132 214.51C17.513 214.036 16.8951 213.378 16.4595 212.536C16.0239 211.688 15.8061 210.705 15.8061 209.588C15.8061 208.461 16.0239 207.476 16.4595 206.634C16.8951 205.786 17.513 205.128 18.3132 204.659C19.1181 204.186 20.0722 203.949 21.1754 203.949C22.2786 203.949 23.2304 204.186 24.0305 204.659C24.8355 205.128 25.4557 205.786 25.8913 206.634C26.3269 207.476 26.5447 208.461 26.5447 209.588C26.5447 210.705 26.3269 211.688 25.8913 212.536C25.4557 213.378 24.8355 214.036 24.0305 214.51C23.2304 214.979 22.2786 215.213 21.1754 215.213ZM21.1896 212.869C21.6915 212.869 22.1106 212.727 22.4467 212.443C22.7829 212.154 23.0362 211.761 23.2067 211.264C23.3819 210.767 23.4695 210.201 23.4695 209.567C23.4695 208.932 23.3819 208.366 23.2067 207.869C23.0362 207.372 22.7829 206.979 22.4467 206.69C22.1106 206.402 21.6915 206.257 21.1896 206.257C20.683 206.257 20.2569 206.402 19.9112 206.69C19.5703 206.979 19.3123 207.372 19.1371 207.869C18.9666 208.366 18.8814 208.932 18.8814 209.567C18.8814 210.201 18.9666 210.767 19.1371 211.264C19.3123 211.761 19.5703 212.154 19.9112 212.443C20.2569 212.727 20.683 212.869 21.1896 212.869ZM28.5121 215V204.091H31.4453V205.994H31.5589C31.7578 205.317 32.0916 204.806 32.5604 204.46C33.0291 204.11 33.5689 203.935 34.1797 203.935C34.3312 203.935 34.4946 203.944 34.6697 203.963C34.8449 203.982 34.9988 204.008 35.1314 204.041V206.726C34.9893 206.683 34.7929 206.645 34.5419 206.612C34.291 206.579 34.0613 206.562 33.853 206.562C33.4079 206.562 33.0102 206.66 32.6598 206.854C32.3142 207.043 32.0395 207.308 31.8359 207.649C31.6371 207.99 31.5376 208.383 31.5376 208.828V215H28.5121ZM36.6957 219.091V204.091H39.6786V205.923H39.8136C39.9461 205.63 40.1379 205.331 40.3888 205.028C40.6445 204.721 40.976 204.465 41.3832 204.261C41.7951 204.053 42.3065 203.949 42.9173 203.949C43.7127 203.949 44.4466 204.157 45.119 204.574C45.7913 204.986 46.3287 205.608 46.7312 206.442C47.1336 207.27 47.3349 208.31 47.3349 209.56C47.3349 210.777 47.1384 211.804 46.7454 212.642C46.3571 213.475 45.8268 214.107 45.1545 214.538C44.4869 214.964 43.7388 215.178 42.9102 215.178C42.323 215.178 41.8235 215.08 41.4116 214.886C41.0044 214.692 40.6706 214.448 40.4102 214.155C40.1497 213.857 39.9509 213.556 39.8136 213.253H39.7212V219.091H36.6957ZM39.6573 209.545C39.6573 210.194 39.7473 210.76 39.9272 211.243C40.1071 211.726 40.3675 212.102 40.7085 212.372C41.0494 212.637 41.4637 212.77 41.9513 212.77C42.4438 212.77 42.8604 212.635 43.2013 212.365C43.5423 212.09 43.8003 211.712 43.9755 211.229C44.1554 210.741 44.2454 210.18 44.2454 209.545C44.2454 208.916 44.1578 208.362 43.9826 207.884C43.8074 207.405 43.5494 207.031 43.2085 206.761C42.8675 206.491 42.4485 206.357 41.9513 206.357C41.4589 206.357 41.0423 206.487 40.7013 206.747C40.3652 207.008 40.1071 207.377 39.9272 207.855C39.7473 208.333 39.6573 208.897 39.6573 209.545ZM54.2809 215.213C53.1777 215.213 52.2236 214.979 51.4187 214.51C50.6185 214.036 50.0006 213.378 49.565 212.536C49.1294 211.688 48.9116 210.705 48.9116 209.588C48.9116 208.461 49.1294 207.476 49.565 206.634C50.0006 205.786 50.6185 205.128 51.4187 204.659C52.2236 204.186 53.1777 203.949 54.2809 203.949C55.3841 203.949 56.3358 204.186 57.136 204.659C57.9409 205.128 58.5612 205.786 58.9968 206.634C59.4324 207.476 59.6502 208.461 59.6502 209.588C59.6502 210.705 59.4324 211.688 58.9968 212.536C58.5612 213.378 57.9409 214.036 57.136 214.51C56.3358 214.979 55.3841 215.213 54.2809 215.213ZM54.2951 212.869C54.797 212.869 55.216 212.727 55.5522 212.443C55.8884 212.154 56.1417 211.761 56.3121 211.264C56.4873 210.767 56.5749 210.201 56.5749 209.567C56.5749 208.932 56.4873 208.366 56.3121 207.869C56.1417 207.372 55.8884 206.979 55.5522 206.69C55.216 206.402 54.797 206.257 54.2951 206.257C53.7885 206.257 53.3623 206.402 53.0167 206.69C52.6758 206.979 52.4177 207.372 52.2425 207.869C52.0721 208.366 51.9869 208.932 51.9869 209.567C51.9869 210.201 52.0721 210.767 52.2425 211.264C52.4177 211.761 52.6758 212.154 53.0167 212.443C53.3623 212.727 53.7885 212.869 54.2951 212.869ZM61.6175 215V204.091H64.5508V205.994H64.6644C64.8633 205.317 65.1971 204.806 65.6658 204.46C66.1346 204.11 66.6744 203.935 67.2852 203.935C67.4367 203.935 67.6 203.944 67.7752 203.963C67.9504 203.982 68.1043 204.008 68.2369 204.041V206.726C68.0948 206.683 67.8983 206.645 67.6474 206.612C67.3964 206.579 67.1668 206.562 66.9585 206.562C66.5134 206.562 66.1156 206.66 65.7653 206.854C65.4196 207.043 65.145 207.308 64.9414 207.649C64.7425 207.99 64.6431 208.383 64.6431 208.828V215H61.6175ZM72.5994 215.206C71.9034 215.206 71.2831 215.085 70.7386 214.844C70.1941 214.598 69.7633 214.235 69.446 213.757C69.1335 213.274 68.9773 212.673 68.9773 211.953C68.9773 211.347 69.0885 210.838 69.3111 210.426C69.5336 210.014 69.8366 209.683 70.2202 209.432C70.6037 209.181 71.0393 208.991 71.527 208.864C72.0194 208.736 72.5355 208.646 73.0753 208.594C73.7098 208.527 74.2211 208.466 74.6094 208.409C74.9976 208.348 75.2794 208.258 75.4545 208.139C75.6297 208.021 75.7173 207.846 75.7173 207.614V207.571C75.7173 207.121 75.5753 206.773 75.2912 206.527C75.0118 206.281 74.6141 206.158 74.098 206.158C73.5535 206.158 73.1203 206.278 72.7983 206.52C72.4763 206.757 72.2633 207.055 72.1591 207.415L69.3608 207.188C69.5028 206.525 69.7822 205.952 70.1989 205.469C70.6155 204.981 71.1529 204.607 71.8111 204.347C72.474 204.081 73.241 203.949 74.1122 203.949C74.7183 203.949 75.2983 204.02 75.8523 204.162C76.411 204.304 76.9058 204.524 77.3366 204.822C77.7723 205.121 78.1155 205.504 78.3665 205.973C78.6174 206.437 78.7429 206.993 78.7429 207.642V215H75.8736V213.487H75.7884C75.6132 213.828 75.3788 214.129 75.0852 214.389C74.7917 214.645 74.4389 214.846 74.027 214.993C73.6151 215.135 73.1392 215.206 72.5994 215.206ZM73.4659 213.118C73.911 213.118 74.304 213.03 74.6449 212.855C74.9858 212.675 75.2533 212.434 75.4474 212.131C75.6416 211.828 75.7386 211.484 75.7386 211.101V209.943C75.6439 210.005 75.5137 210.062 75.348 210.114C75.187 210.161 75.0047 210.206 74.8011 210.249C74.5975 210.286 74.3939 210.322 74.1903 210.355C73.9867 210.384 73.8021 210.41 73.6364 210.433C73.2813 210.485 72.9711 210.568 72.706 210.682C72.4408 210.795 72.2348 210.949 72.0881 211.143C71.9413 211.333 71.8679 211.57 71.8679 211.854C71.8679 212.266 72.017 212.58 72.3153 212.798C72.6184 213.011 73.0019 213.118 73.4659 213.118ZM86.8928 204.091V206.364H80.3232V204.091H86.8928ZM81.8146 201.477H84.8402V211.648C84.8402 211.927 84.8828 212.145 84.968 212.301C85.0533 212.453 85.1716 212.559 85.3232 212.621C85.4794 212.682 85.6593 212.713 85.8629 212.713C86.005 212.713 86.147 212.701 86.2891 212.678C86.4311 212.649 86.54 212.628 86.6158 212.614L87.0916 214.865C86.9401 214.912 86.727 214.967 86.4524 215.028C86.1778 215.095 85.844 215.135 85.451 215.149C84.7218 215.178 84.0826 215.08 83.5334 214.858C82.9889 214.635 82.5651 214.29 82.2621 213.821C81.959 213.352 81.8099 212.76 81.8146 212.045V201.477ZM93.718 215.213C92.5959 215.213 91.63 214.986 90.8203 214.531C90.0154 214.072 89.3951 213.423 88.9595 212.585C88.5239 211.742 88.3061 210.746 88.3061 209.595C88.3061 208.473 88.5239 207.488 88.9595 206.641C89.3951 205.793 90.0083 205.133 90.799 204.659C91.5945 204.186 92.5272 203.949 93.5973 203.949C94.317 203.949 94.987 204.065 95.6072 204.297C96.2322 204.524 96.7768 204.867 97.2408 205.327C97.7095 205.786 98.0741 206.364 98.3345 207.06C98.5949 207.751 98.7251 208.561 98.7251 209.489V210.32H89.5135V208.445H95.8771C95.8771 208.009 95.7824 207.623 95.593 207.287C95.4036 206.951 95.1409 206.688 94.8047 206.499C94.4732 206.304 94.0874 206.207 93.647 206.207C93.1877 206.207 92.7805 206.314 92.4254 206.527C92.075 206.735 91.8004 207.017 91.6016 207.372C91.4027 207.723 91.3009 208.113 91.2962 208.544V210.327C91.2962 210.866 91.3956 211.333 91.5945 211.726C91.7981 212.119 92.0845 212.422 92.4538 212.635C92.8232 212.848 93.2611 212.955 93.7678 212.955C94.1039 212.955 94.4117 212.907 94.6911 212.812C94.9704 212.718 95.2095 212.576 95.4084 212.386C95.6072 212.197 95.7588 211.965 95.8629 211.69L98.6612 211.875C98.5192 212.547 98.228 213.134 97.7876 213.636C97.352 214.134 96.7886 214.522 96.0973 214.801C95.4107 215.076 94.6177 215.213 93.718 215.213ZM1.2642 239V224.455H7.00284C8.10133 224.455 9.03883 224.651 9.81534 225.044C10.5966 225.432 11.1908 225.984 11.598 226.699C12.0099 227.409 12.2159 228.245 12.2159 229.206C12.2159 230.172 12.0076 231.003 11.5909 231.699C11.1742 232.39 10.5705 232.92 9.77983 233.29C8.99384 233.659 8.04214 233.844 6.92472 233.844H3.08239V231.372H6.42756C7.01468 231.372 7.50237 231.292 7.89062 231.131C8.27888 230.97 8.56771 230.728 8.7571 230.406C8.95123 230.084 9.0483 229.684 9.0483 229.206C9.0483 228.723 8.95123 228.316 8.7571 227.984C8.56771 227.653 8.27652 227.402 7.88352 227.232C7.49527 227.056 7.00521 226.969 6.41335 226.969H4.33949V239H1.2642ZM9.11932 232.381L12.7344 239H9.33949L5.80256 232.381H9.11932ZM19.1282 239.213C18.006 239.213 17.0401 238.986 16.2305 238.531C15.4255 238.072 14.8053 237.423 14.3697 236.585C13.9341 235.742 13.7163 234.746 13.7163 233.595C13.7163 232.473 13.9341 231.488 14.3697 230.641C14.8053 229.793 15.4184 229.133 16.2092 228.659C17.0046 228.186 17.9374 227.949 19.0075 227.949C19.7272 227.949 20.3971 228.065 21.0174 228.297C21.6424 228.524 22.1869 228.867 22.6509 229.327C23.1197 229.786 23.4843 230.364 23.7447 231.06C24.0051 231.751 24.1353 232.561 24.1353 233.489V234.32H14.9237V232.445H21.2873C21.2873 232.009 21.1926 231.623 21.0032 231.287C20.8138 230.951 20.551 230.688 20.2148 230.499C19.8834 230.304 19.4975 230.207 19.0572 230.207C18.5979 230.207 18.1907 230.314 17.8356 230.527C17.4852 230.735 17.2106 231.017 17.0117 231.372C16.8129 231.723 16.7111 232.113 16.7063 232.544V234.327C16.7063 234.866 16.8058 235.333 17.0046 235.726C17.2082 236.119 17.4947 236.422 17.864 236.635C18.2333 236.848 18.6713 236.955 19.1779 236.955C19.5141 236.955 19.8219 236.907 20.1012 236.812C20.3806 236.718 20.6197 236.576 20.8185 236.386C21.0174 236.197 21.1689 235.965 21.2731 235.69L24.0714 235.875C23.9293 236.547 23.6381 237.134 23.1978 237.636C22.7622 238.134 22.1987 238.522 21.5075 238.801C20.8209 239.076 20.0278 239.213 19.1282 239.213ZM29.1353 224.455V239H26.1097V224.455H29.1353ZM34.6697 239.206C33.9737 239.206 33.3535 239.085 32.8089 238.844C32.2644 238.598 31.8336 238.235 31.5163 237.757C31.2038 237.274 31.0476 236.673 31.0476 235.953C31.0476 235.347 31.1589 234.838 31.3814 234.426C31.6039 234.014 31.907 233.683 32.2905 233.432C32.674 233.181 33.1096 232.991 33.5973 232.864C34.0897 232.736 34.6058 232.646 35.1456 232.594C35.7801 232.527 36.2914 232.466 36.6797 232.409C37.0679 232.348 37.3497 232.258 37.5249 232.139C37.7 232.021 37.7876 231.846 37.7876 231.614V231.571C37.7876 231.121 37.6456 230.773 37.3615 230.527C37.0821 230.281 36.6844 230.158 36.1683 230.158C35.6238 230.158 35.1906 230.278 34.8686 230.52C34.5466 230.757 34.3336 231.055 34.2294 231.415L31.4311 231.188C31.5732 230.525 31.8525 229.952 32.2692 229.469C32.6858 228.981 33.2232 228.607 33.8814 228.347C34.5443 228.081 35.3113 227.949 36.1825 227.949C36.7886 227.949 37.3686 228.02 37.9226 228.162C38.4813 228.304 38.9761 228.524 39.407 228.822C39.8426 229.121 40.1858 229.504 40.4368 229.973C40.6877 230.437 40.8132 230.993 40.8132 231.642V239H37.9439V237.487H37.8587C37.6835 237.828 37.4491 238.129 37.1555 238.389C36.862 238.645 36.5092 238.846 36.0973 238.993C35.6854 239.135 35.2095 239.206 34.6697 239.206ZM35.5362 237.118C35.9813 237.118 36.3743 237.03 36.7152 236.855C37.0561 236.675 37.3236 236.434 37.5178 236.131C37.7119 235.828 37.8089 235.484 37.8089 235.101V233.943C37.7143 234.005 37.584 234.062 37.4183 234.114C37.2573 234.161 37.075 234.206 36.8714 234.249C36.6679 234.286 36.4643 234.322 36.2607 234.355C36.0571 234.384 35.8724 234.41 35.7067 234.433C35.3516 234.485 35.0414 234.568 34.7763 234.682C34.5111 234.795 34.3052 234.949 34.1584 235.143C34.0116 235.333 33.9382 235.57 33.9382 235.854C33.9382 236.266 34.0874 236.58 34.3857 236.798C34.6887 237.011 35.0722 237.118 35.5362 237.118ZM48.9631 228.091V230.364H42.3935V228.091H48.9631ZM43.8849 225.477H46.9105V235.648C46.9105 235.927 46.9531 236.145 47.0384 236.301C47.1236 236.453 47.242 236.559 47.3935 236.621C47.5497 236.682 47.7296 236.713 47.9332 236.713C48.0753 236.713 48.2173 236.701 48.3594 236.678C48.5014 236.649 48.6103 236.628 48.6861 236.614L49.1619 238.865C49.0104 238.912 48.7973 238.967 48.5227 239.028C48.2481 239.095 47.9143 239.135 47.5213 239.149C46.7921 239.178 46.1529 239.08 45.6037 238.858C45.0592 238.635 44.6354 238.29 44.3324 237.821C44.0294 237.352 43.8802 236.76 43.8849 236.045V225.477ZM50.9339 239V228.091H53.9595V239H50.9339ZM52.4538 226.685C52.004 226.685 51.6181 226.536 51.2962 226.237C50.9789 225.934 50.8203 225.572 50.8203 225.151C50.8203 224.734 50.9789 224.376 51.2962 224.078C51.6181 223.775 52.004 223.624 52.4538 223.624C52.9036 223.624 53.2872 223.775 53.6044 224.078C53.9264 224.376 54.0874 224.734 54.0874 225.151C54.0874 225.572 53.9264 225.934 53.6044 226.237C53.2872 226.536 52.9036 226.685 52.4538 226.685ZM61.3121 239.213C60.2089 239.213 59.2549 238.979 58.4499 238.51C57.6497 238.036 57.0318 237.378 56.5962 236.536C56.1606 235.688 55.9428 234.705 55.9428 233.588C55.9428 232.461 56.1606 231.476 56.5962 230.634C57.0318 229.786 57.6497 229.128 58.4499 228.659C59.2549 228.186 60.2089 227.949 61.3121 227.949C62.4154 227.949 63.3671 228.186 64.1673 228.659C64.9722 229.128 65.5924 229.786 66.0281 230.634C66.4637 231.476 66.6815 232.461 66.6815 233.588C66.6815 234.705 66.4637 235.688 66.0281 236.536C65.5924 237.378 64.9722 238.036 64.1673 238.51C63.3671 238.979 62.4154 239.213 61.3121 239.213ZM61.3263 236.869C61.8282 236.869 62.2473 236.727 62.5835 236.443C62.9196 236.154 63.1729 235.761 63.3434 235.264C63.5186 234.767 63.6062 234.201 63.6062 233.567C63.6062 232.932 63.5186 232.366 63.3434 231.869C63.1729 231.372 62.9196 230.979 62.5835 230.69C62.2473 230.402 61.8282 230.257 61.3263 230.257C60.8197 230.257 60.3936 230.402 60.0479 230.69C59.707 230.979 59.449 231.372 59.2738 231.869C59.1033 232.366 59.0181 232.932 59.0181 233.567C59.0181 234.201 59.1033 234.767 59.2738 235.264C59.449 235.761 59.707 236.154 60.0479 236.443C60.3936 236.727 60.8197 236.869 61.3263 236.869ZM71.6744 232.693V239H68.6488V228.091H71.5323V230.016H71.6602C71.9016 229.381 72.3065 228.879 72.8746 228.51C73.4428 228.136 74.1317 227.949 74.9414 227.949C75.699 227.949 76.3595 228.115 76.9229 228.446C77.4864 228.777 77.9244 229.251 78.2369 229.866C78.5494 230.477 78.7056 231.206 78.7056 232.054V239H75.68V232.594C75.6848 231.926 75.5143 231.405 75.1687 231.031C74.823 230.652 74.3472 230.463 73.7411 230.463C73.3339 230.463 72.9741 230.551 72.6616 230.726C72.3538 230.901 72.1123 231.157 71.9371 231.493C71.7667 231.824 71.6791 232.224 71.6744 232.693ZM90.1669 231.202L87.397 231.372C87.3497 231.135 87.2479 230.922 87.0916 230.733C86.9354 230.539 86.7294 230.385 86.4737 230.271C86.2228 230.153 85.9221 230.094 85.5717 230.094C85.103 230.094 84.7076 230.193 84.3857 230.392C84.0637 230.586 83.9027 230.847 83.9027 231.173C83.9027 231.434 84.0069 231.654 84.2152 231.834C84.4235 232.014 84.781 232.158 85.2876 232.267L87.2621 232.665C88.3227 232.883 89.1134 233.233 89.6342 233.716C90.1551 234.199 90.4155 234.833 90.4155 235.619C90.4155 236.334 90.2048 236.962 89.7834 237.501C89.3667 238.041 88.7938 238.463 88.0646 238.766C87.3402 239.064 86.5045 239.213 85.5575 239.213C84.1134 239.213 82.9628 238.912 82.1058 238.311C81.2536 237.705 80.754 236.881 80.6072 235.839L83.5831 235.683C83.6731 236.124 83.8909 236.46 84.2365 236.692C84.5821 236.919 85.0249 237.033 85.5646 237.033C86.0949 237.033 86.5211 236.931 86.843 236.727C87.1697 236.519 87.3355 236.251 87.3402 235.925C87.3355 235.65 87.2195 235.425 86.9922 235.25C86.7649 235.07 86.4145 234.933 85.9411 234.838L84.0518 234.462C82.9865 234.249 82.1934 233.879 81.6726 233.354C81.1565 232.828 80.8984 232.158 80.8984 231.344C80.8984 230.643 81.0878 230.039 81.4666 229.533C81.8501 229.026 82.3875 228.635 83.0788 228.361C83.7749 228.086 84.5893 227.949 85.522 227.949C86.8999 227.949 87.9841 228.24 88.7749 228.822C89.5703 229.405 90.0343 230.198 90.1669 231.202Z"
                    fill="#fff"
                  />
                  <path
                    className="rotate"
                    d="M89.2642 292V277.455H95.0028C96.1061 277.455 97.0459 277.665 97.8224 278.087C98.599 278.503 99.1908 279.083 99.598 279.827C100.01 280.565 100.216 281.418 100.216 282.384C100.216 283.349 100.008 284.202 99.5909 284.94C99.1742 285.679 98.5705 286.254 97.7798 286.666C96.9938 287.078 96.0421 287.284 94.9247 287.284H91.267V284.82H94.4276C95.0194 284.82 95.5071 284.718 95.8906 284.514C96.2789 284.306 96.5677 284.019 96.7571 283.655C96.9512 283.286 97.0483 282.862 97.0483 282.384C97.0483 281.901 96.9512 281.479 96.7571 281.119C96.5677 280.755 96.2789 280.473 95.8906 280.274C95.5024 280.071 95.0099 279.969 94.4134 279.969H92.3395V292H89.2642ZM109.152 287.355V281.091H112.178V292H109.273V290.018H109.159C108.913 290.658 108.504 291.171 107.931 291.56C107.363 291.948 106.669 292.142 105.85 292.142C105.121 292.142 104.479 291.976 103.925 291.645C103.371 291.313 102.938 290.842 102.625 290.232C102.318 289.621 102.161 288.889 102.157 288.037V281.091H105.182V287.497C105.187 288.141 105.36 288.65 105.701 289.024C106.042 289.398 106.498 289.585 107.071 289.585C107.436 289.585 107.777 289.502 108.094 289.337C108.411 289.166 108.667 288.915 108.861 288.584C109.06 288.252 109.157 287.843 109.152 287.355ZM114.655 292V277.455H117.68V282.923H117.773C117.905 282.63 118.097 282.331 118.348 282.028C118.604 281.721 118.935 281.465 119.342 281.261C119.754 281.053 120.266 280.949 120.876 280.949C121.672 280.949 122.406 281.157 123.078 281.574C123.75 281.986 124.288 282.608 124.69 283.442C125.093 284.27 125.294 285.31 125.294 286.56C125.294 287.777 125.098 288.804 124.705 289.642C124.316 290.475 123.786 291.107 123.114 291.538C122.446 291.964 121.698 292.178 120.869 292.178C120.282 292.178 119.783 292.08 119.371 291.886C118.964 291.692 118.63 291.448 118.369 291.155C118.109 290.857 117.91 290.556 117.773 290.253H117.638V292H114.655ZM117.616 286.545C117.616 287.194 117.706 287.76 117.886 288.243C118.066 288.726 118.327 289.102 118.668 289.372C119.009 289.637 119.423 289.77 119.911 289.77C120.403 289.77 120.82 289.635 121.161 289.365C121.501 289.09 121.759 288.712 121.935 288.229C122.115 287.741 122.205 287.18 122.205 286.545C122.205 285.916 122.117 285.362 121.942 284.884C121.767 284.405 121.509 284.031 121.168 283.761C120.827 283.491 120.408 283.357 119.911 283.357C119.418 283.357 119.001 283.487 118.661 283.747C118.324 284.008 118.066 284.377 117.886 284.855C117.706 285.333 117.616 285.897 117.616 286.545ZM130.338 277.455V292H127.313V277.455H130.338ZM132.762 292V281.091H135.788V292H132.762ZM134.282 279.685C133.832 279.685 133.446 279.536 133.124 279.237C132.807 278.934 132.648 278.572 132.648 278.151C132.648 277.734 132.807 277.376 133.124 277.078C133.446 276.775 133.832 276.624 134.282 276.624C134.732 276.624 135.115 276.775 135.433 277.078C135.754 277.376 135.915 277.734 135.915 278.151C135.915 278.572 135.754 278.934 135.433 279.237C135.115 279.536 134.732 279.685 134.282 279.685ZM143.14 292.213C142.023 292.213 141.062 291.976 140.257 291.503C139.457 291.025 138.841 290.362 138.41 289.514C137.984 288.667 137.771 287.691 137.771 286.588C137.771 285.471 137.986 284.491 138.417 283.648C138.853 282.8 139.471 282.14 140.271 281.666C141.071 281.188 142.023 280.949 143.126 280.949C144.078 280.949 144.911 281.122 145.626 281.467C146.341 281.813 146.907 282.298 147.324 282.923C147.74 283.548 147.97 284.282 148.012 285.125H145.157C145.077 284.58 144.864 284.143 144.518 283.811C144.177 283.475 143.73 283.307 143.176 283.307C142.707 283.307 142.297 283.435 141.947 283.69C141.601 283.941 141.332 284.308 141.137 284.791C140.943 285.274 140.846 285.859 140.846 286.545C140.846 287.241 140.941 287.833 141.13 288.321C141.324 288.809 141.597 289.18 141.947 289.436C142.297 289.692 142.707 289.82 143.176 289.82C143.521 289.82 143.832 289.749 144.106 289.607C144.386 289.464 144.615 289.259 144.795 288.989C144.98 288.714 145.1 288.385 145.157 288.001H148.012C147.965 288.835 147.738 289.569 147.331 290.203C146.928 290.833 146.372 291.325 145.662 291.68C144.951 292.036 144.111 292.213 143.14 292.213ZM154.635 292V277.455H160.374C161.472 277.455 162.41 277.651 163.186 278.044C163.968 278.432 164.562 278.984 164.969 279.699C165.381 280.409 165.587 281.245 165.587 282.206C165.587 283.172 165.379 284.003 164.962 284.699C164.545 285.39 163.942 285.92 163.151 286.29C162.365 286.659 161.413 286.844 160.296 286.844H156.453V284.372H159.799C160.386 284.372 160.873 284.292 161.262 284.131C161.65 283.97 161.939 283.728 162.128 283.406C162.322 283.084 162.419 282.684 162.419 282.206C162.419 281.723 162.322 281.316 162.128 280.984C161.939 280.653 161.648 280.402 161.255 280.232C160.866 280.056 160.376 279.969 159.784 279.969H157.711V292H154.635ZM162.49 285.381L166.105 292H162.711L159.174 285.381H162.49ZM172.499 292.213C171.377 292.213 170.411 291.986 169.602 291.531C168.797 291.072 168.176 290.423 167.741 289.585C167.305 288.742 167.087 287.746 167.087 286.595C167.087 285.473 167.305 284.488 167.741 283.641C168.176 282.793 168.79 282.133 169.58 281.659C170.376 281.186 171.308 280.949 172.379 280.949C173.098 280.949 173.768 281.065 174.388 281.297C175.013 281.524 175.558 281.867 176.022 282.327C176.491 282.786 176.855 283.364 177.116 284.06C177.376 284.751 177.506 285.561 177.506 286.489V287.32H168.295V285.445H174.658C174.658 285.009 174.564 284.623 174.374 284.287C174.185 283.951 173.922 283.688 173.586 283.499C173.254 283.304 172.869 283.207 172.428 283.207C171.969 283.207 171.562 283.314 171.207 283.527C170.856 283.735 170.582 284.017 170.383 284.372C170.184 284.723 170.082 285.113 170.077 285.544V287.327C170.077 287.866 170.177 288.333 170.376 288.726C170.579 289.119 170.866 289.422 171.235 289.635C171.604 289.848 172.042 289.955 172.549 289.955C172.885 289.955 173.193 289.907 173.472 289.812C173.752 289.718 173.991 289.576 174.19 289.386C174.388 289.197 174.54 288.965 174.644 288.69L177.442 288.875C177.3 289.547 177.009 290.134 176.569 290.636C176.133 291.134 175.57 291.522 174.879 291.801C174.192 292.076 173.399 292.213 172.499 292.213ZM182.506 277.455V292H179.481V277.455H182.506ZM188.041 292.206C187.345 292.206 186.725 292.085 186.18 291.844C185.636 291.598 185.205 291.235 184.887 290.757C184.575 290.274 184.419 289.673 184.419 288.953C184.419 288.347 184.53 287.838 184.752 287.426C184.975 287.014 185.278 286.683 185.662 286.432C186.045 286.181 186.481 285.991 186.968 285.864C187.461 285.736 187.977 285.646 188.517 285.594C189.151 285.527 189.663 285.466 190.051 285.409C190.439 285.348 190.721 285.258 190.896 285.139C191.071 285.021 191.159 284.846 191.159 284.614V284.571C191.159 284.121 191.017 283.773 190.733 283.527C190.453 283.281 190.056 283.158 189.539 283.158C188.995 283.158 188.562 283.278 188.24 283.52C187.918 283.757 187.705 284.055 187.6 284.415L184.802 284.188C184.944 283.525 185.224 282.952 185.64 282.469C186.057 281.981 186.594 281.607 187.252 281.347C187.915 281.081 188.682 280.949 189.554 280.949C190.16 280.949 190.74 281.02 191.294 281.162C191.852 281.304 192.347 281.524 192.778 281.822C193.214 282.121 193.557 282.504 193.808 282.973C194.059 283.437 194.184 283.993 194.184 284.642V292H191.315V290.487H191.23C191.055 290.828 190.82 291.129 190.527 291.389C190.233 291.645 189.88 291.846 189.468 291.993C189.056 292.135 188.581 292.206 188.041 292.206ZM188.907 290.118C189.352 290.118 189.745 290.03 190.086 289.855C190.427 289.675 190.695 289.434 190.889 289.131C191.083 288.828 191.18 288.484 191.18 288.101V286.943C191.085 287.005 190.955 287.062 190.789 287.114C190.628 287.161 190.446 287.206 190.243 287.249C190.039 287.286 189.835 287.322 189.632 287.355C189.428 287.384 189.243 287.41 189.078 287.433C188.723 287.485 188.413 287.568 188.147 287.682C187.882 287.795 187.676 287.949 187.529 288.143C187.383 288.333 187.309 288.57 187.309 288.854C187.309 289.266 187.458 289.58 187.757 289.798C188.06 290.011 188.443 290.118 188.907 290.118ZM202.334 281.091V283.364H195.765V281.091H202.334ZM197.256 278.477H200.282V288.648C200.282 288.927 200.324 289.145 200.409 289.301C200.495 289.453 200.613 289.559 200.765 289.621C200.921 289.682 201.101 289.713 201.304 289.713C201.446 289.713 201.588 289.701 201.73 289.678C201.873 289.649 201.981 289.628 202.057 289.614L202.533 291.865C202.382 291.912 202.168 291.967 201.894 292.028C201.619 292.095 201.285 292.135 200.892 292.149C200.163 292.178 199.524 292.08 198.975 291.858C198.43 291.635 198.007 291.29 197.703 290.821C197.4 290.352 197.251 289.76 197.256 289.045V278.477ZM204.305 292V281.091H207.331V292H204.305ZM205.825 279.685C205.375 279.685 204.989 279.536 204.667 279.237C204.35 278.934 204.191 278.572 204.191 278.151C204.191 277.734 204.35 277.376 204.667 277.078C204.989 276.775 205.375 276.624 205.825 276.624C206.275 276.624 206.658 276.775 206.975 277.078C207.297 277.376 207.458 277.734 207.458 278.151C207.458 278.572 207.297 278.934 206.975 279.237C206.658 279.536 206.275 279.685 205.825 279.685ZM214.683 292.213C213.58 292.213 212.626 291.979 211.821 291.51C211.021 291.036 210.403 290.378 209.967 289.536C209.532 288.688 209.314 287.705 209.314 286.588C209.314 285.461 209.532 284.476 209.967 283.634C210.403 282.786 211.021 282.128 211.821 281.659C212.626 281.186 213.58 280.949 214.683 280.949C215.786 280.949 216.738 281.186 217.538 281.659C218.343 282.128 218.964 282.786 219.399 283.634C219.835 284.476 220.053 285.461 220.053 286.588C220.053 287.705 219.835 288.688 219.399 289.536C218.964 290.378 218.343 291.036 217.538 291.51C216.738 291.979 215.786 292.213 214.683 292.213ZM214.697 289.869C215.199 289.869 215.618 289.727 215.955 289.443C216.291 289.154 216.544 288.761 216.714 288.264C216.89 287.767 216.977 287.201 216.977 286.567C216.977 285.932 216.89 285.366 216.714 284.869C216.544 284.372 216.291 283.979 215.955 283.69C215.618 283.402 215.199 283.257 214.697 283.257C214.191 283.257 213.765 283.402 213.419 283.69C213.078 283.979 212.82 284.372 212.645 284.869C212.474 285.366 212.389 285.932 212.389 286.567C212.389 287.201 212.474 287.767 212.645 288.264C212.82 288.761 213.078 289.154 213.419 289.443C213.765 289.727 214.191 289.869 214.697 289.869ZM225.045 285.693V292H222.02V281.091H224.903V283.016H225.031C225.273 282.381 225.678 281.879 226.246 281.51C226.814 281.136 227.503 280.949 228.312 280.949C229.07 280.949 229.731 281.115 230.294 281.446C230.857 281.777 231.295 282.251 231.608 282.866C231.92 283.477 232.077 284.206 232.077 285.054V292H229.051V285.594C229.056 284.926 228.885 284.405 228.54 284.031C228.194 283.652 227.718 283.463 227.112 283.463C226.705 283.463 226.345 283.551 226.033 283.726C225.725 283.901 225.483 284.157 225.308 284.493C225.138 284.824 225.05 285.224 225.045 285.693ZM243.538 284.202L240.768 284.372C240.721 284.135 240.619 283.922 240.463 283.733C240.306 283.539 240.1 283.385 239.845 283.271C239.594 283.153 239.293 283.094 238.943 283.094C238.474 283.094 238.079 283.193 237.757 283.392C237.435 283.586 237.274 283.847 237.274 284.173C237.274 284.434 237.378 284.654 237.586 284.834C237.795 285.014 238.152 285.158 238.659 285.267L240.633 285.665C241.694 285.883 242.484 286.233 243.005 286.716C243.526 287.199 243.787 287.833 243.787 288.619C243.787 289.334 243.576 289.962 243.154 290.501C242.738 291.041 242.165 291.463 241.436 291.766C240.711 292.064 239.876 292.213 238.929 292.213C237.484 292.213 236.334 291.912 235.477 291.311C234.625 290.705 234.125 289.881 233.978 288.839L236.954 288.683C237.044 289.124 237.262 289.46 237.608 289.692C237.953 289.919 238.396 290.033 238.936 290.033C239.466 290.033 239.892 289.931 240.214 289.727C240.541 289.519 240.707 289.251 240.711 288.925C240.707 288.65 240.591 288.425 240.363 288.25C240.136 288.07 239.786 287.933 239.312 287.838L237.423 287.462C236.358 287.249 235.565 286.879 235.044 286.354C234.528 285.828 234.27 285.158 234.27 284.344C234.27 283.643 234.459 283.039 234.838 282.533C235.221 282.026 235.759 281.635 236.45 281.361C237.146 281.086 237.96 280.949 238.893 280.949C240.271 280.949 241.355 281.24 242.146 281.822C242.941 282.405 243.405 283.198 243.538 284.202Z"
                    fill="#fff"
                  />
                  <path
                    className="rotate"
                    d="M242.538 239L238.376 224.455H241.736L244.143 234.561H244.264L246.92 224.455H249.797L252.446 234.582H252.574L254.982 224.455H258.341L254.179 239H251.182L248.412 229.49H248.298L245.536 239H242.538ZM263.73 239.213C262.608 239.213 261.642 238.986 260.832 238.531C260.027 238.072 259.407 237.423 258.971 236.585C258.536 235.742 258.318 234.746 258.318 233.595C258.318 232.473 258.536 231.488 258.971 230.641C259.407 229.793 260.02 229.133 260.811 228.659C261.606 228.186 262.539 227.949 263.609 227.949C264.329 227.949 264.999 228.065 265.619 228.297C266.244 228.524 266.788 228.867 267.252 229.327C267.721 229.786 268.086 230.364 268.346 231.06C268.607 231.751 268.737 232.561 268.737 233.489V234.32H259.525V232.445H265.889C265.889 232.009 265.794 231.623 265.605 231.287C265.415 230.951 265.153 230.688 264.816 230.499C264.485 230.304 264.099 230.207 263.659 230.207C263.199 230.207 262.792 230.314 262.437 230.527C262.087 230.735 261.812 231.017 261.613 231.372C261.414 231.723 261.313 232.113 261.308 232.544V234.327C261.308 234.866 261.407 235.333 261.606 235.726C261.81 236.119 262.096 236.422 262.466 236.635C262.835 236.848 263.273 236.955 263.779 236.955C264.116 236.955 264.423 236.907 264.703 236.812C264.982 236.718 265.221 236.576 265.42 236.386C265.619 236.197 265.77 235.965 265.875 235.69L268.673 235.875C268.531 236.547 268.24 237.134 267.799 237.636C267.364 238.134 266.8 238.522 266.109 238.801C265.422 239.076 264.629 239.213 263.73 239.213ZM270.768 239V224.455H273.794V229.923H273.886C274.019 229.63 274.21 229.331 274.461 229.028C274.717 228.721 275.048 228.465 275.456 228.261C275.868 228.053 276.379 227.949 276.99 227.949C277.785 227.949 278.519 228.157 279.191 228.574C279.864 228.986 280.401 229.608 280.804 230.442C281.206 231.27 281.407 232.31 281.407 233.56C281.407 234.777 281.211 235.804 280.818 236.642C280.43 237.475 279.899 238.107 279.227 238.538C278.559 238.964 277.811 239.178 276.983 239.178C276.395 239.178 275.896 239.08 275.484 238.886C275.077 238.692 274.743 238.448 274.483 238.155C274.222 237.857 274.023 237.556 273.886 237.253H273.751V239H270.768ZM273.73 233.545C273.73 234.194 273.82 234.76 274 235.243C274.18 235.726 274.44 236.102 274.781 236.372C275.122 236.637 275.536 236.77 276.024 236.77C276.516 236.77 276.933 236.635 277.274 236.365C277.615 236.09 277.873 235.712 278.048 235.229C278.228 234.741 278.318 234.18 278.318 233.545C278.318 232.916 278.23 232.362 278.055 231.884C277.88 231.405 277.622 231.031 277.281 230.761C276.94 230.491 276.521 230.357 276.024 230.357C275.531 230.357 275.115 230.487 274.774 230.747C274.438 231.008 274.18 231.377 274 231.855C273.82 232.333 273.73 232.897 273.73 233.545ZM292.515 239.213C291.511 239.213 290.645 239.033 289.916 238.673C289.187 238.313 288.626 237.826 288.233 237.21C287.844 236.59 287.65 235.899 287.65 235.136C287.65 234.568 287.764 234.064 287.991 233.624C288.218 233.183 288.536 232.778 288.943 232.409C289.35 232.035 289.824 231.663 290.363 231.294L293.183 229.44C293.547 229.208 293.815 228.964 293.985 228.709C294.156 228.448 294.241 228.167 294.241 227.864C294.241 227.575 294.125 227.307 293.893 227.061C293.661 226.815 293.332 226.694 292.906 226.699C292.622 226.699 292.376 226.763 292.167 226.891C291.959 227.014 291.796 227.177 291.677 227.381C291.564 227.58 291.507 227.802 291.507 228.048C291.507 228.351 291.592 228.659 291.762 228.972C291.933 229.284 292.16 229.616 292.444 229.966C292.728 230.312 293.038 230.686 293.375 231.088L300.271 239H297.118L291.365 232.594C290.986 232.163 290.607 231.713 290.228 231.244C289.854 230.771 289.542 230.269 289.291 229.739C289.04 229.204 288.914 228.624 288.914 227.999C288.914 227.293 289.078 226.659 289.404 226.095C289.736 225.532 290.2 225.087 290.797 224.76C291.393 224.429 292.089 224.263 292.885 224.263C293.661 224.263 294.331 224.421 294.895 224.739C295.463 225.051 295.898 225.468 296.201 225.989C296.509 226.505 296.663 227.073 296.663 227.693C296.663 228.38 296.493 229.002 296.152 229.561C295.815 230.115 295.342 230.612 294.731 231.053L291.762 233.19C291.36 233.484 291.062 233.785 290.868 234.092C290.678 234.395 290.583 234.687 290.583 234.966C290.583 235.312 290.669 235.622 290.839 235.896C291.01 236.171 291.251 236.389 291.564 236.55C291.876 236.706 292.243 236.784 292.664 236.784C293.176 236.784 293.68 236.668 294.177 236.436C294.679 236.199 295.134 235.866 295.541 235.435C295.953 234.999 296.282 234.483 296.528 233.886C296.774 233.29 296.897 232.629 296.897 231.905H299.404C299.404 232.795 299.307 233.598 299.113 234.312C298.919 235.023 298.649 235.643 298.304 236.173C297.958 236.699 297.563 237.13 297.118 237.466C296.975 237.556 296.838 237.641 296.706 237.722C296.573 237.802 296.436 237.887 296.294 237.977C295.754 238.413 295.15 238.728 294.483 238.922C293.82 239.116 293.164 239.213 292.515 239.213ZM308.724 239H305.429L310.45 224.455H314.413L319.428 239H316.132L312.489 227.778H312.375L308.724 239ZM308.518 233.283H316.303V235.683H308.518V233.283ZM321.121 243.091V228.091H324.104V229.923H324.239C324.372 229.63 324.564 229.331 324.815 229.028C325.07 228.721 325.402 228.465 325.809 228.261C326.221 228.053 326.732 227.949 327.343 227.949C328.138 227.949 328.872 228.157 329.545 228.574C330.217 228.986 330.754 229.608 331.157 230.442C331.559 231.27 331.761 232.31 331.761 233.56C331.761 234.777 331.564 235.804 331.171 236.642C330.783 237.475 330.253 238.107 329.58 238.538C328.913 238.964 328.165 239.178 327.336 239.178C326.749 239.178 326.249 239.08 325.837 238.886C325.43 238.692 325.096 238.448 324.836 238.155C324.576 237.857 324.377 237.556 324.239 237.253H324.147V243.091H321.121ZM324.083 233.545C324.083 234.194 324.173 234.76 324.353 235.243C324.533 235.726 324.793 236.102 325.134 236.372C325.475 236.637 325.889 236.77 326.377 236.77C326.87 236.77 327.286 236.635 327.627 236.365C327.968 236.09 328.226 235.712 328.401 235.229C328.581 234.741 328.671 234.18 328.671 233.545C328.671 232.916 328.584 232.362 328.408 231.884C328.233 231.405 327.975 231.031 327.634 230.761C327.293 230.491 326.874 230.357 326.377 230.357C325.885 230.357 325.468 230.487 325.127 230.747C324.791 231.008 324.533 231.377 324.353 231.855C324.173 232.333 324.083 232.897 324.083 233.545ZM333.778 243.091V228.091H336.761V229.923H336.896C337.028 229.63 337.22 229.331 337.471 229.028C337.727 228.721 338.058 228.465 338.465 228.261C338.877 228.053 339.388 227.949 339.999 227.949C340.795 227.949 341.529 228.157 342.201 228.574C342.873 228.986 343.411 229.608 343.813 230.442C344.216 231.27 344.417 232.31 344.417 233.56C344.417 234.777 344.22 235.804 343.827 236.642C343.439 237.475 342.909 238.107 342.237 238.538C341.569 238.964 340.821 239.178 339.992 239.178C339.405 239.178 338.906 239.08 338.494 238.886C338.086 238.692 337.753 238.448 337.492 238.155C337.232 237.857 337.033 237.556 336.896 237.253H336.803V243.091H333.778ZM336.739 233.545C336.739 234.194 336.829 234.76 337.009 235.243C337.189 235.726 337.45 236.102 337.79 236.372C338.131 236.637 338.546 236.77 339.033 236.77C339.526 236.77 339.942 236.635 340.283 236.365C340.624 236.09 340.882 235.712 341.058 235.229C341.237 234.741 341.327 234.18 341.327 233.545C341.327 232.916 341.24 232.362 341.065 231.884C340.889 231.405 340.631 231.031 340.29 230.761C339.95 230.491 339.531 230.357 339.033 230.357C338.541 230.357 338.124 230.487 337.783 230.747C337.447 231.008 337.189 231.377 337.009 231.855C336.829 232.333 336.739 232.897 336.739 233.545Z"
                    fill="#fff"
                  />
                  <path
                    className="rotate"
                    d="M392.098 350.547H388.987C388.93 350.144 388.814 349.787 388.639 349.474C388.464 349.157 388.239 348.887 387.964 348.665C387.69 348.442 387.373 348.272 387.013 348.153C386.658 348.035 386.272 347.976 385.855 347.976C385.102 347.976 384.446 348.163 383.888 348.537C383.329 348.906 382.896 349.446 382.588 350.156C382.28 350.862 382.126 351.719 382.126 352.727C382.126 353.764 382.28 354.635 382.588 355.341C382.901 356.046 383.336 356.579 383.895 356.939C384.454 357.299 385.1 357.479 385.834 357.479C386.246 357.479 386.627 357.424 386.977 357.315C387.332 357.206 387.647 357.048 387.922 356.839C388.196 356.626 388.424 356.368 388.604 356.065C388.788 355.762 388.916 355.417 388.987 355.028L392.098 355.043C392.018 355.71 391.816 356.354 391.494 356.974C391.177 357.59 390.749 358.142 390.209 358.629C389.674 359.112 389.035 359.496 388.291 359.78C387.553 360.059 386.717 360.199 385.784 360.199C384.487 360.199 383.327 359.905 382.304 359.318C381.286 358.731 380.481 357.881 379.889 356.768C379.302 355.656 379.009 354.309 379.009 352.727C379.009 351.141 379.307 349.792 379.903 348.679C380.5 347.566 381.31 346.719 382.332 346.136C383.355 345.549 384.506 345.256 385.784 345.256C386.627 345.256 387.408 345.374 388.128 345.611C388.852 345.848 389.494 346.193 390.053 346.648C390.611 347.098 391.066 347.649 391.416 348.303C391.771 348.956 391.999 349.704 392.098 350.547ZM394.246 360V349.091H397.18V350.994H397.293C397.492 350.317 397.826 349.806 398.295 349.46C398.763 349.11 399.303 348.935 399.914 348.935C400.066 348.935 400.229 348.944 400.404 348.963C400.579 348.982 400.733 349.008 400.866 349.041V351.726C400.724 351.683 400.527 351.645 400.276 351.612C400.025 351.579 399.796 351.562 399.587 351.562C399.142 351.562 398.745 351.66 398.394 351.854C398.049 352.043 397.774 352.308 397.57 352.649C397.371 352.99 397.272 353.383 397.272 353.828V360H394.246ZM406.894 360.213C405.772 360.213 404.806 359.986 403.996 359.531C403.191 359.072 402.571 358.423 402.135 357.585C401.7 356.742 401.482 355.746 401.482 354.595C401.482 353.473 401.7 352.488 402.135 351.641C402.571 350.793 403.184 350.133 403.975 349.659C404.77 349.186 405.703 348.949 406.773 348.949C407.493 348.949 408.163 349.065 408.783 349.297C409.408 349.524 409.953 349.867 410.417 350.327C410.885 350.786 411.25 351.364 411.51 352.06C411.771 352.751 411.901 353.561 411.901 354.489V355.32H402.689V353.445H409.053C409.053 353.009 408.958 352.623 408.769 352.287C408.579 351.951 408.317 351.688 407.98 351.499C407.649 351.304 407.263 351.207 406.823 351.207C406.364 351.207 405.956 351.314 405.601 351.527C405.251 351.735 404.976 352.017 404.777 352.372C404.578 352.723 404.477 353.113 404.472 353.544V355.327C404.472 355.866 404.571 356.333 404.77 356.726C404.974 357.119 405.26 357.422 405.63 357.635C405.999 357.848 406.437 357.955 406.944 357.955C407.28 357.955 407.587 357.907 407.867 357.812C408.146 357.718 408.385 357.576 408.584 357.386C408.783 357.197 408.935 356.965 409.039 356.69L411.837 356.875C411.695 357.547 411.404 358.134 410.963 358.636C410.528 359.134 409.964 359.522 409.273 359.801C408.587 360.076 407.793 360.213 406.894 360.213ZM416.986 360.206C416.29 360.206 415.67 360.085 415.125 359.844C414.581 359.598 414.15 359.235 413.833 358.757C413.52 358.274 413.364 357.673 413.364 356.953C413.364 356.347 413.475 355.838 413.698 355.426C413.92 355.014 414.223 354.683 414.607 354.432C414.99 354.181 415.426 353.991 415.914 353.864C416.406 353.736 416.922 353.646 417.462 353.594C418.096 353.527 418.608 353.466 418.996 353.409C419.384 353.348 419.666 353.258 419.841 353.139C420.016 353.021 420.104 352.846 420.104 352.614V352.571C420.104 352.121 419.962 351.773 419.678 351.527C419.399 351.281 419.001 351.158 418.485 351.158C417.94 351.158 417.507 351.278 417.185 351.52C416.863 351.757 416.65 352.055 416.546 352.415L413.748 352.188C413.89 351.525 414.169 350.952 414.586 350.469C415.002 349.981 415.54 349.607 416.198 349.347C416.861 349.081 417.628 348.949 418.499 348.949C419.105 348.949 419.685 349.02 420.239 349.162C420.798 349.304 421.292 349.524 421.723 349.822C422.159 350.121 422.502 350.504 422.753 350.973C423.004 351.437 423.13 351.993 423.13 352.642V360H420.26V358.487H420.175C420 358.828 419.766 359.129 419.472 359.389C419.178 359.645 418.826 359.846 418.414 359.993C418.002 360.135 417.526 360.206 416.986 360.206ZM417.853 358.118C418.298 358.118 418.691 358.03 419.032 357.855C419.373 357.675 419.64 357.434 419.834 357.131C420.028 356.828 420.125 356.484 420.125 356.101V354.943C420.031 355.005 419.9 355.062 419.735 355.114C419.574 355.161 419.391 355.206 419.188 355.249C418.984 355.286 418.781 355.322 418.577 355.355C418.373 355.384 418.189 355.41 418.023 355.433C417.668 355.485 417.358 355.568 417.093 355.682C416.828 355.795 416.622 355.949 416.475 356.143C416.328 356.333 416.255 356.57 416.255 356.854C416.255 357.266 416.404 357.58 416.702 357.798C417.005 358.011 417.389 358.118 417.853 358.118ZM431.279 349.091V351.364H424.71V349.091H431.279ZM426.201 346.477H429.227V356.648C429.227 356.927 429.27 357.145 429.355 357.301C429.44 357.453 429.558 357.559 429.71 357.621C429.866 357.682 430.046 357.713 430.25 357.713C430.392 357.713 430.534 357.701 430.676 357.678C430.818 357.649 430.927 357.628 431.002 357.614L431.478 359.865C431.327 359.912 431.114 359.967 430.839 360.028C430.565 360.095 430.231 360.135 429.838 360.149C429.109 360.178 428.469 360.08 427.92 359.858C427.376 359.635 426.952 359.29 426.649 358.821C426.346 358.352 426.197 357.76 426.201 357.045V346.477ZM433.25 360V349.091H436.276V360H433.25ZM434.77 347.685C434.32 347.685 433.935 347.536 433.613 347.237C433.295 346.934 433.137 346.572 433.137 346.151C433.137 345.734 433.295 345.376 433.613 345.078C433.935 344.775 434.32 344.624 434.77 344.624C435.22 344.624 435.604 344.775 435.921 345.078C436.243 345.376 436.404 345.734 436.404 346.151C436.404 346.572 436.243 346.934 435.921 347.237C435.604 347.536 435.22 347.685 434.77 347.685ZM448.87 349.091L445.056 360H441.647L437.833 349.091H441.029L443.295 356.896H443.408L445.667 349.091H448.87ZM455.038 360.213C453.916 360.213 452.95 359.986 452.141 359.531C451.336 359.072 450.715 358.423 450.28 357.585C449.844 356.742 449.626 355.746 449.626 354.595C449.626 353.473 449.844 352.488 450.28 351.641C450.715 350.793 451.329 350.133 452.119 349.659C452.915 349.186 453.848 348.949 454.918 348.949C455.637 348.949 456.307 349.065 456.928 349.297C457.553 349.524 458.097 349.867 458.561 350.327C459.03 350.786 459.394 351.364 459.655 352.06C459.915 352.751 460.045 353.561 460.045 354.489V355.32H450.834V353.445H457.197C457.197 353.009 457.103 352.623 456.913 352.287C456.724 351.951 456.461 351.688 456.125 351.499C455.794 351.304 455.408 351.207 454.967 351.207C454.508 351.207 454.101 351.314 453.746 351.527C453.395 351.735 453.121 352.017 452.922 352.372C452.723 352.723 452.621 353.113 452.616 353.544V355.327C452.616 355.866 452.716 356.333 452.915 356.726C453.118 357.119 453.405 357.422 453.774 357.635C454.143 357.848 454.581 357.955 455.088 357.955C455.424 357.955 455.732 357.907 456.011 357.812C456.291 357.718 456.53 357.576 456.729 357.386C456.928 357.197 457.079 356.965 457.183 356.69L459.982 356.875C459.839 357.547 459.548 358.134 459.108 358.636C458.672 359.134 458.109 359.522 457.418 359.801C456.731 360.076 455.938 360.213 455.038 360.213Z"
                    fill="#fff"
                  />
                  <path
                    className="rotate"
                    d="M524.631 198.727C524.631 200.313 524.33 201.663 523.729 202.776C523.132 203.888 522.318 204.738 521.286 205.325C520.258 205.908 519.103 206.199 517.82 206.199C516.527 206.199 515.367 205.905 514.339 205.318C513.312 204.731 512.5 203.881 511.903 202.768C511.307 201.656 511.009 200.309 511.009 198.727C511.009 197.141 511.307 195.792 511.903 194.679C512.5 193.566 513.312 192.719 514.339 192.136C515.367 191.549 516.527 191.256 517.82 191.256C519.103 191.256 520.258 191.549 521.286 192.136C522.318 192.719 523.132 193.566 523.729 194.679C524.33 195.792 524.631 197.141 524.631 198.727ZM521.513 198.727C521.513 197.7 521.359 196.833 521.051 196.128C520.748 195.422 520.32 194.887 519.766 194.523C519.212 194.158 518.563 193.976 517.82 193.976C517.076 193.976 516.428 194.158 515.874 194.523C515.32 194.887 514.889 195.422 514.581 196.128C514.278 196.833 514.126 197.7 514.126 198.727C514.126 199.755 514.278 200.621 514.581 201.327C514.889 202.032 515.32 202.567 515.874 202.932C516.428 203.296 517.076 203.479 517.82 203.479C518.563 203.479 519.212 203.296 519.766 202.932C520.32 202.567 520.748 202.032 521.051 201.327C521.359 200.621 521.513 199.755 521.513 198.727ZM526.852 210.091V195.091H529.835V196.923H529.97C530.102 196.63 530.294 196.331 530.545 196.028C530.801 195.721 531.132 195.465 531.539 195.261C531.951 195.053 532.463 194.949 533.074 194.949C533.869 194.949 534.603 195.157 535.275 195.574C535.948 195.986 536.485 196.608 536.887 197.442C537.29 198.27 537.491 199.31 537.491 200.56C537.491 201.777 537.295 202.804 536.902 203.642C536.513 204.475 535.983 205.107 535.311 205.538C534.643 205.964 533.895 206.178 533.066 206.178C532.479 206.178 531.98 206.08 531.568 205.886C531.161 205.692 530.827 205.448 530.566 205.155C530.306 204.857 530.107 204.556 529.97 204.253H529.877V210.091H526.852ZM529.814 200.545C529.814 201.194 529.904 201.76 530.083 202.243C530.263 202.726 530.524 203.102 530.865 203.372C531.206 203.637 531.62 203.77 532.108 203.77C532.6 203.77 533.017 203.635 533.358 203.365C533.699 203.09 533.957 202.712 534.132 202.229C534.312 201.741 534.402 201.18 534.402 200.545C534.402 199.916 534.314 199.362 534.139 198.884C533.964 198.405 533.706 198.031 533.365 197.761C533.024 197.491 532.605 197.357 532.108 197.357C531.615 197.357 531.199 197.487 530.858 197.747C530.521 198.008 530.263 198.377 530.083 198.855C529.904 199.333 529.814 199.897 529.814 200.545ZM544.48 206.213C543.358 206.213 542.392 205.986 541.582 205.531C540.777 205.072 540.157 204.423 539.721 203.585C539.286 202.742 539.068 201.746 539.068 200.595C539.068 199.473 539.286 198.488 539.721 197.641C540.157 196.793 540.77 196.133 541.561 195.659C542.356 195.186 543.289 194.949 544.359 194.949C545.079 194.949 545.749 195.065 546.369 195.297C546.994 195.524 547.538 195.867 548.002 196.327C548.471 196.786 548.836 197.364 549.096 198.06C549.357 198.751 549.487 199.561 549.487 200.489V201.32H540.275V199.445H546.639C546.639 199.009 546.544 198.623 546.355 198.287C546.165 197.951 545.903 197.688 545.566 197.499C545.235 197.304 544.849 197.207 544.409 197.207C543.949 197.207 543.542 197.314 543.187 197.527C542.837 197.735 542.562 198.017 542.363 198.372C542.164 198.723 542.063 199.113 542.058 199.544V201.327C542.058 201.866 542.157 202.333 542.356 202.726C542.56 203.119 542.846 203.422 543.216 203.635C543.585 203.848 544.023 203.955 544.529 203.955C544.866 203.955 545.173 203.907 545.453 203.812C545.732 203.718 545.971 203.576 546.17 203.386C546.369 203.197 546.52 202.965 546.625 202.69L549.423 202.875C549.281 203.547 548.99 204.134 548.549 204.636C548.114 205.134 547.55 205.522 546.859 205.801C546.172 206.076 545.379 206.213 544.48 206.213ZM551.461 206V195.091H554.395V196.994H554.508C554.707 196.317 555.041 195.806 555.51 195.46C555.978 195.11 556.518 194.935 557.129 194.935C557.28 194.935 557.444 194.944 557.619 194.963C557.794 194.982 557.948 195.008 558.081 195.041V197.726C557.939 197.683 557.742 197.645 557.491 197.612C557.24 197.579 557.011 197.562 556.802 197.562C556.357 197.562 555.959 197.66 555.609 197.854C555.263 198.043 554.989 198.308 554.785 198.649C554.586 198.99 554.487 199.383 554.487 199.828V206H551.461ZM562.443 206.206C561.747 206.206 561.127 206.085 560.582 205.844C560.038 205.598 559.607 205.235 559.29 204.757C558.977 204.274 558.821 203.673 558.821 202.953C558.821 202.347 558.932 201.838 559.155 201.426C559.377 201.014 559.68 200.683 560.064 200.432C560.447 200.181 560.883 199.991 561.371 199.864C561.863 199.736 562.379 199.646 562.919 199.594C563.554 199.527 564.065 199.466 564.453 199.409C564.841 199.348 565.123 199.258 565.298 199.139C565.473 199.021 565.561 198.846 565.561 198.614V198.571C565.561 198.121 565.419 197.773 565.135 197.527C564.856 197.281 564.458 197.158 563.942 197.158C563.397 197.158 562.964 197.278 562.642 197.52C562.32 197.757 562.107 198.055 562.003 198.415L559.205 198.188C559.347 197.525 559.626 196.952 560.043 196.469C560.459 195.981 560.997 195.607 561.655 195.347C562.318 195.081 563.085 194.949 563.956 194.949C564.562 194.949 565.142 195.02 565.696 195.162C566.255 195.304 566.75 195.524 567.18 195.822C567.616 196.121 567.959 196.504 568.21 196.973C568.461 197.437 568.587 197.993 568.587 198.642V206H565.717V204.487H565.632C565.457 204.828 565.223 205.129 564.929 205.389C564.635 205.645 564.283 205.846 563.871 205.993C563.459 206.135 562.983 206.206 562.443 206.206ZM563.31 204.118C563.755 204.118 564.148 204.03 564.489 203.855C564.83 203.675 565.097 203.434 565.291 203.131C565.485 202.828 565.582 202.484 565.582 202.101V200.943C565.488 201.005 565.357 201.062 565.192 201.114C565.031 201.161 564.848 201.206 564.645 201.249C564.441 201.286 564.238 201.322 564.034 201.355C563.83 201.384 563.646 201.41 563.48 201.433C563.125 201.485 562.815 201.568 562.55 201.682C562.285 201.795 562.079 201.949 561.932 202.143C561.785 202.333 561.712 202.57 561.712 202.854C561.712 203.266 561.861 203.58 562.159 203.798C562.462 204.011 562.846 204.118 563.31 204.118ZM576.737 195.091V197.364H570.167V195.091H576.737ZM571.658 192.477H574.684V202.648C574.684 202.927 574.727 203.145 574.812 203.301C574.897 203.453 575.015 203.559 575.167 203.621C575.323 203.682 575.503 203.713 575.707 203.713C575.849 203.713 575.991 203.701 576.133 203.678C576.275 203.649 576.384 203.628 576.46 203.614L576.935 205.865C576.784 205.912 576.571 205.967 576.296 206.028C576.022 206.095 575.688 206.135 575.295 206.149C574.566 206.178 573.926 206.08 573.377 205.858C572.833 205.635 572.409 205.29 572.106 204.821C571.803 204.352 571.654 203.76 571.658 203.045V192.477ZM578.707 206V195.091H581.733V206H578.707ZM580.227 193.685C579.777 193.685 579.392 193.536 579.07 193.237C578.752 192.934 578.594 192.572 578.594 192.151C578.594 191.734 578.752 191.376 579.07 191.078C579.392 190.775 579.777 190.624 580.227 190.624C580.677 190.624 581.061 190.775 581.378 191.078C581.7 191.376 581.861 191.734 581.861 192.151C581.861 192.572 581.7 192.934 581.378 193.237C581.061 193.536 580.677 193.685 580.227 193.685ZM589.086 206.213C587.982 206.213 587.028 205.979 586.223 205.51C585.423 205.036 584.805 204.378 584.37 203.536C583.934 202.688 583.716 201.705 583.716 200.588C583.716 199.461 583.934 198.476 584.37 197.634C584.805 196.786 585.423 196.128 586.223 195.659C587.028 195.186 587.982 194.949 589.086 194.949C590.189 194.949 591.141 195.186 591.941 195.659C592.746 196.128 593.366 196.786 593.801 197.634C594.237 198.476 594.455 199.461 594.455 200.588C594.455 201.705 594.237 202.688 593.801 203.536C593.366 204.378 592.746 205.036 591.941 205.51C591.141 205.979 590.189 206.213 589.086 206.213ZM589.1 203.869C589.602 203.869 590.021 203.727 590.357 203.443C590.693 203.154 590.946 202.761 591.117 202.264C591.292 201.767 591.38 201.201 591.38 200.567C591.38 199.932 591.292 199.366 591.117 198.869C590.946 198.372 590.693 197.979 590.357 197.69C590.021 197.402 589.602 197.257 589.1 197.257C588.593 197.257 588.167 197.402 587.821 197.69C587.48 197.979 587.222 198.372 587.047 198.869C586.877 199.366 586.792 199.932 586.792 200.567C586.792 201.201 586.877 201.767 587.047 202.264C587.222 202.761 587.48 203.154 587.821 203.443C588.167 203.727 588.593 203.869 589.1 203.869ZM599.448 199.693V206H596.422V195.091H599.306V197.016H599.434C599.675 196.381 600.08 195.879 600.648 195.51C601.216 195.136 601.905 194.949 602.715 194.949C603.472 194.949 604.133 195.115 604.696 195.446C605.26 195.777 605.698 196.251 606.01 196.866C606.323 197.477 606.479 198.206 606.479 199.054V206H603.453V199.594C603.458 198.926 603.288 198.405 602.942 198.031C602.596 197.652 602.121 197.463 601.515 197.463C601.107 197.463 600.748 197.551 600.435 197.726C600.127 197.901 599.886 198.157 599.711 198.493C599.54 198.824 599.453 199.224 599.448 199.693ZM617.94 198.202L615.17 198.372C615.123 198.135 615.021 197.922 614.865 197.733C614.709 197.539 614.503 197.385 614.247 197.271C613.996 197.153 613.696 197.094 613.345 197.094C612.876 197.094 612.481 197.193 612.159 197.392C611.837 197.586 611.676 197.847 611.676 198.173C611.676 198.434 611.78 198.654 611.989 198.834C612.197 199.014 612.554 199.158 613.061 199.267L615.036 199.665C616.096 199.883 616.887 200.233 617.408 200.716C617.929 201.199 618.189 201.833 618.189 202.619C618.189 203.334 617.978 203.962 617.557 204.501C617.14 205.041 616.567 205.463 615.838 205.766C615.114 206.064 614.278 206.213 613.331 206.213C611.887 206.213 610.736 205.912 609.879 205.311C609.027 204.705 608.527 203.881 608.381 202.839L611.357 202.683C611.446 203.124 611.664 203.46 612.01 203.692C612.356 203.919 612.798 204.033 613.338 204.033C613.868 204.033 614.295 203.931 614.616 203.727C614.943 203.519 615.109 203.251 615.114 202.925C615.109 202.65 614.993 202.425 614.766 202.25C614.538 202.07 614.188 201.933 613.714 201.838L611.825 201.462C610.76 201.249 609.967 200.879 609.446 200.354C608.93 199.828 608.672 199.158 608.672 198.344C608.672 197.643 608.861 197.039 609.24 196.533C609.624 196.026 610.161 195.635 610.852 195.361C611.548 195.086 612.363 194.949 613.295 194.949C614.673 194.949 615.758 195.24 616.548 195.822C617.344 196.405 617.808 197.198 617.94 198.202Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={
                  orgInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <TeamDefinition />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action
      <div className="w-full py-24 bg-gradient-to-b from-[#1a2e44] to-[#0f172a]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Become part of our vibrant community and help us turn small ideas into impactful ventures.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium tracking-wide hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
              Get Involved
            </button>
          </motion.div>
        </div>
      </div> */}
      </div>
    </>
  );
}
