// import React, { useState } from 'react';
// import { TextField, Button, Grid, Typography, Paper, Box, IconButton, InputAdornment, Slide, AppBar, Toolbar } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import BusinessIcon from '@mui/icons-material/Business';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { styled } from '@mui/system';
// import { motion } from 'framer-motion';

// // Styled Paper component with gradient background
// const StyledPaper = styled(Paper)({
//   padding: '20px',
//   borderRadius: '15px',
//   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(200, 200, 255, 0.8))',
//   boxShadow: '0px 6px 12px rgba(0,0,0,0.1)',
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.02)',
//     boxShadow: '0px 12px 24px rgba(0,0,0,0.2)',
//   },
//   maxHeight: '90vh',
//   overflowY: 'auto',
//   width: '40vw',
// });

// // Styled Button component
// const StyledButton = styled(Button)({
//   fontFamily: 'League Spartan, sans-serif',
//   marginTop: '20px',
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// });

// // Styled TextField component
// const StyledTextField = styled(TextField)({
//   fontFamily: 'League Spartan, sans-serif',
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// });

// // Container with background image
// const BackgroundContainer = styled('div')({
//   backgroundImage: 'url("/Welcomebg.jpg")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   width: '128%',
//   height: '100vh',
//   marginLeft: '-170px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   overflowY: 'auto',
//   padding: '20px',
// });

// // Styled Header component
// const StyledHeader = styled(AppBar)({
//   backgroundColor: '#f1f1f1',
//   boxShadow: 'none',
//   top: '0',
//   width: '102.5%',
//   marginRight: '-25px',
//   marginTop: '23px'
// });

// const PartnerSignUp = () => {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [businessName, setBusinessName] = useState('');
//   const [businessType, setBusinessType] = useState('');
//   const [profilePic, setProfilePic] = useState(null);
//   const [contactNo, setContactNo] = useState('');
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleProfilePicChange = (e) => {
//     if (e.target.files[0]) {
//       setProfilePic(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.name = name ? '' : 'This field is required.';
//     tempErrors.username = username ? '' : 'This field is required.';
//     tempErrors.password = password.length >= 6 ? '' : 'Password must be at least 6 characters long.';
//     tempErrors.businessName = businessName ? '' : 'This field is required.';
//     tempErrors.businessType = businessType ? '' : 'This field is required.';
//     tempErrors.contactNo = contactNo.length === 10 ? '' : 'Contact number must be 10 digits long.';
//     tempErrors.email = email ? '' : 'This field is required.';
//     setErrors(tempErrors);

//     return Object.values(tempErrors).every((x) => x === '');
//   };

//   const handleSignup = async () => {
//     if (validate()) {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('username', username);
//       formData.append('password', password);
//       formData.append('businessName', businessName);
//       formData.append('businessType', businessType);
//       formData.append('contactNo', contactNo);
//       formData.append('email', email);
  
//       if (profilePic) {
//         formData.append('profilePic', profilePic);
//       }
  
//       try {
//         const response = await fetch('http://localhost:8080/api/signup/partner', {
//           method: 'POST',
//           body: formData, // Form data is sent as multipart/form-data
//         });
  
//         if (response.ok) {
//           console.log('Partner registered successfully');
//           navigate('/home');
//         } else {
//           const errorText = await response.text();
//           setErrors({ ...errors, apiError: errorText });
//           console.log('Error:', errorText);
//         }
//       } catch (error) {
//         console.log('Error during signup:', error);
//       }
//     }
//   };
  

//   return (
//     <BackgroundContainer>
//       {/* Header */}
//       <StyledHeader position="static">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             sx={{
//               flexGrow: 1,
//               fontFamily: 'League Spartan, sans-serif',
//               fontWeight: 'bold',
//               color: 'black',
              
//             }}
//           >
//             SocioGraphy
//           </Typography>
//           <Box
//             component="img"
//             sx={{
//               height: 40,
//               width: 40,
//             }}
//             alt="Logo"
//             src="/SocioGraphy-Logo.png"
//           />
//         </Toolbar>
//       </StyledHeader>

//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         style={{ minHeight: '100vh', padding: '20px' }}
//       >
//         <Slide direction="up" in mountOnEnter unmountOnExit>
//           <Grid item xs={12} sm={8} md={6} lg={4}>
//             <StyledPaper>
//               <Typography variant="h5" align="center" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold' }}>
//                 Partner Sign Up
//               </Typography>
//               <form noValidate autoComplete="off">
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <input
//                       accept="image/*"
//                       style={{ display: 'none' }}
//                       id="profile-pic"
//                       type="file"
//                       onChange={handleProfilePicChange}
//                     />
//                     <label htmlFor="profile-pic">
//                       <StyledButton
//                         variant="contained"
//                         component="span"
//                         startIcon={<BusinessIcon />}
//                       >
//                         Upload Profile Picture
//                       </StyledButton>
//                     </label>
//                     {profilePic && (
//                       <Box mt={2} textAlign="center">
//                         <motion.div
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ duration: 0.5 }}
//                         >
//                           <img
//                             src={profilePic}
//                             alt="Profile Preview"
//                             style={{ width: '100px', height: '100px', borderRadius: '50%' }}
//                           />
//                         </motion.div>
//                       </Box>
//                     )}
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledTextField
//                       fullWidth
//                       label="Email or Phone"
//                       variant="outlined"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       error={!!errors.email}
//                       helperText={errors.email}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledTextField
//                       fullWidth
//                       label="Username"
//                       variant="outlined"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       error={!!errors.username}
//                       helperText={errors.username}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledTextField
//                       fullWidth
//                       label="Password"
//                       variant="outlined"
//                       type={showPassword ? 'text' : 'password'}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       error={!!errors.password}
//                       helperText={errors.password}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton
//                               onClick={() => setShowPassword(!showPassword)}
//                               edge="end"
//                             >
//                               {showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledTextField
//                       fullWidth
//                       label="Business Name"
//                       variant="outlined"
//                       value={businessName}
//                       onChange={(e) => setBusinessName(e.target.value)}
//                       error={!!errors.businessName}
//                       helperText={errors.businessName}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledTextField
//                       fullWidth
//                       label="Business Type"
//                       variant="outlined"
//                       value={businessType}
//                       onChange={(e) => setBusinessType(e.target.value)}
//                       error={!!errors.businessType}
//                       helperText={errors.businessType}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledTextField
//                       fullWidth
//                       label="Contact Number"
//                       variant="outlined"
//                       value={contactNo}
//                       onChange={(e) => setContactNo(e.target.value)}
//                       error={!!errors.contactNo}
//                       helperText={errors.contactNo}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <StyledButton
//                       fullWidth
//                       variant="contained"
//                       color="primary"
//                       onClick={handleSignup}
//                     >
//                       Sign Up
//                     </StyledButton>
//                   </Grid>
//                 </Grid>
//               </form>
//             </StyledPaper>
//           </Grid>
//         </Slide>
//       </Grid>
//     </BackgroundContainer>
//   );
// };

