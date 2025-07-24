import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Modal,
  IconButton,
  Divider,
  Button,
  useTheme,
  Fade,
  Grow
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const SophisticatedCard = styled(Card)(({ theme }) => ({
  height: '520px',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)' 
    : 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)',
  borderRadius: '16px',
  boxShadow: theme.shadows[4],
  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  border: `1px solid ${theme.palette.divider}`,
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    '& .project-image': {
      transform: 'scale(1.03)'
    }
  },
}));

const ProjectImageContainer = styled('div')({
  height: '200px',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
  }
});

const ProjectImage = styled('div')(({ imgurl }) => ({
  height: '100%',
  width: '100%',
  backgroundImage: `url(${imgurl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'transform 0.5s ease',
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #E0E0E0, #B0B0B0)'
    : 'linear-gradient(90deg, #333333, #666666)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '900px',
  maxHeight: '90vh',
  overflowY: 'auto',
  background: theme.palette.background.paper,
  borderRadius: '24px',
  boxShadow: theme.shadows[24],
  padding: 0,
  outline: 'none',
  border: `1px solid ${theme.palette.divider}`,
}));

const FeatureItem = styled('li')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '24px',
  marginBottom: '8px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '10px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: theme.palette.primary.main
  }
}));

export default function Projects() {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const projects = [
    { 
      title: "Vehicle Damper Simulation",
      period: "05/2025 – 06/2025",
      shortDescription: "Advanced Python simulation of vehicle damper dynamics using differential equations and RK4 method for precision modeling of suspension systems.",
      fullDescription: "This project involved developing a comprehensive simulation of automotive damper systems using Python. I implemented complex differential equations to model the dynamic behavior of shock absorbers under various road conditions. The 4th-order Runge-Kutta method was employed to solve these equations with high accuracy. The results were visualized using Matplotlib, enabling detailed analysis of system performance under different loads and speeds. The simulation provided valuable insights into damper optimization for both comfort and performance applications.",
      technologies: ["Python", "Numerical Modeling", "Differential Eqs", "RK4", "Matplotlib"],
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyFeatures: [
        "Precise physical modeling of suspension systems",
        "Implementation of 4th-order Runge-Kutta method",
        "Interactive results visualization",
        "Performance analysis under varied conditions"
      ]
    },
    { 
      title: "FEA Structural Design", 
      period: "03/2024 – 05/2024",
      shortDescription: "Engineering of high-performance mechanical support with advanced finite element analysis for critical industrial applications.",
      fullDescription: "Design and finite element analysis of a mechanical support for critical industrial applications. The project involved creating a detailed 3D model in SolidWorks followed by comprehensive structural analysis in Abaqus. I optimized the geometry to reduce weight while maintaining structural integrity, with particular attention to stress concentration points. The results validated the design for high cyclic loads, demonstrating a 22% weight reduction compared to the original design while meeting all safety factors.",
      technologies: ["SolidWorks", "Abaqus", "FEA", "Structural Analysis", "CAD"],
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyFeatures: [
        "Advanced parametric modeling",
        "Stress and strain analysis",
        "Topological optimization",
        "Validation for cyclic loading"
      ]
    },
    { 
      title: "4-Cylinder Engine Model", 
      period: "09/2023 – 12/2023",
      shortDescription: "Premium 3D modeling of automotive engine with complete kinematic simulation of internal components in CATIA V5.",
      fullDescription: "Detailed modeling of a 4-cylinder automotive engine in CATIA V5, including all principal components (pistons, connecting rods, crankshaft, etc.). The project included a comprehensive kinematic study to analyze relative part movements and detect potential interferences. I also created assembly and operation animations to visualize the complete mechanism. The model achieved 98% accuracy when compared to physical measurements of the actual engine, serving as an excellent training and demonstration tool.",
      technologies: ["CATIA V5", "3D Modeling", "Kinematics", "Engine Systems"],
      imageUrl: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyFeatures: [
        "Detailed component modeling",
        "Complete kinematic analysis",
        "Interference detection",
        "Assembly/operation animations"
      ]
    },
    { 
      title: "CNC Robotic Arm", 
      period: "02/2022 – 07/2022",
      shortDescription: "Custom intelligent robotic system with high-precision control for elite industrial applications.",
      fullDescription: "Design and implementation of a CNC robotic arm for precision industrial applications. The system integrates stepper motors controlled by Arduino with a custom user interface. I developed control algorithms to ensure positioning accuracy of ±0.1mm, along with an obstacle detection system for safety. The project also included mechanical design of machined aluminum structural elements. The final prototype demonstrated 99.8% repeatability in positioning tests, exceeding industry standards for similar applications.",
      technologies: ["CNC", "Arduino", "Robotics", "Automation"],
      imageUrl: "https://images.unsplash.com/photo-1593491203371-2f45ef5c6eec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyFeatures: [
        "±0.1mm positioning accuracy",
        "Custom Arduino control system",
        "Integrated obstacle detection",
        "Machined aluminum structure"
      ]
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box textAlign="center" mb={8}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 700,
            mb: 2,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(90deg, #FFFFFF, #E0E0E0)'
              : 'linear-gradient(90deg, #111111, #444444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}
        >
          Engineering Portfolio
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
          Selected technical projects demonstrating innovation and engineering excellence
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Grow in timeout={(index + 1) * 300}>
              <SophisticatedCard>
                <ProjectImageContainer>
                  <ProjectImage className="project-image" imgurl={project.imageUrl} />
                  <Box position="absolute" bottom={16} left={16} zIndex={1}>
                    <Chip 
                      label={project.period} 
                      size="small" 
                      sx={{ 
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#FFFFFF',
                        fontWeight: 500
                      }}
                    />
                  </Box>
                </ProjectImageContainer>
                <CardContentWrapper>
                  <ProjectTitle variant="h5" gutterBottom>
                    {project.title}
                  </ProjectTitle>
                  <Typography variant="body2" color="textSecondary" sx={{ 
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.shortDescription}
                  </Typography>
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Chip 
                          key={i} 
                          label={tech} 
                          size="small" 
                          sx={{ 
                            backgroundColor: theme.palette.action.selected,
                            color: theme.palette.text.primary,
                            fontSize: '0.7rem',
                            height: '24px'
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip 
                          label={`+${project.technologies.length - 3}`} 
                          size="small" 
                          sx={{ 
                            backgroundColor: theme.palette.action.hover,
                            color: theme.palette.text.secondary,
                            fontSize: '0.7rem',
                            height: '24px'
                          }}
                        />
                      )}
                    </Box>
                    <Button 
                      fullWidth
                      variant="outlined"
                      endIcon={<ArrowOutwardIcon />}
                      onClick={() => handleOpenModal(project)}
                      sx={{
                        borderWidth: '1.5px',
                        '&:hover': {
                          borderWidth: '1.5px'
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContentWrapper>
              </SophisticatedCard>
            </Grow>
          </Grid>
        ))}
      </Grid>

      {/* Project Detail Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
      >
        <Fade in={openModal}>
          <ModalContent>
            {selectedProject && (
              <>
                <Box sx={{ position: 'relative', height: '300px' }}>
                  <ProjectImage 
                    imgurl={selectedProject.imageUrl} 
                    sx={{ 
                      height: '100%',
                      width: '100%',
                      borderRadius: '24px 24px 0 0'
                    }} 
                  />
                  <IconButton 
                    onClick={handleCloseModal}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.7)'
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box sx={{ p: 5 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {selectedProject.title}
                    </Typography>
                    <Chip 
                      label={selectedProject.period} 
                      sx={{ 
                        backgroundColor: theme.palette.action.selected,
                        color: theme.palette.text.primary,
                        fontWeight: 500
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    {selectedProject.fullDescription}
                  </Typography>
                  
                  <Divider sx={{ my: 4 }} />
                  
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Key Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 0, mb: 4 }}>
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <FeatureItem key={index}>
                        <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                          {feature}
                        </Typography>
                      </FeatureItem>
                    ))}
                  </Box>
                  
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    Technologies
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {selectedProject.technologies.map((tech, i) => (
                      <Chip 
                        key={i} 
                        label={tech} 
                        sx={{ 
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.primary.contrastText,
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </ModalContent>
        </Fade>
      </Modal>
    </Container>
  );
}