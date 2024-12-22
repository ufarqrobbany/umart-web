import React from 'react';
import "./tentang.css";
import tentang from "../../images/tentang_cfood.png";
import galeri1 from "../../images/Galeri 1.png";
import galeri2 from "../../images/Galeri 2.png";
import galeri3 from "../../images/Galeri 3.png";
import galeri4 from "../../images/Galeri 4.png";
import galeri5 from "../../images/Galeri 5.png";
import image1 from "../../images/Ellipse 23.png";
import image2 from "../../images/Ellipse 24.png";
import image3 from "../../images/Ellipse 25.png";
import image4 from "../../images/Ellipse 26.png";
import image5 from "../../images/Ellipse 27.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import ikon dari react-icons/fa

function Tentang() {
  const [slidePercentage, setSlidePercentage] = useState(33); // default for 3 slides

  // Function to update the centerSlidePercentage based on window width
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 597) {
      setSlidePercentage(60); // 2 slides when width <= 597px
    } else {
      setSlidePercentage(33.3); // 3 slides for larger screens
    }
  };

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

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set the initial value
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const detail = "C-Food adalah aplikasi yang menawarkan solusi pemesanan makanan di kampus dengan berbagai fitur yang mendukung wirausaha mahasiswa, penggalangan dana (Danus), pemesanan dari kantin kampus, dan layanan kurir yang dijalankan oleh mahasiswa. Dengan C-Food, semua kebutuhan makanan kampus Anda dapat terpenuhi dalam satu platform yang praktis dan mudah digunakan.";

  return (
    <div className='tentang-container' id="tentang">
      <div className='page-title'>Tentang</div>
      <img src={tentang} className='tentang-image' alt="Tentang C-Food" />
      <div className='page-subtitle'>Apa itu C-Food?</div>
      <div className='page-paragraph'>
        {detail}
      </div>

      <Carousel centerMode centerSlidePercentage={slidePercentage} showThumbs={false} infiniteLoop className='galeries'>
        <div>
          <img src={galeri1} alt="Galeri 1" />
        </div>
        <div>
          <img src={galeri2} alt="Galeri 2" />
        </div>
        <div>
          <img src={galeri3} alt="Galeri 3" />
        </div>
        <div>
          <img src={galeri4} alt="Galeri 4" />
        </div>
        <div>
          <img src={galeri5} alt="Galeri 5" />
        </div>
      </Carousel>

      <div className='page-subtitle'>Tim C-Food</div>
      <div className='section-detail section-card-container tim-parag'>
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

export default Tentang;
