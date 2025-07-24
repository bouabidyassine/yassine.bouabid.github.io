import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box,
  useScrollTrigger,
  Fab,
  Zoom,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Avatar,
  Chip,
  Badge,
  Tooltip,
  Fade
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Work as WorkIcon, 
  School as SchoolIcon, 
  Code as CodeIcon, 
  Assignment as AssignmentIcon,
  Verified as VerifiedIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Menu as MenuIcon,
  LinkedIn,
  GitHub,
  Email,
  Description,
  Phone,
  LocationOn,
  Person,
  ExpandMore,
  ExpandLess,
  LightMode,
  DarkMode,
  Translate,
  Star,
  Diamond
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled, alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const sections = [
  { id: 'accueil', label: 'home', icon: <HomeIcon /> },
  { id: 'competences', label: 'skills', icon: <CodeIcon /> },
  { id: 'certifications', label: 'certifications', icon: <VerifiedIcon /> },
  { id: 'formations', label: 'education', icon: <SchoolIcon /> },
  { id: 'projets', label: 'projects', icon: <AssignmentIcon /> },
  { id: 'experience', label: 'experience', icon: <WorkIcon /> },
];

const socialLinks = [
  { icon: <LinkedIn />, url: 'https://linkedin.com/in/bouabid-yassine', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub', color: '#333' },
  { icon: <Email />, url: 'mailto:bouabid.yassine@outlook.com', label: 'Email', color: '#D44638' },
  { icon: <Description />, url: '/your-cv.pdf', label: 'Resume', color: '#6c5ce7' },
];

const contactInfo = [
  { icon: <Email />, text: 'bouabid.yassine@outlook.com', action: 'mailto:bouabid.yassine@outlook.com' },
  { icon: <Phone />, text: '+212 6 53 56 88 35', action: 'tel:+212653568835' },
  { icon: <LocationOn />, text: 'Casablanca, Morocco' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.98)} 0%, ${alpha(theme.palette.primary.dark, 0.98)} 100%)`,
  backdropFilter: 'blur(12px)',
  boxShadow: theme.shadows[4],
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.5s ease',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(90deg, #00d2ff, #3a7bd5, #00d2ff)' 
    : 'linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  letterSpacing: '0.05em',
  fontFamily: '"Poppins", sans-serif',
  backgroundSize: '200% auto',
  animation: '$shine 3s linear infinite',
  '@keyframes shine': {
    '0%': {
      backgroundPosition: '0% center'
    },
    '100%': {
      backgroundPosition: '200% center'
    }
  }
}));

const FloatingFab = styled(Fab)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
  color: theme.palette.common.white,
  boxShadow: theme.shadows[6],
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[8],
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(transparent, rgba(255,255,255,0.2), transparent)',
    transform: 'rotate(30deg)',
    transition: 'all 0.5s ease',
  },
  '&:hover::after': {
    left: '100%',
  }
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  textTransform: 'none',
  borderRadius: '12px',
  padding: '8px 16px',
  margin: theme.spacing(0, 0.5),
  fontWeight: active ? 700 : 500,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: active 
      ? alpha(theme.palette.primary.main, 0.1) 
      : 'transparent',
    borderRadius: '12px',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: active ? '100%' : '0%',
    height: '2px',
    background: theme.palette.secondary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::before': {
    background: alpha(theme.palette.primary.main, 0.1),
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const LanguageButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
    transform: 'scale(1.1)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover::after': {
    transform: 'translateX(100%)',
  }
}));

const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
    transform: 'rotate(15deg)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover::after': {
    transform: 'translateX(100%)',
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    background: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: `0 0 0 0 ${alpha(theme.palette.secondary.main, 0.7)}`
    },
    '70%': {
      boxShadow: `0 0 0 6px ${alpha(theme.palette.secondary.main, 0)}`
    },
    '100%': {
      boxShadow: `0 0 0 0 ${alpha(theme.palette.secondary.main, 0)}`
    }
  }
}));

const ContactButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: '12px',
  px: 2,
  py: 1,
  ml: 1,
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
  color: theme.palette.text.primary,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.secondary.main, 0.2)} 100%)`,
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[2],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover::before': {
    transform: 'translateX(100%)',
  }
}));

function ScrollTop(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: props.window ? props.window() : undefined,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: trigger ? 0 : 180 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <FloatingFab size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </FloatingFab>
        </motion.div>
      </Box>
    </Zoom>
  );
}

