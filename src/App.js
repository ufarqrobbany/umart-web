import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import './App.css';

import Pages from './pages/index';
import ScrollToTop from './scrollToTop'; // Impor ScrollToTop
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <ScrollToTop /> {/* Tambahkan ScrollToTop di sini */}
      <Routes>
        <Route exact path="/" element={<Pages title="Home" />} />
        <Route path="/attribution" element={<Pages title="Atribusi Ikon" />} />
        <Route path="/about" element={<Pages title="Tentang C-Food" />} />
        <Route path="/help-center" element={<Pages title="Bantuan" />} />
        <Route path="/privacy-policy" element={<Pages title="Kebijakan Privasi" />} />
        <Route path="/terms" element={<Pages title="Syarat dan Ketentuan" />} />
        <Route path="/news" element={<Pages title="News" />} />
        <Route path="/admin" element={<Pages title="Login Admin" />} />
        <Route path="/admin/dashboard" element={<Pages title="Dashboard Admin" />} />
        <Route path="/login" element={<Pages title="Login" />} />
        <Route path="/register" element={<Pages title="Daftar" />} />
        <Route path="/organization/dashboard" element={<Pages title="Dashboard Organisasi" />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
