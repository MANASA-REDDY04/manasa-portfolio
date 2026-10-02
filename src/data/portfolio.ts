export const portfolioData = {
  personal: {
    name: "Kandadi Manasa Reddy",
    role: "Backend & Product Design Engineer",
    valueStatement: "Specializing in high-performance architectures, complex database design, and building scalable products from the ground up.",
    location: "Hyderabad, India",
    email: "kandadimanasa03@gmail.com",
    phone: "7780631293",
    github: "https://github.com/MANASA-REDDY04",
    linkedin: "https://linkedin.com/in/kandadi-manasa",
    leetcode: "https://leetcode.com/u/manasa_1223/",
    about: "I am a Product Design and Backend Engineer obsessed with building systems that scale elegantly. My true specialty lies in crafting robust architectures and designing complex, highly optimized databases. While I have deep expertise in backend systems (Node.js, FastAPI, AWS), I also bring a strong product-centric mindset to everything I build, ensuring that the backend serves the ultimate user experience flawlessly.",
  },
  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"] },
    { category: "Backend & APIs", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication", "RBAC", "System Design", "Notification Systems", "Async/Queue-based Processing"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLAlchemy", "Database Design", "Data Modeling"] },
    { category: "Cloud (AWS)", items: ["S3", "EC2", "Lambda", "SQS", "SNS", "Bedrock"] },
    { category: "Data Engineering", items: ["ETL/ELT Pipelines", "dbt", "Airbyte"] },
    { category: "AI / LLM", items: ["Generative AI Integration", "LLM APIs (Gemini, AWS Bedrock)"] },
    { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TanStack Query", "Zustand", "Zod"] },
    { category: "Tools & Fundamentals", items: ["Git", "GitHub", "Postman", "DSA", "OOP", "DBMS"] }
  ],
  experience: [
    {
      company: "Elevare Techinex LLP",
      roles: [
        {
          title: "Product Engineer",
          type: "Full-time",
          date: "Oct 2025 – Present",
          summary: "Owning product and technical decisions across multiple production products: a SaaS platform, a data analytics platform and an operations ERP.",
          bullets: [
            "FlairNow (event and exhibition management SaaS): owned system design, database design and event lifecycle for a multi-role platform (organizers, exhibitors, visitors). Implemented **RBAC**, a multi-channel **notification system** (push, WhatsApp, email) with **queue-based async processing**, and UPI/GST-compliant payments.",
            "Trupoint (sales data intelligence): built FastAPI REST APIs and database design behind analytics dashboards, plus **ELT pipelines** with Airbyte, dbt and AWS S3.",
            "Unified Operations ERP: designed the relational schema and SQLAlchemy models and built the FastAPI API layer. Worked with AWS (S3, EC2, Lambda, SQS, SNS).",
            "Designed product UX and a design system for the mobile app, and built an Event Readiness dashboard."
          ],
          tags: ["Product Engineering", "Node.js", "Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "SQLAlchemy", "AWS", "dbt", "Airbyte"],
          links: [
            { label: "FlairNow", url: "https://flairnow.in" },
            { label: "Trupoint", url: "https://thetrupoint.in" },
            { label: "ERP", url: "https://unified-operations-frontend.vercel.app/" }
          ]
        },
        {
          title: "Software Engineering Intern",
          type: "Internship",
          date: "Aug 2025 – Oct 2025",
          summary: "Started on the backend and API work, then moved into a full-time engineering role.",
          bullets: [
            "[PLACEHOLDER: I will add 1–2 specific bullets for the internship.]"
          ],
          tags: ["Node.js", "REST APIs", "Databases"],
          links: []
        }
      ]
    },
    {
      company: "Freelance",
      roles: [
        {
          title: "Freelance Full Stack Web Developer",
          type: "Self-employed",
          date: "Jan 2024 – Present",
          summary: "Designed, built and deployed production websites end to end for clients.",
          bullets: [
            "aadyafilms.com: official website for the Aadya Films production house, built on the **MERN stack** with a responsive **React + Tailwind CSS** UI."
          ],
          tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
          links: [
            { label: "aadyafilms.com", url: "https://aadyafilms.com" }
          ]
        }
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech, Information Technology",
      institution: "Geethanjali College of Engineering and Technology",
      date: "Oct 2021 – Aug 2025",
      details: "CGPA 8.5/10"
    }
  ],
  achievements: [
    "250+ LeetCode problems solved.",
    "20+ DSA badges on Coding Ninjas.",
    "Top 700 out of 26,000 in Naukri's national coding competition."
  ],
  featuredProjects: [
    {
      slug: "trupoint",
      title: "Trupoint",
      summary: "Sales data intelligence and analytics platform.",
      role: "Frontend Developer & Backend Contributor (OAuth, Alerts/Reports Module).",
      stack: ["FastAPI", "Next.js", "TanStack Query", "Zustand", "AWS SNS", "Cron Jobs", "dbt"],
      liveUrl: "https://thetrupoint.in",
      githubUrl: null,
      architectureDecisions: [
        "Led frontend development, architecting intuitive dashboards for sales data visualization.",
        "Implemented secure OAuth authentication workflows on the backend.",
        "Designed and built a massive alerts and reports module utilizing AWS SNS and cron jobs for automated delivery.",
        "Gained deep understanding and contributed to the design of the ELT (Extract, Load, Transform) data pipeline architecture."
      ],
      diagram: `graph TD
  A[Next.js Frontend] -->|Auth| B(FastAPI Backend)
  B --> C[OAuth Provider]
  B -->|Cron Jobs| D{Report Generator}
  D --> E[AWS SNS]
  E --> F[Email/SMS Alerts]
  G[ELT Pipeline] --> H[(Analytics DB)]
  H --> B`
    },
    {
      slug: "flairnow",
      title: "FlairNow",
      summary: "Event and exhibition management SaaS for the Indian market.",
      role: "Lead Backend Engineer (70% of backend, DB design, LLM integration).",
      stack: ["Node.js", "PostgreSQL", "LLMs", "AWS", "Offline Scanning"],
      liveUrl: "https://flairnow.in",
      githubUrl: null,
      architectureDecisions: [
        "Architected the entire backend infrastructure, taking responsibility for ~70% of the backend codebase.",
        "Designed a complex, highly relational database schema to handle diverse event lifecycle states, organizers, and exhibitors.",
        "Integrated LLMs for automated data extraction from unstructured inputs.",
        "Implemented robust offline scanning capabilities for lead generation during exhibitions, syncing seamlessly when online."
      ],
      diagram: `graph TD
  A[Client App] -->|REST API| B(Node.js Backend)
  B --> C[(PostgreSQL DB)]
  B --> D[LLM Extraction Engine]
  A -->|Offline Mode| E[Local Cache]
  E -->|Sync| B`
    },
    {
      slug: "unified-operations-erp",
      title: "Unified Operations ERP",
      summary: "Comprehensive ERP system for construction site management and financial analysis.",
      role: "End-to-end Backend Engineer.",
      stack: ["FastAPI", "SQLAlchemy", "AWS Bedrock", "PostgreSQL"],
      liveUrl: "https://unified-operations-frontend.vercel.app/",
      githubUrl: null,
      architectureDecisions: [
        "Engineered the end-to-end backend architecture for a massive construction ERP.",
        "Integrated AWS Bedrock to extract structural data from complex PDF invoices, automating data entry for material and machinery costs.",
        "Developed modules to track employee PF, finance ledgers, and dynamic cost analysis.",
        "Modeled complex business logic into SQLAlchemy ORM for efficient relational querying."
      ],
      diagram: `graph TD
  A[ERP Frontend] -->|API| B(FastAPI Server)
  B --> C[(PostgreSQL)]
  B -->|PDF Uploads| D[AWS Bedrock Integration]
  D -->|Structured Data| B
  B --> E{Financial Analysis Engine}`
    }
  ],
  aiProjects: [
    {
      title: "Prep Wiser AI",
      description: "Generates customized interview questions using Gemini API.",
      stack: ["MERN", "Gemini API"],
      liveUrl: "https://prepwiseai-gamma.vercel.app/",
      githubUrl: "https://github.com/MANASA-REDDY04/prepwiseai"
    },
    {
      title: "Smart Menu",
      description: "QR-based digital menu and ordering system with role-based access.",
      stack: ["React", "Node.js", "MongoDB", "JWT"],
      liveUrl: "https://smart-menu-serve.vercel.app/",
      githubUrl: "https://github.com/MANASA-REDDY04/smart-menu"
    }
  ]
};
