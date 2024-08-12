import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/common/NavBar';
import SearchPage from './components/Naveen/SearchPage/SearchPage';
import SearchResultsPage from './components/Naveen/SearchPage/SearchResultsPage';
import PartnerList from './components/Naveen/ParnerList/PartnerList';
import WelcomePage from './components/Lokesha/WelcomePage.jsx';
import Login from './components/Lokesha/Login.jsx';
import SignUpSelection from './components/Lokesha/SignUpSelection.jsx';
import PartnerSignUp from './components/Lokesha/PartnerSignUp';
import PhotographerSignUp from './components/Lokesha/PhotographerSignUp';
import ProfilePhotographer from './components/Vinod/ProfilePhotographer.jsx';
import PartnerProfile from './components/Vinod/PartnerProfile.jsx';
import Footer from './components/common/Footer.jsx';
import SocialMediaFeed from './components/common/LandingPage.jsx';
import { AuthProvider } from './components/common/AuthContext.jsx';
import UserPage from './components/common/UserPage.jsx';
import ContactForm from './components/common/ContactForm.jsx';
import CookiePolicy from './components/common/CookiePolicy.jsx';
import LearnMore from './components/common/LearnMore.jsx';
import PrivacyPolicy from './components/common/PrivacyPolicy.jsx';
import TermsOfService from './components/common/TermsOfService.jsx';
import PhotographerPage from './components/common/PhotographerPage.jsx';
import PartnerPage from './components/common/PartnerPage.jsx';
function App() {
  const location = useLocation();
  const isAuthPage = ['/','/login','/signup-selection', '/photographer-signup', '/partner-signup'].includes(location.pathname);
  
  return (
    <AuthProvider>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isAuthPage && <Navbar />}
      <Container sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-selection" element={<SignUpSelection />} />
          <Route path="/photographer-signup" element={<PhotographerSignUp />} />
          <Route path="/partner-signup" element={<PartnerSignUp />} />
          <Route path="/home" element={<SocialMediaFeed />} />
          <Route path="/profile" element={<UserPage />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/partner-listing" element={<PartnerList />} />
          <Route path="/partner-profile" element={<PartnerProfile />} />
          <Route path="/profile-photographer" element={<ProfilePhotographer />} /> 
          <Route path="/about" element={<LearnMore />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/partner-profile/:partnerId" element={<PartnerPage />} />
          <Route path="/profile-photographer/:photographerId" element={<PhotographerPage />}       />
        </Routes>
      </Container>
      {!isAuthPage && <Footer />}
    </div>
    </AuthProvider>
  );
}

export default App;
