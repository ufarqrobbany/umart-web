import React, { useState, useEffect } from 'react';
import "./header.css";
import NavBar from '../NavBar';
import profilImage1 from "../../images/profil-1.png";
import profilImage2 from "../../images/profil-2.png";
import campus from "../../images/school.png";
import user from "../../images/boy.png";
import merchant from "../../images/online-shop.png";
import driver from "../../images/take-away.png";
import headerBottom from "../../images/bg-header-bottom-2.png";
import headerImage from "../../images/header-image.png";
import Typewriter from "typewriter-effect";
import { FaDownload, FaGooglePlay } from "react-icons/fa";
import { useCurrentWidth } from 'react-socks';


function Header(props) {
  const images = [profilImage1, profilImage2];
  const [fadeIn, setFadeIn] = useState(true);

  // State untuk menyimpan data dari API
  const [trackData, setTrackData] = useState({
    totalCampus: 0,
    totalUser: 0,
    totalMerchant: 0,
    totalDriver: 0
  });

  // Fetch data dari API
  useEffect(() => {
    fetch('https://cfood.id/api/web/')
      .then(response => response.json())
      .then(data => {
        if (data.statusCode === 200 && data.status === 'success') {
          // Update state dengan data dari API
          setTrackData({
            totalCampus: data.data.totalCampus,
            totalUser: data.data.totalUser,
            totalMerchant: data.data.totalMerchant,
            totalDriver: data.data.totalDriver
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const textTitle = "C-Food, Makan di Kampus";
  const textDesc = "Selamat datang di C-Food, aplikasi pemesanan makanan untuk mahasiswa dan kantin kampus.";
  const totalUnduh = "100+";

  // const width = useCurrentWidth();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set event listener untuk update width saat window di-resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function MoreContent() {
    return (
        <div className="more" style={{ display: "flex", alignItems: "start", flexDirection: "column", rowGap: "1em" }}>
            <div style={{ display: "flex", columnGap: "1em" }}>
              <a className="btn-primary" href="https://drive.google.com/file/d/1pix9DSaZJjbAX98H-4YMI0N_28-hpTrP/view?usp=sharing" style={{ display: "flex", alignItems: "center", columnGap: "0.6em", width: "fit-content" }}>
                <FaDownload /> Unduh Aplikasi
              </a>

              <a className="btn-tertiary" href="https://play.google.com/store/apps/details?id=com.campusfood.id&pli=1" style={{ display: "flex", alignItems: "center", columnGap: "0.6em", width: "fit-content" }}>
                <FaGooglePlay />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.6em" }}>GET IT ON</span>
                  <span style={{ fontWeight: "600" }}>Google Play</span>
                </div>
              </a>
            </div>
            <span style={{ opacity: "0.8", fontSize: "0.7em", paddingLeft: "0.2em", color: "white" }}>Telah diunduh {totalUnduh} kali</span>
        </div>
    );
  }

  console.log(width);

  return (
    <header>
      <NavBar />
      <div className={`header-content ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        <div className="header-text">
          <p className="name">{textTitle}</p>
          {
            width >= 780 &&
            <>
              <div className="desc">{textDesc}</div>
              <MoreContent/>
            </>
          }
        </div>

        <div className="header-image">
          <img src={headerImage} alt="image" />
        </div>

        {
          width < 780 &&
          <>
              <div className="desc">{textDesc}</div>
              <MoreContent/>
          </>
        }

      </div>
      <img className="header-bottom" src={headerBottom} alt="header bottom"></img>
      <div className="circles-container">
        <div className="circle" id="circle-1"></div>
      </div>

      <div className='track-container'>
        <div className='track-card'>
          <div className='track-item'>
            <div className='track-image'>
              <img src={campus} alt="campus" />
            </div>
            <div className='track-detail'>
              <div className='track-count'>{trackData.totalCampus}</div>
              <div className='track-name'>Kampus</div>
            </div>
          </div>

          <div className='track-item'>
            <div className='track-image'>
              <img src={user} alt="user" />
            </div>
            <div className='track-detail'>
              <div className='track-count'>{trackData.totalUser}</div>
              <div className='track-name'>Pengguna</div>
            </div>
          </div>

          <div className='track-item'>
            <div className='track-image'>
              <img src={merchant} alt="merchant" />
            </div>
            <div className='track-detail'>
              <div className='track-count'>{trackData.totalMerchant}</div>
              <div className='track-name'>Wirausaha/Kantin</div>
            </div>
          </div>

          <div className='track-item'>
            <div className='track-image'>
              <img src={driver} alt="driver" />
            </div>
            <div className='track-detail'>
              <div className='track-count'>{trackData.totalDriver}</div>
              <div className='track-name'>Kurir Mahasiswa</div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;
