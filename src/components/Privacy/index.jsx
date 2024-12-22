import React from 'react';
import "./privacy.css";

function Privacy(props) {
  return (
    <div className='privacy-container' id="privacy">
      <div className='page-title'>Kebijakan Privasi</div>

      <div className='page-paragraph'>
      Tanggal Efektif: 10 September 2024 <br/>
      Terakhir Diperbarui: 22 September 2024
      </div>

      <div className='page-paragraph'>
        Di C-Food (Campus Food), kami berkomitmen untuk melindungi privasi dan keamanan pengguna kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler kami (sebutan "Aplikasi") dan layanan terkait. Dengan menggunakan Aplikasi, Anda setuju untuk mengumpulkan dan menggunakan informasi Anda seperti yang dijelaskan dalam Kebijakan Privasi ini.
      </div>

      <div className='page-subtitle'>1. Informasi yang Kami Kumpulkan</div>
      <div className='page-paragraph'>
        Kami mengumpulkan berbagai jenis informasi tergantung pada jenis akun yang Anda daftarkan dan bagaimana Anda menggunakan Aplikasi.
      </div>

      <div className='page-paragraph' style={{fontWeight: "bold", marginBottom: "0", color: "#353535", fontSize: "1.3em"}}>1.1 Informasi Pribadi</div>
      <div className='page-paragraph' style={{marginBottom: "1em"}}>      
        Ketika Anda mendaftar untuk salah satu dari jenis akun berikut—kampus, organisasi, merchant (kantin atau wirausaha), atau pengguna (mahasiswa atau non-mahasiswa)—kami dapat mengumpulkan informasi pribadi seperti:
      </div>
      <div className='page-paragraph' style={{marginTop: "0"}}>  
        <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
          <li>Akun Kampus: Nama institusi, alamat email, daftar jurusan, daftar program studi, peta lokasi, dan logo.</li>
          <li>Akun Organisasi: Nama organisasi, kegiatan, kampus terkait, dan logo.</li>
          <li>Akun Merchant (Kantin/Wirausaha): Nama merchant/bisnis, alamat email, informasi pembayaran (e-wallet atau detail kartu kredit untuk menerima uang), dan foto.</li>
          <li>Akun Pengguna (Mahasiswa/Non-Mahasiswa): Nama lengkap, alamat email, nomor telepon, afiliasi universitas (untuk mahasiswa), dan foto profil.</li>
        </ul>
      </div>

      <div className='page-paragraph' style={{fontWeight: "bold", marginBottom: "0", color: "#353535", fontSize: "1.3em"}}>1.2 Informasi Non-Pribadi</div>
      <div className='page-paragraph' style={{marginBottom: "1em"}}>      
        Kami dapat mengumpulkan informasi non-pribadi tentang interaksi Anda dengan Aplikasi, seperti:
      </div>
      <div className='page-paragraph'  style={{marginTop: "0"}}>  
        <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
          <li>Data Lokasi: Hanya jika Anda mengaktifkan layanan lokasi.</li>
          <li>Versi Aplikasi: Informasi tentang versi aplikasi C-Food yang Anda gunakan.</li>
        </ul>
      </div>

      <div className='page-subtitle'>2. Cara Kami Menggunakan Informasi Anda</div>
      <div className='page-paragraph' style={{marginBottom: "1em"}}>
        Kami dapat menggunakan informasi yang kami kumpulkan untuk tujuan berikut:
      </div>
      <div className='page-paragraph' style={{marginTop: "0"}}>  
        <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
          <li>Pembuatan dan Pengelolaan Akun: Untuk membuat dan memelihara akun pengguna Anda.</li>
          <li>Penyampaian Layanan: Untuk memberikan layanan pengantaran makanan kami, termasuk memproses pesanan, pembayaran, dan pengantaran.</li>
          <li>Komunikasi: Untuk berkomunikasi dengan Anda tentang pesanan Anda, pembaruan layanan kami, dan dukungan pelanggan.</li>
          <li>Pemrosesan Pembayaran: Untuk memproses pembayaran melalui gerbang pembayaran pihak ketiga.</li>
          <li>Pemasaran dan Promosi: Untuk memberikan informasi tentang promosi, diskon, atau layanan baru.</li>
          <li>Keamanan dan Pencegahan Penipuan: Untuk memantau pelanggaran keamanan, mendeteksi penipuan, dan memastikan kepatuhan terhadap syarat layanan kami.</li>
          <li>Analisis: Untuk menganalisis aktivitas pengguna, meningkatkan kinerja Aplikasi, dan mengembangkan fitur baru.</li>
        </ul>
      </div>

      <div className='page-subtitle'>3. Pembagian Informasi</div>
      <div className='page-paragraph' style={{marginBottom: "1em"}}>
        Kami dapat membagikan informasi Anda dengan pihak ketiga hanya dalam keadaan berikut:
      </div>
      <div className='page-paragraph' style={{marginTop: "0"}}>  
        <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
          <li>Dengan Penyedia Layanan: Kami dapat membagikan informasi Anda dengan penyedia layanan pihak ketiga yang tepercaya untuk melakukan layanan atas nama kami, seperti pemroses pembayaran, mitra pengantaran, dan penyedia layanan cloud.</li>
          <li>Untuk Kepatuhan Hukum: Kami dapat mengungkapkan informasi pribadi Anda jika diwajibkan oleh hukum atau sebagai respons terhadap permintaan yang valid oleh otoritas publik.</li>
          <li>Transfer Bisnis: Dalam hal merger, akuisisi, atau penjualan aset, informasi pribadi Anda dapat dipindahkan kepada pemilik baru, dengan ketentuan bahwa entitas baru mengikuti Kebijakan Privasi ini.</li>
        </ul>
      </div>

      <div className='page-subtitle'>4. Keamanan Data</div>
      <div className='page-paragraph'>
        Kami sangat serius dalam menjaga keamanan data Anda. Kami menerapkan langkah-langkah keamanan administratif, teknis, dan fisik yang wajar untuk melindungi informasi pribadi Anda dari akses, pengungkapan, atau penyalahgunaan yang tidak sah. Namun, perlu dicatat bahwa tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman.
      </div>

      <div className='page-subtitle'>5. Retensi Data</div>
      <div className='page-paragraph'>
        Kami akan menyimpan informasi pribadi Anda hanya selama diperlukan untuk memenuhi tujuan pengumpulannya atau sebagaimana diwajibkan oleh hukum.
      </div>

      <div className='page-subtitle'>6. Hak Privasi Anda</div>
      <div className='page-paragraph' style={{marginBottom: "1em"}}>
        Anda memiliki hak berikut terkait informasi pribadi Anda:
      </div>
      <div className='page-paragraph' style={{marginTop: "0"}}>  
        <ul style={{ listStyleType: "disc", paddingLeft: "2em", marginBottom: "1em" }}>
          <li>Akses: Anda dapat meminta akses ke informasi pribadi yang kami pegang tentang Anda.</li>
          <li>Perbaikan: Anda dapat meminta agar kami memperbaiki informasi pribadi yang tidak akurat atau tidak lengkap.</li>
          <li>Penghapusan: Anda dapat meminta agar kami menghapus informasi pribadi Anda.</li>
          <li>Menolak: Anda dapat memilih untuk tidak menerima komunikasi pemasaran dari kami.</li>
        </ul>
      </div>

      <div className='page-subtitle'>7. Tautan Pihak Ketiga</div>
      <div className='page-paragraph'>
        Aplikasi dapat berisi tautan ke situs web atau layanan pihak ketiga yang tidak dioperasikan oleh kami. Kami tidak bertanggung jawab atas praktik privasi pihak ketiga ini.
      </div>

      <div className='page-subtitle'>8. Privasi Anak-anak</div>
      <div className='page-paragraph'>
        Aplikasi tidak dibatasi untuk pengguna di bawah 18 tahun, selama mereka terafiliasi dengan kampus.
      </div>

      <div className='page-subtitle'>9. Perubahan pada Kebijakan Privasi Ini</div>
      <div className='page-paragraph'>
        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik atau kewajiban hukum kami.
      </div>

      <div className='page-subtitle'>10. Hubungi Kami</div>
      <div className='page-paragraph'>
        Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami di:
        <br /><br />
        C-Food (Campus Food) <br />
        Email: <a href="mailto:master.cfood@gmail.com" >master.cfood@gmail.com</a> <br />
        Telepon: +62 852-6434-8888 <br />
        Alamat: Jl. Gegerkalong Hilir, Ciwaruga, Kecamatan Parongpong, Kabupaten Bandung Barat, Jawa Barat, Kode Pos 40559.
      </div>
    </div>
  );
}

export default Privacy;
