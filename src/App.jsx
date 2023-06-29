import Contribute from './components/Contribute/Contribute';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Request from './components/Request/Request';
import WhySection from './components/WhySection/WhySection';
import Footer from './components/Footer/Footer';
import Alert from './components/UI/Alert/Alert';
import { useGlobalCOntext } from './context/context';


function App() {
  const {alert, alertMessage} = useGlobalCOntext();

  return (
    <>
        <Header />
        <Hero />
        <WhySection />
        <Features />
        <Contribute />
        <Request />
        <Footer />
        {alert && <Alert message={alertMessage}/>}
    </>
  );
}

export default App;
