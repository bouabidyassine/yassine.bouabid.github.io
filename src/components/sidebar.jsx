import React, { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  IconButton,
  useTheme,
  Avatar,
  Typography
} from '@mui/material';
import {
  Home as HomeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Assignment as AssignmentIcon,
  Verified as VerifiedIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  LinkedIn,
  GitHub,
  Email,
  Description,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const sections = [
  { id: 'accueil', label: 'Accueil', icon: <HomeIcon /> },
  { id: 'competences', label: 'Compétences', icon: <CodeIcon /> },
  { id: 'certifications', label: 'Certifications', icon: <VerifiedIcon /> },
  { id: 'formations', label: 'Formations', icon: <SchoolIcon /> },
  { id: 'projets', label: 'Projets', icon: <AssignmentIcon /> },
  { id: 'experience', label: 'Expérience', icon: <WorkIcon /> },
];

const socialLinks = [
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/bouabid-yassine', label: 'LinkedIn' },
  { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: <Email />, url: 'mailto:bouabid.yassine@outlook.com', label: 'Email' },
  { icon: <Description />, url: '/your-cv.pdf', label: 'Resume' },
];

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 300,
    background: 'linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,58,138,0.98) 100%)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'white',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
}));

const SidebarToggle = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  left: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1200,
  background: 'linear-gradient(135deg, rgba(0,210,255,0.2) 0%, rgba(58,123,213,0.2) 100%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(0,210,255,0.3) 0%, rgba(58,123,213,0.3) 100%)',
  },
}));

export default function Sidebar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <>
      <SidebarToggle 
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <MenuIcon />
        </motion.div>
      </SidebarToggle>

      <StyledDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleDrawer(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Avatar
              src="/path-to-your-photo.jpg"
              sx={{
                width: 100,
                height: 100,
                mb: 2,
                border: '3px solid rgba(0,210,255,0.5)',
              }}
            />
            <GradientText variant="h6">YASSINE BOUABID</GradientText>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Ingénieur en Conception et Simulation Mécanique
            </Typography>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 2 }} />

          <List>
            {sections.map((section) => (
              <motion.div key={section.id} whileHover={{ scale: 1.02 }}>
                <ListItem
                  button
                  onClick={() => {
                    setActiveSection(section.id);
                    setOpen(false);
                  }}
                  sx={{
                    mb: 1,
                    borderRadius: '8px',
                    bgcolor: activeSection === section.id ? 'rgba(0,210,255,0.2)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(0,210,255,0.1)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>{section.icon}</ListItemIcon>
                  <ListItemText primary={section.label} />
                </ListItem>
              </motion.div>
            ))}
          </List>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              Contact Rapide
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email fontSize="small" sx={{ mr: 1, opacity: 0.8 }} />
              <Typography variant="body2">
                bouabid.yassine@outlook.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone fontSize="small" sx={{ mr: 1, opacity: 0.8 }} />
              <Typography variant="body2">
                +212 6 53 56 88 35
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn fontSize="small" sx={{ mr: 1, opacity: 0.8 }} />
              <Typography variant="body2">
                Casablanca, MAROC
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 2 }} />

          <Box sx={{ mt: 'auto' }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              Réseaux Sociaux
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              {socialLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href={link.url}
                    target="_blank"
                    sx={{
                      color: 'white',
                      background: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.2)',
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </StyledDrawer>
    </>
  );
}