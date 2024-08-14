import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Box, Menu, MenuItem, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import NotificationDropdown from './NotificationDropdown';
import { useTheme } from '@emotion/react';
import { useAuth } from './AuthContext';
import { convertToBase64 } from './convertToBase64';
import { getToken } from './AuthService';
import axios from '../common/axiosInstance';
// Import the logo image
// import logo from './SocioGraphy-Logo.png'; // Update the path to your logo image

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const { darkMode, toggleTheme } = useTheme();
  const { authState } = useAuth();
  const { mode, photographerId } = authState;

  useEffect(() => {
    setAuthenticated(!!getToken());

    // Fetch profile picture based on mode
    if (mode && (mode === 'partner' || mode === 'photographer')) {
      axios.get(`/${mode === 'partner' ? 'partners' : 'photographers'}/${photographerId}`)
        .then(response => {
          const profileData = response.data;
          console.log(profileData);
          console.log("sdjfhdshfbhisdufijk")
          setProfilePic(convertToBase64(profileData.profilePic) || ''); // Assuming 'profilePic' is the key
        })
        .catch(error => {
          console.error('Error fetching profile picture:', error);
        });
    }
  }, [mode, photographerId]);


  // useEffect(() => {
  //   const fetchPartners = async () => {
  //     try {
  //       const response = await axiosInstance.get('/partners'); // Use the axios instance
  //       setPartners(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching partners:', error);
  //     }
  //   };

  //   fetchPartners();
  // }, []);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    navigate('/');
  };

  
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f1efe7' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Add the logo image */}
          <img src="/SocioGraphy-Logo.png" alt="SocioGraphy Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography 
            component={Link} 
            to="/home" 
            variant="h6" 
            sx={{ 
              color: 'black', 
              fontFamily: 'League Spartan, sans-serif', 
              fontWeight: 600, 
              textDecoration: 'none' 
            }}
          >
            SocioGraphy.
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              sx={{
                width: '50%',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgb(80, 140, 155)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(80, 140, 155)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(80, 140, 155)',
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="primary" sx={{ fontFamily: 'League Spartan, sans-serif' }} component={Link} to="/partner-listing">
              Partners
            </Button>
            <NotificationDropdown />
            <Avatar 
              alt="Profile"
              src={profilePic}
              sx={{ marginLeft: 2, cursor: 'pointer' }}
              onClick={handleAvatarClick}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
