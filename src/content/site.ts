export type Category = keyof typeof copy.filters;
export const profile = {
  "name": "Dareen Esleem",
  "email": "dareen1872001@gmail.com",
  "github": "https://github.com/engdareenbassamesleem",
  "linkedin": "https://www.linkedin.com/in/dareenesleem2001/"
};
export const copy = {
  "nav": [
    "3D Lab",
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
  "workLabel": "02 / REAL AI PROJECTS",
  "workTitle": "From curiosity",
  "workAccent": "to code.",
  "workIntro": "My personal AI projects, presented separately from the experimental 3D Lab. Open a project to explore its scope and any available source code.",
  "filters": {
    "all": "All projects",
    "automation": "AI automation",
    "product": "AI applications"
  },
  "details": "Explore project",
  "source": "View source on GitHub",
  "close": "Close project",
  "approach": "The approach",
  "scope": "Current scope",
  "builtWith": "BUILT WITH",
  "aboutLabel": "03 / THE PERSON BEHIND THE WORK",
  "aboutTitle": "Analytical mind.",
  "aboutAccent": "Creative instinct.",
  "aboutBody": "I am Dareen Esleem, a 3D design and AI engineer with a foundation in mathematics. My work connects visual thinking with the logic of intelligent systems: exploring form, shaping interactions, and building useful software.",
  "aboutSecond": "I am currently building and expanding my interactive 3D web portfolio, exploring product visualization, mouse-responsive objects, scroll-based motion, and immersive landing-page concepts.",
  "principle": "Start with the problem. Build with intention.",
  "education": "FOUNDATION",
  "educationValue": "BSc in Mathematics · 2024",
  "focus": "CURRENT FOCUS",
  "focusValue": "3D design, interactive experiences & applied AI",
  "expertiseLabel": "04 / MY PRACTICE",
  "expertiseTitle": "Built on logic.",
  "expertiseAccent": "Made for people.",
  "expertise": [
    {
      "title": "3D design & visual thinking",
      "body": "Exploring form, composition, materials, light, and motion to shape dimensional visual experiences.",
      "tags": [
        "Spline",
        "Three.js",
        "Figma",
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
  "contactLabel": "05 / NEXT CONNECTION",
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
    "id": "leadengine",
    "title": "Dareen AI Lead Engine",
    "category": "automation",
    "href": null,
    "stack": [
      "n8n",
      "AI / LLMs",
      "APIs",
      "Webhooks",
      "Google Sheets / Database Integrations"
    ],
    "label": "AI AUTOMATION PROJECT",
    "status": "Personal project",
    "description": "An AI-powered n8n system for capturing, analyzing, qualifying, and scoring incoming leads before triggering an automated business workflow.",
    "approach": "Lead Capture → Data Processing → AI Analysis → Lead Qualification → Lead Scoring → Automated Action. AI analyzes and classifies incoming information, assigns qualification or priority details, and supports the appropriate automated action.",
    "scope": "A personal AI automation project. There is currently no public repository or live demo URL for this project."
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
  },
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
  }
];
export type Project = (typeof projects)[number];
