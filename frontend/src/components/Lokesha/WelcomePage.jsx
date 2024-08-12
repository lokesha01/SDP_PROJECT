import React from 'react';
import { Button, Typography, Box, AppBar, Toolbar, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div style={{ width: '130%', overflowX: 'hidden', marginLeft: '-170px' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#f1efe7', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            component="a"
            href="/home"
            variant="h6"
            sx={{
              color: 'black',
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            SocioGraphy
          </Typography>
          <Avatar
            alt="SocioGraphy Logo"
            src="/SocioGraphy-Logo.png" // Replace with the actual path to your logo image
            sx={{ width: 50, height: 50 }}
          />
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <div
        style={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/BgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            alt="SocioGraphy Avatar"
            src="/photographer.png" // Replace with the actual path to your avatar image
            sx={{ width: 100, height: 100, margin: '0 auto 20px' }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: '#fff' }}
          >
            Welcome to SocioGraphy
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontFamily: 'League Spartan, sans-serif', marginTop: '20px', color: '#fff' }}
          >
            The ultimate social media platform for photographers
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleGetStarted}
            sx={{ fontFamily: 'League Spartan, sans-serif', padding: '10px 20px', backgroundColor: '#0073e6' }}
          >
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* About Us Section */}
      <Box
        sx={{
          backgroundColor: '#f1efe7',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: '#333' }}
          >
            About Us
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="body1"
              sx={{ fontFamily: 'League Spartan, sans-serif', color: '#666', maxWidth: '800px', margin: '0 auto' }}
            >
              SocioGraphy is the ultimate social media platform for photographers. We provide a space for photographers to
              showcase their work, connect with potential clients, and find job opportunities. Our mission is to empower
              photographers by providing them with the tools and resources they need to succeed in the industry.
            </Typography>
          </motion.div>
        </motion.div>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          width: '100%',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: '#f1f1f1',
          color: 'black',
          position: 'relative',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} SocioGraphy. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default WelcomePage;
