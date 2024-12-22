import React, { useState } from 'react';
import "./about.css";

function About(props) {

  const detail = "C-Food adalah aplikasi yang menawarkan solusi pemesanan makanan di kampus dengan berbagai fitur yang mendukung wirausaha mahasiswa, penggalangan dana (Danus), pemesanan dari kantin kampus, dan layanan kurir yang dijalankan oleh mahasiswa. Dengan C-Food, semua kebutuhan makanan kampus Anda dapat terpenuhi dalam satu platform yang praktis dan mudah digunakan.";

  return (
    <div className='about-container' id="about">
      <div className='section-title'>
        Apa itu C-Food?
      </div>
      <div className='section-detail'>
      {detail}
      </div>

      <iframe class="video-cfood" src="https://www.youtube.com/embed/FTPwJUJtSD4?si=NvaSd1LcBfJWl4pT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}

export default About;
