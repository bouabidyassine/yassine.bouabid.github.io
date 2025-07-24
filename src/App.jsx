import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Competences from './components/Competences';
import Certifications from './components/Certifications';
import Formations from './components/Formations';
import Projets from './components/Projets';
import Experience from './components/Experience';

function App({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        themeMode={darkMode ? 'dark' : 'light'}
        toggleTheme={() => setDarkMode(!darkMode)}
        handleDrawerToggle={handleDrawerToggle}
      />
      
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          darkMode={darkMode}
        />
        
        <Box component="main" sx={{ flex: 1, p: 3 }}>
          {activeSection === 'accueil' && <Accueil />}
          {activeSection === 'competences' && <Competences />}
          {activeSection === 'certifications' && <Certifications />}
          {activeSection === 'formations' && <Formations />}
          {activeSection === 'projets' && <Projets />}
          {activeSection === 'experience' && <Experience />}
        </Box>
      </Box>
      
      <Footer darkMode={darkMode} />
    </Box>
  );
}

export default App;