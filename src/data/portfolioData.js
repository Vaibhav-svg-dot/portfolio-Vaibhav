/**
 * Central Portfolio Data Configuration for Vaibhav Gaikwad
 * Single source of truth for all content, projects, experience, skills, certificates, and academic scores.
 */

export const personalInfo = {
  name: "Vaibhav Gaikwad",
  shortName: "Vaibhav",
  role: "Digital Executive & Full-Stack Developer",
  status: "Available for Digital Initiatives & Collaborations",
  location: "Navi Mumbai, India",
  profileImage: "images/profile.png",
  fallbackImage: "images/profile.jpg",
  hero: {
    greeting: "Hi, I'm",
    nameHighlight: "Vaibhav Gaikwad",
    supportingHeadline: "Digital Executive & Full-Stack Developer",
    statement: "I build digital experiences that turn ideas into working products.",
    description: "Specializing in full-stack web development, digital platform operations, and database-driven solutions. Experienced in managing enterprise platforms at Charismight and engineering robust web systems.",
    ctaPrimary: "Explore My Journey",
    ctaSecondary: "View My Work",
    ctaContact: "Let's Talk"
  },
  about: {
    headline: "A passionate developer who loves building & learning.",
    bio: [
      "I'm a Computer Science student and a Digital Executive at Charismight, where I work on real-world digital solutions and manage platforms that create impact.",
      "I enjoy turning complex problems into simple, beautiful, and efficient solutions with strong foundations in full-stack engineering and relational/NoSQL databases."
    ],
    stats: [
      { value: "2+", label: "Years of Experience / Digital Operations", color: "purple" },
      { value: "5+", label: "Projects Completed", color: "blue" },
      { value: "10+", label: "Technologies Worked With", color: "cyan" },
      { value: "100%", label: "Commitment", color: "emerald" }
    ]
  }
};

export const techMarquee = [
  { name: "HTML5", color: "#e34f26", badge: "HTML" },
  { name: "CSS3", color: "#1572b6", badge: "CSS" },
  { name: "JavaScript", color: "#f7df1e", badge: "JS" },
  { name: "React", color: "#61dafb", badge: "React" },
  { name: "Node.js", color: "#339933", badge: "Node" },
  { name: "Python", color: "#3776ab", badge: "Python" },
  { name: "Django", color: "#092e20", badge: "Django" },
  { name: "PHP", color: "#777bb4", badge: "PHP" },
  { name: "Laravel", color: "#ff2d20", badge: "Laravel" },
  { name: "MySQL", color: "#4479a1", badge: "MySQL" },
  { name: "MongoDB", color: "#47a248", badge: "MongoDB" }
];

export const charismightExperience = {
  company: "Charismight",
  role: "Executive — Digital",
  period: "2025 – Present",
  overview: "Working on digital platforms and managing web solutions that create impact and deliver results.",
  platforms: [
    {
      id: "marine",
      name: "Marine OneStop Solution",
      type: "Digital Maritime & Enterprise Solution",
      stack: ["Python", "Django"],
      icon: "Anchor",
      accent: "#06b6d4",
      highlights: [
        "Digital solution for marine services",
        "Backend development & API workflows",
        "System management & operational stability",
        "Platform maintenance & updates"
      ]
    },
    {
      id: "lms",
      name: "Charismight LMS",
      type: "Enterprise Learning Management System",
      stack: ["PHP", "Laravel", "MySQL"],
      icon: "GraduationCap",
      accent: "#a855f7",
      highlights: [
        "LMS platform management & uptime",
        "User & role management",
        "Course catalog & content coordination",
        "System maintenance & database support"
      ]
    }
  ]
};

