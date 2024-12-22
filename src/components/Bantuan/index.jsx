import React, { useState } from 'react';
import './bantuan.css';
import faqData from './faqData.json';

function Bantuan() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 5;

  const toggleAccordion = (category, index) => {
    const key = `${category}-${index}`;
    setActiveFAQ(activeFAQ === key ? null : key);
  };

  const groupedFAQs = faqData.reduce((groups, faq) => {
    const { category } = faq;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(faq);
    return groups;
  }, {});

  const categories = ['Semua Kategori', ...new Set(faqData.map(faq => faq.category))];

  const filteredFAQs = faqData.filter(faq =>
    (selectedCategory === 'Semua Kategori' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredFAQs.length / faqsPerPage);
  const currentFAQs = filteredFAQs.slice((currentPage - 1) * faqsPerPage, currentPage * faqsPerPage);

  return (
    <div className='bantuan-container' id="bantuan">
      <div className='page-title'>Bantuan</div>
      <div className='page-subtitle'>Frequently Asked Questions</div>

      {/* Search bar */}
      <div className='search-container'>
        <input
          type="text"
          placeholder="Cari pertanyaan atau jawaban..."
          value={searchTerm}
          onChange={(e) => { 
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Dropdown untuk memilih kategori */}
      <div className='filter-container'>
        <label htmlFor="categoryFilter">Pilih Kategori:</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* FAQ yang difilter berdasarkan pencarian dan kategori */}
      {currentFAQs.length === 0 ? (
        <p>Tidak ada FAQ yang cocok dengan pencarian Anda.</p>
      ) : (
        currentFAQs.map((faq, index) => {
          const key = `${faq.category}-${index}`;
          return (
            <div key={index} className='faq-item'>
              <div
                className={`faq-question ${activeFAQ === key ? 'active' : ''}`}
                onClick={() => toggleAccordion(faq.category, index)}
              >
                {faq.question}
                <span className={`arrow ${activeFAQ === key ? 'up' : 'down'}`}></span>
              </div>
              <div className={`faq-answer ${activeFAQ === key ? 'open' : ''}`}>
                {activeFAQ === key && faq.answer}
              </div>
            </div>
          );
        })
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className='pagination'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      <div className='page-subtitle'>Guides</div>
    </div>
  );
}

export default Bantuan;