import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./footer.jsx";
import ObjectDetection from "../shared/objectdetection.jsx";
import CurrencyDetector from "../shared/currencydetector.jsx";
import ColourDetection from "../shared/colour-detection.jsx";
import Text from "../shared/text.jsx";



const  Dashboard = ()=>{
    const location = useLocation();

  useEffect(() => {
    if (location.hash === "#object-detection") {
      setTimeout(() => {
        const section = document.getElementById("object-detection");
        if (section) {
          section.scrollIntoView({ behavior: "auto" });
        }
      }, 50); 
    }
  }, [location]);
  
return <>
   <Text></Text>
    <div id="object-detection">
        <ObjectDetection />
      </div>
      <fac
 <CurrencyDetector></CurrencyDetector>
  
<Footer></Footer>
</>
};


export default Dashboard ;