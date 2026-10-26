export type Language = 'ar' | 'en';
export type Category = 'all' | 'ai' | 'automation' | 'product';

export const profile = {
  name: 'Dareen Esleem',
  email: 'dareen1872001@gmail.com',
  github: 'https://github.com/engdareenbassamesleem',
  linkedin: 'https://www.linkedin.com/in/dareenesleem2001/',
};

export const copy = {
  en: {
    nav: ['Work', 'About', 'Expertise'], contact: 'Let’s talk', menu: 'Toggle navigation',
    eyebrow: 'DAREEN ESLEEM / AI ENGINEER',
    title: ['Ideas into', 'systems that', 'think.'],
    intro: 'I’m Dareen, an AI engineer turning complex problems into thoughtful software. From grounded AI to connected workflows, I build with purpose.',
    explore: 'Explore my work', meet: 'A little about me', scroll: 'SCROLL TO EXPLORE',
    sceneLabel: 'INTERACTIVE EXPERIMENT / 001', neural: 'Neural core', orbital: 'Orbital field',
    drag: 'Move to explore · drag to rotate', pause: 'Pause animation', play: 'Play animation',
    rotate: 'Rotate scene', fallback: 'A network of ideas, connected.',
    strip: ['Applied AI', 'Human-centered software', 'Mathematical thinking'],
    workLabel: '01 / SELECTED WORK', workTitle: 'From curiosity', workAccent: 'to code.',
    workIntro: 'A selection of things I’m building, exploring, and learning from. Open the details to see the approach and source code.',
    filters: { all: 'All projects', ai: 'AI & retrieval', automation: 'Automation', product: 'Product' },
    details: 'Explore project', source: 'View source on GitHub', close: 'Close project',
    approach: 'The approach', scope: 'Current scope', builtWith: 'BUILT WITH',
    aboutLabel: '02 / THE PERSON BEHIND THE CODE', aboutTitle: 'Analytical mind.', aboutAccent: 'Creative instinct.',
    aboutBody: 'My foundation is mathematics. My medium is code. I bring both together to build AI experiences that make information easier to find, workflows easier to understand, and software easier to use.',
    aboutSecond: 'I’m especially interested in the space where intelligent systems meet real human needs: grounded answers, clear interfaces, and reliable automation.',
    principle: 'Start with the problem. Build with intention.',
    education: 'FOUNDATION', educationValue: 'BSc in Mathematics · 2024',
    focus: 'CURRENT FOCUS', focusValue: 'Applied AI & software engineering',
    expertiseLabel: '03 / WHAT I BRING', expertiseTitle: 'Built on logic.', expertiseAccent: 'Made for people.',
    expertise: [
      { title: 'Applied intelligence', body: 'Retrieval, semantic search, and AI assistants designed around evidence and useful answers.', tags: ['RAG', 'Embeddings', 'LLMs', 'Gemini'] },
      { title: 'Connected systems', body: 'Python backends and automated workflows with clear data flows and observable behavior.', tags: ['Python', 'FastAPI', 'SQL', 'n8n'] },
      { title: 'Thoughtful interfaces', body: 'Responsive interfaces that make complex systems feel approachable and understandable.', tags: ['React', 'TypeScript', 'Next.js', 'Firebase'] },
    ],
    contactLabel: '04 / NEXT CONNECTION', contactTitle: 'Good things start', contactAccent: 'with a conversation.',
    contactBody: 'Have an idea, an opportunity, or an interesting problem? I’d love to hear about it.',
    email: 'Send an email', copyEmail: 'Copy email address', copied: 'Email copied', copyFailed: 'Copy unavailable. You can select the email below.',
    footer: 'Built with curiosity, mathematics & a little Three.js.', back: 'Back to top',
  },
  ar: {
    nav: ['أعمالي', 'عنّي', 'خبراتي'], contact: 'لنتحدّث', menu: 'فتح وإغلاق القائمة',
    eyebrow: 'دارين إسليم / مهندسة ذكاء اصطناعي',
    title: ['أحوّل الأفكار', 'إلى أنظمة', 'تفكّر.'],
    intro: 'أنا دارين، مهندسة ذكاء اصطناعي أحوّل التحديات المعقّدة إلى برمجيات مدروسة. من أنظمة الذكاء الاصطناعي إلى أتمتة سير العمل، أبني حلولًا لها معنى.',
    explore: 'اكتشف أعمالي', meet: 'تعرّف عليّ', scroll: 'مرّر لاكتشاف المزيد',
    sceneLabel: 'تجربة تفاعلية / 001', neural: 'شبكة عصبية', orbital: 'مجال مداري',
    drag: 'حرّك المؤشر للاستكشاف · اسحب للتدوير', pause: 'إيقاف الحركة', play: 'تشغيل الحركة',
    rotate: 'تدوير المجسّم', fallback: 'أفكار تلتقي، وروابط تصنع المعنى.',
    strip: ['ذكاء اصطناعي تطبيقي', 'برمجيات محورها الإنسان', 'تفكير رياضي'],
    workLabel: '01 / أعمال مختارة', workTitle: 'من الفضول', workAccent: 'إلى الكود.',
    workIntro: 'مجموعة من المشاريع التي أبنيها وأتعلّم منها. اكتشف تفاصيل كل مشروع، وطريقة العمل عليه، وكوده المصدري.',
    filters: { all: 'كل المشاريع', ai: 'الذكاء الاصطناعي والبحث', automation: 'الأتمتة', product: 'المنتجات' },
    details: 'اكتشف المشروع', source: 'عرض الكود على GitHub', close: 'إغلاق المشروع',
    approach: 'طريقة العمل', scope: 'نطاق المشروع الحالي', builtWith: 'التقنيات المستخدمة',
    aboutLabel: '02 / خلف الكود', aboutTitle: 'عقل تحليلي.', aboutAccent: 'وروح مبدعة.',
    aboutBody: 'الرياضيات هي أساس تفكيري، والكود وسيلتي للبناء. أجمع بينهما لتطوير تجارب ذكاء اصطناعي تجعل الوصول إلى المعلومة أسهل، وسير العمل أوضح، والبرمجيات أبسط.',
    aboutSecond: 'يهمّني المكان الذي تلتقي فيه الأنظمة الذكية باحتياجات الناس: إجابات مرتبطة بمصادرها، وواجهات واضحة، وأتمتة يمكن فهمها ومتابعتها.',
    principle: 'أبدأ من المشكلة. وأبني بقصد.',
    education: 'الأساس الأكاديمي', educationValue: 'بكالوريوس رياضيات · 2024',
    focus: 'مجال تركيزي', focusValue: 'الذكاء الاصطناعي التطبيقي وهندسة البرمجيات',
    expertiseLabel: '03 / ما أقدّمه', expertiseTitle: 'أساسه المنطق.', expertiseAccent: 'وغايته الإنسان.',
    expertise: [
      { title: 'ذكاء تطبيقي', body: 'أنظمة استرجاع وبحث دلالي ومساعدات ذكية ترتكز على المصادر والإجابات المفيدة.', tags: ['RAG', 'Embeddings', 'LLMs', 'Gemini'] },
      { title: 'أنظمة مترابطة', body: 'خدمات خلفية بلغة بايثون وسير عمل مؤتمت، بتدفّق بيانات واضح وسلوك قابل للمراقبة.', tags: ['Python', 'FastAPI', 'SQL', 'n8n'] },
      { title: 'واجهات مدروسة', body: 'واجهات متجاوبة تجعل الأنظمة المعقّدة أقرب للناس وأسهل في الفهم والاستخدام.', tags: ['React', 'TypeScript', 'Next.js', 'Firebase'] },
    ],
    contactLabel: '04 / الاتصال القادم', contactTitle: 'الأفكار الجميلة تبدأ', contactAccent: 'بمحادثة.',
    contactBody: 'لديك فكرة، فرصة، أو تحدٍ مثير للاهتمام؟ يسعدني أن أسمع منك.',
    email: 'راسلني', copyEmail: 'نسخ البريد الإلكتروني', copied: 'تم نسخ البريد', copyFailed: 'النسخ غير متاح. يمكنك تحديد البريد أدناه.',
    footer: 'صُنع بالفضول والرياضيات وقليل من Three.js.', back: 'العودة للأعلى',
  },
};

