// src/components/UserPage.js
import React from 'react';
import { useAuth } from './AuthContext';

import PartnerProfile from '../Vinod/PartnerProfile';
import ProfilePhotographer from '../Vinod/ProfilePhotographer';

import { Navigate } from 'react-router-dom';

const UserPage = () => {
  const { authState } = useAuth();
  console.log('UserPage authState:', authState);

  if (!authState) {
    return <div>Loading...</div>; // or any loading indicator
  }

  if (authState.mode === 'photographer') {
    return <ProfilePhotographer />;
  } else if (authState.mode === 'partner') {
    return <PartnerProfile />;
  } else {
    return <ProfilePhotographer />;
  }
};

export default UserPage;