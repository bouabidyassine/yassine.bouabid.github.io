import React, { useState, useRef } from 'react';
import { 
  Container, Grid, Card, Typography, LinearProgress, Box,
  useTheme, Grow, Dialog, IconButton, Divider, Chip, Avatar,
  useMediaQuery, Fade, Slide, Zoom
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { 
  Engineering, DesignServices, Settings, Science,
  Calculate, AutoAwesomeMosaic, PrecisionManufacturing, Terminal,
  StarBorder, Star, Hexagon, BubbleChart
} from '@mui/icons-material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// Carte en verre 3D
const GlassCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.75),
  boxShadow: `0 8px 32px 0 ${alpha(theme.palette.primary.dark, 0.2)}`,
  border: '1px solid rgba(255, 255, 255, 0.18)',
  overflow: 'hidden',
  zIndex: 1,
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main} 0%, 
      ${theme.palette.secondary.main} 50%, 
      ${theme.palette.primary.main} 100%)`,
    backgroundSize: '200% auto',
    animation: 'shimmer 3s linear infinite',
    zIndex: -1
  },
  '@keyframes shimmer': {
    '0%': { backgroundPosition: '0% center' },
    '100%': { backgroundPosition: '200% center' }
  }
}));

// Arrière-plan de particules
const ParticleCanvas = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0
});

// Texte dégradé animé
const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.secondary.main} 50%, 
    ${theme.palette.primary.light} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  backgroundSize: '200% auto',
  animation: 'gradient 5s ease infinite',
  '@keyframes gradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
}));

// Étoiles flottantes
const FloatingStar = ({ size = 24, delay = 0, top, left, right, bottom }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        fontSize: size,
        color: 'rgba(255, 255, 255, 0.8)',
        top,
        left,
        right,
        bottom,
        zIndex: -1
      }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 180, 360],
        opacity: [0.6, 1, 0.6]
      }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <StarBorder fontSize="inherit" />
    </motion.div>
  );
};

// Dialogue amélioré
const LuxuryDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '32px',
    background: `linear-gradient(145deg, 
      ${alpha(theme.palette.background.paper, 0.95)} 0%, 
      ${alpha(theme.palette.grey[100], 0.95)} 100%)`,
    backdropFilter: 'blur(24px)',
    boxShadow: `0 24px 80px ${alpha(theme.palette.primary.dark, 0.3)}`,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    position: 'relative'
  }
}));

const DialogGradientHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.dark} 0%, 
    ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `radial-gradient(circle, 
      rgba(255,255,255,0.2) 0%, 
      rgba(255,255,255,0) 70%)`,
    animation: 'rotate 20s linear infinite',
    '@keyframes rotate': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }
  }
}));

// Notation hexagonale
const HexagonRating = ({ level }) => {
  const filledHexagons = Math.floor(level / 20);
  const partialFill = (level % 20) / 20;
  
  return (
    <Box display="flex" alignItems="center" gap={1}>
      {[...Array(5)].map((_, i) => (
        <Box key={i} position="relative" width={24} height={24}>
          <Hexagon 
            fontSize="small" 
            color={i < filledHexagons ? "primary" : "disabled"} 
          />
          {i === filledHexagons && (
            <Box 
              position="absolute" 
              top={0} 
              left={0}
              width={`${partialFill * 100}%`}
              overflow="hidden"
            >
              <Hexagon fontSize="small" color="primary" />
            </Box>
          )}
        </Box>
      ))}
      <Typography variant="body2" color="text.secondary" ml={1}>
        {level}%
      </Typography>
    </Box>
  );
};

// Données des compétences en français
const categoriesCompetences = [
  {
    title: "Conception Mécanique",
    icon: <DesignServices color="primary" />,
    competences: [
      {
        name: "Modélisation 3D",
        icon: <BubbleChart color="primary" />,
        shortDesc: "Modélisation paramétrique avancée et conception de surfaces",
        level: 94,
        longDesc: "Expert en création d'assemblages mécaniques complexes avec relations paramétriques. Spécialisé en modélisation de surfaces pour composants aérodynamiques et designs ergonomiques.",
        tags: ["CATIA V6", "SolidWorks", "Modélisation Surf.", "GD&T", "Conception Top-Down"],
        projets: 27
      },
      {
        name: "Analyse FEA",
        icon: <Engineering color="primary" />,
        shortDesc: "Simulations structurelles et thermiques",
        level: 89,
        longDesc: "Réalisation d'analyses par éléments finis pour valider les conceptions sous diverses conditions de charge. Expertise en matériaux non-linéaires et simulations de contact.",
        tags: ["ANSYS", "Analyse Statique", "Thermique", "Fatigue", "Optimisation"],
        projets: 18
      }
    ]
  },
  {
    title: "Ingénierie Avancée",
    icon: <Science color="primary" />,
    competences: [
      {
        name: "Simulation CFD",
        icon: <AutoAwesomeMosaic color="primary" />,
        shortDesc: "Dynamique des fluides et analyse thermique",
        level: 86,
        longDesc: "Simulations de dynamique des fluides pour optimiser les systèmes fluides et la gestion thermique. Expérience en écoulements multiphasiques et transfert de chaleur conjugué.",
        tags: ["ANSYS Fluent", "Thermique", "Turbulence", "Aérodynamique", "CVC"],
        projets: 14
      },
      {
        name: "Dynamique Multicorps",
        icon: <Settings color="primary" />,
        shortDesc: "Simulations cinématiques et dynamiques",
        level: 82,
        longDesc: "Modélisation de systèmes mécaniques complexes avec pièces mobiles. Analyse des forces, vibrations et interactions système.",
        tags: ["ADAMS", "Mécanismes", "Vibrations", "Analyse Charges", "Mouvement"],
        projets: 9
      }
    ]
  },
  {
    title: "Systèmes de Production",
    icon: <PrecisionManufacturing color="primary" />,
    competences: [
      {
        name: "Programmation CAM",
        icon: <Terminal color="primary" />,
        shortDesc: "Stratégies d'usinage CNC",
        level: 91,
        longDesc: "Développement de processus d'usinage efficaces pour composants complexes. Expertise en usinage multi-axes et stratégies de coupe à haute vitesse.",
        tags: ["Mastercam", "5-Axes", "Trajectoire", "Optimisation", "Post-Processing"],
        projets: 23
      },
      {
        name: "Fabrication Additive",
        icon: <AutoAwesomeMosaic color="primary" />,
        shortDesc: "Technologies d'impression 3D",
        level: 84,
        longDesc: "Conception pour fabrication additive avec diverses technologies dont SLS, SLM et FDM. Optimisation des paramètres de processus.",
        tags: ["DfAM", "Impression Métal", "Structures", "Topologie", "Post-Traitement"],
        projets: 12
      }
    ]
  },
  {
    title: "Management Technique",
    icon: <Calculate color="primary" />,
    competences: [
      {
        name: "Gestion de Projet",
        icon: <Terminal color="primary" />,
        shortDesc: "Direction de projets techniques",
        level: 88,
        longDesc: "Pilotage d'équipes d'ingénierie pluridisciplinaires à travers les cycles complets de projets. Budgétisation, planification et gestion des risques pour projets techniques complexes.",
        tags: ["Agile", "Analyse Risques", "Diagramme Gantt", "Budget", "Parties Prenantes"],
        projets: 31
      },
      {
        name: "Analyse de Données",
        icon: <Calculate color="primary" />,
        shortDesc: "Data science pour l'ingénierie",
        level: 76,
        longDesc: "Analyse statistique de données techniques et modélisation prédictive. Création de tableaux de bord pour le contrôle qualité industriel.",
        tags: ["Python", "Machine Learning", "MATLAB", "SQL", "Visualisation"],
        projets: 7
      }
    ]
  }
];

const DialogCompetence = ({ competence, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <DialogGradientHeader>
        <Box position="relative" zIndex={1}>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar sx={{ 
              bgcolor: 'rgba(255,255,255,0.2)',
              mr: 2,
              width: 56,
              height: 56
            }}>
              {competence.icon}
            </Avatar>
            <GradientText variant="h4" fontWeight={700}>
              {competence.name}
            </GradientText>
          </Box>
          <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
            {competence.shortDesc}
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 24,
            top: 24,
            color: 'rgba(255,255,255,0.9)',
            backgroundColor: 'rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.3)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        <FloatingStar size={120} top="-60px" right="-30px" delay={1} />
        <FloatingStar size={80} bottom="-40px" left="-20px" delay={0.5} />
      </DialogGradientHeader>
      
      <Box sx={{ p: isMobile ? 3 : 6, pt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Détails d'Expertise
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
              {competence.longDesc}
            </Typography>
            
            <Box mb={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Maîtrise Technique
              </Typography>
              <Box display="flex" alignItems="center" gap={4}>
                <HexagonRating level={competence.level} />
                <Typography variant="body2" color="text.secondary">
                  Appliquée dans {competence.projets}+ projets professionnels
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              backgroundColor: alpha(theme.palette.primary.light, 0.1),
              borderRadius: '16px',
              p: 3,
              height: '100%'
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Technologies
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {competence.tags.map((tag, index) => (
                  <Chip 
                    key={index} 
                    label={tag} 
                    size="medium"
                    sx={{ 
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.dark,
                      borderRadius: '8px',
                      fontWeight: 500,
                      mb: 1
                    }}
                  />
                ))}
              </Box>
              
              <Box mt={3}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Certification
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} color="primary" />
                  ))}
                  <Typography variant="body2" ml={1}>
                    Niveau Expert
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default function PortfolioCompetences() {
  const theme = useTheme();
  const [selectedCompetence, setSelectedCompetence] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const handleCardClick = (competence) => {
    setSelectedCompetence(competence);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      background: `linear-gradient(145deg, 
        ${theme.palette.background.default} 0%, 
        ${alpha(theme.palette.primary.light, 0.05)} 100%)`
    }}>
      {/* Particules animées */}
      <ParticleCanvas>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 60 },
              color: { value: theme.palette.primary.main },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              line_linked: { enable: false },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "repulse" }
              }
            }
          }}
        />
      </ParticleCanvas>

      <Container maxWidth="xl" sx={{ 
        position: 'relative',
        zIndex: 1,
        py: 10,
        px: { xs: 2, sm: 4, md: 6 }
      }} ref={ref}>
        {/* En-tête animé */}
        {/* Premium Animated Header */}
{/* Ultra Premium Header Section */}
<Box 
  sx={{
    position: 'relative',
    overflow: 'hidden',
    py: { xs: 8, md: 12 },
    mb: { xs: 8, md: 12 },
    background: `radial-gradient(ellipse at center, 
      ${alpha(theme.palette.primary.light, 0.08)} 0%, 
      transparent 70%)`,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '1px',
      background: `linear-gradient(90deg, transparent, 
        ${alpha(theme.palette.secondary.light, 0.3)}, 
        transparent)`,
      zIndex: 1
    },
    '&:before': { top: 0 },
    '&:after': { bottom: 0 }
  }}
>
  {/* 3D Floating Particles Background */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1
  }}>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          background: `linear-gradient(135deg, 
            ${alpha(theme.palette.primary.main, 0.1)} 0%, 
            ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15 + i * 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        sx={{
          width: `${200 + i * 50}px`,
          height: `${200 + i * 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`
        }}
      />
    ))}
  </Box>

  {/* Diamond Decorative Elements */}
  <Box sx={{
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: '60px',
    height: '60px',
    opacity: 0.7,
    zIndex: -1
  }}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      style={{ width: '100%', height: '100%' }}
    >
      <svg viewBox="0 0 100 100">
        <path 
          d="M50 0 L100 50 L50 100 L0 50 Z" 
          fill="none" 
          stroke={alpha(theme.palette.primary.main, 0.3)}
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  </Box>

  {/* Main Title Container */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ 
      duration: 1.2,
      delay: 0.3,
      type: 'spring',
      stiffness: 60,
      damping: 12
    }}
  >
    <Typography 
      variant="h1"
      sx={{ 
        fontWeight: 900,
        letterSpacing: { xs: '-0.03em', md: '-0.05em' },
        mb: 3,
        fontSize: {
          xs: '3.5rem',
          sm: '5.5rem',
          md: '7rem',
          lg: '8rem'
        },
        lineHeight: 1,
        textAlign: 'center',
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: { xs: -8, md: -12 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '60%', md: '50%' },
          height: { xs: '3px', md: '4px' },
          background: `linear-gradient(90deg, 
            transparent, 
            ${theme.palette.secondary.light}, 
            ${theme.palette.primary.light}, 
            transparent)`,
          borderRadius: '2px',
          animation: 'pulse 3s ease infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.8 },
            '50%': { opacity: 1 }
          }
        }
      }}
    >
      <Box
        component="span"
        sx={{
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main} 0%, 
            ${theme.palette.secondary.main} 45%, 
            ${alpha(theme.palette.primary.light, 0.9)} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '300% auto',
          animation: 'gradient 10s ease infinite',
          display: 'inline-block',
          px: 1,
          textShadow: `0 2px 10px ${alpha(theme.palette.primary.dark, 0.2)}`,
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: -10,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, 
              transparent, 
              ${alpha(theme.palette.secondary.light, 0.5)}, 
              transparent)`
          }
        }}
      >
        Maîtrise Technique
      </Box>
    </Typography>

    {/* Subtitle with Luxurious Effects */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: 0.7,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
      sx={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        px: { xs: 2, md: 4 }
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
            md: '1.75rem'
          },
          lineHeight: 1.5,
          fontWeight: 300,
          color: alpha(theme.palette.text.primary, 0.9),
          fontStyle: 'italic',
          textAlign: 'center',
          position: 'relative',
          py: { xs: 2, md: 3 },
          '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            width: { xs: '20px', md: '40px' },
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent, 
              ${alpha(theme.palette.secondary.light, 0.6)})`,
            opacity: 0.7
          },
          '&:before': {
            left: 0,
            transform: 'rotate(-15deg)'
          },
          '&:after': {
            right: 0,
            background: `linear-gradient(90deg, 
              ${alpha(theme.palette.secondary.light, 0.6)}, 
              transparent)`,
            transform: 'rotate(15deg)'
          }
        }}
      >
        <Box 
          component="span"
          sx={{
            background: `linear-gradient(90deg, 
              ${alpha(theme.palette.text.primary, 0.9)}, 
              ${alpha(theme.palette.secondary.light, 0.9)})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}
        >
          Une vitrine complète de mon expertise en ingénierie, alliant compétences techniques de pointe et approches innovantes
        </Box>
      </Typography>
    </motion.div>
  </motion.div>

  {/* Floating Tech Icons */}
  <Box sx={{
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    zIndex: -1,
    opacity: 0.4
  }}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <Engineering sx={{ fontSize: '80px' }} />
    </motion.div>
  </Box>
</Box>

        {/* Catégories de compétences */}
        <Grid container spacing={6} justifyContent="center">
          {categoriesCompetences.map((categorie, catIndex) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={catIndex}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + catIndex * 0.15,
                  type: 'spring',
                  damping: 10
                }}
              >
                <GlassCard
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Box sx={{ p: 4 }}>
                    <Box display="flex" alignItems="center" mb={3}>
                      <Avatar sx={{ 
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        mr: 2,
                        width: 48,
                        height: 48
                      }}>
                        {categorie.icon}
                      </Avatar>
                      <GradientText variant="h5" fontWeight={700}>
                        {categorie.title}
                      </GradientText>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {categorie.competences.map((competence, compIndex) => (
                        <Slide 
                          key={compIndex}
                          direction="up"
                          in={isInView}
                          timeout={800 + catIndex * 100 + compIndex * 50}
                        >
                          <Box>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Card 
                                sx={{ 
                                  p: 3,
                                  borderRadius: '16px',
                                  backgroundColor: alpha(theme.palette.background.paper, 0.7),
                                  backdropFilter: 'blur(8px)',
                                  cursor: 'pointer',
                                  border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                                onClick={() => handleCardClick(competence)}
                              >
                                <Box display="flex" alignItems="center" mb={2}>
                                  <Avatar sx={{ 
                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                    mr: 2,
                                    width: 40,
                                    height: 40
                                  }}>
                                    {competence.icon}
                                  </Avatar>
                                  <Typography variant="subtitle1" fontWeight={600}>
                                    {competence.name}
                                  </Typography>
                                </Box>
                                
                                <Typography 
                                  variant="body2" 
                                  color="text.secondary" 
                                  sx={{ 
                                    mb: 3,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {competence.shortDesc}
                                </Typography>
                                
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                  <LinearProgress 
                                    variant="determinate" 
                                    value={competence.level} 
                                    sx={{ 
                                      flexGrow: 1,
                                      mr: 2,
                                      height: 8,
                                      borderRadius: 4,
                                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                      '& .MuiLinearProgress-bar': {
                                        borderRadius: 4,
                                        background: `linear-gradient(90deg, 
                                          ${theme.palette.primary.main}, 
                                          ${theme.palette.secondary.main})`
                                      }
                                    }} 
                                  />
                                  <Typography variant="body2" fontWeight={600}>
                                    {competence.level}%
                                  </Typography>
                                </Box>
                              </Card>
                            </motion.div>
                          </Box>
                        </Slide>
                      ))}
                    </Box>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialogue de luxe */}
      {selectedCompetence && (
        <LuxuryDialog 
          open={dialogOpen} 
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          TransitionComponent={Zoom}
          transitionDuration={500}
        >
          <DialogCompetence competence={selectedCompetence} onClose={handleCloseDialog} />
        </LuxuryDialog>
      )}

      {/* Étoiles décoratives */}
      <FloatingStar size={80} top="20%" left="5%" delay={0} />
      <FloatingStar size={60} top="30%" right="8%" delay={0.3} />
      <FloatingStar size={40} top="70%" left="10%" delay={0.7} />
      <FloatingStar size={50} bottom="10%" right="15%" delay={0.2} />
    </Box>
  );
}