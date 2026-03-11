export const skills = [
  { cat: "Languages", items: ["Java", "Python", "JavaScript"] },
  { cat: "Backend", items: ["Spring Boot", "REST APIs", "JWT Authentication", "JPA / Hibernate", "WebSocket (STOMP)", "Global Exception Handling"] },
  { cat: "Frontend", items: ["React.js", "HTML / CSS", "JavaScript"] },
  { cat: "Mobile", items: ["Android Studio", "Java / Kotlin", "Room Database"] },
  { cat: "Machine Learning", items: ["Random Forest Classifier", "Feature Engineering", "FastAPI Deployment", "Scikit-learn Pipeline"] },
  { cat: "Databases", items: ["MySQL", "MongoDB"] },
  { cat: "Tools", items: ["Git & GitHub", "Maven", "Postman"] },
];

export const projects = [
  {
    num: "01", title: "ShareByte",
    tags: ["Spring Boot", "MongoDB", "JWT", "WebSocket", "React", "Google Maps"],
    desc: "Secure, scalable food-sharing web app connecting donors and receivers with real-time messaging and location-aware listings.",
    features: [
      "JWT-based auth & role-based access control — 100% protected endpoints",
      "MongoDB document schemas for users, listings & requests",
      "Centralized validation & Global Exception Handling via @ControllerAdvice",
      "Spring WebSocket + STOMP for real-time messaging & status updates",
      "Google Maps API for coordinate-based food listing visualization",
    ],
    link: "https://github.com/Santhosh6466",
  },
  {
    num: "02", title: "Malicious URL Detection",
    tags: ["Python", "Random Forest", "FastAPI", "React", "Scikit-learn"],
    desc: "Supervised ML system classifying malicious & benign URLs with 93.42% accuracy, trained on ~600,000 URL samples.",
    features: [
      "Random Forest classifier on 600K+ URL samples",
      "Full ML pipeline — missing-value treatment, feature extraction, normalization",
      "Class imbalance handled via under-sampling techniques",
      "93.42% accuracy — evaluated with F1, precision, recall & confusion matrix",
      "Deployed via FastAPI REST endpoints + React frontend for live scanning",
    ],
    link: "https://github.com/Santhosh6466",
  },
  {
    num: "03", title: "WebSocket POC",
    tags: ["WebSocket", "Real-time", "Spring Boot", "JavaScript"],
    desc: "Real-time communication demo exploring persistent WebSocket connections and live message exchange — built as a focused learning experiment.",
    features: [
      "WebSocket-based real-time bidirectional messaging",
      "Persistent connection management & live event broadcasting",
      "Planned: JWT auth, database integration, session handling",
      "Planned: Scalable architecture & secure session management",
      "Building step by step — more updates coming soon 🚀",
    ],
    link: "https://github.com/Santhosh6466",
  },
];

import { CERT1_SQL, CERT2_META, CERT3_INFOSYS, CERT4_INTERNZ, CERT5_JAVA, CERT6_GFG } from "./certImages";

export const certificates = [
  { title: "SQL (Intermediate)",               issuer: "HackerRank",          date: "18 Aug, 2025", img: CERT1_SQL },
  { title: "Android App Development",          issuer: "Meta · Coursera",      date: "16 May, 2025", img: CERT2_META },
  { title: "ChatGPT-4 Prompt Engineering",     issuer: "Infosys Springboard",  date: "22 Aug, 2025", img: CERT3_INFOSYS },
  { title: "App Development Internship",       issuer: "Internz Learn",        date: "Nov 2025",     img: CERT4_INTERNZ },
  { title: "Java (Basic)",                     issuer: "HackerRank",           date: "16 Sep, 2025", img: CERT5_JAVA },
  { title: "Java Backend Dev Bootcamp",        issuer: "GeeksforGeeks",        date: "2025",         img: CERT6_GFG },
];

export const education = [
  { degree: "B.Tech — Computer Science & Engineering", school: "Lovely Professional University", location: "Punjab, India",         score: "CGPA: 7.08", period: "Aug 2023 — Present" },
  { degree: "Intermediate — PCM",                      school: "Trividyaa Junior College",       location: "Hyderabad, Telangana",   score: "96%",        period: "Jun 2021 — Apr 2023" },
  { degree: "Secondary School",                        school: "Unique High School",             location: "Hyderabad, Telangana",   score: "98%",        period: "Apr 2020 — Mar 2021" },
];

export const achievements = [
  { icon: "⚡", title: "300+ DSA Problems",          desc: "Solved on LeetCode & platforms — improved pattern recognition and optimized problem-solving approaches." },
  { icon: "⭐", title: "5-Star Java · HackerRank",   desc: "Earned 5-star Java badge, showcasing strong command over core Java and OOP principles." },
  { icon: "🏆", title: "Hackathon Winner · Binary Bitz", desc: "Won the Binary Bitz hackathon at Lovely Professional University — delivered a winning project under pressure." },
  { icon: "🗄️", title: "4-Star SQL · HackerRank",   desc: "Earned 4-star SQL badge demonstrating strong command over intermediate SQL queries and database operations." },
];

export const tickerItems = [
  "Java","Spring Boot","JWT Auth","WebSocket","Python","Random Forest",
  "FastAPI","React.js","MongoDB","MySQL","WebSocket POC","Git & GitHub",
  "JPA / Hibernate","REST APIs","300+ DSA",
];

export const navLinks = ["skills", "projects", "education", "certificates", "contact"];

export const contactLinks = [
  { label: "Email",    value: "santhoshchode8469@gmail.com",    href: "mailto:santhoshchode8469@gmail.com" },
  { label: "GitHub",   value: "github.com/Santhosh6466",        href: "https://github.com/Santhosh6466" },
  { label: "LinkedIn", value: "linkedin.com/in/sai-santhosh45", href: "https://linkedin.com/in/sai-santhosh45" },
  { label: "Mobile",   value: "+91-8247623145",                 href: "tel:+918247623145" },
];
