// import React, { useState } from 'react';
// import { TextField, Button, Typography, IconButton, InputAdornment, AppBar, Toolbar, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { motion } from 'framer-motion';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); // Define navigate using useNavigate hook

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!password) {
//       newErrors.password = 'Password is required';
//     }
//     return newErrors;
//   };

//   const handleLogin = () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       // Add authentication logic here
//       console.log('Email:', email);
//       console.log('Password:', password);
//       // Redirect to profile page on successful login
//       navigate('/home');
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   const handleRegister = () => {
//     navigate('/signup-selection'); // Redirect to the PhotographerSignUp page
//   };

//   const pageStyles = {
//     position: 'relative',
//     height: '100vh',
//     width: '101.5vw',
//     overflowX: 'hidden',
//     marginLeft: '-200px',
//     marginBottom: '-50px',
//   };

//   const videoStyles = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     zIndex: -1,
//   };

//   const containerStyles = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '70%',
//     maxWidth: '800px',
//     margin: '0 auto',
//     marginTop: '80px',
//     backgroundImage: 'url("/Welcomebg.jpg")', // Background image for the container
//     backgroundSize: 'cover',
//     backgroundPosition: 'center', // Center background image in the container
//     borderRadius: '10px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//     overflow: 'hidden',
//   };

//   const descriptionStyles = {
//     padding: '30px',
//     background: 'rgba(102, 126, 234, 0.9)',
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     width: '50%',
//   };

//   const formContainerStyles = {
//     padding: '30px',
//     width: '50%',
//     backdropFilter: 'blur(10px)', // Optional: adds blur effect behind the form
//   };

//   const titleStyles = {
//     fontFamily: 'League Spartan, sans-serif',
//     fontWeight: 'bold',
//     color: '#333', // Changed to a darker color for better contrast
//   };

//   const inputStyles = {
//     fontFamily: 'League Spartan, sans-serif',
//     color: '#333', // Changed to a darker color for better contrast
//   };

//   const buttonStyles = {
//     fontFamily: 'League Spartan, sans-serif',
//     marginTop: '20px',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     color: 'white',
//     transition: 'transform 0.3s',
//   };

//   const headerStyles = {
//     backgroundColor: '#f1f1f1',
//     boxShadow: 'none',
//     marginLeft: '20px',
//   };

//   const footerStyles = {
//     width: '100%',
//     padding: '10px',
//     textAlign: 'center',
//     backgroundColor: '#f1f1f1',
//     color: 'black',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//   };

//   return (
//     <div style={pageStyles}>
//       {/* Header */}
//       <AppBar position="static" style={headerStyles}>
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
//           {/* Logo image to the right */}
//           <Box
//             component="img"
//             sx={{
//               height: 40,
//               width: 40,
//             }}
//             alt="Logo"
//             src="/Sociography-Logo.png" // Replace with your logo image path
//           />
//         </Toolbar>
//       </AppBar>

//       {/* Background video */}
//       <video autoPlay muted loop style={videoStyles}>
//         <source src="/BgVideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Main container */}
//       <div style={containerStyles}>
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           style={descriptionStyles}
//         >
//           <Typography variant="h4" gutterBottom style={{ fontFamily: 'League Spartan, sans-serif' }}>
//             Welcome back!
//             <br />
//             <br />
//             <br />
//           </Typography>
//           <Typography variant="body1" style={{ fontFamily: 'League Spartan, sans-serif' }}>
//             The ultimate social media platform for photographers. Showcase your work, connect with clients, and find job
//             opportunities.
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//           </Typography>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           style={formContainerStyles}
//         >
//           <Typography variant="h4" align="center" gutterBottom style={titleStyles}>
//             Log in to your account
//           </Typography>
//           <form noValidate autoComplete="off">
//             <TextField
//               fullWidth
//               label="Email"
//               margin="normal"
//               variant="outlined"
//               type="email"
//               value={email}
//               onChange={handleEmailChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               InputProps={{ style: inputStyles }}
//               InputLabelProps={{ style: { color: '#333' } }} // Changed to darker color
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               margin="normal"
//               variant="outlined"
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={handlePasswordChange}
//               error={!!errors.password}
//               helperText={errors.password}
//               InputProps={{
//                 style: inputStyles,
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                       {showPassword ? <VisibilityOff style={{ color: '#333' }} /> : <Visibility style={{ color: '#333' }} />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               InputLabelProps={{ style: { color: '#333' } }} // Changed to darker color
//             />
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Button
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 onClick={handleLogin}
//                 style={buttonStyles}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//               >
//                 Login
//               </Button>
//             </motion.div>
//           </form>
//           <Typography variant="body2" align="center" style={{ marginTop: '20px', color: '#333' }}>
//             Don't have an account? <Button onClick={handleRegister}>Register</Button>
//           </Typography>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <div style={footerStyles}>
//         <Typography variant="body2">
//           &copy; {new Date().getFullYear()} SocioGraphy. All rights reserved.
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { TextField, Button, Typography, IconButton, InputAdornment, AppBar, Toolbar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { motion } from 'framer-motion';
import { useAuth } from '../common/AuthContext'; // Import the useAuth hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from the AuthContext

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleLogin = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        await login(email, password); // Use the login function from AuthContext
        console.log('Login successful');
        navigate('/home'); // Redirect to home page on successful login
      } catch (error) {
        console.error('Login failed:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleRegister = () => {
    navigate('/signup-selection');
  };

  const pageStyles = {
    position: 'relative',
    height: '100vh',
    width: '101.5vw',
    overflowX: 'hidden',
    marginLeft: '-200px',
    marginBottom: '-50px',
  };

  const videoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '80px',
    backgroundImage: 'url("/Welcomebg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  };

  const descriptionStyles = {
    padding: '30px',
    background: 'rgba(102, 126, 234, 0.9)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '50%',
  };

  const formContainerStyles = {
    padding: '30px',
    width: '50%',
    backdropFilter: 'blur(10px)',
  };

  const titleStyles = {
    fontFamily: 'League Spartan, sans-serif',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyles = {
    fontFamily: 'League Spartan, sans-serif',
    color: '#333',
  };

  const buttonStyles = {
    fontFamily: 'League Spartan, sans-serif',
    marginTop: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    transition: 'transform 0.3s',
  };

  const headerStyles = {
    backgroundColor: '#f1f1f1',
    boxShadow: 'none',
    marginLeft: '20px',
  };

  const footerStyles = {
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    color: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
  };

  return (
    <div style={pageStyles}>
      <AppBar position="static" style={headerStyles}>
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
            src="/Sociography-Logo.png"
          />
        </Toolbar>
      </AppBar>

      <video autoPlay muted loop style={videoStyles}>
        <source src="/BgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={containerStyles}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={descriptionStyles}
        >
          <Typography variant="h4" gutterBottom style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Welcome back!
            <br />
            <br />
            <br />
          </Typography>
          <Typography variant="body1" style={{ fontFamily: 'League Spartan, sans-serif' }}>
            The ultimate social media platform for photographers. Showcase your work, connect with clients, and find job
            opportunities.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={formContainerStyles}
        >
          <Typography variant="h4" align="center" gutterBottom style={titleStyles}>
            Log in to your account
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: { color: '#333' } }}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                style: inputStyles,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff style={{ color: '#333' }} /> : <Visibility style={{ color: '#333' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: '#333' } }}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
                style={buttonStyles}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Login
              </Button>
            </motion.div>
          </form>
          <Typography variant="body2" align="center" style={{ marginTop: '20px', color: '#333' }}>
            Don't have an account? <Button onClick={handleRegister}>Register</Button>
          </Typography>
        </motion.div>
      </div>

      <div style={footerStyles}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} SocioGraphy. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default LoginPage;
