import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Collapse,
  Fade,
  useMediaQuery,
  IconButton,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import { 
  School as SchoolIcon,
  Code as CodeIcon,
  DesignServices as DesignIcon,
  Memory as MemoryIcon,
  Engineering as EngineeringIcon,
  Settings as SettingsIcon,
  AutoAwesome as PremiumIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Translate as TranslateIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Alien-inspired color palette
const alienPrimary = '#00ff9d';
const alienSecondary = '#7b2dff';
const alienDark = '#0a192f';
const alienLight = '#ccd6f6';

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 10px ${alienPrimary}; }
  50% { transform: scale(1.03); box-shadow: 0 0 20px ${alienPrimary}; }
  100% { transform: scale(1); box-shadow: 0 0 10px ${alienPrimary}; }
`;

const glow = keyframes`
  0% { text-shadow: 0 0 5px ${alienPrimary}; }
  50% { text-shadow: 0 0 15px ${alienPrimary}; }
  100% { text-shadow: 0 0 5px ${alienPrimary}; }
`;

const languages = {
  fr: {
    title: "Parcours Académique",
    subtitle: "Un chemin d'excellence vers l'ingénierie de pointe",
    master: {
      title: "Master en Conception et Simulation Numérique en Mécanique",
      location: "Centre d'Excellence Mécatronique FSAC, Casablanca (2024 - Présent)",
      points: [
        "Formation avancée en CAO (CATIA V5, SolidWorks) et simulation numérique (EF, MEF)",
        "Maîtrise des outils de simulation structurelle/dynamique (Abaqus, Ansys)",
        "Expertise en systèmes mécatroniques et analyse vibratoire (NVH)"
      ]
    },
    licence: {
      title: "Licence en Conception et Simulation Numérique en Mécanique",
      location: "Centre d'Excellence Mécatronique FSAC, Casablanca (2023 - 2024)",
      points: [
        "Fondements en modélisation 3D, analyse par éléments finis et simulation dynamique",
        "Application des concepts théoriques aux simulations industrielles",
        "Utilisation de Matlab, Python et Arduino pour les systèmes de contrôle"
      ]
    },
    bts: {
      title: "BTS en Électromécanique et Systèmes Automatisés",
      location: "Lycée Technique de Settat (2021 - 2023)",
      points: [
        "Programmation des automates industriels (Siemens, Schneider)",
        "Maintenance des systèmes électromécaniques complexes"
      ]
    },
    bac: {
      title: "Baccalauréat en Sciences et Technologies Électriques",
      location: "Lycée Charif El Idrissi, Benslimane (2020 - 2021)",
      points: [
        "Électricité générale et industrielle avancée",
        "Électronique de puissance et systèmes automatisés"
      ]
    }
  },
  en: {
    title: "Academic Journey",
    subtitle: "A path of excellence towards cutting-edge engineering",
    master: {
      title: "Master's in Mechanical Design and Numerical Simulation",
      location: "Mechatronics Excellence Center FSAC, Casablanca (2024 - Present)",
      points: [
        "Advanced training in CAD (CATIA V5, SolidWorks) and numerical simulation (FEA, FEM)",
        "Mastery of structural/dynamic simulation tools (Abaqus, Ansys)",
        "Expertise in mechatronic systems and vibration analysis (NVH)"
      ]
    },
    licence: {
      title: "Bachelor's in Mechanical Design and Numerical Simulation",
      location: "Mechatronics Excellence Center FSAC, Casablanca (2023 - 2024)",
      points: [
        "Fundamentals in 3D modeling, finite element analysis and dynamic simulation",
        "Application of theoretical concepts to industrial simulations",
        "Use of Matlab, Python and Arduino for control systems"
      ]
    },
    bts: {
      title: "Technical Degree in Electromechanics and Automated Systems",
      location: "Technical High School of Settat (2021 - 2023)",
      points: [
        "Programming of industrial PLCs (Siemens, Schneider)",
        "Maintenance of complex electromechanical systems"
      ]
    },
    bac: {
      title: "High School Diploma in Electrical Sciences and Technologies",
      location: "Charif El Idrissi High School, Benslimane (2020 - 2021)",
      points: [
        "General and industrial electricity",
        "Power electronics and automated systems"
      ]
    }
  },
  ar: {
    title: "المسار الأكاديمي",
    subtitle: "مسار التميز نحو الهندسة المتطورة",
    master: {
      title: "ماستر في التصميم والمحاكاة الرقمية في الميكانيك",
      location: "مركز التميز في الميكاترونيك FSAC، الدار البيضاء (2024 - الحاضر)",
      points: [
        "تدريب متقدم في التصميم بمساعدة الحاسوب (CATIA V5, SolidWorks) والمحاكاة الرقمية",
        "إتقان أدوات المحاكاة الهيكلية/الديناميكية (Abaqus, Ansys)",
        "خبرة في الأنظمة الميكاترونية وتحليل الاهتزازات"
      ]
    },
    licence: {
      title: "إجازة في التصميم والمحاكاة الرقمية في الميكانيك",
      location: "مركز التميز في الميكاترونيك FSAC، الدار البيضاء (2023 - 2024)",
      points: [
        "أساسيات النمذجة ثلاثية الأبعاد، تحليل العناصر المحددة والمحاكاة الديناميكية",
        "تطبيق المفاهيم النظرية على المحاكاة الصناعية",
        "استخدام Matlab وPython وArduino لأنظمة التحكم"
      ]
    },
    bts: {
      title: "شهادة التقني العالي في الكهروميكانيك والأنظمة الآلية",
      location: "الثانوية التقنية سطات (2021 - 2023)",
      points: [
        "برمجة أجهزة التحكم المنطقية القابلة للبرمجة (Siemens, Schneider)",
        "صيانة الأنظمة الكهروميكانيكية المعقدة"
      ]
    },
    bac: {
      title: "بكالوريا في العلوم والتقنيات الكهربائية",
      location: "ثانوية الشريف الإدريسي، بنسليمان (2020 - 2021)",
      points: [
        "الكهرباء العامة والصناعية المتقدمة",
        "إلكترونيات القوة والأنظمة الآلية"
      ]
    }
  }
};

export default function ParcoursAcademique({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState({
    master: false,
    licence: false,
    bts: false,
    bac: false
  });
  const [language, setLanguage] = useState('fr');
  const currentLang = languages[language];

  const handleExpand = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Common styles for all education cards
  const cardStyles = {
    p: 5,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    background: darkMode ? '#112240' : '#FFFFFF',
    boxShadow: `0 15px 40px ${darkMode ? `${alienPrimary}20` : `${alienSecondary}20`}`,
    border: `1px solid ${darkMode ? `${alienPrimary}30` : `${alienSecondary}30`}`,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: `0 20px 50px ${darkMode ? `${alienPrimary}30` : `${alienSecondary}30`}`,
      animation: `${pulse} 2s infinite`
    },
    transition: 'all 0.4s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };

  const smallCardStyles = {
    ...cardStyles,
    p: 4
  };

  const gradientBackground = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '150px',
    height: '150px',
    background: `radial-gradient(circle, ${darkMode ? `${alienPrimary}15` : `${alienSecondary}15`} 0%, transparent 70%)`,
    zIndex: 0
  };

  const smallGradientBackground = {
    ...gradientBackground,
    width: '120px',
    height: '120px'
  };

  const titleStyles = {
    fontWeight: 700,
    color: darkMode ? alienLight : '#333',
    letterSpacing: 0.8,
    fontSize: isMobile ? '1.5rem' : '2rem'
  };

  const smallTitleStyles = {
    ...titleStyles,
    fontSize: isMobile ? '1.3rem' : '1.5rem',
    letterSpacing: 0.5
  };

  const subtitleStyles = {
    mt: 2, 
    fontStyle: 'italic',
    color: darkMode ? `${alienLight}cc` : '#666',
    fontWeight: 300,
    fontSize: isMobile ? '0.9rem' : '1.1rem'
  };

  const smallSubtitleStyles = {
    ...subtitleStyles,
    mt: 1.5,
    fontSize: isMobile ? '0.85rem' : '1rem'
  };

  const chipStyles = {
    fontWeight: 700,
    background: darkMode ? `linear-gradient(135deg, ${alienPrimary} 0%, #00c6ff 50%, ${alienPrimary} 100%)` 
                        : `linear-gradient(135deg, ${alienSecondary} 0%, #b388ff 50%, ${alienSecondary} 100%)`,
    color: darkMode ? alienDark : '#fff',
    boxShadow: `0 4px 15px ${darkMode ? `${alienPrimary}40` : `${alienSecondary}40`}`,
    height: '36px',
    mr: 3,
    px: 2
  };

  const smallChipStyles = {
    ...chipStyles,
    fontSize: '0.8rem',
    height: '32px',
    mr: 2,
    px: 1
  };

  const expandIconStyles = {
    color: darkMode ? alienPrimary : alienSecondary,
    fontSize: '2rem',
    background: darkMode ? `${alienPrimary}10` : `${alienSecondary}10`,
    p: 0.5,
    borderRadius: '50%'
  };

  const smallExpandIconStyles = {
    ...expandIconStyles,
    fontSize: '1.8rem'
  };

  const dividerStyles = {
    my: 4, 
    background: `linear-gradient(90deg, transparent, ${darkMode ? `${alienPrimary}50` : `${alienSecondary}50`}, transparent)`,
    height: '1px',
    border: 'none'
  };

  const listItemStyles = {
    px: 0,
    alignItems: 'flex-start',
    '&:hover': {
      '& .MuiListItemIcon-root': {
        transform: 'rotate(5deg) scale(1.1)',
        transition: 'transform 0.3s ease'
      }
    }
  };

  const listItemIconStyles = {
    minWidth: 50,
    mt: 0.5,
    transition: 'transform 0.3s ease'
  };

  const smallListItemIconStyles = {
    ...listItemIconStyles,
    minWidth: 42
  };

  const listItemTextStyles = {
    fontWeight: 500,
    color: darkMode ? alienLight : '#333',
    fontSize: isMobile ? '1rem' : '1.1rem'
  };

  const smallListItemTextStyles = {
    ...listItemTextStyles,
    fontSize: isMobile ? '0.95rem' : '1.05rem',
    color: darkMode ? alienLight : '#444'
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8,
      background: darkMode ? alienDark : 'radial-gradient(circle at center, rgba(10,25,47,0.9) 0%, rgba(10,25,47,1) 100%)',
      color: darkMode ? alienLight : '#ccd6f6'
    }}>
      {/* Language and Theme Controls */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'flex-end',
        mb: 4,
        gap: 2
      }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={language}
            onChange={handleLanguageChange}
            IconComponent={TranslateIcon}
            sx={{
              color: darkMode ? alienPrimary : alienSecondary,
              '& .MuiSelect-icon': { color: darkMode ? alienPrimary : alienSecondary },
              '&:before': { borderColor: darkMode ? alienPrimary : alienSecondary },
              '&:after': { borderColor: darkMode ? alienPrimary : alienSecondary },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: darkMode ? `${alienPrimary}80` : `${alienSecondary}80`,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: darkMode ? alienPrimary : alienSecondary,
              }
            }}
          >
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ar">العربية</MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <LightModeIcon sx={{ color: alienPrimary }} /> : <DarkModeIcon sx={{ color: alienSecondary }} />}
        </IconButton>
      </Box>

      {/* Alien-inspired Title */}
      <Box sx={{ 
        textAlign: 'center',
        mb: 10,
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: '4px',
          background: `linear-gradient(90deg, transparent, ${alienPrimary}, transparent)`,
          borderRadius: '2px'
        }
      }}>
        <Typography variant="h2" sx={{ 
          fontWeight: 700,
          letterSpacing: 2,
          color: darkMode ? alienPrimary : alienSecondary,
          position: 'relative',
          display: 'inline-block',
          fontSize: isMobile ? '2rem' : '3rem',
          animation: `${glow} 3s ease-in-out infinite`,
          '&:before, &:after': {
            content: '"◊"',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            color: darkMode ? alienPrimary : alienSecondary,
            fontSize: '1.5rem'
          },
          '&:before': { left: -50 },
          '&:after': { right: -50 }
        }}>
          {currentLang.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ 
          mt: 3,
          color: darkMode ? `${alienLight}cc` : `${alienDark}cc`,
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: isMobile ? '1rem' : '1.25rem',
          letterSpacing: 1
        }}>
          {currentLang.subtitle}
        </Typography>
      </Box>
      
      <Grid container spacing={6}>
        {/* Master */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            onClick={() => handleExpand('master')}
            sx={cardStyles}
          >
            <Box sx={gradientBackground} />
            <Box display="flex" justifyContent="space-between" alignItems="center" position="relative" zIndex={1}>
              <Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <PremiumIcon sx={{ 
                    color: darkMode ? alienPrimary : alienSecondary, 
                    fontSize: '2rem',
                    background: darkMode ? `${alienPrimary}10` : `${alienSecondary}10`,
                    p: 1,
                    borderRadius: '50%'
                  }} />
                  <Typography variant="h4" sx={titleStyles}>
                    {currentLang.master.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={subtitleStyles}>
                  {currentLang.master.location}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Chip 
                  label="2024 - Present" 
                  sx={chipStyles}
                />
                {expanded.master ? (
                  <ExpandLessIcon sx={expandIconStyles} />
                ) : (
                  <ExpandMoreIcon sx={expandIconStyles} />
                )}
              </Box>
            </Box>
            
            <Divider sx={dividerStyles} />
            
            <Collapse in={expanded.master} timeout="auto" unmountOnExit>
              <Fade in={expanded.master} timeout={800}>
                <List dense sx={{ position: 'relative', zIndex: 1 }}>
                  {currentLang.master.points.map((point, index) => (
                    <ListItem key={index} sx={listItemStyles}>
                      <ListItemIcon sx={listItemIconStyles}>
                        {index === 0 ? <DesignIcon /> : index === 1 ? <MemoryIcon /> : <SettingsIcon />}
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography sx={listItemTextStyles}>
                            {point}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Fade>
            </Collapse>
          </Paper>
        </Grid>
        
        {/* Licence */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            onClick={() => handleExpand('licence')}
            sx={cardStyles}
          >
            <Box sx={gradientBackground} />
            <Box display="flex" justifyContent="space-between" alignItems="center" position="relative" zIndex={1}>
              <Box>
                <Typography variant="h4" sx={titleStyles}>
                  {currentLang.licence.title}
                </Typography>
                <Typography variant="subtitle1" sx={subtitleStyles}>
                  {currentLang.licence.location}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Chip 
                  label="2023 - 2024" 
                  sx={chipStyles}
                />
                {expanded.licence ? (
                  <ExpandLessIcon sx={expandIconStyles} />
                ) : (
                  <ExpandMoreIcon sx={expandIconStyles} />
                )}
              </Box>
            </Box>
            
            <Divider sx={dividerStyles} />
            
            <Collapse in={expanded.licence} timeout="auto" unmountOnExit>
              <Fade in={expanded.licence} timeout={800}>
                <List dense sx={{ position: 'relative', zIndex: 1 }}>
                  {currentLang.licence.points.map((point, index) => (
                    <ListItem key={index} sx={listItemStyles}>
                      <ListItemIcon sx={listItemIconStyles}>
                        {index === 0 ? <CodeIcon /> : index === 1 ? <EngineeringIcon /> : <MemoryIcon />}
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography sx={listItemTextStyles}>
                            {point}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Fade>
            </Collapse>
          </Paper>
        </Grid>
        
        {/* BTS and Bac Container */}
        <Grid container spacing={6} sx={{ display: 'flex' }}>
          {/* BTS */}
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Paper 
              elevation={0} 
              onClick={() => handleExpand('bts')}
              sx={{ ...smallCardStyles, flex: 1 }}
            >
              <Box sx={smallGradientBackground} />
              <Box position="relative" zIndex={1} sx={{ flexGrow: 1 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" sx={smallTitleStyles}>
                    {currentLang.bts.title}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Chip 
                      label="2021 - 2023" 
                      sx={smallChipStyles}
                    />
                    {expanded.bts ? (
                      <ExpandLessIcon sx={smallExpandIconStyles} />
                    ) : (
                      <ExpandMoreIcon sx={smallExpandIconStyles} />
                    )}
                  </Box>
                </Box>
                
                <Typography variant="subtitle1" sx={smallSubtitleStyles}>
                  {currentLang.bts.location}
                </Typography>
                
                <Collapse in={expanded.bts} timeout="auto" unmountOnExit>
                  <Fade in={expanded.bts} timeout={800}>
                    <Box sx={{ mt: 3 }}>
                      <Divider sx={dividerStyles} />
                      <List dense>
                        {currentLang.bts.points.map((point, index) => (
                          <ListItem key={index} sx={listItemStyles}>
                            <ListItemIcon sx={smallListItemIconStyles}>
                              {index === 0 ? <SettingsIcon /> : <EngineeringIcon />}
                            </ListItemIcon>
                            <ListItemText 
                              primary={point}
                              primaryTypographyProps={{ 
                                sx: smallListItemTextStyles
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Fade>
                </Collapse>
              </Box>
            </Paper>
          </Grid>
          
          {/* Bac */}
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Paper 
              elevation={0} 
              onClick={() => handleExpand('bac')}
              sx={{ ...smallCardStyles, flex: 1 }}
            >
              <Box sx={smallGradientBackground} />
              <Box position="relative" zIndex={1} sx={{ flexGrow: 1 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" sx={smallTitleStyles}>
                    {currentLang.bac.title}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Chip 
                      label="2020 - 2021" 
                      sx={smallChipStyles}
                    />
                    {expanded.bac ? (
                      <ExpandLessIcon sx={smallExpandIconStyles} />
                    ) : (
                      <ExpandMoreIcon sx={smallExpandIconStyles} />
                    )}
                  </Box>
                </Box>
                
                <Typography variant="subtitle1" sx={smallSubtitleStyles}>
                  {currentLang.bac.location}
                </Typography>
                
                <Collapse in={expanded.bac} timeout="auto" unmountOnExit>
                  <Fade in={expanded.bac} timeout={800}>
                    <Box sx={{ mt: 3 }}>
                      <Divider sx={dividerStyles} />
                      <List dense>
                        {currentLang.bac.points.map((point, index) => (
                          <ListItem key={index} sx={listItemStyles}>
                            <ListItemIcon sx={smallListItemIconStyles}>
                              {index === 0 ? <SchoolIcon /> : <MemoryIcon />}
                            </ListItemIcon>
                            <ListItemText 
                              primary={point}
                              primaryTypographyProps={{ 
                                sx: smallListItemTextStyles
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Fade>
                </Collapse>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}