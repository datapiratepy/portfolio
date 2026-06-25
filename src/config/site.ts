/**
 * ============================================================================
 *  SITE CONFIG — single source of truth for ALL portfolio content.
 *  Edit this file to update the website. You never need to touch UI code.
 * ============================================================================
 */

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "twitter"
  | "external"
  | "code"
  | "database"
  | "chart"
  | "brain"
  | "sparkles"
  | "wrench";

/* -------------------------------------------------------------------------- */
/*  PERSONAL / SITE-WIDE                                                       */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Harsh Kamat",
  // First name + role used in hero, nav logo, etc.
  shortName: "Harsh",
  role: "Data Analytics & AI Student",
  // Used for SEO <title>, og:title, etc.
  title: "Harsh Kamat | Portfolio",
  // The canonical production URL (update after you deploy).
  url: "https://harshkamat.vercel.app",
  // Used for SEO description + og:description.
  description:
    "Portfolio showcasing projects in Data Analytics, Machine Learning, Artificial Intelligence, and Data Science, along with certifications, GitHub repositories, and resume.",
  keywords: [
    "Harsh Kamat",
    "Data Analytics",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "AI Engineer",
    "Python",
    "Portfolio",
    "Computer Science Engineering",
  ],
  // Path (in /public) to your resume PDF and OG image.
  resumePath: "/resume.pdf",
  ogImage: "/og-image.png",
  location: "India",
  email: "harshkamat.2307@gmail.com",
  availableForWork: true,
} as const;

/* -------------------------------------------------------------------------- */
/*  SOCIAL LINKS  (placeholders — replace the URLs below)                      */
/* -------------------------------------------------------------------------- */

