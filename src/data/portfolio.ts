export const portfolioData = {
  personal: {
    name: "Kandadi Manasa Reddy",
    role: "Backend Engineer",
    valueStatement: "Architecting scalable systems, robust APIs, and intelligent data pipelines.",
    location: "Hyderabad, India",
    email: "kandadimanasa03@gmail.com",
    phone: "7780631293",
    github: "https://github.com/MANASA-REDDY04",
    linkedin: "https://linkedin.com/in/kandadi-manasa",
    leetcode: "https://leetcode.com/u/manasa_1223/",
    about: "I am a backend-focused software engineer with a strong foundation in system design, database architecture, and cloud infrastructure. Currently working as a Software Engineer at Elevare Techinex LLP, I specialize in building highly scalable APIs, robust data pipelines (ETL/ELT), and integrating AI/LLMs into practical applications. While my core expertise lies in Node.js, Python (FastAPI), and AWS, I am also comfortable working across the full stack with Next.js when needed.",
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
      role: "Software Engineer (Backend & Full Stack)",
      company: "Elevare Techinex LLP",
      type: "Full-time",
      date: "Oct 2025 – Present",
      description: "Building scalable backend services and full-stack solutions."
    },
    {
      role: "Software Engineering Intern",
      company: "Elevare Techinex LLP",
      type: "Internship",
      date: "Aug 2025 – Oct 2025",
      description: "Contributed to core backend infrastructure and API development."
    },
    {
      role: "Freelance Full Stack Web Developer",
      company: "Self-Employed",
      type: "Freelance",
      date: "Jan 2024 – Present",
      description: "Developed end-to-end web applications (MERN, Tailwind, Vite) for various clients, including aadyafilms.com, a production house website."
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
      slug: "flairnow",
      title: "FlairNow",
      summary: "Event and exhibition management SaaS for the Indian market.",
      role: "Overall system and DB design, event lifecycle, RBAC, multi-channel notification system with queue-based async processing, UPI/GST-compliant payments.",
      stack: ["Node.js", "Next.js", "PostgreSQL", "AWS SQS", "Push/WhatsApp/Email"],
      liveUrl: "https://flairnow.in",
      githubUrl: null,
      architectureDecisions: [
        "Implemented a robust Role-Based Access Control (RBAC) system for organizers, exhibitors, and visitors.",
        "Designed a multi-channel notification system (Push, WhatsApp, Email) using an asynchronous queue-based architecture to handle high throughput without blocking main threads.",
        "Developed an event lifecycle management module with state transitions (draft to publish) and dynamic visibility controls.",
        "Integrated UPI/GST-compliant payment workflows."
      ],
      diagram: `graph TD
  A[Client Next.js] -->|REST API| B(Node.js Backend)
  B --> C[(PostgreSQL)]
  B -->|Async Events| D{AWS SQS Queue}
  D --> E[Notification Worker]
  E --> F[Email/WhatsApp/Push APIs]
  B --> G[Payment Gateway UPI]`
    },
    {
      slug: "trupoint",
      title: "Trupoint",
      summary: "Sales data intelligence and analytics platform.",
      role: "APIs, DB design, data pipelines, dashboards.",
      stack: ["FastAPI", "Next.js", "TanStack Query", "Zustand", "AWS S3", "Airbyte", "dbt"],
      liveUrl: "https://thetrupoint.in",
      githubUrl: null,
      architectureDecisions: [
        "Architected an ELT pipeline using Airbyte for data extraction and dbt for transformation within the data warehouse.",
        "Built a high-performance analytics API layer using FastAPI to serve complex queries to the frontend.",
        "Utilized AWS S3 for scalable data storage."
      ],
      diagram: `graph TD
  A[External Data Sources] -->|Extract| B(Airbyte)
  B -->|Load| C[(Data Warehouse / S3)]
  C -->|Transform| D(dbt)
  D --> E[(Analytics DB)]
  E --> F(FastAPI Backend)
  F --> G[Next.js Dashboard]`
    },
    {
      slug: "unified-operations-erp",
      title: "Unified Operations ERP",
      summary: "Comprehensive ERP system for streamlined operations.",
      role: "Relational schema, ORM models, API layer.",
      stack: ["FastAPI", "SQLAlchemy", "Next.js", "PostgreSQL"],
      liveUrl: "https://unified-operations-frontend.vercel.app/",
      githubUrl: null,
      architectureDecisions: [
        "Designed a complex relational schema to model diverse business operations.",
        "Implemented robust ORM models using SQLAlchemy for efficient and safe database interactions.",
        "Built a structured REST API layer with FastAPI."
      ],
      diagram: `graph TD
  A[Next.js Client] -->|REST| B(FastAPI Server)
  B -->|SQLAlchemy ORM| C[(PostgreSQL)]
  C -->|Schema| D{Business Entities}`
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
      title: "[PLACEHOLDER: AI Project 2]",
      description: "[PLACEHOLDER: Brief description of the AI project and its value.]",
      stack: ["Python", "AWS Bedrock", "LangChain"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "[PLACEHOLDER: AI Project 3]",
      description: "[PLACEHOLDER: Brief description of the AI project and its value.]",
      stack: ["FastAPI", "OpenAI", "Vector DB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "[PLACEHOLDER: AI Project 4]",
      description: "[PLACEHOLDER: Brief description of the AI project and its value.]",
      stack: ["Node.js", "Hugging Face"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ],
  otherProjects: [
    {
      title: "Smart Menu",
      description: "QR-based digital menu and ordering system with role-based access.",
      stack: ["React", "Node.js", "MongoDB", "JWT"],
      liveUrl: "https://smart-menu-serve.vercel.app/",
      githubUrl: "https://github.com/MANASA-REDDY04/smart-menu"
    }
  ]
};
