import './App.css';
import { Navbar } from './Components/Navbar/navbar';
import {Home} from "./Components/Home/home";
import {About} from "./Components/About/about";
import {Services} from "./Components/Services/services"
import {Support} from "./Components/Support/support";
import { Map } from './Components/map/map';
import { Footer } from './Components/Footer/footer';
import Contact from './Components/Contact/contact';


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services></Services>
     <Support></Support>
     <Contact/>
     <Map/>
     <Footer/>
    </>
  );
}

export default App;
