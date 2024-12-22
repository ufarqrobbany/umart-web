
import React, { useEffect, useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaEye, FaEyeSlash, FaKey, FaStore, FaTimes, FaUniversity, FaUsers } from 'react-icons/fa';
import loadingIcon from "../../images/loading_animation.json";
import Lottie from "lottie-react";
import logoSuccess from "../../images/Logo Success.png"
import { data } from 'jquery';

function Login(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isNewOpenRe, setIsNewOpenRe] = useState(false);
  const [typeLogin, setTypeLogin] = useState();
  const [alert, setAlert] = useState({ message: '', type: '', isVisible: false }); 
  const [organizationId, setOrganizationId] = useState();
  const [isLoadingOtp, setIsLoadingOtp] = useState(false);
  const [isLoadingVerif, setIsLoadingVerif] = useState(false);
  const [countdown, setCountdown] = useState(30); // State for countdown
  const [isCountdownActive, setIsCountdownActive] = useState(false);


   // update
   const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: '',
    emailReset: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const openResetPass = () => {
    if(typeLogin === 'organisasi') {
      setAlert({ message: "Ubah password akun organisasi", type: 'success', isVisible: true });
    } else if(typeLogin === 'merchant') {
      setAlert({ message: "Ubah password akun", type: 'success', isVisible: true });
    }
  }

  const togglePass = () => {
    setIsOpen(!isOpen);
  };

  const toggleNewPass = () => {
    setIsNewOpen(!isNewOpen);
  };

  const toggleNewRePass = () => {
    setIsNewOpenRe(!isNewOpenRe);
  };

  const toggleType = (type) => {
    setTypeLogin(type);
  };

  useEffect(() => {
    // Get the hash part of the URL (e.g., "#merchant", "#institusi", "#organisasi")
    const hash = window.location.hash.substring(1); // Remove the "#" symbol
    if (hash) {
      setTypeLogin(hash);
    } else {
      setTypeLogin("merchant");
    }
  }, []);

  // update
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const validateFormReset = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation

    if (!formData.emailReset) newErrors.emailReset = 'Email wajib diisi';
    else if (!emailRegex.test(formData.emailReset)) newErrors.emailReset = 'Format email tidak sesuai'; // Email validation
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFormResetNotFound = () => {
    const newErrors = {};
    newErrors.emailReset = 'Email tidak ditemukan';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
  
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Format email tidak sesuai'; // Email validation
    if (!formData.password) newErrors.password = 'Password wajib diisi';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const errorTakSama = () => {
    const newErrors = {};
  
    newErrors.confirmNewPassword = 'Password baru tidak boleh sama dengan password sebelumnya';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const errorGagalUbah = () => {
    const newErrors = {};
  
    newErrors.confirmNewPassword = 'Gagal mengubah password';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateChangePass = () => {
    const newErrors = {};
  
    if (!formData.newPassword) newErrors.newPassword = 'Password wajib diisi';
    if (!formData.confirmNewPassword) newErrors.confirmNewPassword = 'Konfirmasi Password wajib diisi';
    if (formData.newPassword !== formData.confirmNewPassword) newErrors.confirmNewPassword = 'Password dan Konfirmasi Password tidak cocok';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const [isLoadingChange, setIsLoadingChange] = useState(false);

  const handleChangePassword = () => {
    if (!validateChangePass()) return;

    setIsLoadingChange(true);

    const {newPassword} = formData;
    if(typeLogin === "organisasi") {
      fetch('https://cfood.id/api/organizations/reset-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizationId: organizationId, newPassword: newPassword})
      })
      .then(response => response.json())
      .then(data => {
        setIsLoadingChange(false); 
        if (data.status === "success") {
          // Show success alert
          setAlert({ message: 'Berhasli diubah', type: 'success', isVisible: true });
        } else {
          // Show failure alert
          // setAlert({ message: data.message, type: 'error', isVisible: true });
          if(data.message === "Password baru tidak boleh sama dengan password sebelumnya") {
            errorTakSama();
          } else if (data.message === "Gagal saat mengubah password") {
            errorGagalUbah();
          }
        }
      })
      .catch(error => {
        setIsLoadingChange(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
      });
    } else {
      setIsLoadingChange(false);
    }
  }

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsLoading(true); // Set loading state

    const { email, password } = formData;
    if(typeLogin === "organisasi") {
      fetch('https://cfood.id/api/organizations/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password})
      })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false); 
        if (data.status === "success") {
          // Show success alert
          // setAlert({ message: 'Login berhasil!', type: 'success', isVisible: true });

          setOrganizationId(data.data.userId);

          // Simpan organizationId di localStorage atau sessionStorage
          localStorage.setItem('organizationId', data.data.userId);

          // Redirect ke halaman dashboard
          window.location.href = "/organization/dashboard";
        } else {
          // Show failure alert
          setAlert({ message: data.message, type: 'error', isVisible: true });
          if(data.message === "Akun belum diverifikasi") {
            setOrganizationId(data.data.userId);
          }
        }
      })
      .catch(error => {
        setIsLoading(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
      });
    } else if(typeLogin === "merchant") {
      fetch('https://cfood.id/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password})
      })
      .then(response => response.json())
      .then(data => {
        // setIsLoading(false); 
        if (data.status === "success") {
          // Show success alert
          // setAlert({ message: 'Login berhasil!', type: 'success', isVisible: true });

          // setOrganizationId(data.data.userId);

          // Simpan organizationId di localStorage atau sessionStorage
          // localStorage.setItem('organizationId', data.data.userId);

          // Redirect ke halaman dashboard
          // window.location.href = "/organization/dashboard";
          fetch('https://cfood.id/api/users/' + data.data.userId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => response.json())
          .then(dat => {
            setIsLoading(false);
            if(dat.data.isPenjual != null) {
              localStorage.setItem('userId', data.data.id);
              window.location.href = "/merchant/dashboard";
              console.log("penjual");
            } else {
              setAlert({ message: "Akun ini belum terdaftar sebagai Merchant", type: 'error', isVisible: true });
              console.log("!penjual");
            }
          })
          .catch(err => {
            setIsLoading(false); 
            setAlert({ message: 'Terjadi kesalahan: ' + err.message, type: 'error', isVisible: true });
          });
        } else {
          setIsLoading(false); 
          if(data.message === 'Email tidak ditemukan') {
            setAlert({ message: "Email tidak ditemukan", type: 'error', isVisible: true });
          } else if(data.message === 'Password salah') {
            setAlert({ message: "Password salah", type: 'error', isVisible: true });
          } else if(data.message === 'Akun belum diverifikasi') {
            setAlert({ message: "Akun ini belum terdaftar sebagai Merchant", type: 'error', isVisible: true }); // perbaiki
          }
        }
      })
      .catch(error => {
        setIsLoading(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
      });
    } else {
      setIsLoading(false);
    }
    
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

  const handleSendOtpReset = () => {
    if (!validateFormReset()) return;

    setIsLoadingOtp(true); // Set loading state
    setIsCountdownActive(false); 

    if(typeLogin === 'organisasi') {
      fetch('https://cfood.id/api/organizations/get-id?email=' + formData.emailReset, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(resp => resp.json()).then(da => {
        if(da.status === "success") {
          // send otp
          if(da.message === "Akun sudah diverifikasi") {
            // send otp verified
            fetch('https://cfood.id/api/mails/send-otp-organization', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({organizationId: da.data.userId, type: "RESET_PASSWORD" })
            })
              .then(response => response.json())
              .then(data => {
                setIsLoadingOtp(false); 
                if (data.status === "success") {
                  // Show success alert
                  setAlert({ message: 'Berhasil kirim otp reset', type: 'success', isVisible: true });
                  startCountdown();
                  setOrganizationId(da.data.userId);
                } else {
                  validateFormResetNotFound();
                }
              })
              .catch(error => {
                setIsLoadingOtp(false); 
                setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
                console.log(error.message);
              });
          } else {
            setIsLoadingOtp(false);
            setAlert({ message: 'Akun belum diverifikasi', type: 'error', isVisible: true });
            if(data.message === "Akun belum diverifikasi") {
              setOrganizationId(da.data.userId);
            }
          }
        } else {
          setIsLoadingOtp(false); 
          validateFormResetNotFound();
        }
      }).catch(error => {
        setIsLoadingOtp(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
        console.log(error.message);
      });
    } else if(typeLogin === 'merchant') {

      // perbaiki ini
      fetch('https://cfood.id/api/organizations/get-id?email=' + formData.emailReset, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(resp => resp.json()).then(da => {
        if(da.status === "success") {
          // send otp
          if(da.message === "Akun sudah diverifikasi") {
            // send otp verified
            fetch('https://cfood.id/api/mails/send-otp-organization', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({organizationId: da.data.userId, type: "RESET_PASSWORD" })
            })
              .then(response => response.json())
              .then(data => {
                setIsLoadingOtp(false); 
                if (data.status === "success") {
                  // Show success alert
                  setAlert({ message: 'Berhasil kirim otp reset', type: 'success', isVisible: true });
                  startCountdown();
                  setOrganizationId(da.data.userId);
                } else {
                  validateFormResetNotFound();
                }
              })
              .catch(error => {
                setIsLoadingOtp(false); 
                setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
                console.log(error.message);
              });
          } else {
            setIsLoadingOtp(false);
            setAlert({ message: 'Akun belum diverifikasi', type: 'error', isVisible: true });
            if(data.message === "Akun belum diverifikasi") {
              setOrganizationId(da.data.userId);
            }
          }
        } else {
          setIsLoadingOtp(false); 
          validateFormResetNotFound();
        }
      }).catch(error => {
        setIsLoadingOtp(false); 
        setAlert({ message: 'Terjadi kesalahan: ' + error.message, type: 'error', isVisible: true });
        console.log(error.message);
      });
    }
    
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

  const handleCheckOtp = () => {
    if (!validateOtp()) return;

    setIsLoadingVerif(true); // Set loading state

    const { otp } = formData;
    fetch('https://cfood.id/api/mails/check-otp-organization', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organizationId: organizationId, otpCode: otp, otpType: "RESET_PASSWORD" })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          setIsLoadingVerif(false); 
          // Show success alert
          setAlert({ message: "OTP sangat valid", type: 'success', isVisible: true });
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
    <div className='login-container' id="login">
      <div className='login-title'>Login</div>
      <div className='login-type-list'>
        <div className={typeLogin == "merchant" && "active"} onClick={() => toggleType("merchant")}>
          <FaStore/> Merchant
        </div>
        <div className={typeLogin == "institusi" && "active"} onClick={() => toggleType("institusi")}>
          <FaUniversity/> Kampus
        </div>
        <div className={typeLogin == "organisasi" && "active"} onClick={() => toggleType("organisasi")}>
          <FaUsers/> Organisasi
        </div>
      </div>
      <div className='login-form'>
        <input type='email' placeholder='Email' name='email' class={errors.email != null ? "input-error" : ""} onChange={handleFormChange} ></input>
        {errors.email && <div className='error'>{errors.email}</div>}
        <div className='password'>
          <input input type={isOpen ? 'text' : 'password'} name='password' placeholder='Password' class={errors.password != null ? "input-error" : ""} onChange={handleFormChange} ></input>
          <div className='input-icon' onClick={togglePass}>
            {
              isOpen ? <FaEye/> : <FaEyeSlash/>
            }
          </div>
        </div>
        {errors.password && <div className='error'>{errors.password}</div>}

        <Link onClick={openResetPass} className="reset-pass">Lupa Password?</Link>

        <button className={isLoading ? 'register-btn disabled' : 'register-btn'} onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
            ) : "Login"}
          </button>

        <div className='login-register'>
          Belum punya akun? <Link to={"/register#" + typeLogin}>Daftar sekarang</Link>
        </div>
      </div>

      {alert.isVisible && (
        <div className='alert-container'>
          <div className={alert.type === "error" ? 'custom-alert alert-err' : 'custom-alert alert-full'}>
            {
              alert.type === "error" && <div className='alert-title'>Peringatan</div>
            }
            <div className='alert-message'>
              {
                alert.message === "Password salah" ? <>
                  <FaKey style={{color: "#002347"}}/>
                  {alert.message}
                </> :
                alert.message === "Email tidak ditemukan" ? <>
                  <FaEnvelope style={{color: "#002347"}}/>
                  {alert.message}
                </> :
                alert.message === "Akun ini belum terdaftar sebagai Merchant" && <>
                  <FaEnvelope style={{color: "#002347"}}/>
                  {alert.message}
                </>
              }

              {
                alert.message === "Akun belum diverifikasi" ? <>
                  {/* <img className='logo-success-custom' src={logoSuccess}/> */}
                  <div className='message-container'>
                    <div className='message-title'>Akun Organisasi Kamu Belum Aktif</div>
                    <div className='message-body'>
                      Untuk mengaktifkan akun, silakan lakukan verifikasi terlebih dahulu dengan menekan tombol di bawah ini.
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
                : alert.message === "OTP valid" ? <>
                  <img className='logo-success-custom' src={logoSuccess}/>
                  <div className='message-container'>
                    <div className='message-title'>Selamat! Akun Organisasi Kamu Berhasil Diverifikasi</div>
                    <div className='message-body'>
                      Sekarang, kamu dapat mengizinkan dan memantau danusan untuk kegiatan organisasi kamu.
                    </div>
                    <Link onClick={() => closeAlert()} style={{width: "100%"}}>
                      <button className={'register-btn'} style={{width: "100%"}}>
                        Login
                      </button>
                    </Link>
                  </div>
                </>
                : alert.message === "Ubah password akun organisasi" ? <>
                  <div className='message-container'>
                    <div className='message-title'>Lupa Password Akun Organisasi</div>
                    <div className='message-body'>
                      Masukkan email yang terkait dengan akunmu, dan kami akan mengirimkan kode OTP melalui email untuk mengatur ulang password kamu
                    </div>
                    <div className='register-form' style={{width: "100%"}}>
                      <input type='text' name='emailReset' placeholder='Email' class={errors.emailReset != null ? "input-error" : ""} onChange={handleFormChange} />
                      {errors.emailReset && <div className='error'>{errors.emailReset}</div>}
                    </div>
                    <button className={isLoadingOtp ? 'register-btn disabled' : 'register-btn'} onClick={handleSendOtpReset} disabled={isLoadingOtp}>
                      {isLoadingOtp ? (
                        <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
                      ) : "Kirim OTP"}
                    </button>
                  </div>
                </>
                : alert.message === "Ubah password akun" ? <>
                  <div className='message-container'>
                    <div className='message-title'>Lupa Password Akun</div>
                    <div className='message-body'>
                      Masukkan email yang terkait dengan akunmu, dan kami akan mengirimkan kode OTP melalui email untuk mengatur ulang password kamu
                    </div>
                    <div className='register-form' style={{width: "100%"}}>
                      <input type='text' name='emailReset' placeholder='Email' class={errors.emailReset != null ? "input-error" : ""} onChange={handleFormChange} />
                      {errors.emailReset && <div className='error'>{errors.emailReset}</div>}
                    </div>
                    <button className={isLoadingOtp ? 'register-btn disabled' : 'register-btn'} onClick={handleSendOtpReset} disabled={isLoadingOtp}>
                      {isLoadingOtp ? (
                        <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
                      ) : "Kirim OTP"}
                    </button>
                  </div>
                </>
                : alert.message === "Berhasil kirim otp reset" ? <>
                  {/* <img className='logo-success-custom' src={logoSuccess}/> */}
                  <div className='message-container'>
                    <div className='message-title'>Kode OTP</div>
                    <div className='message-body'>
                      Kode OTP telah dikirimkan ke email kamu, masukkan kode untuk verifikasi
                    </div>
                    <div className='register-form' style={{width: "100%"}}>
                      <input type='text' name='otp' placeholder='OTP' value={formData.otp} class={errors.otp != null ? "input-error" : ""} onChange={handleFormChange} />
                      {errors.otp && <div className='error'>{errors.otp}</div>}
                    </div>
                    <div style={{ textAlign: "center" }}>
                  {!isCountdownActive ? (
                    <a style={{ cursor: "pointer" }} onClick={handleSendOtpReset}>
                      {isLoadingOtp ? <Lottie animationData={loadingIcon} loop={true} style={{ height: "30px" }} /> : "Kirim ulang OTP"}
                    </a>
                  ) : (
                    <span>Kirim ulang OTP dalam {countdown} detik</span>
                  )}
                  </div>
                    <button className={isLoadingVerif ? 'register-btn disabled' : 'register-btn'} onClick={handleCheckOtp} disabled={isLoadingVerif}>
                      {isLoadingVerif ? (
                        <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
                      ) : "Verifikasi"}
                    </button>
                  </div>
                </>
                : alert.message === "OTP sangat valid" ? <>
                  {/* <img className='logo-success-custom' src={logoSuccess}/> */}
                  <div className='message-container'>
                    <div className='message-title'>Buat Password Baru</div>
                    <div className='message-body'>
                      Password baru kamu harus berbeda dari password yang digunakan sebelumnya
                    </div>
                    <div className='register-form' style={{width: "100%"}}>
                      <div className='password'>
                        <input type={isNewOpen ? 'text' : 'password'} name='newPassword' placeholder='Password' class={errors.newPassword != null ? "input-error" : ""} onChange={handleFormChange} />
                        <div className='input-icon' onClick={toggleNewPass}>
                          {isNewOpen ? <FaEye/> : <FaEyeSlash/>}
                        </div>
                      </div>
                      {errors.newPassword && <div className='error'>{errors.newPassword}</div>}
                      
                      <div className='password'>
                        <input type={isNewOpenRe ? 'text' : 'password'} name='confirmNewPassword' placeholder='Konfirmasi Password' class={errors.confirmNewPassword != null ? "input-error" : ""} onChange={handleFormChange} />
                        <div className='input-icon' onClick={toggleNewRePass}>
                          {isNewOpenRe ? <FaEye/> : <FaEyeSlash/>}
                        </div>
                      </div>
                      {errors.confirmNewPassword && <div className='error'>{errors.confirmNewPassword}</div>}
                    </div>

                    <button className={isLoadingChange ? 'register-btn disabled' : 'register-btn'} onClick={handleChangePassword} disabled={isLoadingChange}>
                      {isLoadingChange ? (
                        <Lottie animationData={loadingIcon} loop={true} style={{height: "50px"}} />
                      ) : "Ubah Password"}
                    </button>
                  </div>
                </>
                : alert.message === "Berhasli diubah" && <>
                  <img className='logo-success-custom' src={logoSuccess}/>
                  <div className='message-container'>
                    <div className='message-title'>Password Akun Kamu Berhasil Diubah</div>
                    <div className='message-body'>
                      Selalu catat dan simpan setiap password akun kamu di tempat yang aman
                    </div>
                    <Link onClick={() => closeAlert()} style={{width: "100%"}}>
                      <button className={'register-btn'} style={{width: "100%"}}>
                        Tutup
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

export default Login;