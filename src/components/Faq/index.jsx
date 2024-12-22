import React, { useState } from 'react';
import "./faq.css";
import { FaCaretDown, FaChevronDown, FaChevronRight, FaChevronUp, FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const faqData = [
  {
    question: "Apa itu C-Food?",
    answer: "C-Food adalah aplikasi pemesanan makanan khusus untuk mahasiswa dan kantin kampus yang menawarkan berbagai fitur seperti wirausaha mahasiswa, penggalangan dana (Danus), dan layanan kurir mahasiswa."
  },
  {
    question: "Bagaimana cara memesan makanan di C-Food?",
    answer: "Unduh aplikasi C-Food, jelajahi menu dari kantin atau penjual mahasiswa, pilih makanan, dan lakukan pembayaran."
  },
  {
    question: "Siapa yang bisa menjadi penjual di C-Food?",
    answer: "Mahasiswa yang ingin menjual makanan atau minuman, serta kantin kampus, bisa mendaftar sebagai penjual di C-Food."
  }
  ,
  {
    question: "Bagaimana cara kerja layanan kurir?",
    answer: "Pesanan Anda akan diantar oleh kurir yang juga mahasiswa di kampus Anda. Mereka akan memastikan pesanan Anda sampai dengan cepat dan aman. Fitur kurir hanya tersedia untuk kantin."
  }
  ,
  {
    question: "Bagaimana cara bergabung sebagai kurir?",
    answer: "Anda dapat mendaftar sebagai kurir melalui aplikasi C-Food. Kurir mahasiswa memiliki jam kerja yang fleksibel dan bisa mendapatkan penghasilan tambahan sambil tetap kuliah."
  }
  ,
  {
    question: "Apakah C-Food tersedia di semua kampus?",
    answer: "C-Food saat ini hanya tersedia di kampus Politeknik Negeri Bandung. Kami terus berupaya untuk memperluas jangkauan layanan kami ke lebih banyak kampus di seluruh Indonesia."
  }
];

function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleQuestionClick = (index) => {
    setActiveIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className='faq-container' id="faq">
      <div className='section-title'>
        Frequently Asked Questions
      </div>
      <div className='section-detail section-card-container'>
        {faqData.map((item, index) => (
          <div className='faq-card' key={index}>
            <div 
              className={`faq-question ${activeIndexes.includes(index) ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {item.question}
              {activeIndexes.includes(index) ? <FaChevronUp/> : <FaChevronDown/>}
            </div>
            {activeIndexes.includes(index) && (
              <div className='faq-answer'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='other-link'>
        <NavLink exact to="/help-center">Lihat Selengkapnya <FaChevronRight/></NavLink>
      </div>
    </div>
  );
}

export default Faq;
