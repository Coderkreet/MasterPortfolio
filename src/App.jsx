import "./App.css";
import HeroSection from "./Component/HeroSection";
import {Routes ,Route} from 'react-router-dom'
import Education from "./Component/NavePages/Education";
import Skills from "./Component/NavePages/Skills";
import Project from './Component/NavePages/Project'
import Contect from './Component/NavePages/Contect'
import Footer from "./Component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {

  useEffect(()=>{

    Aos.init({
      duration:800,
      offset:150,
      once:true
    });
  })
  
  return (
  <div data-Aos = "fade-up" className=" overflow-hidden">
   
   <div className="md:p-[0] p-[20px]">
        <Routes>
<Route path='/' element={<HeroSection/>}/>
<Route path='/Education' element={<Education/>}/>
<Route path='/Skills' element={<Skills/>}/>
<Route path='/Project' element={<Project/>}/>
<Route path='/Contect' element={<Contect/>}/>

</Routes>
   </div>


<Footer/>
  </div>
  );
}

export default App;
