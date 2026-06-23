export const personal = {
  name:      'Tayeb Souini',
  firstName: 'Tayeb',
  title:     ['Développeur Full Stack', 'Laravel & Vue.js', 'Formateur Web', 'Freelance'],
  tagline:   'Développeur Web Full Stack spécialisé en Laravel & Vue.js avec 3 ans d\'expérience. Je conçois des applications web modernes, robustes et performantes — de l\'API au frontend.',
  email:     'tayebsouini.2@gmail.com',
  location:  'Maroc',
  linkedin:  'https://www.linkedin.com/',
  github:    'https://github.com/',
  cv:        '/assets/cv-tayeb-souini.pdf',
  photo:     '',
  available: true,
}

export const about = {
  paragraphs: [
    'Développeur Web Full Stack avec <strong class="text-white">3 ans d\'expérience</strong>, je suis spécialisé dans la conception et le développement d\'applications web modernes avec Laravel et Vue.js. J\'interviens sur l\'ensemble du cycle de développement : de l\'analyse des besoins à la mise en production.',
    'En parallèle de mon activité de développement, j\'exerce comme <strong class="text-white">Formateur référent en développement web à Youcode</strong>, dans un environnement <em>Learning by Doing</em> et <em>Learning by Teaching</em>, ce qui renforce ma capacité à concevoir des architectures solides et à transmettre des bonnes pratiques.',
    'Aujourd\'hui en <strong class="text-white">phase de lancement freelance</strong>, je recherche des missions sur Laravel, Vue.js, création d\'API REST et développement Full Stack pour accompagner startups, entreprises et porteurs de projets.',
  ],
  stats: [
    { number: '3+',   label: 'Ans d\'expérience' },
    { number: '4+',   label: 'Projets réalisés' },
    { number: '15+',  label: 'Technologies maîtrisées' },
    { number: '100%', label: 'Disponible Freelance' },
  ],
  differentiators: [
    { icon: '🧠', title: 'Double expertise',  text: 'Développeur Full Stack + Formateur web — une vision globale du code et de la pédagogie.' },
    { icon: '⚙️', title: 'Cycle complet',     text: 'Analyse, UML, BDD, Backend, API, Frontend responsive — de A à Z.' },
    { icon: '🤝', title: 'Agile & Scrum',     text: 'Habituée aux méthodologies Agile, Git Flow, travail en équipe pluridisciplinaire.' },
    { icon: '🚀', title: 'Disponible',         text: 'En recherche active de missions freelance : Laravel, Vue.js, Full Stack.' },
  ],
}

export const skills = [
  {
    category: 'Backend', icon: '⚙️', color: 'indigo',
    items: [
      { name: 'Laravel',           level: 90 },
      { name: 'PHP 8+',            level: 88 },
      { name: 'Java',              level: 75 },
      { name: 'Spring Boot',       level: 70 },
      { name: 'API REST',          level: 90 },
      { name: 'Eloquent ORM',      level: 88 },
      { name: 'Architecture MVC',  level: 92 },
      { name: 'Docker',            level: 55 },
    ],
  },
  {
    category: 'Frontend', icon: '🎨', color: 'violet',
    items: [
      { name: 'Vue.js',            level: 85 },
      { name: 'JavaScript ES6+',   level: 85 },
      { name: 'Angular',           level: 70 },
      { name: 'HTML5',             level: 95 },
      { name: 'CSS3',              level: 90 },
      { name: 'Tailwind CSS',      level: 88 },
      { name: 'Bootstrap',         level: 85 },
    ],
  },
  {
    category: 'Base de données', icon: '🗄️', color: 'cyan',
    items: [
      { name: 'MySQL',             level: 88 },
      { name: 'PostgreSQL',        level: 80 },
      { name: 'Modélisation BDD',  level: 85 },
      { name: 'SQL avancé',        level: 82 },
    ],
  },
  {
    category: 'Outils & Méthodes', icon: '🛠️', color: 'emerald',
    items: [
      { name: 'Git & GitHub',      level: 88 },
      { name: 'Scrum Agile',       level: 85 },
      { name: 'UML',               level: 82 },
      { name: 'Postman',           level: 85 },
      { name: 'Git Flow',          level: 80 },
      { name: 'AJAX / Fetch',      level: 85 },
    ],
  },
  {
    category: 'Complémentaires', icon: '📱', color: 'rose',
    items: [
      { name: 'Flutter',           level: 55 },
      { name: 'C# .NET',           level: 55 },
      { name: 'Laravel Blade',     level: 88 },
      { name: 'JSON / XML',        level: 90 },
    ],
  },
]

