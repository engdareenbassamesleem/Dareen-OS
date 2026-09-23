import {
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Globe2,
  Layers3,
  MessagesSquare,
  Smartphone,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Dareen Esleem',
  role: 'AI Engineer & Software Developer',
  headline: 'Dareen OS',
  summary:
    'Mathematics graduate building practical AI and software systems across Python backends, retrieval, workflow automation, and React/TypeScript interfaces.',
  email: 'dareen1872001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dareenesleem2001/',
  github: 'https://github.com/engdareenbassamesleem',
};

export const heroCode = [
  'const engineer = new DareenOS({',
  "  foundation: 'mathematics + first-principles thinking',",
  "  focus: ['Python systems', 'applied AI', 'workflow automation'],",
  "  frontend: ['React', 'TypeScript', 'product interfaces'],",
  '});',
  '',
  "engineer.build('useful software');",
];

export const skills = [
  'Python',
  'FastAPI',
  'SQL',
  'SQLAlchemy',
  'TypeScript',
  'React',
  'Next.js',
  'REST APIs',
  'RAG & retrieval',
  'n8n automation',
  'Firebase',
  'Docker',
  'Git & GitHub',
  'GitHub Actions',
  'Flutter',
  'Testing',
];

export const services = [
  {
    icon: Code2,
    title: 'Python & Backend Systems',
    body: 'Building typed APIs, service layers, persistence, integrations, and testable backend behavior with clear boundaries.',
    signals: ['FastAPI', 'SQL', 'API design'],
  },
  {
    icon: BrainCircuit,
    title: 'Applied AI & Retrieval',
    body: 'Designing grounded AI features around retrieval, source metadata, provider boundaries, and explicit uncertainty.',
    signals: ['RAG', 'Embeddings', 'Grounding'],
  },
  {
    icon: Workflow,
    title: 'Automation & Integrations',
    body: 'Connecting workflows and external systems with idempotent processing, observability, and practical operational guardrails.',
    signals: ['n8n', 'Web APIs', 'Reliability'],
  },
  {
    icon: Globe2,
    title: 'Web Product Engineering',
    body: 'Building responsive product interfaces and dashboards that expose system state clearly instead of hiding complexity.',
    signals: ['React', 'TypeScript', 'Next.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Product Prototyping',
    body: 'Turning product ideas into structured flows and working interface prototypes across web and mobile.',
    signals: ['Flutter', 'UI systems', 'Prototyping'],
  },
];

export const projects = [
  {
    title: 'FlowMedic AI',
    status: 'Active portfolio build',
    category: 'Automation observability',
    description:
      'A read-only monitoring and incident-diagnosis system for n8n workflows, with durable persistence, deterministic health metrics, safe AI-assisted diagnosis, and a typed dashboard.',
    modules: ['n8n monitoring', 'Incident pipeline', 'Health & diagnosis'],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Next.js', 'Docker'],
    href: 'https://github.com/engdareenbassamesleem/flowmedic-ai',
  },
  {
    title: 'RAGSource',
    status: 'Portfolio MVP',
    category: 'Citation-first RAG',
    description:
      'A PDF knowledge assistant that preserves page-level provenance, retrieves semantic evidence, applies a grounding threshold, and returns traceable source markers.',
    modules: ['PDF ingestion', 'Semantic retrieval', 'Cited answers'],
    stack: ['Python', 'FastAPI', 'FastEmbed', 'Gemini', 'Docker'],
    href: 'https://github.com/engdareenbassamesleem/ragsource',
  },
  {
    title: 'SourceDesk',
    status: 'Learning project',
    category: 'Information retrieval',
    description:
      'A compact FAQ retrieval system built around BM25-style lexical ranking, exact source-preserving answers, and an explicit no-match state.',
    modules: ['BM25 retrieval', 'Source labels', 'No-match behavior'],
    stack: ['Python', 'Information retrieval', 'JavaScript'],
    href: 'https://github.com/engdareenbassamesleem/AI-Chatbot-WebApp',
  },
  {
    title: 'Dentivo AI',
    status: 'Application prototype',
    category: 'AI clinic workflow',
    description:
      'A React clinic-workflow prototype combining Firebase services with a Gemini-powered assistant for patient questions and structured booking-request collection.',
    modules: ['AI assistant', 'Firebase services', 'Clinic dashboard'],
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini'],
    href: 'https://github.com/engdareenbassamesleem/dentivo-ai',
  },
];

export const process = [
  {
    icon: MessagesSquare,
    title: 'Frame the problem',
    body: 'Clarify the user, constraints, inputs, failure modes, and expected outcome before choosing tools.',
  },
  {
    icon: DatabaseZap,
    title: 'Model the system',
    body: 'Define data flow, interfaces, invariants, and where AI or automation genuinely adds value.',
  },
  {
    icon: Layers3,
    title: 'Prototype quickly',
    body: 'Build the smallest working path that exposes real technical and product tradeoffs.',
  },
  {
    icon: Code2,
    title: 'Test the behavior',
    body: 'Add typed boundaries, deterministic checks, failure handling, and tests around important paths.',
  },
  {
    icon: Bot,
    title: 'Refine and ship',
    body: 'Improve clarity, performance, documentation, and handoff so the system is easier to inspect and extend.',
  },
];

export const contactFields = [
  {
    label: 'Email',
    value: profile.email,
    href: 'mailto:' + profile.email,
    helper: 'Best for internships, junior roles, and project conversations.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dareenesleem2001',
    href: profile.linkedin,
    helper: 'Professional background and updates.',
  },
  {
    label: 'GitHub',
    value: 'github.com/engdareenbassamesleem',
    href: profile.github,
    helper: 'Source code, tests, architecture notes, and project evidence.',
  },
];

export const designSignals = [
  { label: 'Education', value: 'BSc Mathematics · 2024' },
  { label: 'Backend', value: 'Python · FastAPI · SQL · APIs' },
  { label: 'AI', value: 'RAG · retrieval · structured generation' },
  { label: 'Product', value: 'React · TypeScript · automation' },
];
