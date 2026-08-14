export const COMPANY_INFO = {
  name: "SPIDER TEAM",
  tagline: "INNOVATION. TECHNOLOGY. IMPACT.",
  description: "Nous concevons des solutions modernes pour construire les entreprises de demain.",
  about: {
    history: "SPIDER TEAM est née d'une vision commune : repousser les limites de la technologie pour créer un impact tangible dans le monde réel. Fondée par un collectif d'experts passionnés, l'entreprise s'est rapidement imposée comme un acteur clé de l'innovation digitale.",
    mission: "Notre mission est d'accompagner les organisations dans leur transformation technologique en leur fournissant des solutions sur mesure, innovantes et performantes.",
    vision: "S'affirmer comme le leader incontesté au niveau national avant de porter notre excellence sur la scène internationale, en façonnant l'avenir du numérique par des solutions d'avant-garde.",
    values: [
      { title: "Innovation", description: "Rechercher constamment de nouvelles manières de résoudre des problèmes complexes." },
      { title: "Excellence", description: "Viser la perfection dans chaque ligne de code et chaque pixel." },
      { title: "Intégrité", description: "Agir avec transparence et honnêteté envers nos clients et partenaires." },
      { title: "Créativité", description: "Fusionner l'art et la technologie pour créer des expériences uniques." },
      { title: "Collaboration", description: "Travailler main dans la main avec nos clients pour atteindre leurs objectifs." },
      { title: "Impact", description: "Créer des solutions qui apportent une valeur réelle et mesurable." },
    ]
  },
  contact: {
    phone: "+243891930977",
    whatsapp: "+243891930977",
    email: "therealspiderteam@gmail.com",
    address: "Avenue Inga, Quartier Kasuku, Commune Kasuku, Kindu, RDC",
    socials: {
      linkedin: "https://linkedin.com/company/spiderteam",
      twitter: "https://twitter.com/spiderteam",
      instagram: "https://instagram.com/spiderteam",
      github: "https://github.com/spiderteam",
    }
  }
};

export const SERVICES = [
  {
    id: "software",
    title: "Ingénierie Logicielle & ERP",
    description: "Conception de plateformes SaaS complexes, systèmes multi-tenant et architectures modulaires pour l'automatisation d'entreprise.",
    icon: "LayoutDashboard",
    image: "/assets/services/software.jpg",
  },
  {
    id: "mobile-web",
    title: "Développement Mobile & Web",
    description: "Création d'applications Android natives et d'interfaces web immersives, centrées sur l'utilisateur et optimisées pour la conversion.",
    icon: "Smartphone",
    image: "/assets/services/mobile.jpg",
  },
  {
    id: "ai-digital",
    title: "Transformation Digitale & IA",
    description: "Intégration d'Intelligence Artificielle (Copilots), digitalisation de processus métier et conseil en stratégie numérique.",
    icon: "Bot",
    image: "/assets/services/ai.jpg",
  },
  {
    id: "social-impact",
    title: "Solutions à Impact Social",
    description: "Développement de logiciels spécialisés pour la santé et l'humanitaire, alliant technologie et impact social tangible.",
    icon: "Heart",
    image: "/assets/services/social.jpg",
  },
  {
    id: "custom",
    title: "Solution Sur Mesure",
    description: "Un besoin spécifique ? Nous concevons des architectures uniques adaptées à vos défis techniques les plus complexes.",
    icon: "Wand2",
    image: "/assets/services/custom.jpg",
    isCustom: true,
  },
];

export const SECTORS = [
  "Technologie",
  "Digital",
  "Commerce",
  "Éducation",
  "Santé",
  "Agriculture",
  "Construction",
  "Transport",
  "Logistique",
  "Finance",
  "Industrie",
  "Entrepreneuriat",
];

export const PROJECTS = [
  {
    id: "proj-amka",
    title: "Amka Medical System",
    category: "Gestion Médicale",
    description: "Un système complet de gestion médicale conçu pour optimiser le suivi et l'administration des données de santé, accessible sur Web, Mobile et Desktop.",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Supabase", "Capacitor", "Electron", "Recharts"],
    image: "/assets/projects/amka.jpg",
  },
  {
    id: "proj-kgl",
    title: "KGL Management, Business & Consulting",
    category: "Site Vitrine",
    description: "Site web premium pour un cabinet de conseil spécialisé en management, gouvernance et finance en RDC et Afrique Centrale, avec support multilingue.",
    year: "2026",
    tech: ["HTML5", "CSS3", "JavaScript", "i18n", "Formspree"],
    image: "/assets/projects/kgl.jpg",
  },
  {
    id: "proj-wideqr",
    title: "WideQR",
    category: "App Mobile",
    description: "Application Android native permettant de scanner des QR codes pour se connecter automatiquement et instantanément à des réseaux WiFi.",
    year: "2026",
    tech: ["Kotlin", "Android SDK", "CameraX", "Google ML Kit", "AndroidX"],
    image: "/assets/projects/wideqr.jpg",
  },
  {
    id: "proj-wide-platform",
    title: "WIDE Enterprise Platform",
    category: "ERP SaaS",
    description: "Plateforme ERP SaaS mondiale et multi-tenant multi-secteur avec AI Copilot pour l'assistance intelligente.",
    year: "2026",
    tech: ["NestJS", "Prisma", "Next.js", "OpenAI", "Anthropic", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "proj-haid",
    title: "HAID RDC",
    category: "Site Vitrine",
    description: "Site institutionnel pour une agence humanitaire spécialisée dans l'énergie solaire, la cartographie par drones et l'innovation durable.",
    year: "2026",
    tech: ["HTML5", "CSS3", "JS", "GSAP", "AOS", "Lenis"],
    image: "/assets/projects/haid.jpg",
  },
];

export const TEAM = [
  {
    id: "member1",
    name: "Kay Nzogu",
    role: "CEO & Lead Developer",
    bio: "Visionnaire technologique et architecte logiciel, Kay allie direction stratégique et expertise technique pour bâtir des solutions innovantes.",
    image: "/assets/team/ceo.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    id: "member2",
    name: "Exaucé Magabe",
    role: "Head of Design",
    bio: "Expert en design UI/UX, Exaucé transforme des concepts complexes en interfaces élégantes et intuitives.",
    image: "/assets/team/cto.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    id: "member3",
    name: "Villa Chibulula",
    role: "Project Manager",
    bio: "Spécialiste en gestion de projet, Villa assure l'excellence opérationnelle et la satisfaction client à chaque étape.",
    image: "/assets/team/design.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    id: "member4",
    name: "Vincent Numbi",
    role: "Business Developer",
    bio: "Stratège commercial passionné, Vincent développe les partenariats clés pour propulser la croissance de l'agence.",
    image: "/assets/team/dev.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
    }
  },
];
