import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import ikon dari react-icons/fa
import "./tim.css";
import image1 from "../../images/Ellipse 23.png";
import image2 from "../../images/Ellipse 24.png";
import image3 from "../../images/Ellipse 25.png";
import image4 from "../../images/Ellipse 26.png";
import image5 from "../../images/Ellipse 27.png";

function Tim() {
  const teamMembers = [
    {
      image: image2,
      name: 'Reqi Jumantara Hapid',
      role: 'Leader',
      linkedin: 'https://www.linkedin.com/in/reqi-jumantara/',
      instagram: 'https://www.instagram.com/jumantara_reqi/'
    },
    {
      image: image4,
      name: 'Umar Faruq Robbany',
      role: 'Fullstack Developer',
      linkedin: 'https://www.linkedin.com/in/umar-faruq-robbany',
      instagram: 'https://www.instagram.com/u.farq'
    },
    {
      image: image5,
      name: 'Farrel Zandra',
      role: 'Frontend Developer',
      linkedin: '',
      instagram: 'https://www.instagram.com/farrel29__/'
    },
    {
      image: image3,
      name: 'Banteng Harisantoso',
      role: 'UI/UX Designer',
      linkedin: 'https://www.linkedin.com/in/banteng-harisantoso-b083b627a/',
      instagram: 'https://www.instagram.com/harisantoso03/'
    },
    {
      image: image1,
      name: 'Gina Nurul Azqiah',
      role: 'Marketing and Finance',
      linkedin: 'https://www.linkedin.com/in/gina-nurul-azqiah-5437a9293/',
      instagram: 'https://www.instagram.com/ginazkiah/'
    }
  ];

  return (
    <div className='tim-container' id="tim">
      <div className='section-title'>
        Tim C-Food
      </div>
      <div className='section-detail section-card-container'>
        {teamMembers.map((member, index) => (
          <div className='tim-card' key={index}>
            <div className='tim-image'>
              <img src={member.image} alt={member.name} />
            </div>
            <div className='tim-detail'>
              <div className='tim-title'>{member.name}</div>
              <div className='tim-paragraph'>{member.role}</div>
              <div className='tim-social'>
                {member.linkedin && (
                  <a href={member.linkedin} className='lk-logo' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} className='ig-logo' target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tim;
