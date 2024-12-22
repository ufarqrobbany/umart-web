import React, { useEffect, useState } from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretUp, FaCross, FaDownload, FaEnvelope, FaEye, FaEyeSlash, FaGooglePlay, FaMarker, FaStore, FaTimes, FaUniversity, FaUsers } from 'react-icons/fa';
import loadingIcon from "../../images/loading_animation.json";
import Lottie from "lottie-react";
import logoSuccess from "../../images/Logo Success.png"


function Register(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRe, setIsOpenRe] = useState(false);
  const [typeRegister, setTypeRegister] = useState();
  const [campuses, setCampuses] = useState([]); // State to hold campus data
  const [searchTerm, setSearchTerm] = useState(""); // State to handle the search input
  const [filteredCampuses, setFilteredCampuses] = useState([]); // Filtered campuses based on search
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [isSelectCampus, setIsSelectCampus] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '', isVisible: false }); // New state for custom alert

  // update
  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });

  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOtp, setIsLoadingOtp] = useState(false);
  const [isLoadingVerif, setIsLoadingVerif] = useState(false);
  const [organizationId, setOrganizationId] = useState();
  const [countdown, setCountdown] = useState(30); // State for countdown
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const togglePass = () => {
    setIsOpen(!isOpen);
  };

  const toggleRePass = () => {
    setIsOpenRe(!isOpenRe);
  };

  const toggleType = (type) => {
    setTypeRegister(type);
  };

  const toggleOption = () => {
    setSearchTerm("");
    setFilteredCampuses([]);
  };

  const selectCampus = (id, name) => {
    setSelectedCampus(id);
    setSearchTerm(name);
    setFilteredCampuses([]);
    setIsSelectCampus(true);
  }

  useEffect(() => {
    // Get the hash part of the URL (e.g., "#merchant", "#institusi", "#organisasi")
    const hash = window.location.hash.substring(1); // Remove the "#" symbol
    if (hash) {
      setTypeRegister(hash);
    } else {
      setTypeRegister("merchant");
    }

    // Fetch campuses data from API
    fetch('https://cfood.id/api/campuses/')
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          setCampuses(data.data); // Set campus data to state
          setFilteredCampuses(data.data); // Set filtered data initially to all campuses
        }
      })
      .catch(error => console.error('Error fetching campuses:', error));
  }, []);

  // Filter the campus list based on the search input
  useEffect(() => {
    const filtered = campuses.filter(campus =>
      campus.campusName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCampuses(filtered);
  }, [searchTerm, campuses]);

  // Reset selected campus and show the dropdown when the input changes
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedCampus(null); // Reset selected campus when input is modified
    setIsSelectCampus(false);
  };

  // update
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
  
    if (!formData.name) newErrors.name = 'Nama Organisasi wajib diisi';
    if (!formData.shortName) newErrors.shortName = 'Singkatan Organisasi wajib diisi';
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Format email tidak sesuai'; // Email validation
    if (!formData.password) newErrors.password = 'Password wajib diisi';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Konfirmasi Password wajib diisi';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Password dan Konfirmasi Password tidak cocok';
    if (!selectedCampus) newErrors.campus = 'Pilih Kampus yang sesuai';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors = {};
  
    if (!formData.otp) newErrors.otp = 'OTP wajib diisi';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const verifOtp = () => {
    const newErrors = {};
  
    newErrors.otp = 'OTP tidak valid';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsLoading(true); // Set loading state

    const { name, shortName, email, password } = formData;
    fetch('https://cfood.id/api/organizations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, shortName, email, password, campusId: selectedCampus })
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false); 
        if (data.status === "success") {
          // Show success alert
          setAlert({ message: 'Registrasi berhasil!', type: 'success', isVisible: true });

          setOrganizationId(data.data.organizationId);
        } else {
          // Show failure alert
          setAlert({ message: data.message, type: 'error', isVisible: true });
        }
      })
      .catch(error => {
        setIsLoading(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
      });
  };

  const handleSendOtp = () => {
    setIsLoadingOtp(true); // Set loading state
    setIsCountdownActive(false); 

    fetch('https://cfood.id/api/mails/send-otp-organization', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({organizationId: organizationId, type: "REGISTER" })
    })
      .then(response => response.json())
      .then(data => {
        setIsLoadingOtp(false); 
        if (data.status === "success") {
          // Show success alert
          setAlert({ message: data.message, type: 'success', isVisible: true });
          startCountdown();
        } else {
          // Show failure alert
          setAlert({ message: data.message, type: 'error', isVisible: true });
        }
      })
      .catch(error => {
        setIsLoadingOtp(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
      });
  };

  // Function to start the countdown
  const startCountdown = () => {
    setIsCountdownActive(true);
    setCountdown(30); // Set initial countdown value
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(interval); // Stop countdown when it reaches 0
          setIsCountdownActive(false); // Enable the "Resend OTP" link
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerif = () => {
    if (!validateOtp()) return;

    setIsLoadingVerif(true); // Set loading state

    const { otp } = formData;
    fetch('https://cfood.id/api/mails/check-otp-organization', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organizationId: organizationId, otpCode: otp, otpType: "REGISTER" })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          // Show success alert
          setAlert({ message: data.message, type: 'success', isVisible: true });

          fetch('https://cfood.id/api/organizations/' + organizationId + '/verify', {
            method: 'PUT',
          }).then(re => re.json()).then(da => {
            setIsLoadingVerif(false); 
            if(da.status === "success") {
              setAlert({ message: data.message, type: 'success', isVisible: true });
            } else {
              setAlert({ message: data.message, type: 'error', isVisible: true });
            }
          }).catch(err => {
            setIsLoadingVerif(false); 
            setAlert({ message: 'Terjadi kesalahan: ' + err.message, type: 'error', isVisible: true });
          })
        } else {
          // Show failure alert
          setIsLoadingVerif(false); 
          // setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
          verifOtp();
        }
      })
      .catch(error => {
        setIsLoadingVerif(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
      });
  };

  const closeAlert = () => {
    setAlert({ message: '', type: '', isVisible: false });
  };

  return (
    <div className='register-container' id="register">
      <div className='register-title'>Daftar</div>
      <div className='register-type-list'>
        <div className={typeRegister === "merchant" ? "active" : ""} onClick={() => toggleType("merchant")}>
          <FaStore/> Merchant
        </div>

        <div className={typeRegister === "institusi" ? "active" : ""} onClick={() => toggleType("institusi")}>
          <FaUniversity/> Kampus
        </div>

        <div className={typeRegister === "organisasi" ? "active" : ""} onClick={() => toggleType("organisasi")}>
          <FaUsers/> Organisasi
        </div>
      </div>
      {
        typeRegister === "merchant" || typeRegister === "institusi" ?
        <div className='register-not'>
          {typeRegister === "institusi" ?
          <>
            <p>
              Saat ini, registrasi untuk kampus hanya dapat dilakukan dengan menghubungi email <a href="mailto:master.cfood@gmail.com">master.cfood@gmail</a>.
            </p>
            <div className='login-register'>
              Sudah punya akun? <Link to={"/login#" + typeRegister}>Login sekarang</Link>
            </div>
          </>
          
          :
          <>
            Registrasi sebagai wirausaha/kantin hanya dapat dilakukan melalui aplikasi mobile. Silakan unduh aplikasi C-Food untuk melanjutkan.

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

            <div className='login-register'>
              Sudah punya akun? <Link to={"/login#" + typeRegister}>Login sekarang</Link>
            </div>
          </>
          }
        </div>
        :
        <div className='register-form'>
          <input type='text' name='name' placeholder='Nama Organisasi' class={errors.name != null ? "input-error" : ""} onChange={handleFormChange} />
          {errors.name && <div className='error'>{errors.name}</div>}

          <input type='text' name='shortName' placeholder='Singkatan Nama Organisasi' class={errors.shortName != null ? "input-error" : ""} onChange={handleFormChange} />
          {errors.shortName && <div className='error'>{errors.shortName}</div>}
          
          <input type='email' name='email' placeholder='Email' class={errors.email != null ? "input-error" : ""} onChange={handleFormChange} />
          {errors.email && <div className='error'>{errors.email}</div>}
          
          <div className='password'>
            <input type={isOpen ? 'text' : 'password'} name='password' placeholder='Password' class={errors.password != null ? "input-error" : ""} onChange={handleFormChange} />
            <div className='input-icon' onClick={togglePass}>
              {isOpen ? <FaEye/> : <FaEyeSlash/>}
            </div>
          </div>
          {errors.password && <div className='error'>{errors.password}</div>}
          
          <div className='password'>
            <input type={isOpenRe ? 'text' : 'password'} name='confirmPassword' placeholder='Konfirmasi Password' class={errors.confirmPassword != null ? "input-error" : ""} onChange={handleFormChange} />
            <div className='input-icon' onClick={toggleRePass}>
              {isOpenRe ? <FaEye/> : <FaEyeSlash/>}
            </div>
          </div>
          {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}

          <div className='campus-select'>
            <input
              type="text"
              placeholder="Kampus"
              value={searchTerm}
              class={errors.campus != null ? "input-error" : ""} 
              onChange={handleInputChange}
              style={searchTerm !== "" && !selectedCampus ? {borderRadius: "0.4em 0 0 0", borderBottom: "none"} : {}}
            />
            <div className='input-icon' onClick={toggleOption} style={searchTerm !== "" && !selectedCampus ? {borderRadius: "0 0.4em 0 0", borderBottom: "none"} : {}}>
              {searchTerm !== "" ? <FaTimes/> : <FaCaretDown/>}
            </div>
            {searchTerm !== "" && !isSelectCampus && (
              <div className='campus-dropdown'>
                {filteredCampuses.length > 0 ? (
                  filteredCampuses.map((campus) => (
                    <div key={campus.id} className='campus-option enable' onClick={() => selectCampus(campus.id, campus.campusName)} style={{cursor: "pointer"}}>
                      {campus.campusName}
                    </div>
                  ))
                ) : (
                  <div className='campus-option'>Kampus tidak ditemukan</div>
                )}
              </div>
            )}
          </div>
          {errors.campus && <div className='error'>{errors.campus}</div>}
          
          <button className={isLoading ? 'register-btn disabled' : 'register-btn'} onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
            ) : "Daftar"}
          </button>
          
          <div className='login-register'>
            Sudah punya akun? <Link to={"/login#" + typeRegister}>Login sekarang</Link>
          </div>
        </div>
      }

      {alert.isVisible && (
        <div className='alert-container'>
          <div className={alert.type === "error" ? 'custom-alert alert-err' : 'custom-alert alert-full'}>
            {
              alert.type === "error" && <div className='alert-title'>Peringatan</div>
            }
            <div className='alert-message'>
              {
                alert.message === "Email sudah digunakan oleh organisasi lain" && <>
                  <FaEnvelope style={{color: "#002347"}}/>
                  {alert.message}
                </> 
              }
              {
                alert.message === "Registrasi berhasil!" ? <>
                  <img className='logo-success-custom' src={logoSuccess}/>
                  <div className='message-container'>
                    <div className='message-title'>Selamat! Akun Organisasi Kamu Berhasil Dibuat</div>
                    <div className='message-body'>
                      Terima kasih telah bergabung dengan C-Food! Untuk mengaktifkan akun, silakan lakukan verifikasi terlebih dahulu dengan menekan tombol di bawah ini.
                    </div>
                    <button className={isLoadingOtp ? 'register-btn disabled' : 'register-btn'} onClick={handleSendOtp} disabled={isLoadingOtp}>
                      {isLoadingOtp ? (
                        <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
                      ) : "Kirim OTP ke Email"}
                    </button>
                  </div>
                </>
                : alert.message === "Berhasil mengirim otp" ? <>
                  {/* <img className='logo-success-custom' src={logoSuccess}/> */}
                  <div className='message-container'>
                    <div className='message-title'>Verifikasi Email</div>
                    <div className='message-body'>
                      Kode OTP telah dikirimkan ke email kamu, masukkan kode untuk verifikasi
                    </div>
                    <div className='register-form' style={{width: "100%"}}>
                      <input type='text' name='otp' placeholder='OTP'  class={errors.otp != null ? "input-error" : ""} onChange={handleFormChange} />
                      {errors.otp && <div className='error'>{errors.otp}</div>}
                    </div>
                    <div style={{ textAlign: "center" }}>
                  {!isCountdownActive ? (
                    <a style={{ cursor: "pointer" }} onClick={handleSendOtp}>
                      {isLoadingOtp ? <Lottie animationData={loadingIcon} loop={true} style={{ height: "30px" }} /> : "Kirim ulang OTP"}
                    </a>
                  ) : (
                    <span>Kirim ulang OTP dalam {countdown} detik</span>
                  )}
                </div>
                    <button className={isLoadingVerif ? 'register-btn disabled' : 'register-btn'} onClick={handleVerif} disabled={isLoadingVerif}>
                      {isLoadingVerif ? (
                        <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
                      ) : "Verifikasi"}
                    </button>
                  </div>
                </>
                : alert.message === "OTP valid" && <>
                  <img className='logo-success-custom' src={logoSuccess}/>
                  <div className='message-container'>
                    <div className='message-title'>Selamat! Akun Organisasi Kamu Berhasil Diverifikasi</div>
                    <div className='message-body'>
                      Sekarang, kamu dapat mengizinkan dan memantau danusan untuk kegiatan organisasi kamu.
                    </div>
                    <Link to="/login#organisasi" style={{width: "100%"}}>
                      <button className={'register-btn'} style={{width: "100%"}}>
                        Login
                      </button>
                    </Link>
                  </div>
                </>
              }
              
            </div>
            <button className='alert-close' onClick={() => closeAlert()}>
              <FaTimes/>
            </button>
          </div>
        </div>
        
      )}
      
    </div>
  );
}

export default Register;
