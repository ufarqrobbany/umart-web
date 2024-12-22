import Header from "../components/Header";
import About from "../components/About";
import useDocumentTitle from "../useDocumentTitle";
import Footer from "../components/Footer";
import Atribusi from "../components/Atribusi";
import WhyUs from "../components/WhyUs";
import Ulasan from "../components/Ulasan";
import Tim from "../components/Tim";
import Faq from "../components/Faq";
import Tentang from "../components/Tentang";
import NavBarPage from "../components/NavBarPage";
import Bantuan from "../components/Bantuan";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
import News from "../components/News";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardOrganization from "../components/DashboardOrganization";
import AdminAuth from "../components/AdminAuth";

function Pages(props) {
  useDocumentTitle(`${props.title} | C-Food`);

  return (
    props.title === "Home" ?
      <>
        <Header/>
        <About/>
        <WhyUs/>
        <Ulasan/>
        <Tim/>
        <Faq/>
        <Footer/>
      </>
    : props.title === "Atribusi Ikon" ? <>
      <NavBarPage/>
      <Atribusi/>
      <Footer/>
    </> : props.title === "Tentang C-Food" ? <>
      <NavBarPage/>
      <Tentang/>
      <Footer/>
    </> : props.title === "Bantuan" ? <>
      <NavBarPage/>
      <Bantuan/>
      <Footer/>
    </> : props.title === "Kebijakan Privasi" ? <>
      <NavBarPage/>
      <Privacy/>
      <Footer/>
    </> : props.title === "Syarat dan Ketentuan" ? <>
      <NavBarPage/>
      <Terms/>
      <Footer/>
    </> : props.title === "News" ? <>
      <NavBarPage/>
      <News/>
      <Footer/>
    </> : props.title === "Login" ? <>
      <NavBarPage/>
      <Login/>
      <Footer/>
    </> : props.title === "Daftar" ? <>
      <NavBarPage/>
      <Register type={props.type}/>
      <Footer/>
    </> : props.title === "Dashboard Organisasi" ? <>
      <DashboardOrganization/>
    </> : props.title === "Login Admin" ? <>
      <AdminAuth/>
    </> : <></>
  );
}

export default Pages;