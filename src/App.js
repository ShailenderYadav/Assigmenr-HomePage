import logo from './logo.svg';
import './App.css';
import HeaderTop from './Component/HeaderTop';
import HeaderMenu from './Component/HeaderMenu';
import HeaderSection from './Component/HeaderSection';
import TrustedBySection from './Component/TrustedBySection';
import Footer from './Component/Footer';
import EmailSub from './Component/EmailSub';
import LogoDisplay from './Component/LogoDisplay';

function App() {
  return (
    <div className="">
      <HeaderTop></HeaderTop>
      <HeaderMenu />
      <HeaderSection />
      <TrustedBySection />
      <EmailSub />
      <LogoDisplay />
      <Footer />
    </div>
  );
}

export default App;
