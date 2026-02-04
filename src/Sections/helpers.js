
export const projectItems = [
  {
    url: "https://image2doc.cvassia.com/",
    image: "assets/images/ocr.png",
    header: "Image2Doc",
    year: "2026",
    description:
      "Cross-platform mobile app converting photos of documents into editable Word files using Google Document AI OCR. Supports Greek and all Latin-based languages with secure document management.",
    descriptionSecondLine:
      "Built end-to-end with React Native, TypeScript, Node.js, and Express. Features on-device preprocessing, OCR integration, dynamic .docx generation, and authenticated user storage.",
    stacks: ["TypeScript", "React Native", "Expo", "Node.js", "Express", "Google Document AI"],

    details: {
      overview:
        "A mobile application designed to quickly digitize printed documents. Users can photograph or upload images, extract text via OCR, and export the results as editable .docx files directly from their phone.",

      role:
        "I built the entire application end-to-end: mobile frontend, backend API, authentication flow, OCR integration, and document management features.",

      architecture: [
        "React Native client with typed service layer",
        "Image preprocessing on device before upload",
        "Node.js API handling OCR requests",
        "Google Document AI for text extraction",
        "Server-side generation of Word files",
        "Authenticated user storage and CRUD operations",
      ],

      features: [
        "Capture or upload document images",
        "OCR support for Greek + Latin languages",
        "Export to formatted Word documents",
        "Save, rename, delete, and share files",
        "Secure Google / Apple login",
      ],

      challenges: [
        "Improving OCR accuracy through preprocessing",
        "Managing large image uploads on mobile",
        "Designing smooth asynchronous workflows",
        "Converting OCR results into clean .docx format",
      ],

      learned: [
        "Integrating AI services in mobile apps",
        "Building full-stack TypeScript solutions",
        "Handling file processing pipelines",
        "Designing authentication for mobile environments",
      ],

      github: "https://github.com/cvassia/NoteOCR",
    },
  },

  {
    url: "https://recursivetodoapp.cvassia.com/",
    image: "assets/images/toDo.png",
    header: "Recursive ToDo App",
    year: "2025",
    description:
      "Task management app supporting unlimited nested tasks, allowing users to structure complex workflows and hierarchies.",
    descriptionSecondLine:
      "Developed with Remix and TypeScript. Includes recursive UI rendering, Appwrite authentication, dynamic task trees, and unit-tested recursive logic.",
    stacks: ["TypeScript", "Remix", "Node.js", "Appwrite"],

    details: {
      overview:
        "A productivity application focused on structuring tasks in deeply nested hierarchies rather than traditional flat lists.",

      role:
        "Designed and developed the complete application, including UI logic, recursive rendering, authentication, and backend integration.",

      architecture: [
        "Recursive data model for tasks and subtasks",
        "Remix-based frontend with typed API layer",
        "Component tree rendering unlimited depth",
        "Secure authentication via Appwrite",
      ],

      features: [
        "Unlimited subtask nesting",
        "Expandable task trees",
        "Create, update, delete tasks",
        "Secure user accounts",
        "Clean minimal interface",
      ],

      challenges: [
        "Designing efficient recursive UI components",
        "Avoiding performance issues with deep nesting",
        "Keeping state predictable and scalable",
      ],

      learned: [
        "Advanced recursive UI patterns",
        "Structuring hierarchical data",
        "Building full-stack apps with Remix",
        "Type-safe application design",
      ],

      github: "https://github.com/cvassia/recursive-todo",
    },
  },
  {
    url: "https://www.hrlab.de/en",
    image: "assets/images/hrlab.jpg",
    header: "HRlab",
    year: "2020 - now",
    description:
      "Enterprise HR platform where I contribute to frontend development, building high-complexity features, optimizing performance, and maintaining a scalable React application for thousands of users.",
    descriptionSecondLine:
      "Implemented features using TypeScript, React, Redux, Styled Components, and React Query. Optimized dashboards, refactored legacy code, collaborated with designers and backend teams, and wrote unit & end-to-end tests.",
    stacks: ["TypeScript", "React", "Redux", "Styled Components", "Vite", "React Query", "Jest", "Cypress"],

    details: {
      overview:
        "HRlab is a professional HR management platform that handles employee administration, internal workflows, reporting, and enterprise-scale business operations. It supports complex dashboards, automated workflows, and large-scale data handling for enterprise clients.",

      role:
        "As a frontend developer, I contribute to building complex, high-impact features, optimize performance for critical dashboards, maintain scalable architecture, and collaborate closely with product owners, designers, and backend engineers to deliver robust, user-centric solutions."
      ,
      architecture: [
        "Large modular React codebase with reusable, type-safe component library",
        "Typed API integration using TypeScript with full error handling",
        "Performance-focused state management using Redux and React Query",
        "CI/CD pipelines with automated testing for unit, integration, and e2e coverage",
        "Scalable architecture supporting complex workflows and high concurrent user loads",
        "Responsive and accessible UI adhering to WCAG standards"
      ],

      features: [
        "Developed high-complexity enterprise features from design to deployment",
        "Integrated and optimized REST and GraphQL APIs",
        "Designed reusable components and standardized frontend patterns across the codebase",
        "Refactored legacy modules to improve maintainability and performance",
        "Implemented end-to-end testing strategy using Jest and Cypress",
        "Optimized rendering and state updates for complex dashboards with thousands of records",
        "Collaborated with designers to ensure pixel-perfect UI and UX consistency",
        "Mentored junior developers and conducted code reviews to maintain quality standards"
      ],

      challenges: [
        "Maintaining feature velocity while refactoring and improving legacy code",
        "Optimizing performance for enterprise-scale dashboards with high data throughput",
        "Ensuring consistency and scalability across a large, distributed codebase",
        "Integrating new features with minimal disruption to existing workflows",
        "Managing cross-team dependencies and coordinating with backend and design teams"
      ],

      learned: [
        "Advanced React patterns and scalable frontend architecture",
        "Mentoring and technical leadership in a cross-functional team",
        "End-to-end integration with backend services for enterprise applications",
        "Performance profiling and optimization for complex state-heavy UIs",
        "Writing maintainable, testable, production-ready code for large-scale systems",
        "Effective collaboration with stakeholders to deliver high-value features",
        "CI/CD pipelines and test automation for high-quality releases",
        "Designing accessible, responsive, and user-centric interfaces"
      ],

      github: null
    }
  }
];