export const projects = [
  {
    id:          'youevent',
    title:       'YouEvent',
    subtitle:    'Plateforme de gestion d\'événements',
    description: 'Application web complète permettant la gestion des événements, des participants, des inscriptions et l\'administration générale avec une interface moderne et responsive.',
    longDescription: [
      'YouEvent est une plateforme full stack développée avec Laravel et Vue.js, conçue pour simplifier la gestion complète d\'événements de toutes tailles.',
      'L\'application propose un tableau de bord administrateur complet, un système d\'inscription en ligne pour les participants, ainsi qu\'une consommation d\'API REST structurée pour la communication entre le frontend Vue.js et le backend Laravel.',
      'L\'interface utilisateur est pensée pour être intuitive, responsive et moderne, avec une attention particulière portée à l\'expérience utilisateur sur mobile.',
    ],
    tags:       ['Laravel', 'Vue.js', 'MySQL', 'API REST', 'Tailwind CSS'],
    category:   'fullstack',
    featured:   true,
    github:     '',
    demo:       '',
    image:      '',
    emoji:      '🎉',
    features: [
      'Gestion complète des événements (CRUD)',
      'Système d\'inscription et gestion des participants',
      'Tableau de bord administrateur',
      'Consommation d\'API REST',
      'Interface responsive et moderne',
      'Gestion des rôles et permissions',
    ],
    challenges: [
      'Conception de l\'architecture API REST avec Laravel',
      'Synchronisation en temps réel entre le frontend Vue.js et l\'API',
      'Gestion des inscriptions avec validation métier',
    ],
    year: '2024',
  },
  {
    id:          'hotel-reservation',
    title:       'Réservation Hôtelière',
    subtitle:    'Gestion complète d\'un hôtel',
    description: 'Application de gestion hôtelière avec gestion des chambres, réservations, disponibilités et clients — interface admin complète.',
    longDescription: [
      'Ce système de réservation hôtelière est une application web robuste permettant à un établissement de gérer l\'ensemble de ses opérations : chambres, clients, réservations et disponibilités.',
      'Le backend Laravel assure une API fiable et sécurisée, avec gestion des authentifications, des rôles (admin, réceptionniste) et des règles métier complexes liées aux réservations.',
      'Le frontend offre une interface claire pour visualiser les disponibilités et effectuer des réservations sans conflits de dates.',
    ],
    tags:       ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    category:   'backend',
    featured:   true,
    github:     '',
    demo:       '',
    image:      '',
    emoji:      '🏨',
    features: [
      'Gestion des chambres et catégories',
      'Réservation avec détection des conflits de dates',
      'Gestion des clients et historique',
      'Tableau de bord des disponibilités',
      'Authentification et gestion des rôles',
      'Rapports et statistiques',
    ],
    challenges: [
      'Gestion des conflits de dates de réservation',
      'Modélisation des règles métier complexes',
      'Optimisation des requêtes SQL pour les disponibilités',
    ],
    year: '2024',
  },
  {
    id:          'hackathon-platform',
    title:       'Plateforme Hackathon',
    subtitle:    'Gestion complète de hackathons',
    description: 'Plateforme de gestion de hackathons incluant la gestion des éditions, des équipes, des participants et des résultats avec consommation d\'API.',
    longDescription: [
      'Cette plateforme est dédiée à l\'organisation et la gestion complète de hackathons. Elle permet de créer des éditions, gérer les équipes et leurs membres, suivre les inscriptions et publier les résultats.',
      'Développée en Laravel pour le backend et Vue.js pour le frontend, l\'application met l\'accent sur la gestion dynamique des données via une API REST.',
      'La plateforme intègre également un système de scoring et de classement des équipes, avec des tableaux de bord en temps réel.',
    ],
    tags:       ['Laravel', 'Vue.js', 'PostgreSQL', 'API REST', 'Tailwind CSS'],
    category:   'fullstack',
    featured:   true,
    github:     '',
    demo:       '',
    image:      '',
    emoji:      '💻',
    features: [
      'Gestion multi-éditions de hackathons',
      'Inscription et gestion des équipes',
      'Gestion des participants par équipe',
      'Système de scoring et classement',
      'Consommation d\'API REST',
      'Tableau de résultats en temps réel',
    ],
    challenges: [
      'Architecture multi-tenant pour les éditions',
      'Gestion des inscriptions en temps réel',
      'Conception du modèle de données flexible',
    ],
    year: '2024',
  },
  {
    id:          'shi-match',
    title:       'Shi Match',
    subtitle:    'Écosystème sportif connecté',
    description: 'Application web et mobile personnelle visant à connecter les différents acteurs du sport : joueurs, clubs, arbitres et organisateurs d\'événements.',
    longDescription: [
      'Shi Match est un projet personnel ambitieux : un écosystème digital dédié au monde du sport, permettant de connecter joueurs, clubs, arbitres, coachs et organisateurs d\'événements sportifs.',
      'L\'application propose des profils détaillés pour chaque type d\'acteur, un système de mise en relation, la gestion d\'événements sportifs et un moteur de recherche avancé.',
      'Le projet est développé en version web avec Laravel/Vue.js et en version mobile avec Flutter, partageant une API REST commune.',
    ],
    tags:       ['Laravel', 'Vue.js', 'Flutter', 'API REST', 'MySQL'],
    category:   'fullstack',
    featured:   false,
    github:     '',
    demo:       '',
    image:      '',
    emoji:      '⚽',
    features: [
      'Profils multi-types (joueurs, clubs, arbitres)',
      'Système de mise en relation entre acteurs',
      'Gestion d\'événements sportifs',
      'Moteur de recherche avancé',
      'Application mobile Flutter',
      'API REST commune web/mobile',
    ],
    challenges: [
      'Conception d\'une API polyvalente web + mobile',
      'Gestion des différents types de profils utilisateurs',
      'Développement simultané web (Vue.js) et mobile (Flutter)',
    ],
    year: '2025',
  },
]