export const socials: { label: string; href: string; icon: IconName }[] = [
  {
    label: "GitHub",
    href: "https://github.com/datapiratepy",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harshkamat",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:harshkamat.2307@gmail.com",
    icon: "mail",
  },
];

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  badge: "Open to internships & full-time roles",
  // Rotating words after "Transforming Data into ___"
  headlinePrefix: "Transforming Data into",
  rotatingWords: ["Insights", "Intelligence", "AI Solutions", "Impact"],
  intro:
    "Computer Science Engineering student with a strong interest in Data Analytics, Artificial Intelligence, and Machine Learning. Built AI-powered projects, completed Google's Data Analytics Professional Certificate, and actively exploring real-world applications of data and intelligent systems.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: site.resumePath },
  tertiaryCta: { label: "Contact Me", href: "#contact" },
} as const;

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: "About Me",
  subheading: "Turning curiosity into data-driven solutions.",
  paragraphs: [
    "I'm a Computer Science Engineering student with a deep focus on Data Analytics, Data Science, Machine Learning and AI Engineering. I enjoy the entire journey of data — from cleaning messy datasets to extracting insights, building predictive models, and shipping AI-powered applications that solve real problems.",
    "My approach pairs a strong problem-solving mindset with a bias for continuous learning. I'm comfortable moving between SQL queries, Python notebooks, BI dashboards and modern LLM tooling, and I care about building things that are clean, reliable and genuinely useful.",
    "I'm actively looking for opportunities where I can contribute to data-driven and AI products, learn from strong engineers, and create measurable impact.",
  ],
  highlights: [
    { icon: "database" as IconName, label: "Data Analytics" },
    { icon: "chart" as IconName, label: "Data Science" },
    { icon: "brain" as IconName, label: "Machine Learning" },
    { icon: "sparkles" as IconName, label: "AI Engineering" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  ANIMATED STATISTICS                                                        */
/* -------------------------------------------------------------------------- */

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 4, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Tech & Tools" },
  { value: 1, suffix: "+", label: "Certifications" },
  { value: 200, suffix: "+", label: "Hours Learning" },
];

/* -------------------------------------------------------------------------- */
/*  SKILLS                                                                     */
/* -------------------------------------------------------------------------- */

export const skillGroups: {
  category: string;
  icon: IconName;
  skills: string[];
}[] = [
  {
    category: "Programming",
    icon: "code",
    skills: ["Python", "SQL"],
  },
  {
    category: "Data Analytics",
    icon: "chart",
    skills: ["Excel", "Google Sheets", "Power BI", "Tableau"],
  },
  {
    category: "Data Science",
    icon: "database",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
  },
  {
    category: "Machine Learning",
    icon: "brain",
    skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
  },
  {
    category: "Artificial Intelligence",
    icon: "sparkles",
    skills: ["LLM Applications", "Prompt Engineering", "AI Automation"],
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Jupyter Notebook", "BigQuery"],
  },
];

/* -------------------------------------------------------------------------- */
/*  CERTIFICATIONS  (add new objects to grow this section)                     */
/* -------------------------------------------------------------------------- */

export const certifications: {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    date: "2025",
    credentialUrl: "https://coursera.org/share/ffaf8a73dae3951e6da4e953f2264d76",
  },
  // Add more certifications here, e.g.:
  // { title: "TensorFlow Developer", issuer: "Google", date: "2026", credentialUrl: "#" },
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                   */
/*  `category` powers the filter buttons. Use any of:                          */
/*  "Data Analytics" | "Data Science" | "Machine Learning" | "AI"             */
/* -------------------------------------------------------------------------- */

export type ProjectCategory =
  | "Data Analytics"
  | "Data Science"
  | "Machine Learning"
  | "AI";

export const projectCategories: ProjectCategory[] = [
  "Data Analytics",
  "Data Science",
  "Machine Learning",
  "AI",
];

export const projects: {
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  image?: string; // path in /public or remote URL; falls back to a gradient
  github?: string;
  demo?: string;
  featured?: boolean;
}[] = [
  {
    title: "Redrob Ranker — Intelligent Candidate Discovery & Ranking System",
    category: "AI",
    description:
      "Built an AI-powered candidate ranking system that efficiently screened and ranked 100,000 resumes against a Senior AI Engineer job description using explainable scoring and LLM-assisted reasoning under strict hackathon constraints.",
    problem:
      "Recruiters face significant time and consistency challenges when manually screening thousands of resumes, especially under strict computational and time constraints.",
    solution:
      "Designed a streaming ranking pipeline that reverse-engineers job requirements, extracts structured candidate signals, applies interpretable multi-factor scoring, and generates fact-grounded reasoning while operating entirely on CPU without external network access.",
    impact:
      "Successfully ranked 100,000 candidates in approximately 60 seconds, producing deterministic and explainable results that satisfied the hackathon's runtime, memory, and reproducibility requirements.",
    techStack: ["Python", "Pandas", "Scikit-Learn","Algorithm Design","Information Retrieval","Git"],
    github: "https://github.com/datapiratepy/redrob-ranker",
    demo: "#",
    featured: true,
  },
  {
    title: "Customer Churn Analysis",
    category: "Machine Learning",
    description:
      "Built an end-to-end customer churn prediction project combining exploratory data analysis, machine learning, and Power BI dashboards to identify churn drivers and support data-driven retention strategies.",
    problem: "Subscription-based businesses often struggle to identify customers at risk of leaving, making proactive retention difficult and increasing revenue loss.",
    solution: "Preprocessed the Telco Customer Churn dataset, performed exploratory data analysis, trained a classification model using Scikit-learn, evaluated model performance with precision, recall, and confusion matrix, and developed an interactive Power BI dashboard to visualize churn patterns and business insights.",
    impact: "Identified major churn drivers such as contract type, customer tenure, payment method, and internet service, while demonstrating an end-to-end analytics and machine learning workflow for customer retention.",
    techStack: ["Python", "Pandas", "Seaborn","Matplotlib","Scikit-Learn","Power BI"],
    github: "https://github.com/datapiratepy/customer-churn-analysis",
    demo: "#",
  },
  {
    title: "Financial Markets Analytics",
    category: "Data Science",
    description:
      "Analyzed historical financial market data to evaluate portfolio performance, optimize asset allocation using Modern Portfolio Theory, and visualize the Efficient Frontier through Monte Carlo simulation.",
    problem: "Constructing an investment portfolio requires balancing expected returns with risk, making optimal asset allocation difficult without quantitative analysis.",
    solution: "Collected and analyzed historical stock data for major technology companies, measured returns, volatility, and asset correlations, simulated 5,000 portfolios using Monte Carlo methods, and identified the optimal portfolio by maximizing the Sharpe Ratio.",
    impact: "Demonstrated quantitative portfolio optimization by identifying an allocation that improved risk-adjusted returns while applying Modern Portfolio Theory to real-world financial market data.",
    techStack: ["Python","Pandas", "NumPy", "Matplotlib","Seaborn"],
    github: "https://github.com/datapiratepy/financial-markets-analytics",
    demo: "#",
  },
  {
    title: "Climate & Energy Analytics",
    category: "Data Analytics",
    description:
      "Analyzed historical CO₂ emissions and economic data using SQL and Python to uncover long-term environmental trends, compare major economies, and explore the relationship between emissions and economic growth.",
    problem: "Understanding long-term climate trends requires analyzing large environmental datasets to identify emission patterns, country-level differences, and their relationship with economic development.",
    solution: "Processed and queried CO₂ emissions data using Google BigQuery and SQL, performed time-series and comparative analysis with Python, and visualized country-level emissions, per-capita trends, and GDP correlations to generate actionable environmental insights.",
    impact: "Identified long-term emission trends across India, China, and the United States while demonstrating how SQL and data visualization can support evidence-based analysis of climate and economic indicators.",
    techStack: ["Python","Pandas","Matplotlib","SQL"],
    github: "https://github.com/datapiratepy/climate-energy-analytics",
    demo: "#",
  },
];

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE (timeline)                                                      */
/* -------------------------------------------------------------------------- */

export const experience: {
  role: string;
  org: string;
  period: string;
  type: "Internship" | "Hackathon" | "Education" | "Other";
  points: string[];
}[] = [
  {
    role: "AI & Cloud Intern",
    org: "IBM SkillsBuild & Edunet Foundation",
    period: "2026",
    type: "Internship",
    points: [
      "Completed hands-on training in data and AI fundamentals through IBM SkillsBuild.",
      "Applied analytics and ML concepts to guided, real-world style projects.",
    ],
  },
  {
    role: "Hackathons",
    org: "Various",
    period: "Ongoing",
    type: "Hackathon",
    points: [
      "Placeholder — list hackathons you participate in, your team and what you built.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  ACHIEVEMENTS                                                               */
/* -------------------------------------------------------------------------- */

export const achievements: {
  title: string;
  description: string;
  tag: "Hackathon" | "Certification" | "Academic" | "Competition";
}[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    description:
      "Earned the Google Data Analytics Professional Certificate covering the full analytics workflow.",
    tag: "Certification",
  },
];

/* -------------------------------------------------------------------------- */
/*  CONTACT                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's build something with data.",
  subheading:
    "Have a role, project or idea in mind? I'd love to hear about it. I usually respond within a day.",
  // Where the form submits. By default it opens the user's email client via mailto.
  // To use a real backend (e.g. Formspree), set `formEndpoint` to your endpoint URL.
  formEndpoint: "",
} as const;
