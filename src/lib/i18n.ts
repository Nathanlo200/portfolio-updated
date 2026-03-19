export type Locale = "en" | "fr";

export const supportedLocales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

export const localeFromString = (value: string | undefined): Locale => {
  if (!value) return defaultLocale;
  const code = value.split("-")[0].toLowerCase();
  if (code === "fr") return "fr";
  return "en";
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // header
    home: "Home",
    about: "About",
    work: "Work",
    blog: "Blog",
    gallery: "Gallery",
    contact: "Contact",
    themeSystem: "System",
    themeDark: "Dark",
    themeLight: "Light",
    // greetings
    greetingHello: "Hello",
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    // home page
    homeTagline: "Building secure, scalable platforms",
    homeSubtagline: "that people love to use",
    homeAbout: "About me",
    homeWork: "Explore work",
    homeSecurity: "Security-first engineering",
    homeSecurityCopy:
      "I build systems with defense in depth, automated testing, and threat-informed design so your product stays resilient at scale.",
    homeOwnership: "End-to-end ownership",
    homeOwnershipCopy:
      "From concept to launch, I ship fast while keeping architecture maintainable, secure, and aligned with business needs.",
    homeMentoring: "Mentoring & leadership",
    homeMentoringCopy:
      "I help teams grow with clear processes, focused feedback, and shared ownership so engineers feel confident shipping high-quality work.",
    homeBlogHeader: "Latest on the blog",
    homeBlogCopy:
      "I write about web security, tooling, and the day-to-day tradeoffs of building products. Check out the latest posts or dive in from the blog page.",
    homeReadBlog: "Read the blog",
    homeSayHello: "Say hello",
    // about page
    aboutTitle: "About",
    aboutIntro:
      "I’m Nathan Lomito — a software engineer and cybersecurity specialist with over 5 years of experience building reliable, secure web platforms. I focus on end-to-end systems: from infrastructure and APIs to frontend UX.",
    aboutDownloadEn: "Download CV (EN)",
    aboutDownloadFr: "Download CV (FR)",
    aboutExperience: "Experience",
    aboutExperienceCopy:
      "5+ years designing and shipping software for startups and enterprise teams, with a strong focus on security, reliability, and scalability.",
    aboutExperienceList1: "Led secure API design and implementation",
    aboutExperienceList2: "Built observability pipelines (metrics + logging + alerts)",
    aboutExperienceList3: "Developed incident response tooling and runbooks",
    aboutFocus: "Focus areas",
    aboutFocusCopy:
      "I help teams build systems that are resilient, performant, and secure. My work covers everything from infrastructure as code to application hardening.",
    aboutStack: "Tech stack",
    aboutStackCopy: "The tools I use to design and ship software reliably.",
    aboutTools: "Tools",
    aboutToolsCopy:
      "Used for building, testing, monitoring, and securing systems.",
    // blog
    blogTitle: "Blog",
    blogIntro:
      "Notes, guides, and lessons learned while building secure web systems.",
    blogFilters: "Filters",
    blogLooking:
      "Looking for something specific? Use the filters above or jump straight into a post. If you want help thinking through a security design or architecture tradeoff, reach out on the contact page.",
    blogGetInTouch: "Get in touch",
    // contact
    contactTitle: "Contact",
    contactIntro:
      "If you’re looking to hire me or collaborate on a project, reach out directly using one of the options below.",
    contactReachMe: "Reach me directly",
    contactLooking: "What I’m looking for",
    contactLookingCopy:
      "I’m typically interested in full-stack, security-focused, or tooling projects where I can help build scalable systems, improve security posture, and support teams with strong engineering practices.",
    contactRemote: "Remote-friendly engagements (contract or full-time)",
    contactSecurity: "Security engineering, audit readiness, or secure infrastructure",
    contactMentor: "Mentor-driven collaboration and clear communication",
    contactEmailLabel: "Email",
    contactWhatsAppLabel: "WhatsApp",
    contactGitHubLabel: "GitHub",
    // gallery
    galleryTitle: "Gallery",
    galleryIntro: "A curated collection of snapshots from mobile and web projects.",
    galleryLockedText:
      "This gallery is protected. Enter the password to view the content.",
    galleryPasswordPlaceholder: "Enter password",
    galleryUnlockButton: "Unlock gallery",
    galleryPasswordError: "Incorrect password. Try again.",
    // work
    workTitle: "Work",
    workIntro:
      "Selected projects highlighting security, scalability, and user experience.",
    // footer
    footer: "© {year} Nathan Lomito — built with Next.js.",
  },
  fr: {
    // header
    home: "Accueil",
    about: "À propos",
    work: "Travail",
    blog: "Blog",
    gallery: "Galerie",
    contact: "Contact",
    themeSystem: "Système",
    themeDark: "Sombre",
    themeLight: "Clair",
    // greetings
    greetingHello: "Bonjour",
    greetingMorning: "Bonjour",
    greetingAfternoon: "Bon après-midi",
    greetingEvening: "Bonsoir",
    // home page
    homeTagline: "Construire des plateformes sécurisées et évolutives",
    homeSubtagline: "que les gens aiment utiliser",
    homeAbout: "À propos",
    homeWork: "Voir mes projets",
    homeSecurity: "Ingénierie axée sur la sécurité",
    homeSecurityCopy:
      "Je construis des systèmes avec une défense en profondeur, des tests automatisés et une conception inspirée par les menaces pour que votre produit reste résilient à grande échelle.",
    homeOwnership: "Prise en charge de bout en bout",
    homeOwnershipCopy:
      "De la conception au lancement, je livre rapidement tout en maintenant une architecture maintenable, sécurisée et alignée sur les besoins métier.",
    homeMentoring: "Mentorat & leadership",
    homeMentoringCopy:
      "J’aide les équipes à grandir avec des processus clairs, des retours ciblés et une propriété partagée afin que les ingénieurs se sentent confiants pour livrer un travail de qualité.",
    homeBlogHeader: "Derniers articles",
    homeBlogCopy:
      "J’écris sur la sécurité web, les outils et les compromis du quotidien dans la construction de produits. Découvrez les derniers articles ou plongez directement dans le blog.",
    homeReadBlog: "Lire le blog",
    homeSayHello: "Dire bonjour",
    // about page
    aboutTitle: "À propos",
    aboutIntro:
      "Je suis Nathan Lomito — ingénieur logiciel et spécialiste cybersécurité avec plus de 5 ans d’expérience dans la construction de plateformes web fiables et sécurisées. Je me concentre sur les systèmes de bout en bout : de l’infrastructure aux API et à l’UX frontend.",
    aboutDownloadEn: "Télécharger le CV (EN)",
    aboutDownloadFr: "Télécharger le CV (FR)",
    aboutExperience: "Expérience",
    aboutExperienceCopy:
      "Plus de 5 ans à concevoir et livrer des logiciels pour des startups et des entreprises, avec un fort accent sur la sécurité, la fiabilité et l’évolutivité.",
    aboutExperienceList1: "Conçu et implémenté des API sécurisées",
    aboutExperienceList2:
      "Construit des pipelines d’observabilité (métriques + journaux + alertes)",
    aboutExperienceList3:
      "Développé des outils de réponse aux incidents et des runbooks",
    aboutFocus: "Domaines d’expertise",
    aboutFocusCopy:
      "J’aide les équipes à construire des systèmes résilients, performants et sécurisés. Mon travail couvre tout, de l’infrastructure as code au durcissement des applications.",
    aboutStack: "Stack technique",
    aboutStackCopy:
      "Les outils que j’utilise pour concevoir et livrer des logiciels de manière fiable.",
    aboutTools: "Outils",
    aboutToolsCopy:
      "Utilisés pour construire, tester, surveiller et sécuriser des systèmes.",
    // blog
    blogTitle: "Blog",
    blogIntro:
      "Notes, guides et leçons apprises lors de la construction de systèmes web sécurisés.",
    blogFilters: "Filtres",
    blogLooking:
      "Vous cherchez quelque chose de spécifique ? Utilisez les filtres ci-dessus ou entrez directement dans un article. Si vous avez besoin d’aide pour réfléchir à un design de sécurité ou à un compromis d’architecture, contactez-moi.",
    blogGetInTouch: "Me contacter",
    // contact
    contactTitle: "Contact",
    contactIntro:
      "Si vous cherchez à m’engager ou à collaborer sur un projet, contactez-moi directement en utilisant l’une des options ci-dessous.",
    contactReachMe: "Contactez-moi directement",
    contactLooking: "Ce que je recherche",
    contactLookingCopy:
      "Je m’intéresse généralement aux projets full-stack, axés sur la sécurité ou les outils, où je peux aider à construire des systèmes évolutifs, améliorer la posture de sécurité et soutenir les équipes avec de bonnes pratiques d’ingénierie.",
    contactRemote: "Engagements à distance (contrat ou CDI)",
    contactSecurity:
      "Ingénierie de la sécurité, préparation aux audits ou infrastructure sécurisée",
    contactMentor:
      "Collaboration mentorée et communication claire",
    contactEmailLabel: "Email",
    contactWhatsAppLabel: "WhatsApp",
    contactGitHubLabel: "GitHub",
    // gallery
    galleryTitle: "Galerie",
    galleryIntro: "Une collection sélectionnée de captures d’écran de projets mobiles et web.",
    galleryLockedText:
      "Cette galerie est protégée. Entrez le mot de passe pour voir le contenu.",
    galleryPasswordPlaceholder: "Entrez le mot de passe",
    galleryUnlockButton: "Déverrouiller la galerie",
    galleryPasswordError: "Mot de passe incorrect. Réessayez.",
    // work
    workTitle: "Travail",
    workIntro:
      "Projets sélectionnés mettant en avant la sécurité, l’évolutivité et l’expérience utilisateur.",
    // footer
    footer: "© {year} Nathan Lomito — construit avec Next.js.",
  },
};

export function t(locale: Locale, key: string, replacements?: Record<string, string>) {
  const value = translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
  if (!replacements) return value;
  return Object.entries(replacements).reduce(
    (acc, [k, v]) => acc.replace(`{${k}}`, v),
    value
  );
}
