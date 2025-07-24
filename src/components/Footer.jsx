import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Divider,
  useTheme,
  Link
} from '@mui/material';
import { 
  LinkedIn,
  GitHub,
  Email,
  Description,
  LocationOn,
  Phone,
  Public,
  RocketLaunch,
  Science,
  Terminal
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const socialLinks = [
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/bouabid-yassine', label: 'LinkedIn' },
  { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: <Email />, url: 'mailto:bouabid.yassine@outlook.com', label: 'Email' },
  { icon: <Description />, url: '/your-cv.pdf', label: 'Resume' },
  { icon: <Terminal />, url: '#', label: 'Console' },
];

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #00ff9d, #00b8ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  textShadow: '0 0 10px rgba(0,255,157,0.3)',
  fontFamily: '"Orbitron", sans-serif',
});

const AlienFooter = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(11,13,23,0.95) 0%, rgba(23,13,42,0.95) 100%)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(0, 255, 157, 0.2)',
  color: '#e0e0e0',
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #00ff9d 0%, #00b8ff 50%, #a162e8 100%)',
    boxShadow: '0 0 15px rgba(0,255,157,0.5)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: 200,
    height: 200,
    background: 'radial-gradient(circle, rgba(0,255,157,0.1) 0%, transparent 70%)',
    zIndex: 0,
  }
}));

const AlienContactItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '12px',
  position: 'relative',
  zIndex: 1,
  '& svg': {
    color: '#00ff9d',
    fontSize: '1.2rem',
  }
});

const AlienIconButton = styled(IconButton)({
  color: '#00ff9d',
  background: 'rgba(0,255,157,0.1)',
  border: '1px solid rgba(0,255,157,0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0,255,157,0.2)',
    boxShadow: '0 0 15px rgba(0,255,157,0.3)',
    transform: 'translateY(-3px)',
  }
});

const AlienDivider = styled(Divider)({
  background: 'linear-gradient(90deg, transparent, rgba(0,255,157,0.5), transparent)',
  height: '1px',
  margin: '2rem 0',
});

const AlienLink = styled(Link)({
  color: '#e0e0e0',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#00ff9d',
    textShadow: '0 0 8px rgba(0,255,157,0.5)',
  }
});

const AlienParticle = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(0,255,157,0.3)',
  boxShadow: '0 0 10px rgba(0,255,157,0.5)',
});

export default function Footer() {
  const theme = useTheme();
  
  // Create random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.2,
    animationDelay: `${Math.random() * 5}s`
  }));
  
  return (
    <AlienFooter component="footer">
      {/* Floating particles */}
      {particles.map(particle => (
        <AlienParticle 
          key={particle.id}
          sx={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            animation: `float ${Math.random() * 10 + 5}s infinite ${particle.animationDelay}`,
            '@keyframes float': {
              '0%': { transform: 'translateY(0) translateX(0)' },
              '50%': { transform: `translateY(${Math.random() * 50 - 25}px) translateX(${Math.random() * 20 - 10}px)` },
              '100%': { transform: 'translateY(0) translateX(0)' },
            }
          }}
        />
      ))}
      
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <RocketLaunch sx={{ fontSize: '2.5rem', color: '#00ff9d' }} />
                <GradientText variant="h4" gutterBottom>
                  YASSINE BOUABID
                </GradientText>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, fontFamily: '"Rajdhani", sans-serif' }}>
                <Science sx={{ verticalAlign: 'middle', mr: 1, color: '#00b8ff' }} />
                Mechanical engineer specialized in design and simulation
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AlienIconButton 
                      component="a"
                      href={link.url}
                      target="_blank"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </AlienIconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Public sx={{ fontSize: '2rem', color: '#00b8ff' }} />
                <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: '"Rajdhani", sans-serif' }}>
                  Contact Transmission
                </Typography>
              </Box>
              
              <AlienContactItem>
                <Email fontSize="small" />
                <AlienLink href="mailto:bouabid.yassine@outlook.com" underline="hover">
                  bouabid.yassine@outlook.com
                </AlienLink>
              </AlienContactItem>
              
              <AlienContactItem>
                <Phone fontSize="small" />
                <AlienLink href="tel:+212653568835" underline="hover">
                  +212 6 53 56 88 35
                </AlienLink>
              </AlienContactItem>
              
              <AlienContactItem>
                <LocationOn fontSize="small" />
                <Typography sx={{ fontFamily: '"Rajdhani", sans-serif' }}>
                  Sector 7-G, Casablanca Colony, Earth
                </Typography>
              </AlienContactItem>
            </motion.div>
          </Grid>
        </Grid>
        
        <AlienDivider />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              opacity: 0.8, 
              fontFamily: '"Rajdhani", sans-serif',
              letterSpacing: '1px'
            }}
          >
            © {new Date().getFullYear()} Yassine Bouabid 
          </Typography>
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              mt: 2, 
              opacity: 0.6,
              fontFamily: '"Rajdhani", sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <RocketLaunch fontSize="small" />
            Designed with Yassine's technology using React and Material-UI
          </Typography>
        </motion.div>
      </Container>
    </AlienFooter>
  );
}