export const projectsData = [
  {
    id: 1,
    title: "Simulation d'Amortisseur Automobile",
    period: "05/2025 – 06/2025",
    shortDescription: "Simulation Python d'un système de suspension automobile avec analyse dynamique.",
    fullDescription: `
      Développement d'un simulateur complet d'amortisseur automobile utilisant des méthodes numériques avancées.
      Ce projet incluait :
      - Modélisation des équations différentielles du système mécanique
      - Implémentation de la méthode Runge-Kutta 4ème ordre (RK4)
      - Analyse des performances sous différentes conditions routières
      - Optimisation des paramètres d'amortissement
      - Visualisation des résultats avec Matplotlib
      
      L'objectif était de réduire les vibrations tout en maintenant la stabilité du véhicule.
    `,
    technologies: ["Python", "NumPy", "Matplotlib", "Modélisation Mathématique", "Mécanique des Vibrations", "RK4"],
    accentColor: "#d4af37",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: [
      "Précision de simulation de 98% par rapport aux tests physiques",
      "Réduction de 35% des oscillations indésirables",
      "Temps de calcul optimisé grâce à l'implémentation vectorisée"
    ],
    codeLink: "https://github.com/username/simulation-amortisseur",
    demoLink: "https://example.com/demo-amortisseur"
  },
  {
    id: 2,
    title: "Conception et Analyse FEA d'un Support Mécanique",
    period: "03/2024 – 05/2024",
    shortDescription: "Analyse par éléments finis d'un composant structurel critique.",
    fullDescription: `
      Conception et optimisation d'un support mécanique pour application industrielle lourde.
      Processus complet :
      1. Modélisation 3D sous SolidWorks avec contraintes réelles
      2. Import vers Abaqus pour simulation FEA
      3. Application des conditions aux limites et charges
      4. Analyse des contraintes de von Mises et des déformations
      5. Optimisation topologique pour réduire le poids
      
      Le projet a abouti à une conception optimisée pour la résistance tout en minimisant l'utilisation de matière.
    `,
    technologies: ["SolidWorks", "Abaqus", "Analyse par Éléments Finis", "Optimisation Topologique", "Mécanique des Structures"],
    accentColor: "#4db8ff",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    results: [
      "Réduction de 22% du poids tout en maintenant la résistance",
      "Augmentation du facteur de sécurité de 1.8 à 2.5",
      "Diminution des points de concentration de contraintes"
    ],
    reportLink: "https://example.com/rapport-support-mecanique"
  },
  {
    id: 3,
    title: "Modélisation 3D d'un Moteur 4-Cylindres",
    period: "09/2023 – 12/2023",
    shortDescription: "Simulation cinématique complète d'un moteur automobile.",
    fullDescription: `
      Reconstruction précise d'un moteur 4-cylindres avec simulation de son fonctionnement :
      - Modélisation paramétrique sous CATIA V5
      - Création de l'ensemble mécanique complet (pistons, vilebrequin, soupapes)
      - Simulation cinématique des mouvements internes
      - Analyse des interférences et des contraintes
      - Animation du cycle complet (admission, compression, combustion, échappement)
      
      Ce projet a permis de visualiser et d'analyser le comportement dynamique du moteur.
    `,
    technologies: ["CATIA V5", "Modélisation Paramétrique", "Cinématique", "Mécanique Automobile", "Simulation 3D"],
    accentColor: "#a78bfa",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: [
      "Précision dimensionnelle de ±0.01mm",
      "Détection de 2 points d'interférence critiques",
      "Visualisation complète du cycle à 4 temps"
    ],
    videoLink: "https://example.com/video-moteur-3d"
  },
  {
    id: 4,
    title: "Bras Robotisé Intelligent CNC",
    period: "02/2022 – 07/2022",
    shortDescription: "Conception et automatisation d'un système robotisé de précision.",
    fullDescription: `
      Développement complet d'un bras robotisé 6 axes contrôlé par CNC :
      - Conception mécanique des éléments structurels
      - Usinage des pièces sur machine CNC
      - Intégration des actionneurs et capteurs
      - Programmation du contrôleur Arduino
      - Développement de l'interface utilisateur
      - Tests de précision et répétabilité
      
      Le système final était capable d'effectuer des tâches complexes avec une précision de ±0.1mm.
    `,
    technologies: ["CNC", "Arduino", "Robotique", "Automatisation", "Conception Mécanique", "C++"],
    accentColor: "#f472b6",
    image: "https://images.unsplash.com/photo-1593371253384-38d9d0a397f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    results: [
      "Précision de mouvement de ±0.1mm",
      "Vitesse d'exécution 40% plus rapide que les solutions existantes",
      "Interface utilisateur intuitive pour la programmation"
    ],
    codeLink: "https://github.com/username/bras-robotise-cnc",
    demoVideo: "https://example.com/demo-robot"
  }
];