import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import { useEffect } from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature/Feature';
import AnimateSection from './Components/Animate/AnimateSection';
import DemoTop from './Components/Landing Demo/DemoTop';
import DemoBottom from './Components/Landing Demo/DemoBottom';
import ResponsiveScreen from './Components/ResponsiveScreen';
import LandingFeature from './Components/Landing Feature/LandingFeature';
import Faq from './Components/Faq/Faq';
import Support from './Components/Support/Support';
import Footer from './Components/Footer/Footer';

function App() {

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <AnimateSection />
      <DemoTop />
      <DemoBottom />
      <ResponsiveScreen />
      <LandingFeature />
      <Faq />
      <Support />
      <Footer />
    </>
  )
}

export default App;
