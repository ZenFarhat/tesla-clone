import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app__itemsContainer'>
        <Item
          title='Model 3'
          desc='Schedule a Touchless Test Drive'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
          car='car'
          first
        />
        <Item
          title='Solar and Powerwall'
          desc='Power Everything'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='LEARN MORE'
          leftBtnLink=''
          rightBtnTxt=''
          rightBtnLink=''
          twoButtons=''
        />
        <Item
          title='Model S'
          desc='Schedule a Touchless Test Drive'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model X'
          desc='Schedule a Touchless Test Drive'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model Y'
          desc='Schedule a Touchless Test Drive'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