//   {
//     url: "https://notes.cvassia.com/",
//     image: "assets/images/notesApp.png",
//     header: "Notes App",
//     year: "2023",
//     description:
//       "A lightweight note-taking application for managing everyday tasks and personal thoughts.",
//     descriptionSecondLine:
//       "Built with Remix and Prisma, providing a simple and intuitive interface for creating, editing, and organizing notes.",
//     stacks: ["JavaScript", "Remix", "Node.js", "Prisma"]
//   },

//   {
//     url: "https://art4kids.gr/",
//     image: "assets/images/manitou.jpg",
//     header: "ART4Kids",
//     year: "2021",
//     description:
//       "Portfolio website for a Greek musician specializing in composing and performing music for children.",
//     descriptionSecondLine:
//       "Custom WordPress implementation with tailored design and content structure to showcase projects, performances, and educational material.",
//     stacks: ["JavaScript", "WordPress"]
//   },



//   {
//     url: "https://weather.cvassia.com/",
//     image: "assets/images/weather.png",
//     header: "Weather App",
//     year: "2019",
//     description:
//       "Weather forecast application displaying national and local forecasts for cities worldwide.",
//     descriptionSecondLine:
//       "Shows 6-day forecasts with temperature ranges, sunrise and sunset times, wind speed, and humidity using Google Weather APIs.",
//     stacks: ["JavaScript", "SCSS", "Google API"]
//   }
// ];
