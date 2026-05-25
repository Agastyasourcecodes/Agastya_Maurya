import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaAward,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import photo from "./assets/rocket.png";
import Fluid from "./Fluid";

export default function App() {
  const { scrollYProgress } = useScroll();

  /* MOON EXPLOSION LOGIC */
/* MOON EXPLOSION LOGIC */
  const moonScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.4]);
  const moonOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // 1. Map scroll to raw numbers first (instead of strings)
  const rawMeteorX = useTransform(scrollYProgress, [0, 0.12], [120, 45]);
  const rawMeteorY = useTransform(scrollYProgress, [0, 0.12], [-10, 35]);
  const rawMeteorScale = useTransform(scrollYProgress, [0, 0.12], [0.8, 2.2]);

  // 2. Apply smooth physics to those numbers
  const springConfig = { damping: 25, stiffness: 120, mass: 1.2 };
  const smoothX = useSpring(rawMeteorX, springConfig);
  const smoothY = useSpring(rawMeteorY, springConfig);
  const smoothScale = useSpring(rawMeteorScale, springConfig);

  // 3. Convert the smoothed numbers back into vw/vh strings for CSS
  const meteorX = useTransform(smoothX, (x) => `${x}vw`);
  const meteorY = useTransform(smoothY, (y) => `${y}vh`);
  const meteorScale = smoothScale;

  const explosionOpacity = useTransform(scrollYProgress, [0.12, 0.16], [0, 1]);
  const piecesSpread = useTransform(scrollYProgress, [0.12, 0.25], [0, 300]);

  const skills = [
    {
      icon: <FaReact />,
      title: "Frontend",
      tech: "React, Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend",
      tech: "Node.js, Express.js",
    },
    {
      icon: <SiMongodb />,
      title: "Database",
      tech: "MongoDB, PostgreSQL, Redis",
    },
    {
      icon: <SiJavascript />,
      title: "Languages",
      tech: "JavaScript, Java, Python",
    },
    {
      icon: <SiExpress />,
      title: "APIs",
      tech: "REST APIs, JWT Authentication",
    },
    {
      icon: <SiTailwindcss />,
      title: "UI/UX",
      tech: "Responsive Design, Animations",
    },
  ];

  const experience = [
    {
      role: "Full Stack Intern (Backend Lead)",
      company: "Infosys Springboard",
      duration: "Feb 2026 – Apr 2026",
      achievements: [
        "Led backend development of Civix (MERN stack), designing and building 15+ REST API endpoints for authentication, petitions, and polling modules",
        "Implemented JWT-based auth with role-based access control (user/admin/official), reducing unauthorized access attempts to zero in testing",
        "Collaborated with a 5-member cross-functional team to integrate React dashboards with backend APIs; contributed UI components using Tailwind CSS"
      ]
    }
  ];

  const projects = [
    {
      title: "Civix",
      desc: "A civic engagement platform with petitions, voting systems, authentication, admin moderation, and community-driven features.",
      tags: ["JWT Auth", "REST API", "MongoDB", "Role-Based Access"],
      role: "Backend Lead",
      metrics: "15+ API endpoints · 3-role access control",
      github: "https://github.com/Agastyasourcecodes/team-c",
      live: "https://team-c-three.vercel.app"
    },
    {
      title: "Habit Builder",
      desc: "A MERN-based habit tracking application with streak tracking, CRUD operations, authentication, and productivity-focused UI.",
      tags: ["Redis Rate Limiting", "Mongoose ODM", "REST API"],
      metrics: "10 req/min rate limiting · Daily streak tracking",
      github: "https://github.com/Agastyasourcecodes/HabitBuilder"
    },
    {
      title: "Smart Library",
      desc: "A full-stack library management system with authentication, book issuing, inventory management, and backend database integration.",
      tags: ["Full-Stack", "Authentication", "Database"],
      github: "https://github.com/Agastyasourcecodes/SmartLibrary"
    },
    {
      title: "Music App V2",
      desc: "A full-stack music streaming application featuring playlists, authentication, dynamic music controls, and modern UI.",
      tags: ["Full-Stack", "Authentication", "Dynamic UI"],
      github: "https://github.com/Agastyasourcecodes/Music_App_V2"
    },
    {
      title: "Fusion Battle: Fire and Ice",
      desc: "A multiplayer battle game with interactive gameplay mechanics, combat logic, and real-time player interactions.",
      tags: ["Game Dev", "Multiplayer", "Real-time"],
      github: "https://github.com/Agastyasourcecodes/Fusion-Battle-fire-and-Ice"
    },
    {
      title: "Sketchpad",
      desc: "An interactive sketchpad and drawing application with smooth canvas controls and creative drawing tools.",
      tags: ["Canvas API", "Interactive"],
      github: "https://github.com/Agastyasourcecodes/Sketchpad"
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* ADDED FLUID COMPONENT HERE */}
        <Fluid />

        {/* CENTER MOON */}
        <motion.div
          style={{
            scale: moonScale,
            opacity: moonOpacity,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Glow */}
          <div className="absolute inset-0 w-[700px] h-[700px] rounded-full bg-cyan-200/10 blur-3xl animate-pulse"></div>
          {/* Moon */}
          <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-gray-100 to-gray-400 opacity-90 shadow-[0_0_200px_rgba(255,255,255,0.35)]"></div>
        </motion.div>

        {/* METEOR */}
        <motion.div
          style={{
            x: meteorX,
            y: meteorY,
            scale: meteorScale,
          }}
        className="fixed z-0 pointer-events-none"
        >
          <div className="relative">
            {/* Trail */}
            <div className="absolute top-1/2 right-[70%] -translate-y-1/2 w-[350px] h-[4px] bg-gradient-to-r from-transparent via-cyan-300 to-white blur-sm opacity-90"></div>
            {/* Meteor */}
            <div className="text-7xl drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]">
              <img
                src={photo}
                alt="Agastya"
                className="w-[90px] h-[90px] rounded-full object-cover border-4 border-cyan-300 shadow-[0_0_60px_rgba(34,211,238,0.9)]"
              />
            </div>
          </div>
        </motion.div>

        {/* EXPLOSION */}
        <motion.div
          style={{
            opacity: explosionOpacity,
          }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none overflow-hidden"
        >
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                x: piecesSpread,
                y: piecesSpread,
              }}
              className="absolute w-16 h-16 rounded-full bg-gray-300 opacity-70"
              animate={{
                x: Math.cos(i) * (100 + i * 20),
                y: Math.sin(i) * (100 + i * 20),
                rotate: 360,
              }}
              transition={{
                duration: 2,
              }}
            />
          ))}
        </motion.div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* STARS */}
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random(),
            }}
          />
        ))}

        {/* FLOATING PLANETS */}
        <div className="absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-20 blur-sm"></div>
        <div className="absolute top-[55%] right-[8%] w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 opacity-20 blur-sm"></div>
        <div className="absolute top-[80%] left-[25%] w-52 h-52 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 opacity-10 blur-sm"></div>

        {/* SHOOTING STARS */}
        <div className="shooting-star"></div>
        <div className="shooting-star2"></div>

      </div>

      {/* RE-ADDED FOREGROUND WRAPPER SO LINKS AND FORMS ARE CLICKABLE */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
  <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
    
    {/* UPDATED LOGO: Now clickable and links to Sketchpad! */}
    <h1 className="text-3xl font-black transition hover:scale-105">
      <a 
        href="https://agastyasourcecodes.github.io/Sketchpad/" 
        target="_blank" 
        rel="noreferrer"
        className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent cursor-pointer"
      >
        Agastya.dev
      </a>
    </h1>
            <div className="flex gap-8 text-lg items-center">
              <a href="#about" className="hover:text-cyan-400 transition">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-500/30 transition"
              >
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl w-full">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
             <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">

  {/* "Hi, I'm" - First Line Typing */}
  <motion.span
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }, // Speed of first line
      },
    }}
    className="block text-gray-200"
  >
    {"Hi, I'm".split("").map((char, i) => (
      <motion.span 
        key={i} 
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        {/* Preserves the space character so it doesn't collapse */}
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>

  {/* "Agastya" - Second Line Typing */}
 <motion.span
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.8 }, 
      },
    }}
    // FIX: Added 'pb-4' right after inline-block to fix the cut letters!
    className="inline-block pb-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]"
  >
    {"Agastya".split("").map((char, i) => (
      <motion.span 
        key={i} 
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>

</h1>
              <p className="mt-10 text-xl md:text-2xl text-gray-300 leading-[2.2rem] font-light max-w-2xl tracking-wide">
                Backend & Full Stack Developer crafting scalable MERN applications, immersive user experiences, secure APIs, and futuristic web systems.
              </p>
              {/* BUTTONS */}
              <div className="flex gap-5 mt-10 flex-wrap">
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-2xl bg-cyan-500 hover:scale-105 transition font-semibold shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition"
                >
                  Contact Me
                </a>
              </div>
              {/* SOCIALS */}
              <div className="flex gap-3 mt-10 flex-wrap items-center">
                <a
                  href="https://github.com/Agastyasourcecodes"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 hover:-translate-y-1 transition flex items-center gap-2 whitespace-nowrap text-sm"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/agastya-maurya-85b7b7291"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 hover:-translate-y-1 transition flex items-center gap-2 whitespace-nowrap text-sm"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/Agastya_m/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 hover:-translate-y-1 transition flex items-center gap-2 whitespace-nowrap text-sm"
                >
                  <span className="text-lg">😿</span>
                  <span>LeetCode</span>
                </a>
                <a
                  href="mailto:agastyamaurya123@gmail.com"
                  className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 hover:-translate-y-1 transition flex items-center gap-2 whitespace-nowrap text-sm"
                >
                  <span className="text-lg">🌐</span>
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop"
                  alt="profile"
                  className="w-[350px] h-[350px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(34,211,238,0.25)"
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glow-impact max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px]"
          >
            <h2 className="text-5xl font-black mb-8">About Me</h2>
            <p className="text-gray-300 text-xl leading-10 font-light tracking-wide">
              I'm Agastya Maurya, a Computer Science undergraduate and full-stack
              developer focused on building scalable, reliable, and immersive web
              applications.
              <br /><br />
              What started as curiosity about how websites and systems work gradually
              turned into a strong passion for backend engineering, APIs, databases,
              and modern frontend experiences.
              <br /><br />
              I enjoy taking ideas from concept to fully functional products that
              people can actually use.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-6 py-32">
          <h2 className="text-5xl font-black text-center mb-20">Experience</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(34,211,238,0.25)"
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="glow-impact bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px]"
              >
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-300">
                      <FaBriefcase className="text-cyan-400" />
                      <span className="text-xl font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold">
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex gap-4 text-gray-300 text-lg leading-8">
                      <span className="text-cyan-400 mt-2">●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
       {/* SKILLS */}
        <section id="skills" className="px-6 py-32">
          <h2 className="text-5xl font-black text-center mb-20">Skills</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                // 1. CHANGED: once: false makes it repeat every time you scroll!
                viewport={{ once: false, margin: "-50px" }} 
                transition={{ 
                  // 2. CHANGED: Increased duration to 0.8s (from 0.6s)
                  duration: 0.8, 
                  // 3. CHANGED: Increased delay to 0.2s between each card (from 0.15s)
                  delay: i * 0.2, 
                  ease: "easeOut" 
                }} 
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(34,211,238,0.25)"
                }}
                className="glow-impact bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[35px]"
              >
                <div className="text-6xl text-cyan-400 mb-6">{skill.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-300 text-lg">{skill.tech}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* PROJECTS */}
       {/* PROJECTS */}
        <section id="projects" className="px-6 py-32">
          <h2 className="text-5xl font-black text-center mb-20">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                // --- ADDED SCROLL ANIMATION ---
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
               transition={{
  type: "spring",
  stiffness: 70,
  damping: 18,
  delay: i * 0.12
}}
                // ------------------------------
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(34,211,238,0.25)"
                }}
                className="glow-impact bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[35px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-4xl font-black">{project.title}</h3>
                  {project.role && (
                    <div className="px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400 text-purple-300 text-xs font-bold whitespace-nowrap">
                      {project.role}
                    </div>
                  )}
                </div>
                {project.metrics && (
                  <div className="text-cyan-300 text-sm font-semibold mb-4">
                    {project.metrics}
                  </div>
                )}
                <p className="text-gray-300 text-lg leading-9 mb-6">
                  {project.desc}
                </p>
                {/* TAGS */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-cyan-500 hover:scale-105 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(34,211,238,0.25)"
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glow-impact max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px]"
          >
            <h2 className="text-5xl font-black text-center mb-6">Contact Me</h2>
            <p className="text-center text-gray-300 mb-12">
              Want to collaborate, work together, or just say hi?
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* WEB3FORMS ACCESS KEY */}
              <input
                type="hidden"
                name="access_key"
                value="3e3698ed-7f00-49d0-aac1-5de3149ec165"
              />
              {/* OPTIONAL SETTINGS */}
              <input type="hidden" name="subject" value="New Portfolio Message" />
              <input type="hidden" name="from_name" value="Agastya Portfolio" />
              
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
              />
              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
              />
              {/* MESSAGE */}
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none resize-none focus:border-cyan-400"
              />
              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-10 text-gray-400 border-t border-white/10 bg-black/20 backdrop-blur-lg">
          <p className="text-lg">© 2026 Agastya Maurya</p>
          <p className="mt-2 text-sm text-gray-500">
            Nothing good comes from not hiring me :D
          </p>
        </footer>

      </div> {/* END OF FOREGROUND WRAPPER */}

    </div>
  );
}