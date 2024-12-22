
import React, { useState } from 'react';
import "./atribusi.css";

function Atribusi(props) {
  const icons = [
    {
      name: "Ikon Kampus",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/university",
      title: "University Icons",
    },
    {
      name: "Ikon Pengguna",
      designer: "Heykiyou",
      link: "https://www.flaticon.com/free-icons/user",
      title: "User Icons",
    },
    {
      name: "Ikon Toko Online",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/online-shop",
      title: "Online Shop Icons",
    },
    {
      name: "Ikon Pengiriman Makanan",
      designer: "iconixar",
      link: "https://www.flaticon.com/free-icons/food-delivery",
      title: "Food Delivery Icons",
    },
    {
      name: "Ikon Koin",
      designer: "kliwir art",
      link: "https://www.flaticon.com/free-icons/coin",
      title: "Coin Icons",
    },
    {
      name: "Ikon Keberagaman",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/diversity",
      title: "Diversity Icons",
    },
    {
      name: "Ikon Penggalangan Dana",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/fundraising",
      title: "Fundraising Icons",
    },
    {
      name: "Ikon Kemitraan",
      designer: "zero_wing",
      link: "https://www.flaticon.com/free-icons/partnership-handshake",
      title: "Partnership Handshake Icons",
    },
    {
      name: "Ikon Alat Makan",
      designer: "edt.im",
      link: "https://www.flaticon.com/free-icons/cutlery",
      title: "Cutlery Icons",
    },
    {
      name: "Ikon Makan Malam",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/dinner",
      title: "Dinner Icons",
    },
    {
      name: "Ikon Makanan",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/food",
      title: "Food Icons",
    },
    {
      name: "Ikon Makanan Cepat Saji",
      designer: "juicy_fish",
      link: "https://www.flaticon.com/free-icons/fast-food",
      title: "Fast Food Icons",
    },
    {
      name: "Ikon Uang",
      designer: "Freepik",
      link: "https://www.flaticon.com/free-icons/money",
      title: "Money Icons",
    },
  ];
  return (
    <div className='atribusi-container' id="atribusi">
      <div className='page-title'>Atribusi</div>
      <div className='page-subtitle'>Atribusi Ikon Flaticon</div>
      <div className='page-paragraph'>
      Di website ini, kami menggunakan ikon-ikon dari Flaticon untuk memperkaya tampilan dan memudahkan navigasi. Kami menghargai karya para desainer dan memberikan atribusi yang layak untuk setiap ikon yang kami gunakan. Berikut adalah daftar ikon Flaticon beserta desainer yang berkontribusi:
      </div>
      <div className='page-paragraph'>
      <ol style={{ listStyleType: "decimal", paddingLeft: "2em" }}>
          {icons.map((icon, index) => (
            <li key={index}>
              {icon.name}
              <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
                <li>Desainer: {icon.designer}</li>
                <li>Link: <a href={icon.link} title={icon.title}>{icon.title} created by {icon.designer} - Flaticon</a></li>
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <div className='page-paragraph'>
      Kami berterima kasih kepada para desainer Flaticon yang telah berkontribusi dalam menyediakan ikon-ikon berkualitas yang membantu memperindah dan memperjelas konten di website kami. Untuk informasi lebih lanjut, kunjungi <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>.
      </div>
      <div className='page-subtitle'>Lisensi dan Penggunaan</div>
      <div className='page-paragraph'>
      Ikon-ikon yang digunakan pada website ini tunduk pada lisensi dari Flaticon. Silakan kunjungi halaman setiap ikon untuk detail lebih lanjut mengenai lisensi dan hak penggunaan.
      </div>

      
    </div>
  );
}

export default Atribusi;


{/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Heykiyou - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/online-shop" title="online shop icons">Online shop icons created by Freepik - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/food-delivery" title="food delivery icons">Food delivery icons created by iconixar - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/coin" title="coin icons">Coin icons created by kliwir art - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/diversity" title="diversity icons">Diversity icons created by Freepik - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/fundraising" title="fundraising icons">Fundraising icons created by Freepik - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/partnership-handshake" title="Partnership handshake icons">Partnership handshake icons created by zero_wing - Flaticon</a> */}

{/* <a href="https://www.flaticon.com/free-icons/cutlery" title="cutlery icons">Cutlery icons created by edt.im - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/dinner" title="dinner icons">Dinner icons created by Freepik - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by Freepik - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/fast-food" title="fast food icons">Fast food icons created by juicy_fish - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/money" title="money icons">Money icons created by Freepik - Flaticon</a> */}