export default function Header({ 
  activeSection, 
  setActiveSection, 
  themeMode, 
  toggleTheme 
}) {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [contactMenuAnchor, setContactMenuAnchor] = useState(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);
  const isContactMenuOpen = Boolean(contactMenuAnchor);
  const isLanguageMenuOpen = Boolean(languageMenuAnchor);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleContactMenuOpen = (event) => {
    setContactMenuAnchor(event.currentTarget);
  };

  const handleContactMenuClose = () => {
    setContactMenuAnchor(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    handleLanguageMenuClose();
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    handleMobileMenuClose();
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <div id="back-to-top-anchor" />
      <StyledAppBar 
        position="sticky" 
        color="default"
        elevation={scrolled ? 4 : 0}
        sx={{
          py: scrolled ? 0 : 1,
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          transition: 'all 0.3s ease',
          py: scrolled ? 1 : 2,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <GradientText variant="h6" component="div">
                YASSINE BOUABID
              </GradientText>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Chip
                label={t('mechanical_engineer')}
                size="small"
                sx={{ 
                  ml: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.secondary.main, 0.2)} 100%)`,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                }}
                avatar={
                  <Avatar sx={{ 
                    bgcolor: 'transparent', 
                    color: theme.palette.primary.main,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`
                  }}>
                    <Person fontSize="small" />
                  </Avatar>
                }
              />
            </motion.div>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 0.5,
            alignItems: 'center'
          }}>
            {sections.map((section) => (
              <Tooltip 
                key={section.id} 
                title={t(section.label)} 
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 200 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavButton 
                    color="inherit"
                    startIcon={section.icon}
                    onClick={() => setActiveSection(section.id)}
                    active={activeSection === section.id ? 1 : 0}
                    sx={{
                      color: activeSection === section.id 
                        ? theme.palette.primary.main 
                        : theme.palette.text.primary,
                    }}
                  >
                    {t(section.label)}
                  </NavButton>
                </motion.div>
              </Tooltip>
            ))}
            
            <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ 
                mx: 1, 
                height: 24,
                bgcolor: alpha(theme.palette.divider, 0.2) 
              }} 
            />
            
            {/* Theme Toggle */}
            <Tooltip title={themeMode === 'dark' ? t('light_mode') : t('dark_mode')} arrow>
              <ThemeToggleButton
                onClick={toggleTheme}
                size="small"
                aria-label="toggle theme"
              >
                {themeMode === 'dark' ? <LightMode /> : <DarkMode />}
              </ThemeToggleButton>
            </Tooltip>
            
            {/* Language Selector */}
            <Tooltip title={t('change_language')} arrow>
              <LanguageButton
                onClick={handleLanguageMenuOpen}
                size="small"
                aria-label="change language"
              >
                <Typography variant="body2">{currentLanguage.flag}</Typography>
              </LanguageButton>
            </Tooltip>
            
            <Menu
              anchorEl={languageMenuAnchor}
              open={isLanguageMenuOpen}
              onClose={handleLanguageMenuClose}
              PaperProps={{
                sx: {
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.98)} 0%, ${alpha(theme.palette.background.default, 0.98)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  minWidth: '120px',
                  overflow: 'visible',
                  mt: 1.5,
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  },
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {languages.map((language) => (
                <MenuItem 
                  key={language.code}
                  selected={i18n.language === language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  sx={{
                    '&.Mui-selected': {
                      background: alpha(theme.palette.primary.main, 0.1),
                    },
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.05),
                    }
                  }}
                >
                  <ListItemText 
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1">{language.flag}</Typography>
                        <Typography>{language.name}</Typography>
                        {i18n.language === language.code && (
                          <Diamond color="primary" sx={{ fontSize: '0.8rem', ml: 'auto' }} />
                        )}
                      </Box>
                    } 
                  />
                </MenuItem>
              ))}
            </Menu>
            
            {/* Contact Button */}
            <Tooltip title={t('contact')} arrow>
              <motion.div whileHover={{ scale: 1.05 }}>
                <ContactButton
                  color="inherit"
                  startIcon={<Email />}
                  endIcon={isContactMenuOpen ? <ExpandLess /> : <ExpandMore />}
                  onClick={handleContactMenuOpen}
                >
                  {t('contact')}
                </ContactButton>
              </motion.div>
            </Tooltip>
            
            <Menu
              anchorEl={contactMenuAnchor}
              open={isContactMenuOpen}
              onClose={handleContactMenuClose}
              PaperProps={{
                sx: {
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.98)} 0%, ${alpha(theme.palette.background.default, 0.98)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  width: '300px',
                  overflow: 'visible',
                  mt: 1.5,
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  },
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Typography variant="subtitle2" sx={{ 
                px: 2, 
                pt: 1, 
                pb: 0.5, 
                fontWeight: 600,
                background: alpha(theme.palette.primary.main, 0.05),
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                color: theme.palette.primary.main
              }}>
                {t('contact_info')}
              </Typography>
              {contactInfo.map((info, index) => (
                <MenuItem 
                  key={index}
                  onClick={() => {
                    if (info.action) {
                      window.open(info.action, '_blank');
                    }
                    handleContactMenuClose();
                  }}
                  sx={{
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    color: theme.palette.primary.main,
                    minWidth: '36px'
                  }}>
                    {info.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={info.text} 
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  />
                </MenuItem>
              ))}
              
              <Divider sx={{ 
                my: 1, 
                bgcolor: alpha(theme.palette.divider, 0.1),
                borderBottom: `1px dashed ${alpha(theme.palette.divider, 0.2)}`
              }} />
              
              <Typography variant="subtitle2" sx={{ 
                px: 2, 
                pt: 1, 
                pb: 0.5, 
                fontWeight: 600,
                background: alpha(theme.palette.primary.main, 0.05),
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                color: theme.palette.primary.main
              }}>
                {t('social_links')}
              </Typography>
              {socialLinks.map((link) => (
                <MenuItem 
                  key={link.label}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    color: link.color,
                    minWidth: '36px'
                  }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={link.label} 
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              size="large"
              sx={{
                background: alpha(theme.palette.primary.main, 0.1),
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.2),
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      
      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.98)} 0%, ${alpha(theme.palette.background.default, 0.98)} 100%)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            minWidth: '280px',
            maxWidth: 'calc(100% - 32px)',
            overflow: 'visible',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
              borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            },
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {sections.map((section) => (
          <MenuItem 
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            selected={activeSection === section.id}
            sx={{
              '&.Mui-selected': {
                background: alpha(theme.palette.primary.main, 0.2),
              },
              '&:hover': {
                background: alpha(theme.palette.primary.main, 0.1),
              }
            }}
          >
            <ListItemIcon sx={{ 
              color: activeSection === section.id ? theme.palette.primary.main : 'inherit',
              minWidth: '36px'
            }}>
              {section.icon}
            </ListItemIcon>
            <ListItemText 
              primary={t(section.label)}
              primaryTypographyProps={{
                fontWeight: activeSection === section.id ? 600 : 'normal',
                color: activeSection === section.id ? theme.palette.primary.main : 'inherit',
              }}
            />
          </MenuItem>
        ))}
        
        <Divider sx={{ 
          my: 1, 
          bgcolor: alpha(theme.palette.divider, 0.1),
          borderBottom: `1px dashed ${alpha(theme.palette.divider, 0.2)}`
        }} />
        
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ 
            fontWeight: 600, 
            mb: 1,
            color: theme.palette.primary.main
          }}>
            {t('theme')}
          </Typography>
          <Button
            fullWidth
            startIcon={themeMode === 'dark' ? <LightMode /> : <DarkMode />}
            onClick={() => {
              toggleTheme();
              handleMobileMenuClose();
            }}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              borderRadius: '8px',
              background: alpha(theme.palette.primary.main, 0.05),
              '&:hover': {
                background: alpha(theme.palette.primary.main, 0.1),
              }
            }}
          >
            {themeMode === 'dark' ? t('light_mode') : t('dark_mode')}
          </Button>
        </Box>
        
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ 
            fontWeight: 600, 
            mb: 1,
            color: theme.palette.primary.main
          }}>
            {t('language')}
          </Typography>
          {languages.map((language) => (
            <Button
              key={language.code}
              fullWidth
              startIcon={<Typography variant="body1">{language.flag}</Typography>}
              onClick={() => {
                handleLanguageChange(language.code);
                handleMobileMenuClose();
              }}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                borderRadius: '8px',
                background: i18n.language === language.code 
                  ? alpha(theme.palette.primary.main, 0.1) 
                  : alpha(theme.palette.primary.main, 0.05),
                mb: 1,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.15),
                }
              }}
              endIcon={i18n.language === language.code ? <Diamond color="primary" sx={{ fontSize: '0.8rem' }} /> : null}
            >
              {language.name}
            </Button>
          ))}
        </Box>
        
        <Divider sx={{ 
          my: 1, 
          bgcolor: alpha(theme.palette.divider, 0.1),
          borderBottom: `1px dashed ${alpha(theme.palette.divider, 0.2)}`
        }} />
        
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ 
            fontWeight: 600, 
            mb: 1,
            color: theme.palette.primary.main
          }}>
            {t('contact_info')}
          </Typography>
          {contactInfo.map((info, index) => (
            <Button
              key={`mobile-contact-${index}`}
              fullWidth
              startIcon={info.icon}
              onClick={() => {
                if (info.action) {
                  window.open(info.action, '_blank');
                }
                handleMobileMenuClose();
              }}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                borderRadius: '8px',
                background: alpha(theme.palette.primary.main, 0.05),
                mb: 1,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                }
              }}
            >
              {info.text}
            </Button>
          ))}
        </Box>
        
        <Divider sx={{ 
          my: 1, 
          bgcolor: alpha(theme.palette.divider, 0.1),
          borderBottom: `1px dashed ${alpha(theme.palette.divider, 0.2)}`
        }} />
        
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ 
            fontWeight: 600, 
            mb: 1,
            color: theme.palette.primary.main
          }}>
            {t('social_links')}
          </Typography>
          {socialLinks.map((link) => (
            <Button
              key={`mobile-${link.label}`}
              fullWidth
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={link.icon}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                borderRadius: '8px',
                background: alpha(theme.palette.primary.main, 0.05),
                mb: 1,
                color: link.color,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Menu>
      
      <ScrollTop />
    </>
  );
}