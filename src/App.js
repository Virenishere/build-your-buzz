import './App.css';
import About from './components/about/About';
import Clients from './components/Clients';
import Contact from './components/contact/Contact';
import Counter from './components/Counter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Pricing from './components/Pricing';
import Services from './components/Services';

function App() {
  return (
    <>
    <Header />
    <Home />
    {/* <Services/> */}
    <About />
    {/* <Counter /> */}
    {/* <Pricing /> */}
    {/* <Clients /> */}
    <Contact />
    <Footer />
    </>
  );
}

export default App;
