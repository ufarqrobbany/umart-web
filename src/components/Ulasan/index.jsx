import React from 'react';
import "./ulasan.css";
import bgulasan from '../../images/bg-ulasan.png';
import profil1 from '../../images/farras.jpeg';
import profil2 from '../../images/dzikri.jpeg';
import profil3 from '../../images/maul.jpeg';
import profil4 from '../../images/regita.jpeg';

function Ulasan() {
  const reviews = [
    {
      image: profil1,
      name: 'Farras Ahmad Rasyid',
      feedback: 'Setelah menggunakan C-Food, saya mendapatkan waktu istirahat yang lebih luang tanpa harus mengantri untuk membeli makanan.',
      role: 'Mahasiswa Polban, JTK 2023'
    },
    {
      image: profil2,
      name: 'Dzikri Dzulfikar',
      feedback: 'Dengan adanya aplikasi C-Food ini, membantu mahasiswa untuk mencari pendapatan tambahan, karena saya sendiri tertarik untuk mendaftar sebagai kurir mahasiswa.',
      role: 'Mahasiswa Polban, Administrasi Bisnis 2023'
    },
    {
      image: profil3,
      name: 'Maulida Sifa Yusnita',
      feedback: 'Dengan fitur yang ada di C-Food ini, sangatlah membantu saya yang merupakan seorang koordinator danus di organisasi mahasiswa',
      role: 'Mahasiswa Polban, Administrasi Bisnis 2023'
    },
    {
      image: profil4,
      name: 'Regita Gusrianisa',
      feedback: 'Sebagai seorang mahasiswa Administrasi Bisnis yang tiap semesternya selalu ada tugas untuk berjualan, dengan aplikasi C-Food sangat membantu dalam mempercepat penjualan sehingga mendapatkan omset yang maksimal',
      role: 'Mahasiswa Polban, Administrasi Bisnis 2023'
    }
  ];

  return (
    <div className='ulasan-container' id="ulasan" style={{ 
      backgroundImage: `url(${bgulasan})`, 
      backgroundSize: 'contain',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center'
     }}>
      <div className='section-title'>
        Ulasan dari Pengguna
      </div>
      <div className='section-detail section-card-container'>
        {reviews.map((review, index) => (
          <div className='review-card' key={index}>
            <div className='review-image'>
              <img src={review.image} />
            </div>
            <div className='review-detail'>
              <div className='review-title'>{review.name}</div>
              <div className='review-paragraph'>
                "{review.feedback}"
              </div>
              <div className='review-role'>
                ~ {review.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ulasan;
