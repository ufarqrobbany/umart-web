import React, { useState, useEffect } from 'react';
import footerUpper from "../../images/footer-upper-3.png";
import logo from "../../images/Logo.png";


import "./footer.css";
import { FaDownload, FaGooglePlay, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer(props) {
  return(
    <footer>
      <img class="footer-upper" src={footerUpper}></img>

      <div className='footer-container'>
        <div className='footer-content'>
        <div className='unduh-footer'>
          <div className='logo-footer'>
            <img src={logo} alt="image"/>
          </div>
          <div className='unduh-container'>
            <div className='unduh-title'>Unduh Aplikasi C-Food</div>
            <div className='unduh-desc'>
              Nikmati kemudahan pemesanan makanan kampus langsung dari smartphone Anda. Unduh aplikasi C-Food sekarang melalui pilihan berikut:
            </div>
            <div className='unduh-list'>
              <a className="btn-primary" href="https://drive.google.com/file/d/1pix9DSaZJjbAX98H-4YMI0N_28-hpTrP/view?usp=sharing" style={{display: "flex", alignItems: "center", columnGap: "0.6em", width: "fit-content"}}>
                <FaDownload/> Unduh Aplikasi
              </a>

              <a className="btn-tertiary" href="https://play.google.com/store/apps/details?id=com.campusfood.id&pli=1" style={{display: "flex", alignItems: "center", columnGap: "0.6em", width: "fit-content"}}>
                <FaGooglePlay/> 
                <div style={{display: "flex", flexDirection: "column"}}>
                  <span style={{fontSize: "0.6em"}}>GET IT ON</span>
                  <span style={{fontWeight: "600"}}>Google Play</span>
                </div>
              </a>
            </div>
            <div className='unduh-bottom'>Dengan C-Food, pengalaman makan di kampus menjadi lebih mudah dan menyenangkan.</div>
          </div>
        </div>
         

         <div className='footer-information'>
          <div className='info-item'>
            <div className='info-title'>Produk</div>
            <div className='info-links'>
              <Link className='link-item' to="/login">Login</Link>
              <Link className='link-item' to="/register#institusi">Daftarkan Kampusmu</Link>
              <Link className='link-item' to="/register#organisasi">Daftarkan Organisasimu</Link>
            </div>
          </div>

          <div className='info-item'>
            <div className='info-title'>Informasi</div>
            <div className='info-links'>
              <Link className='link-item' to="/about">Tentang</Link>
              <Link className='link-item' to="/terms">Syarat dan Ketentuan</Link>
              <Link className='link-item' to="/help-center">Bantuan</Link>
              <Link className='link-item' to="/privacy-policy">Kebijakan Privasi</Link>
              <Link className='link-item' to="/attribution">Atribusi Ikon</Link>
            </div>
          </div>

          <div className='info-item'>
            <div className='info-title'>Hubungi Kami</div>
            <div className='info-links'>
              <Link className='link-item' to="/news">News</Link>
              <a className='link-item' href="https://forms.gle/RfsccR6ouf5htV3U7" target='_blank'>Kritik dan Saran</a>
              <a className='link-item' href="https://forms.gle/fR8rkpwRkYuJY2T5A" target="_blank">Kirim Pertanyaan</a>
            </div>
          </div>

          <div className='info-item'>
            <div className='info-title'>Sosial Media</div>
            <div className='info-links-social'>
              <a className='social-item' href="https://www.instagram.com/master.cfood/" target="_blank">
                <FaInstagram/>
              </a>
              <a className='social-item' href="https://www.youtube.com/@CampusFoodC-FOOD" target="_blank">
                <FaYoutube/>
              </a>
            </div>
          </div>

         </div>
        </div>

        <div className='divider-footer'>
        <div className='footer-copyright'>
          {/* © 2024 C-Food (Campus Food) */}
          © 2024 C-Food (Campus Food). Semua hak cipta dilindungi.
        </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