export const experience = [
  {
    role:        'Formateur Référent — Développement Web',
    company:     'Youcode',
    period:      '2023 — Présent',
    description: 'Formation de développeurs web dans un environnement basé sur Learning by Doing et Learning by Teaching. Encadrement d\'équipes d\'apprenants, conception de parcours pédagogiques, accompagnement sur des projets réels avec méthodologie Agile Scrum.',
    tags:        ['Laravel', 'Vue.js', 'Scrum', 'Pédagogie'],
  },
  {
    role:        'Développeur Web Full Stack',
    company:     'Freelance',
    period:      '2025 — Présent',
    description: 'Développement d\'applications web full stack pour clients et startups. Spécialisé Laravel, Vue.js, API REST. Disponible pour missions de développement, maintenance et nouvelles fonctionnalités.',
    tags:        ['Laravel', 'Vue.js', 'API REST', 'Freelance'],
  },
]

export const education = [
  {
    degree:      'Formation Développement Web Full Stack',
    school:      'Youcode',
    period:      '2022 — 2023',
    description: 'Formation intensive en développement web : PHP, Laravel, JavaScript, Vue.js, bases de données, architecture MVC, méthodologie Agile.',
  },
]

export const services = [
  { icon: '🔧', title: 'Développement d\'API REST',      description: 'Conception et développement d\'APIs RESTful avec Laravel — authentification, gestion des rôles, documentation.' },
  { icon: '🖥️', title: 'Applications Full Stack',        description: 'Développement complet d\'applications web : backend Laravel + frontend Vue.js, responsive et performant.' },
  { icon: '🔄', title: 'Maintenance & Évolution',        description: 'Reprise de projets existants, correction de bugs, refactoring de code, ajout de nouvelles fonctionnalités.' },
  { icon: '🗄️', title: 'Conception BDD & UML',           description: 'Modélisation de bases de données relationnelles, diagrammes UML, optimisation de requêtes SQL.' },
]

export const freelancePlatforms = ['Upwork', 'Mostaql', 'Freelance.ma', 'LinkedIn']