export const projects = [
  {
    id: "education-management",
    title: "Online Education Management System",
    timeline: "April 2025 – June 2025",
    category: "Full-Stack Web App",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "NetBeans"],
    summary: "A system to manage courses, students, sessions, and admin operations with secure authentication and database persistence.",
    image: "images/project-edu.svg",
    features: [
      "User registration & secure session handling",
      "Course catalog & module management",
      "Relational MySQL database persistence",
      "Dual-role access for student & administrator"
    ],
    links: { github: "#", live: "#" }
  },
  {
    id: "gym-management",
    title: "Gym Management System",
    timeline: "September 2025 – February 2026",
    category: "Full-Stack MERN / Node Solution",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    summary: "A full-stack gym management system with membership, trainers, plans, subscription tracking, and secure JWT authentication.",
    image: "images/project-gym.svg",
    features: [
      "JWT-based user authentication & registration",
      "Membership plans & subscription analytics",
      "Trainer profile & member assignment",
      "MongoDB document storage & CRUD REST APIs"
    ],
    links: { github: "#", live: "#" }
  }
];

export const journeyMilestones = [
  {
    step: "01",
    title: "Online Education Management System",
    period: "Apr 2025 – Jun 2025",
    description: "Built a web application for managing students, courses, sessions, and admin operations.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "NetBeans"],
    icon: "GraduationCap",
    color: "#a855f7"
  },
  {
    step: "02",
    title: "Gym Management System",
    period: "Sep 2025 – Feb 2026",
    description: "Developed a full-stack Gym Management System with membership, trainers, plans, and secure authentication.",
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    icon: "Dumbbell",
    color: "#3b82f6"
  },
  {
    step: "03",
    title: "Charismight – Digital Executive",
    period: "2025 – Present",
    description: "Working as an Executive in Digital at Charismight, managing and contributing to key digital platforms.",
    tech: ["Digital Platforms", "Management", "Operations"],
    icon: "Briefcase",
    color: "#8b5cf6"
  },
  {
    step: "04",
    title: "Marine OneStop Solution",
    period: "Platform Experience",
    description: "Worked on Marine OneStop Solution — a digital platform built using Python and Django.",
    tech: ["Python", "Django"],
    icon: "Anchor",
    color: "#06b6d4"
  },
  {
    step: "05",
    title: "Charismight LMS",
    period: "Platform Management",
    description: "Managing and maintaining the LMS platform used for learning management and operations.",
    tech: ["PHP", "Laravel", "MySQL"],
    icon: "Server",
    color: "#a855f7"
  },
  {
    step: "06",
    title: "Certifications",
    period: "Continuous Upskilling",
    description: "Continuously learning and upskilling to stay updated with modern technologies.",
    tech: ["SQL", "Web Dev AI", "IoT", "Mobile Apps"],
    icon: "Award",
    color: "#3b82f6"
  },
  {
    step: "07",
    title: "Education",
    period: "2023 – 2026",
    description: "B.Sc. Computer Science at Pillai College, building the foundation of my career.",
    tech: ["B.Sc. CS", "Pillai College", "Algorithms & OOP"],
    icon: "BookOpen",
    color: "#c084fc"
  },
  {
    step: "08",
    title: "The Future",
    period: "Forward Vision",
    description: "Exploring new technologies, building impactful products, and making a meaningful difference.",
    tech: ["Cloud Systems", "Microservices", "Scalability"],
    icon: "Compass",
    color: "#06b6d4"
  }
];

