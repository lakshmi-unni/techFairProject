import './style.scss';
import Header from './Components/Header';
import BgContent from './Components/BgContent';
import StartBusiness from './Components/StartBusiness';
import OurPricing from './Components/OurPricing';
import StartAndGrow from './Components/StartAndGrow';


function App() {
  return (
    <div className="bg-image bg-[#F5F7FF] font-inter relative" >
      <Header/>
      <BgContent/>
      <StartBusiness/>
      <OurPricing/>
      <StartAndGrow/>
      
    </div>
    
  );
}

export default App;