// export default PartnerSignUp;
import React, { useState } from 'react';
import {
  TextField, Button, Grid, Typography, Paper, Box, IconButton, InputAdornment, Slide, AppBar, Toolbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import axios from 'axios';

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

const PartnerSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
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
    tempErrors.contact = contact.length === 10 ? '' : 'Contact number must be 10 digits long.';
    tempErrors.email = email ? '' : 'This field is required.';
    tempErrors.tagline = tagline ? '' : 'This field is required.';
    tempErrors.description = description ? '' : 'This field is required.';
    tempErrors.address = address ? '' : 'This field is required.';
    tempErrors.website = website ? '' : 'This field is required.';
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSignup = async () => {
    if (validate()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('contact', contact);
      formData.append('email', email);
      formData.append('tagline', tagline);
      formData.append('description', description);
      formData.append('address', address);
      formData.append('website', website);

      if (profilePic) {
        formData.append('profilePic', profilePic);
      }

      try {
        const response = await axios.post('http://localhost:8080/api/partners/signup', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 201) {
          console.log('Partner registered successfully');
          navigate('/Login');
        } else {
          const errorText = response.data.message || 'Error during signup';
          setErrors({ ...errors, apiError: errorText });
          console.log('Error:', errorText);
        }
      } catch (error) {
        console.log('Error during signup:', error);
        if (error.response && error.response.data && error.response.data.message) {
          setErrors({ ...errors, apiError: error.response.data.message });
        } else {
          setErrors({ ...errors, apiError: 'An unexpected error occurred' });
        }
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
                Partner Sign Up
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
                        startIcon={<BusinessIcon />}
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
                      label="Contact Number"
                      variant="outlined"
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      error={!!errors.contact}
                      helperText={errors.contact}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Tagline"
                      variant="outlined"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      error={!!errors.tagline}
                      helperText={errors.tagline}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Description"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      error={!!errors.description}
                      helperText={errors.description}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Website"
                      variant="outlined"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      error={!!errors.website}
                      helperText={errors.website}
                    />
                  </Grid>
                </Grid>
                {errors.apiError && (
                  <Typography color="error" align="center" variant="body2" mt={2}>
                    {errors.apiError}
                  </Typography>
                )}
                <StyledButton
                  fullWidth
                  variant="contained"
                  onClick={handleSignup}
                >
                  Sign Up
                </StyledButton>
              </form>
            </StyledPaper>
          </Grid>
        </Slide>
      </Grid>
    </BackgroundContainer>
  );
};

export default PartnerSignUp;
