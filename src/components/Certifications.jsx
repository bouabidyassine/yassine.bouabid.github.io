import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  Divider, 
  Chip,
  Box,
  Modal,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  Verified as VerifiedIcon,
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mock certificate images (replace with your actual certificate paths)
const certificateImages = {
  "Modélisation et simulation de systèmes mécaniques": "/certs/modelisation-simulation.jpg",
  "Ingénierie industrielle automobile": "/certs/ingenierie-automobile.jpg",
  "Fabrication numérique et conception": "/certs/fabrication-numerique.jpg",
  "Analyse par éléments finis avec Abaqus": "/certs/abaqus-analysis.jpg",
  "CATIA V5 - Niveau débutant à avancé": "/certs/catia-v5.jpg"
};

// Premium certificate viewer component
const PremiumCertificateViewer = ({ open, onClose, certificate }) => {
  const theme = useTheme();
  const [zoom, setZoom] = useState(false);

  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none'
            }}
          >
            {/* Certificate border decoration */}
            <Box sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              right: -20,
              bottom: -20,
              border: `4px solid ${theme.palette.primary.main}`,
              borderRadius: 2,
              pointerEvents: 'none',
              zIndex: -1,
              opacity: 0.3
            }} />
            
            {/* Gold embellishments */}
            <Box sx={{
              position: 'absolute',
              top: -10,
              left: -10,
              width: 40,
              height: 40,
              borderTop: `3px solid ${theme.palette.warning.main}`,
              borderLeft: `3px solid ${theme.palette.warning.main}`,
              borderRadius: '8px 0 0 0',
              pointerEvents: 'none'
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: -10,
              right: -10,
              width: 40,
              height: 40,
              borderBottom: `3px solid ${theme.palette.warning.main}`,
              borderRight: `3px solid ${theme.palette.warning.main}`,
              borderRadius: '0 0 8px 0',
              pointerEvents: 'none'
            }} />
            
            {/* Main certificate image */}
            <motion.img
              src={certificateImages[certificate.title]}
              alt={certificate.title}
              style={{
                borderRadius: 8,
                width: zoom ? 'auto' : '100%',
                height: zoom ? 'auto' : '100%',
                maxHeight: '80vh',
                maxWidth: '80vw',
                cursor: 'pointer',
                boxShadow: theme.shadows[10],
                objectFit: 'contain'
              }}
              onClick={() => setZoom(!zoom)}
              whileHover={{ scale: 1.01 }}
            />
            
            {/* Control buttons */}
            <Box sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              gap: 1,
              background: 'rgba(0,0,0,0.5)',
              borderRadius: 4,
              p: 1,
              backdropFilter: 'blur(5px)'
            }}>
              <IconButton 
                onClick={() => setZoom(!zoom)} 
                sx={{ color: 'white' }}
                aria-label={zoom ? 'Zoom out' : 'Zoom in'}
              >
                <ZoomInIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href={certificateImages[certificate.title]} 
                download 
                sx={{ color: 'white' }}
                aria-label="Download certificate"
              >
                <DownloadIcon />
              </IconButton>
              <IconButton 
                onClick={onClose} 
                sx={{ color: 'white' }}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            
            {/* Certificate info overlay */}
            <Box sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              right: 16,
              background: 'rgba(0,0,0,0.7)',
              borderRadius: 2,
              p: 2,
              backdropFilter: 'blur(5px)',
              color: 'white'
            }}>
              <Typography variant="h6">{certificate.title}</Typography>
              <Typography variant="body2">{certificate.issuer} • Délivrée en {certificate.date}</Typography>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const CertificationItem = ({ cert, index, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <ListItem 
        alignItems="flex-start" 
        component={motion.div} 
        whileHover={{ scale: 1.02 }}
        onClick={() => onClick(cert)}
        sx={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(25, 118, 210, 0.05)'
          }
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ 
            bgcolor: 'primary.main',
            boxShadow: 2
          }}>
            <VerifiedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              {cert.title}
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {cert.issuer}
              </Typography>
              {` — Délivrée en ${cert.date}`}
            </React.Fragment>
          }
        />
        <Chip 
          label={cert.date} 
          color="primary" 
          variant="outlined"
          sx={{ 
            borderWidth: 2,
            fontWeight: 'bold',
            fontSize: '0.875rem',
            boxShadow: 1
          }} 
        />
      </ListItem>
      {index < certifications.length - 1 && (
        <Divider 
          variant="inset" 
          component={motion.div} 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          sx={{ 
            borderColor: 'divider',
            marginLeft: 7
          }}
        />
      )}
    </motion.div>
  );
};

const certifications = [
  { title: "Modélisation et simulation de systèmes mécaniques", issuer: "Coursera", date: "2023" },
  { title: "Ingénierie industrielle automobile", issuer: "Coursera", date: "2023" },
  { title: "Fabrication numérique et conception", issuer: "Coursera", date: "2023" },
  { title: "Analyse par éléments finis avec Abaqus", issuer: "Skill-Lync", date: "2023" },
  { title: "CATIA V5 - Niveau débutant à avancé", issuer: "Udemy", date: "2022" },
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedCert, setSelectedCert] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box 
        ref={ref}
        component={motion.div}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            mb: 6,
            fontWeight: 'bold',
            textAlign: 'center',
            background: 'linear-gradient(45deg, #1976d2, #4facfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(45deg, #1976d2, #4facfe)',
              margin: '16px auto 0',
              borderRadius: 2
            }
          }}
          component={motion.h4}
          variants={itemVariants}
        >
          Mes Certifications
        </Typography>
        
        <List sx={{ 
          width: '100%', 
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #1976d2, #4facfe)'
          }
        }}>
          {certifications.map((cert, index) => (
            <React.Fragment key={index}>
              <CertificationItem 
                cert={cert} 
                index={index} 
                onClick={handleCertClick}
              />
            </React.Fragment>
          ))}
        </List>
      </Box>

      <PremiumCertificateViewer 
        open={viewerOpen} 
        onClose={handleCloseViewer} 
        certificate={selectedCert} 
      />
    </Container>
  );
}