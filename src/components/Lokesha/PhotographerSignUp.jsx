import React, { useState } from 'react';
import {
  TextField, Button, Grid, Typography, Paper, Box, IconButton, InputAdornment, Slide, AppBar, Toolbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Styled components remain the same
const StyledPaper = styled(Paper)({
  padding: '20px',
  borderRadius: '15px',
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(200, 200, 255, 0.8))',
  boxShadow: '0px 6px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 12px 24px rgba(0,0,0,0.2)',
  },
  width: '40vw',
});

const StyledButton = styled(Button)({
  fontFamily: 'League Spartan, sans-serif',
  marginTop: '20px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledTextField = styled(TextField)({
  fontFamily: 'League Spartan, sans-serif',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const BackgroundContainer = styled('div')({
  backgroundImage: 'url("/Welcomebg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '127%',
  height: '100vh',
  marginLeft: '-170px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
  overflowX: 'hidden',
});

const StyledHeader = styled(AppBar)({
  backgroundColor: '#f1f1f1',
  boxShadow: 'none',
  top: '0',
  marginTop: '-21px',
  width: '100vw'
});

const StyledFooter = styled(Box)({
  width: '100%',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#f1f1f1',
  color: 'black',
  position: 'relative',
  marginBottom: '-235px',
  transform: 'translate(0, 100px)'
});

const PhotographerSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [selfInfo, setSelfInfo] = useState('');
  const [location, setLocation] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? '' : 'This field is required.';
    tempErrors.username = username ? '' : 'This field is required.';
    tempErrors.password = password.length >= 6 ? '' : 'Password must be at least 6 characters long.';
    tempErrors.dob = dob ? '' : 'This field is required.';
    tempErrors.location = location ? '' : 'This field is required.';
    tempErrors.selfInfo = selfInfo ? '' : 'This field is required.';
    tempErrors.contactNo = contactNo.length === 10 ? '' : 'Contact number must be 10 digits long.';
    tempErrors.email = email ? '' : 'This field is required.';
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSignup = async () => {
    if (validate()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('dob', dob);
      formData.append('profilePic', profilePic);
      formData.append('selfInfo', selfInfo);
      formData.append('location', location);
      formData.append('contactNo', contactNo);
      formData.append('email', email);
      
      try {
        const response = await fetch('http://localhost:8080/api/signup/photographer', {
          method: 'POST',
          body: formData,
      });

      console.log(response);

  
        if (response.ok) {
          console.log('Photographer registered successfully');
          navigate('/Login');
        } else if (response.status === 409) {
          const errorText = await response.text();
          setErrors({ ...errors, apiError: errorText });
          console.log('Conflict:', errorText);
        } else {
          console.log('Failed to register photographer');
        }
      } catch (error) {
        console.log('Error during signup:', error);
      }
    }
  };
  

  return (
    <BackgroundContainer>
      <StyledHeader position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            SocioGraphy
          </Typography>
          <Box
            component="img"
            sx={{
              height: 40,
              width: 40,
            }}
            alt="Logo"
            src="/SocioGraphy-Logo.png" 
          />
        </Toolbar>
      </StyledHeader>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh', padding: '20px' }}
      >
        <Slide direction="up" in mountOnEnter unmountOnExit>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <StyledPaper>
              <Typography variant="h5" align="center" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold' }}>
                Photographer Sign Up
              </Typography>
              <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="profile-pic"
                      type="file"
                      onChange={handleProfilePicChange}
                    />
                    <label htmlFor="profile-pic">
                      <StyledButton
                        variant="contained"
                        component="span"
                        startIcon={<PhotoCameraIcon />}
                      >
                        Upload Profile Picture
                      </StyledButton>
                    </label>
                    {profilePic && (
                      <Box mt={2} textAlign="center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={URL.createObjectURL(profilePic)}
                            alt="Profile Preview"
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                          />
                        </motion.div>
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Username"
                      variant="outlined"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      error={!!errors.username}
                      helperText={errors.username}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Password"
                      variant="outlined"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={!!errors.password}
                      helperText={errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Date of Birth"
                      variant="outlined"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      error={!!errors.dob}
                      helperText={errors.dob}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Location"
                      variant="outlined"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      error={!!errors.location}
                      helperText={errors.location}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Contact No"
                      variant="outlined"
                      type="tel"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                      error={!!errors.contactNo}
                      helperText={errors.contactNo}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Self Info"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={selfInfo}
                      onChange={(e) => setSelfInfo(e.target.value)}
                      error={!!errors.selfInfo}
                      helperText={errors.selfInfo}
                    />
                  </Grid>
                  {errors.apiError && (
                    <Grid item xs={12}>
                      <Typography color="error">{errors.apiError}</Typography>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <StyledButton
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleSignup}
                    >
                      Sign Up
                    </StyledButton>
                  </Grid>
                </Grid>
              </form>
            </StyledPaper>
          </Grid>
        </Slide>
      </Grid>

      <StyledFooter>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} SocioGraphy. All rights reserved.
        </Typography>
      </StyledFooter>
    </BackgroundContainer>
  );
};

export default PhotographerSignUp;