export const projects = [
  {
    id: 'flowmedic', title: 'FlowMedic AI', category: 'automation' as Category,
    href: `${profile.github}/flowmedic-ai`, stack: ['Python', 'FastAPI', 'Next.js', 'Docker'],
    en: { label: 'AUTOMATION / OBSERVABILITY', status: 'Active portfolio build', description: 'A clearer picture of automated workflows. Monitoring and AI-assisted incident diagnosis for n8n.', approach: 'Read-only workflow monitoring with durable persistence, deterministic health metrics, an incident pipeline, and a typed dashboard.', scope: 'An active portfolio project exploring workflow observability and safe AI-assisted diagnosis. See the repository for implementation status and limitations.' },
    ar: { label: 'أتمتة / مراقبة الأنظمة', status: 'مشروع قيد التطوير', description: 'صورة أوضح لسير العمل المؤتمت. مراقبة وتشخيص للحوادث بمساعدة الذكاء الاصطناعي في n8n.', approach: 'مراقبة سير العمل دون تعديله، مع تخزين دائم، ومؤشرات صحة محدّدة، ومعالجة للحوادث، ولوحة متابعة.', scope: 'مشروع شخصي قيد التطوير لاستكشاف مراقبة سير العمل والتشخيص بمساعدة الذكاء الاصطناعي. حالة التنفيذ وحدوده موضّحة في المستودع.' },
  },
  {
    id: 'ragsource', title: 'RAGSource', category: 'ai' as Category,
    href: `${profile.github}/ragsource`, stack: ['Python', 'FastAPI', 'FastEmbed', 'Gemini'],
    en: { label: 'APPLIED AI / RETRIEVAL', status: 'Portfolio MVP', description: 'Answers with a paper trail. A PDF knowledge assistant that keeps every source within reach.', approach: 'PDF ingestion with page-level provenance, semantic retrieval, grounding thresholds, and traceable source markers in generated answers.', scope: 'A portfolio MVP for exploring citation-first retrieval. Grounding checks support source tracing; they do not guarantee answer correctness.' },
    ar: { label: 'ذكاء اصطناعي / استرجاع المعلومات', status: 'نسخة أولية', description: 'إجابات تعرف مصدرها. مساعد للبحث في ملفات PDF يُبقي المراجع قريبة من كل إجابة.', approach: 'معالجة ملفات PDF مع حفظ أرقام الصفحات، واسترجاع دلالي، وحدود لقبول الأدلة، وإشارات للمصادر داخل الإجابات.', scope: 'نسخة أولية لاستكشاف الاسترجاع المرتبط بالمصادر. فحوص الاستناد تساعد على تتبّع المراجع، ولا تضمن صحة كل إجابة.' },
  },
  {
    id: 'sourcedesk', title: 'SourceDesk', category: 'ai' as Category,
    href: `${profile.github}/AI-Chatbot-WebApp`, stack: ['Python', 'BM25', 'JavaScript'],
    en: { label: 'SEARCH / INFORMATION RETRIEVAL', status: 'Learning project', description: 'Find the right answer, or say when there isn’t one. A focused experiment in FAQ retrieval.', approach: 'BM25-style lexical ranking returns source-preserving answers, with explicit no-match behavior when the available information does not fit.', scope: 'A compact learning project in information retrieval. It explores lexical search rather than claiming general-purpose conversational intelligence.' },
    ar: { label: 'بحث / استرجاع المعلومات', status: 'مشروع تعلّمي', description: 'ابحث عن الإجابة المناسبة، ووضّح غيابها. تجربة مركّزة في البحث داخل الأسئلة الشائعة.', approach: 'ترتيب نصّي بأسلوب BM25 يعيد الإجابات مع مصادرها، ويعرض حالة واضحة عند عدم وجود نتيجة مناسبة.', scope: 'مشروع تعلّمي صغير لاستكشاف البحث النصّي واسترجاع المعلومات من الأسئلة الشائعة.' },
  },
  {
    id: 'dentivo', title: 'Dentivo AI', category: 'product' as Category,
    href: `${profile.github}/dentivo-ai`, stack: ['React', 'TypeScript', 'Firebase', 'Gemini'],
    en: { label: 'PRODUCT / AI ASSISTANT', status: 'Application prototype', description: 'A more connected clinic experience. An AI-assisted workflow prototype for patient questions and booking requests.', approach: 'A React interface backed by Firebase services, with a Gemini-powered assistant for patient questions and structured booking-request collection.', scope: 'An application prototype for clinic workflows, not a deployed clinical service. The assistant is not a medical diagnosis tool.' },
    ar: { label: 'منتج / مساعد ذكي', status: 'نموذج تطبيقي', description: 'تجربة عيادة أكثر ترابطًا. نموذج لسير عمل يساعد في أسئلة المرضى وجمع طلبات الحجز.', approach: 'واجهة React مرتبطة بخدمات Firebase، ومساعد يعتمد على Gemini لأسئلة المرضى وجمع بيانات طلبات الحجز.', scope: 'نموذج تطبيقي لسير عمل العيادات، وليس خدمة سريرية منشورة. المساعد ليس أداة للتشخيص الطبي.' },
  },
];
export type Project = (typeof projects)[number];
