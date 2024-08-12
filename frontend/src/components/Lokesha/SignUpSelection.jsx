import React from 'react';
import { Typography, AppBar, Toolbar, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCamera, FaHandshake } from 'react-icons/fa'; // Ensure react-icons is installed

const SignUpSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'Photographer') {
      navigate('/photographer-signup'); // Navigate to the photographer signup page
    } else if (role === 'Partner') {
      navigate('/partner-signup'); // Navigate to the partner signup page
    }
  };

  const pageStyles = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("/SignUpSelectionBg.jpg")', // Add the background image here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden',
    marginLeft: '-157px',
  };

  const headerStyles = {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#f1efe7', // Matching background color of the WelcomePage header
    color: 'black',
    fontFamily: 'League Spartan, sans-serif',
    boxShadow: 'none',
    zIndex: 1000, // Ensure header is on top of other elements
  };

  const logoStyles = {
    height: '50px', // Adjust logo size as needed
    marginLeft: '15px',
  };

  const footerStyles = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '10px 0',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    color: 'black',
    fontFamily: 'League Spartan, sans-serif',
  };

  const cardStyles = {
    width: '300px', // Increase card width
    height: '350px', // Set a fixed height for the card
    margin: '20px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '20px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardHoverStyles = {
    transform: 'scale(1.1)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)',
  };

  const cardIconStyles = {
    fontSize: '4rem', // Increase icon size
    marginBottom: '15px',
    color: '#87CEEB', // Lighter blue color
  };

  return (
    <div style={pageStyles}>
      <AppBar position="static" sx={{ backgroundColor: '#f1efe7', boxShadow: 'none' }} style={headerStyles}>
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Typography
              component="a"
              href="/home"
              variant="h6"
              sx={{
                color: 'black',
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                textDecoration: 'none',
                flexGrow: 1,
                textAlign: 'left',
              }}
            >
              SocioGraphy
            </Typography>
            <img src="/SocioGraphy-Logo.png" alt="SocioGraphy Logo" style={logoStyles} />
          </Box>
        </Toolbar>
      </AppBar>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
          Choose Your Role
        </Typography>

        <Box display="flex" justifyContent="center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{ ...cardStyles, ...cardHoverStyles }}
            onClick={() => handleRoleSelection('Photographer')}
          >
            <CardContent>
              <FaCamera style={cardIconStyles} />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Photographer
              </Typography>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Showcase your stunning work!
              </Typography>
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{ ...cardStyles, ...cardHoverStyles }}
            onClick={() => handleRoleSelection('Partner')}
          >
            <CardContent>
              <FaHandshake style={cardIconStyles} />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Partner
              </Typography>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Collaborate and connect!
              </Typography>
            </CardContent>
          </motion.div>
        </Box>
      </motion.div>

      <footer style={footerStyles}>
        <Typography variant="body2">© 2024 SocioGraphy. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default SignUpSelectionPage;
