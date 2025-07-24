import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Paper, 
  Typography, 
  Chip, 
  Grid, 
  Divider, 
  useTheme,
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade
} from '@mui/material';
import { 
  StarBorder, 
  WorkOutline, 
  SchoolOutlined, 
  VolunteerActivismOutlined,
  ExpandMore,
  ExpandLess,
  CheckCircleOutline,
  Build,
  Engineering,
  Groups,
  Flight,
  DirectionsCar
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Experience() {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    {
      id: 1,
      type: 'professional',
      position: "Stagiaire Technicien Électromécanique (PFE)",
      company: "SAHARA PLOMB",
      period: "Avril 2024",
      location: "Casablanca, Maroc",
      description: "Stage de fin d'études en électromécanique avec focus sur la maintenance industrielle.",
      details: [
        "Maintenance préventive et corrective sur équipements industriels (réduction de 20% des arrêts machines)",
        "Diagnostic et résolution de pannes sur systèmes électromécaniques complexes",
        "Participation à la rédaction de rapports techniques",
        "Optimisation des procédures de maintenance"
      ],
      icon: <Build />
    },
    {
      id: 2,
      type: 'professional',
      position: "Stagiaire – Concepteur Mécanique",
      company: "Commune de Oulad Ali Toualaa",
      period: "Février – Mai 2021",
      location: "Casablanca, Maroc",
      description: "Stage en conception mécanique et formation CAO.",
      details: [
        "Mise à jour de 15+ schémas techniques et standardisation documentaire",
        "Animation de 5+ sessions de formation en CAO pour le personnel technique",
        "Renforcement des compétences en modélisation 3D de l'équipe",
        "Support à la conception de pièces mécaniques"
      ],
      icon: <Engineering />
    },
    {
      id: 3,
      type: 'volunteer',
      position: "Bénévole – Opérations Humanitaires",
      company: "Association Lueur d'Espoir",
      period: "Juin – Octobre 2024",
      location: "Casablanca, Maroc",
      description: "Engagement communautaire et actions sociales.",
      details: [
        "Organisation et distribution de 200+ aides alimentaires pendant le Ramadan",
        "Sensibilisation pour la solidarité communautaire",
        "Coordination des bénévoles sur le terrain",
        "Participation aux campagnes de sensibilisation sociale"
      ],
      icon: <Groups />
    },
    {
      id: 4,
      type: 'activity',
      position: "Membre, Club de Mécanique Auto & Aéro (2AMECA)",
      company: "",
      period: "Nov 2024 - Présent",
      location: "",
      description: "Participation active à un club dédié à la mécanique automobile et aéronautique.",
      details: [
        "Participation à des projets axés sur la mécanique automobile et aéronautique",
        "Formation sur le logiciel CATIA (conception assistée par ordinateur)",
        "Collaboration sur des projets pratiques de mécanique",
        "Échanges avec des professionnels du secteur"
      ],
      icon: <DirectionsCar />
    }
  ];

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

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            mb: 6,
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: 0,
              width: '80px',
              height: '4px',
              background: theme.palette.primary.main,
              borderRadius: '2px'
            }
          }}
        >
          Expérience Professionnelle
        </Typography>
      </motion.div>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              <WorkOutline fontSize="large" color="primary" />
              <span>Expériences Professionnelles</span>
            </Typography>
            
            <Box sx={{ position: 'relative', pl: 3 }}>
              <Box sx={{
                position: 'absolute',
                left: 20,
                top: 0,
                bottom: 0,
                width: '2px',
                bgcolor: 'primary.light'
              }} />
              
              {experiences.filter(exp => exp.type === 'professional').map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <Box sx={{ position: 'relative', mb: 4 }}>
                    <Avatar sx={{
                      position: 'absolute',
                      left: -32,
                      top: 8,
                      width: 24,
                      height: 24,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s'
                      }
                    }}>
                      {React.cloneElement(exp.icon, { fontSize: 'small' })}
                    </Avatar>
                    
                    <Paper 
                      elevation={expandedId === exp.id ? 6 : 4}
                      onClick={() => handleExpandClick(exp.id)}
                      sx={{ 
                        p: 3,
                        borderRadius: '12px',
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        background: theme.palette.mode === 'dark' ? 
                          'linear-gradient(to right, #1a1a1a, #2a2a2a)' : 
                          'linear-gradient(to right, #f9f9f9, #ffffff)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: theme.shadows[8]
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>{exp.position}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Chip 
                            label={exp.period} 
                            color="primary" 
                            size="small"
                            sx={{ fontWeight: 500, mr: 1 }}
                          />
                          {expandedId === exp.id ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
                        </Box>
                      </Box>
                      <Typography variant="subtitle1" sx={{ 
                        mt: 0.5, 
                        mb: 1.5,
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
                      }}>
                        {exp.company} • {exp.location}
                      </Typography>
                      <Divider sx={{ my: 1, borderColor: theme.palette.divider }} />
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {exp.description}
                      </Typography>
                      
                      <Collapse in={expandedId === exp.id} timeout="auto" unmountOnExit>
                        <Fade in={expandedId === exp.id} timeout={500}>
                          <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Principales réalisations:
                            </Typography>
                            <List dense sx={{ py: 0 }}>
                              {exp.details.map((detail, i) => (
                                <ListItem key={i} sx={{ py: 0, pl: 0 }}>
                                  <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleOutline color="primary" fontSize="small" />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary={detail} 
                                    primaryTypographyProps={{ variant: 'body2' }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </Fade>
                      </Collapse>
                    </Paper>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              <VolunteerActivismOutlined fontSize="large" color="primary" />
              <span>Activités & Engagement</span>
            </Typography>
            
            {experiences.filter(exp => exp.type !== 'professional').map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <Box sx={{ position: 'relative', mb: 4 }}>
                  <Avatar sx={{
                    position: 'absolute',
                    left: -32,
                    top: 8,
                    width: 24,
                    height: 24,
                    bgcolor: exp.type === 'volunteer' ? 'secondary.main' : 'info.main',
                    color: 'common.white',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      transition: 'transform 0.2s'
                    }
                  }}>
                    {React.cloneElement(exp.icon, { fontSize: 'small' })}
                  </Avatar>
                  
                  <Paper 
                    elevation={expandedId === exp.id ? 6 : 4}
                    onClick={() => handleExpandClick(exp.id)}
                    sx={{ 
                      p: 3,
                      borderRadius: '12px',
                      borderLeft: `4px solid ${exp.type === 'volunteer' ? theme.palette.secondary.main : theme.palette.info.main}`,
                      background: theme.palette.mode === 'dark' ? 
                        'linear-gradient(to right, #1a1a1a, #2a2a2a)' : 
                        'linear-gradient(to right, #f9f9f9, #ffffff)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: theme.shadows[8]
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{exp.position}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Chip 
                          label={exp.period} 
                          color={exp.type === 'volunteer' ? 'secondary' : 'info'} 
                          size="small"
                          sx={{ fontWeight: 500, mr: 1 }}
                        />
                        {expandedId === exp.id ? <ExpandLess color={exp.type === 'volunteer' ? 'secondary' : 'info'} /> : <ExpandMore color={exp.type === 'volunteer' ? 'secondary' : 'info'} />}
                      </Box>
                    </Box>
                    {exp.company && (
                      <Typography variant="subtitle1" sx={{ 
                        mt: 0.5, 
                        mb: 1.5,
                        color: exp.type === 'volunteer' ? 
                          (theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark) :
                          (theme.palette.mode === 'dark' ? theme.palette.info.light : theme.palette.info.dark)
                      }}>
                        {exp.company} {exp.location && '•'} {exp.location}
                      </Typography>
                    )}
                    <Divider sx={{ my: 1, borderColor: theme.palette.divider }} />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {exp.description}
                    </Typography>
                    
                    <Collapse in={expandedId === exp.id} timeout="auto" unmountOnExit>
                      <Fade in={expandedId === exp.id} timeout={500}>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            {exp.type === 'volunteer' ? 'Actions Clés:' : 'Contributions:'}
                          </Typography>
                          <List dense sx={{ py: 0 }}>
                            {exp.details.map((detail, i) => (
                              <ListItem key={i} sx={{ py: 0, pl: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <CheckCircleOutline color={exp.type === 'volunteer' ? 'secondary' : 'info'} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={detail} 
                                  primaryTypographyProps={{ variant: 'body2' }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Fade>
                    </Collapse>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}