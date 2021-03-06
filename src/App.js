import './App.css';
import AboutUsHome from './components/about-us/AboutUsHome';
import Events from './components/events/Events';
import HeroSection from './components/herosection/HeroSection';
import Teams from './components/jaltan core team/Teams';
import Headers from './components/nav/header/Headers';
import ScrollButton from './components/nav/scroll/ScrollButton';
import Footer from './components/nav/footer/Footer';
import Popup from './components/nav/Popup/Popup';

function App() {
  return (
    <div className="App">
          <Headers/>
          <Popup/>
          <HeroSection/>
          <AboutUsHome/>
          <Events/>   
          <Teams/>
          <ScrollButton/>
          <Footer/>   
    </div>
  );
}

export default App;
