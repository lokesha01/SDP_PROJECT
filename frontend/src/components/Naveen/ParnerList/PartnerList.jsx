// import React from 'react';
// import PartnerCard from './PartnerCard';
// import './PartnerList.css';
// import pic1 from '../pics/1307360.jpeg';
// import pic2 from '../pics/gin2.jpeg';
// import pic3 from '../pics/spike1.png';

// const partners = [
//   {
//     id: 1,
//     title: 'Google',
//     description: 'We are looking for Photographs representing the company\'s best interest.',
//     imageUrl: pic1,
//   },
//   {
//     id: 2,
//     title: 'Microsoft',
//     description: 'We are in search of talents who can capture our visions with a lens.',
//     imageUrl: pic2,
//   },
//   {
//     id: 3,
//     title: 'Rediffmail',
//     description: 'On a search for spectacular modern landscapes for our site.',
//     imageUrl: pic3,
//   },
// ];

// const PartnerList = () => {
//   return (
//     <div className="partner-list">
//       {partners.map(partner => (
//         <PartnerCard
//           key={partner.id}
//           title={partner.title}
//           description={partner.description}
//           imageUrl={partner.imageUrl}
//         />
//       ))}
//     </div>
//   );
// };

// export default PartnerList;

// PartnerList.js
import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import './PartnerList.css';
import pic1 from '../pics/1307360.jpeg';
import pic2 from '../pics/gin2.jpeg';
import pic3 from '../pics/spike1.png';
import axiosInstance from '../../common/axiosInstance';
import { convertToBase64 } from '../../common/convertToBase64';

const partners = [
  {
    id: 1,
    title: 'Google',
    description: 'We are looking for Photographs representing the company\'s best interest.',
    imageUrl: pic1,
  },
  {
    id: 2,
    title: 'Microsoft',
    description: 'We are in search of talents who can capture our visions with a lens.',
    imageUrl: pic2,
  },
  {
    id: 3,
    title: 'Rediffmail',
    description: 'On a search for spectacular modern landscapes for our site.',
    imageUrl: pic3,
  },
];

const PartnerList = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axiosInstance.get('/partners'); // Use the axios instance
        setPartners(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="partner-list">
      {partners.map(partner => (
        <PartnerCard
          key={partner.id}
          id={partner.id}
          title={partner.name}
          description={partner.tagline}
          imageUrl={convertToBase64(partner.profilePic)}
        />
      ))}
    </div>
  );
};

export default PartnerList;
