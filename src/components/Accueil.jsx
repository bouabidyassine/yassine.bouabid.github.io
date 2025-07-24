import { Box, Button, Container, Typography, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ScienceIcon from '@mui/icons-material/Science';
import TerminalIcon from '@mui/icons-material/Terminal';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

const CosmicPhotoFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  width: '380px',
  height: '480px',
  boxShadow: '0 25px 50px -12px rgba(0, 255, 157, 0.2)',
  border: '1px solid rgba(0, 255, 157, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(0,255,157,0.1) 0%, rgba(0,184,255,0.05) 100%)',
    zIndex: 1,
    pointerEvents: 'none'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '24px',
    padding: '2px',
    background: 'linear-gradient(135deg, #00ff9d 0%, #00b8ff 50%, #a162e8 100%)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',
    animation: 'pulse 6s infinite alternate',
    '@keyframes pulse': {
      '0%': { opacity: 0.7 },
      '100%': { opacity: 1 }
    }
  }
}));

const CosmicBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.08,
  zIndex: 0,
  backgroundImage: `
    radial-gradient(circle at 20% 30%, rgba(0,255,157,0.2) 0%, transparent 20%),
    radial-gradient(circle at 80% 70%, rgba(0,184,255,0.2) 0%, transparent 20%),
    url("data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 100 L200 150 L180 250 L120 220 Z' fill='none' stroke='%2300ff9d' stroke-width='2'/%3E%3Cpath d='M300 200 L400 250 L380 350 L320 320 Z' fill='none' stroke='%2300ff9d' stroke-width='2'/%3E%3Cpath d='M500 150 L600 200 L580 300 L520 270 Z' fill='none' stroke='%2300ff9d' stroke-width='2'/%3E%3Ccircle cx='250' cy='400' r='40' fill='none' stroke='%2300b8ff' stroke-width='2'/%3E%3Crect x='400' y='350' width='100' height='80' fill='none' stroke='%2300b8ff' stroke-width='2'/%3E%3Cpath d='M50 400 Q150 350 250 400 T450 400' fill='none' stroke='%2300ff9d' stroke-width='2'/%3E%3C/svg%3E")
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: 'cosmicPan 60s linear infinite',
  '@keyframes cosmicPan': {
    '0%': { backgroundPosition: '0% 0%' },
    '50%': { backgroundPosition: '100% 100%' },
    '100%': { backgroundPosition: '0% 0%' }
  }
});

const CosmicText = styled(Typography)({
  background: 'linear-gradient(90deg, #00ff9d, #00b8ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  textShadow: '0 0 10px rgba(0,255,157,0.3)',
  fontFamily: '"Orbitron", sans-serif',
});

const CosmicButton = styled(Button)({
  background: 'linear-gradient(90deg, #00ff9d 0%, #00b8ff 100%)',
  color: '#0f172a',
  fontWeight: 600,
  fontSize: '1rem',
  padding: '12px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  boxShadow: '0 4px 15px rgba(0,255,157,0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 25px rgba(0,255,157,0.4)',
    background: 'linear-gradient(90deg, #00ff9d 0%, #00b8ff 100%)',
  }
});

export default function CosmicHeroSection({ darkMode = false }) {
  const { t } = useTranslation();
  const heroText = t('hero', { returnObjects: true });

  return (
    <Box sx={{
      background: darkMode 
        ? 'linear-gradient(135deg, rgba(5,7,17,0.95) 0%, rgba(13,5,32,0.95) 100%)' 
        : 'linear-gradient(135deg, rgba(11,13,23,0.95) 0%, rgba(23,13,42,0.95) 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      borderBottom: '1px solid rgba(0, 255, 157, 0.2)'
    }}>
      {/* Cosmic Background */}
      <CosmicBackground />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            borderRadius: '50%',
            background: `rgba(${Math.random() > 0.5 ? '0,255,157' : '0,184,255'}, ${Math.random() * 0.3 + 0.2})`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s infinite ${Math.random() * 5}s`,
            '@keyframes float': {
              '0%': { transform: 'translateY(0) translateX(0)' },
              '50%': { transform: `translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 40 - 20}px)` },
              '100%': { transform: 'translateY(0) translateX(0)' },
            }
          }}
        />
      ))}
      
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
          py: 8,
          position: 'relative',
          zIndex: 1
        }}>
          {/* Text Content */}
          <Box sx={{ flex: 1, zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <RocketLaunchIcon sx={{ fontSize: '2.5rem', color: '#00ff9d' }} />
                <CosmicText variant="h3" sx={{ 
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                  direction: t('language') === 'ar' ? 'rtl' : 'ltr'
                }}>
                  {heroText.greeting}
                </CosmicText>
              </Box>
              
              <Typography variant="h1" sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 1.1,
                fontFamily: '"Orbitron", sans-serif',
                color: 'white',
                direction: t('language') === 'ar' ? 'rtl' : 'ltr'
              }}>
                {heroText.title}
              </Typography>
              
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                maxWidth: '600px',
                mb: 4,
                opacity: 0.9,
                fontFamily: '"Rajdhani", sans-serif',
                direction: t('language') === 'ar' ? 'rtl' : 'ltr'
              }}>
                <ScienceIcon sx={{ verticalAlign: 'middle', mr: 1, color: '#00b8ff' }} />
                Mechanical Design & Simulation | CAD – FEA – AI
                <br />
                Profile Summary:
                <br />
                Mechanical engineer specialized in design and simulation, with strong expertise in Computer-Aided Design (CAD) (CATIA, SolidWorks), Finite Element Analysis (FEA) (Abaqus, ANSYS), and virtual prototyping. Passionate about integrating Artificial Intelligence (AI) to enhance design workflows, predict failures, and automate engineering processes.
              </Typography>
              
              <Stack direction="row" spacing={2}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <CosmicButton
                    variant="contained"
                    startIcon={<DownloadIcon />}
                  >
                    {heroText.download}
                  </CosmicButton>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    startIcon={<TerminalIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      borderColor: '#00ff9d',
                      color: '#00ff9d',
                      fontWeight: 600,
                      fontSize: '1rem',
                      '&:hover': {
                        borderColor: '#00b8ff',
                        color: '#00b8ff',
                        boxShadow: '0 0 15px rgba(0,255,157,0.2)',
                        background: 'rgba(0,255,157,0.05)'
                      }
                    }}
                  >
                    {heroText.console}
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Box>

          {/* Cosmic Photo Frame */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <CosmicPhotoFrame>
                <Box
                  component="img"
                  src="/profile.jpg"
                  alt="Bouabid Yassine"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                    position: 'relative',
                    zIndex: 0
                  }}
                />
                
                {/* Holographic overlay */}
                <Box sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, rgba(0,255,157,0.03) 0%, rgba(0,184,255,0.03) 100%)',
                  mixBlendMode: 'overlay',
                  zIndex: 1,
                  pointerEvents: 'none'
                }} />
                
                {/* Decorative elements */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '30%',
                  background: 'linear-gradient(to top, rgba(11,13,23,0.9) 0%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 3,
                  zIndex: 2
                }}>
                  <Typography variant="h6" sx={{ 
                    color: '#00ff9d',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    fontFamily: '"Rajdhani", sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    direction: t('language') === 'ar' ? 'rtl' : 'ltr'
                  }}>
                    <ScienceIcon fontSize="small" />
                    {heroText.design}
                  </Typography>
                </Box>
              </CosmicPhotoFrame>
            </motion.div>
            
            {/* Floating decorative elements */}
            <Box sx={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,255,157,0.15) 0%, transparent 70%)',
              top: '-50px',
              right: '-50px',
              zIndex: 0,
              animation: 'pulse 8s infinite alternate',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)', opacity: 0.3 },
                '100%': { transform: 'scale(1.2)', opacity: 0.5 }
              }
            }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}