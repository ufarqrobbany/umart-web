import React from 'react';
import './terms.css';
import termsData from './terms.json'; // Ganti dengan jalur yang sesuai

function Terms() {
  // Memastikan data sudah dimuat dari file JSON
  if (!termsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='terms-container' id="terms">
      <div className='page-title'>{termsData.title}</div>

      {/* <div className='page-subtitle'>1. Informasi yang Kami Kumpulkan</div> */}

      {termsData.sections.map((section, index) => (
        <div key={index} className='terms-section'>
          <div className='page-subtitle'>{section.heading}</div>
          <div className='page-paragraph' style={{marginTop: "0"}}>
          <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Terms;