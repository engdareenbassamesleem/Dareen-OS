import {
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Figma,
  Globe2,
  Layers3,
  MessagesSquare,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Dareen Esleem',
  role: 'AI Engineer & Software Developer',
  headline: 'Dareen OS',
  summary:
    'A premium engineering environment for turning product ideas into intelligent, useful software with calm systems thinking and polished execution.',
  email: 'hello@your-domain.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/engdareenbassamesleem',
  cv: '/Dareen-Esleem-CV.pdf',
};

export const heroCode = [
  'const engineer = new DareenOS({',
  "  focus: ['AI systems', 'software products', 'useful automation'],",
  "  principles: ['clarity', 'precision', 'taste', 'speed'],",
  '});',
  '',
  "engineer.assemble('DAREEN ESLEEM');",
];

export const skills = [
  'Python',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'AI automation',
  'Data workflows',
  'Prompt engineering',
  'Flutter',
  'UI/UX systems',
  'APIs',
  'Dashboards',
  'Product thinking',
];

export const services = [
  {
    icon: BrainCircuit,
    title: 'AI Systems',
    body: 'Designing AI-assisted workflows, retrieval patterns, structured prompts, and human-in-the-loop product logic.',
    signals: ['Reasoning flows', 'Data context', 'Evaluation loops'],
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    body: 'Replacing repetitive operational steps with reliable automations that are observable, editable, and grounded in real constraints.',
    signals: ['Process mapping', 'Integrations', 'Guardrails'],
  },
  {
    icon: Globe2,
    title: 'Web Applications',
    body: 'Building responsive interfaces, product dashboards, admin tools, and polished frontends with clean component systems.',
    signals: ['React', 'TypeScript', 'Performance'],
  },
  {
    icon: Figma,
    title: 'UI/UX',
    body: 'Turning complex product logic into elegant screens, clear flows, and interfaces that feel premium without becoming theatrical.',
    signals: ['Information design', 'Prototyping', 'Design systems'],
  },
  {
    icon: Smartphone,
    title: 'Flutter & Mobile',
    body: 'Creating mobile-first product experiences with practical state, clear navigation, and thoughtful interaction design.',
    signals: ['Flutter', 'Responsive UI', 'Product flows'],
  },
];

export const projects = [
  {
    title: 'FlowMedic AI',
    status: 'Prototype',
    category: 'AI healthcare workflow',
    description:
      'A concept for helping medical teams organize patient-facing workflows, triage signals, and operational notes with AI-assisted structure.',
    modules: ['Intake intelligence', 'Workflow queue', 'Care-note assistant'],
    stack: ['AI workflow design', 'Dashboard UX', 'Data modeling'],
  },
  {
    title: 'Dentivo AI',
    status: 'In development',
    category: 'Dental clinic intelligence',
    description:
      'An AI-focused product direction for dental practices, centered on clearer scheduling, patient communication, and treatment-plan support.',
    modules: ['Clinic command view', 'Patient context', 'Automation layer'],
    stack: ['Product strategy', 'AI assistant UX', 'Automation'],
  },
  {
    title: 'Tradex',
    status: 'Prototype',
    category: 'Commerce platform',
    description:
      'A marketplace and merchant experience exploration with shopper screens, product discovery, store views, and dashboard direction.',
    modules: ['Shopper journey', 'Merchant dashboard', 'Catalog system'],
    stack: ['Flutter/mobile', 'UI flows', 'Commerce UX'],
  },
  {
    title: 'AI Content Factory',
    status: 'Prototype',
    category: 'Content operations',
    description:
      'A structured content-generation workspace for transforming briefs into reusable campaign assets while keeping brand decisions editable.',
    modules: ['Brief parser', 'Content pipeline', 'Review workspace'],
    stack: ['Prompt systems', 'Automation', 'Editorial UX'],
  },
];

export const process = [
  {
    icon: MessagesSquare,
    title: 'Frame the Problem',
    body: 'Clarify the user, constraints, data, and business pressure before choosing tools.',
  },
  {
    icon: DatabaseZap,
    title: 'Shape the Intelligence',
    body: 'Design the data context, AI behavior, workflow boundaries, and review points.',
  },
  {
    icon: Layers3,
    title: 'Prototype the Product',
    body: 'Move quickly from concept to navigable product surfaces that expose real tradeoffs.',
  },
  {
    icon: Code2,
    title: 'Build the System',
    body: 'Implement resilient interfaces, integrations, and reusable patterns.',
  },
  {
    icon: Bot,
    title: 'Refine and Ship',
    body: 'Test behavior, simplify flows, improve performance, and prepare the product for real use.',
  },
];

export const contactFields = [
  { label: 'Email', value: profile.email, helper: 'Replace with your preferred portfolio email.' },
  { label: 'LinkedIn', value: profile.linkedin, helper: 'Paste your public LinkedIn profile URL.' },
  { label: 'GitHub', value: profile.github, helper: 'Already set to your GitHub username.' },
  { label: 'CV', value: profile.cv, helper: 'Add your final CV file to public/ and update this path.' },
];

export const designSignals = [
  { label: 'Interface', value: 'Premium engineering environment' },
  { label: 'Motion', value: 'Calm, purposeful, accessible' },
  { label: 'Stack', value: 'TypeScript, React, Tailwind, Three.js' },
  { label: 'Mode', value: 'Readable HTML first, WebGL enhanced' },
];

export const accentIcon = Sparkles;
