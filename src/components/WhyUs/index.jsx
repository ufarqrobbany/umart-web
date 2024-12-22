import React, { useState } from 'react';
import "./whyus.css";
import coin from "../../images/coin.png";
import merchant from "../../images/online-shop.png";
import driver from "../../images/take-away.png";
import community from "../../images/diversity.png";
import fundraising from "../../images/money.png";
import handshake from "../../images/handshake.png";

function WhyUs(props) {
  return (
    <div className='why-container' id="why">
      <div className='section-title'>
        Kenapa pilih C-Food?
      </div>
      
      <div className='section-detail section-card-container'>
        <div className='pros-card'>
          <div className='pros-image'>
            <img src={handshake} />
          </div>
          <div className='pros-detail'>
            <div className='pros-title'>Wirausaha Mahasiswa</div>
            <div className='pros-paragraph'>
                Jual berbagai makanan atau minuman kepada teman-teman kampus untuk mendapat penghasilan.
            </div>
          </div>
        </div>

        <div className='pros-card'>
          <div className='pros-image'>
            <img src={fundraising}/>
          </div>
          <div className='pros-detail'>
            <div className='pros-title'>Membantu Danusan</div>
            <div className='pros-paragraph'>
              Dukung kegiatan kampus melalui penjualan makanan Danus.
            </div>
          </div>
        </div>

        <div className='pros-card'>
          <div className='pros-image'>
          <img src={merchant} />
          </div>
          <div className='pros-detail'>
            <div className='pros-title'>Pemesanan Kantin</div>
            <div className='pros-paragraph'>
                Pesan makanan favorit tanpa antri di kantin.
            </div>
          </div>
        </div>

        <div className='pros-card'>
          <div className='pros-image'>
            <img src={driver}/>
          </div>
          <div className='pros-detail'>
            <div className='pros-title'>Kurir Mahasiswa</div>
            <div className='pros-paragraph'>
              Antar makanan cepat dan handal oleh teman kampusmu.
            </div>
          </div>
        </div>

        <div className='pros-card'>
          <div className='pros-image'>
          <img src={community} />
          </div>
          <div className='pros-detail'>
            <div className='pros-title'>Dukungan Komunitas</div>
            <div className='pros-paragraph'>
              Setiap pembelian mendukung sesama mahasiswa dan usaha kecil di lingkungan kampus.
            </div>
          </div>
        </div>

        <div className='pros-card'>
          <div className='pros-image'>
            <img src={coin} />
          </div>
          <div className='pros-detail'>
            <div className='pros-title'>Biaya Layanan Murah</div>
            <div className='pros-paragraph'>
              Nikmati layanan berkualitas dengan biaya yang terjangkau untuk semua mahasiswa.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