export const skillsCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5", color: "#e34f26" },
      { name: "CSS3", icon: "css3", color: "#1572b6" },
      { name: "JavaScript", icon: "js", color: "#f7df1e" },
      { name: "React", icon: "react", color: "#61dafb" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Java", icon: "java", color: "#f89820" },
      { name: "Python", icon: "python", color: "#3776ab" },
      { name: "Django", icon: "django", color: "#092e20" },
      { name: "PHP", icon: "php", color: "#777bb4" },
      { name: "Laravel", icon: "laravel", color: "#ff2d20" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express.js", icon: "express", color: "#ffffff" },
      { name: "JSP", icon: "jsp", color: "#60a5fa" }
    ]
  },
  {
    id: "database",
    name: "Database",
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479a1" },
      { name: "MongoDB", icon: "mongodb", color: "#47a248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" }
    ]
  },
  {
    id: "tools",
    name: "Tools & IDEs",
    skills: [
      { name: "GitHub", icon: "github", color: "#ffffff" },
      { name: "VS Code", icon: "vscode", color: "#007acc" },
      { name: "NetBeans", icon: "netbeans", color: "#1b6ac6" },
      { name: "Eclipse", icon: "eclipse", color: "#2c2255" }
    ]
  },
  {
    id: "other",
    name: "Other / Core",
    skills: [
      { name: "Servlets", icon: "server", color: "#a855f7" },
      { name: "JDBC", icon: "database", color: "#3b82f6" },
      { name: "OOP", icon: "cpu", color: "#06b6d4" },
      { name: "Collections", icon: "layers", color: "#c084fc" },
      { name: "Exception Handling", icon: "shield", color: "#f59e0b" },
      { name: "Problem Solving", icon: "sparkles", color: "#10b981" },
      { name: "Debugging", icon: "bug", color: "#ef4444" }
    ]
  }
];

export const certifications = [
  {
    id: "cert-sql",
    title: "SQL — DevTown",
    issuer: "DevTown & MSME",
    year: "2025",
    badge: "SQL FOR ANALYST: QUERY YOUR WAY TO INSIGHTS",
    description: "Learned SQL, queries, joins, functions, and database concepts in 5-days intensive bootcamp.",
    image: "images/cert-sql.png"
  },
  {
    id: "cert-webdev",
    title: "Web Development Using AI",
    issuer: "Quantum Learnings / Microsoft & Apple Partner",
    year: "2025",
    badge: "30 Hours Value Added Training",
    description: "Learned Web Development using modern technologies and AI integration (Reg: QL_PI_25-A41).",
    image: "images/cert-webdev.png"
  },
  {
    id: "cert-iot",
    title: "Internet of Things",
    issuer: "Pillai College (Autonomous)",
    year: "2025",
    badge: "30 Hours Offline Course",
    description: "Learned IoT architectures, connected sensors, microcontrollers, and hardware concepts.",
    image: "images/cert-iot.png"
  },
  {
    id: "cert-appinventor",
    title: "Mobile App Development",
    issuer: "Pillai College (Autonomous)",
    year: "2024",
    badge: "30 Hours App Inventor Course",
    description: "Built mobile applications and logical application workflows using App Inventor.",
    image: "images/cert-appinventor.png"
  }
];

export const education = {
  degree: "B.Sc. Computer Science",
  institution: "Pillai College, New Panvel",
  period: "2023 – 2026",
  semesters: [
    { sem: "SEM 1", gpa: "7.65" },
    { sem: "SEM 2", gpa: "7.45" },
    { sem: "SEM 3", gpa: "6.68" },
    { sem: "SEM 4", gpa: "6.95" },
    { sem: "SEM 5", gpa: "7.50" },
    { sem: "SEM 6", gpa: "8.32" }
  ],
  secondary: [
    { title: "HSC (12th)", score: "60.60%", school: "Sudhagad Education Society, Raigad" },
    { title: "SSC (10th)", score: "86.40%", school: "Sudhagad Education Society, Raigad" }
  ]
};

export const contactInfo = {
  headline: "Let's build something amazing together.",
  email: "vaibhavgaikwad010905@gmail.com",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/vaibhavgaikwad", display: "linkedin.com/in/vaibhavgaikwad" },
    { name: "GitHub", url: "https://github.com/vaibhavgaikwad", display: "github.com/vaibhavgaikwad" },
    { name: "Email", url: "mailto:vaibhavgaikwad010905@gmail.com", display: "vaibhavgaikwad012905@gmail.com" }
  ]
};
