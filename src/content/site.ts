export type Category = "all" | "ai" | "automation" | "product";
export const profile = {
  "name": "Dareen Esleem",
  "email": "dareen1872001@gmail.com",
  "github": "https://github.com/engdareenbassamesleem",
  "linkedin": "https://www.linkedin.com/in/dareenesleem2001/"
};
export const copy = {
  "nav": [
    "Work",
    "About",
    "Expertise"
  ],
  "contact": "Let’s talk",
  "menu": "Toggle navigation",
  "eyebrow": "DAREEN ESLEEM / AI ENGINEER",
  "title": [
    "Ideas into",
    "systems that",
    "think."
  ],
  "intro": "I’m Dareen, an AI engineer turning complex problems into thoughtful software. From grounded AI to connected workflows, I build with purpose.",
  "explore": "Explore my work",
  "meet": "A little about me",
  "scroll": "SCROLL TO EXPLORE",
  "sceneLabel": "INTERACTIVE EXPERIMENT / 001",
  "neural": "Neural core",
  "orbital": "Orbital field",
  "drag": "Move to explore · drag to rotate",
  "pause": "Pause animation",
  "play": "Play animation",
  "rotate": "Rotate scene",
  "fallback": "A network of ideas, connected.",
  "strip": [
    "Applied AI",
    "Human-centered software",
    "Mathematical thinking"
  ],
  "workLabel": "01 / SELECTED WORK",
  "workTitle": "From curiosity",
  "workAccent": "to code.",
  "workIntro": "Selected AI and software projects, with the thinking and source code behind them. The interactive sculpture above is a procedural form study created for this portfolio.",
  "filters": {
    "all": "All projects",
    "ai": "AI & retrieval",
    "automation": "Automation",
    "product": "Product"
  },
  "details": "Explore project",
  "source": "View source on GitHub",
  "close": "Close project",
  "approach": "The approach",
  "scope": "Current scope",
  "builtWith": "BUILT WITH",
  "aboutLabel": "02 / THE PERSON BEHIND THE CODE",
  "aboutTitle": "Analytical mind.",
  "aboutAccent": "Creative instinct.",
  "aboutBody": "I am Dareen Esleem, a 3D design and AI engineer with a foundation in mathematics. My work connects visual thinking with the logic of intelligent systems: exploring form, shaping interactions, and building useful software.",
  "aboutSecond": "I am drawn to the intersection of aesthetics and computation. This website is a live example: procedural 3D forms, responsive motion, and an interactive experience built in code. Below are my AI and software projects, with their source repositories.",
  "principle": "Start with the problem. Build with intention.",
  "education": "FOUNDATION",
  "educationValue": "BSc in Mathematics · 2024",
  "focus": "CURRENT FOCUS",
  "focusValue": "3D design, interactive experiences & applied AI",
  "expertiseLabel": "03 / WHAT I BRING",
  "expertiseTitle": "Built on logic.",
  "expertiseAccent": "Made for people.",
  "expertise": [
    {
      "title": "3D design & visual thinking",
      "body": "Exploring form, composition, materials, light, and motion to shape dimensional visual experiences.",
      "tags": [
        "Form",
        "Materials",
        "Lighting",
        "Motion"
      ]
    },
    {
      "title": "Applied intelligence",
      "body": "Retrieval, semantic search, and AI assistants designed around evidence and useful answers.",
      "tags": [
        "RAG",
        "Embeddings",
        "LLMs",
        "Gemini"
      ]
    },
    {
      "title": "Creative engineering",
      "body": "Bringing visual ideas to life through interactive web experiences, typed interfaces, and practical software systems.",
      "tags": [
        "React",
        "TypeScript",
        "Three.js",
        "Python"
      ]
    }
  ],
  "contactLabel": "04 / NEXT CONNECTION",
  "contactTitle": "Good things start",
  "contactAccent": "with a conversation.",
  "contactBody": "Have an idea, an opportunity, or an interesting problem? I’d love to hear about it.",
  "email": "Send an email",
  "copyEmail": "Copy email address",
  "copied": "Email copied",
  "copyFailed": "Copy unavailable. You can select the email below.",
  "footer": "Built with curiosity, mathematics & a little Three.js.",
  "back": "Back to top"
};
export const projects = [
  {
    "id": "flowmedic",
    "title": "FlowMedic AI",
    "category": "automation",
    "href": "https://github.com/engdareenbassamesleem/flowmedic-ai",
    "stack": [
      "Python",
      "FastAPI",
      "Next.js",
      "Docker"
    ],
    "label": "AUTOMATION / OBSERVABILITY",
    "status": "Active portfolio build",
    "description": "A clearer picture of automated workflows. Monitoring and AI-assisted incident diagnosis for n8n.",
    "approach": "Read-only workflow monitoring with durable persistence, deterministic health metrics, an incident pipeline, and a typed dashboard.",
    "scope": "An active portfolio project exploring workflow observability and safe AI-assisted diagnosis. See the repository for implementation status and limitations."
  },
  {
    "id": "ragsource",
    "title": "RAGSource",
    "category": "ai",
    "href": "https://github.com/engdareenbassamesleem/ragsource",
    "stack": [
      "Python",
      "FastAPI",
      "FastEmbed",
      "Gemini"
    ],
    "label": "APPLIED AI / RETRIEVAL",
    "status": "Portfolio MVP",
    "description": "Answers with a paper trail. A PDF knowledge assistant that keeps every source within reach.",
    "approach": "PDF ingestion with page-level provenance, semantic retrieval, grounding thresholds, and traceable source markers in generated answers.",
    "scope": "A portfolio MVP for exploring citation-first retrieval. Grounding checks support source tracing; they do not guarantee answer correctness."
  },
  {
    "id": "sourcedesk",
    "title": "SourceDesk",
    "category": "ai",
    "href": "https://github.com/engdareenbassamesleem/AI-Chatbot-WebApp",
    "stack": [
      "Python",
      "BM25",
      "JavaScript"
    ],
    "label": "SEARCH / INFORMATION RETRIEVAL",
    "status": "Learning project",
    "description": "Find the right answer, or say when there isn’t one. A focused experiment in FAQ retrieval.",
    "approach": "BM25-style lexical ranking returns source-preserving answers, with explicit no-match behavior when the available information does not fit.",
    "scope": "A compact learning project in information retrieval. It explores lexical search rather than claiming general-purpose conversational intelligence."
  },
  {
    "id": "dentivo",
    "title": "Dentivo AI",
    "category": "product",
    "href": "https://github.com/engdareenbassamesleem/dentivo-ai",
    "stack": [
      "React",
      "TypeScript",
      "Firebase",
      "Gemini"
    ],
    "label": "PRODUCT / AI ASSISTANT",
    "status": "Application prototype",
    "description": "A more connected clinic experience. An AI-assisted workflow prototype for patient questions and booking requests.",
    "approach": "A React interface backed by Firebase services, with a Gemini-powered assistant for patient questions and structured booking-request collection.",
    "scope": "An application prototype for clinic workflows, not a deployed clinical service. The assistant is not a medical diagnosis tool."
  }
];
export type Project = (typeof projects)[number];
