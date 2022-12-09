import './Home.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { findAllByTestId } from '@testing-library/react';
import SplattyTimer from '../components/SplattyTimer/SplattyTimer.js';
import { useState } from "react";
import Settings from './settings/Settings.js'
import SettingsContext from './settings/SettingsContext';
// import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/index.js';



// Credits for Icon to https://oldschool.runescape.wiki/w/File:Tomato_detail.png#filehistory
// All rightsreserved, this is taken as a creative school project.

// constructor(private BackgroundMode, BackgroundMode) {};


document.addEventListener('deviceready', function () {
  // cordova.plugins.backgroundMode is now available
}, false);

const Home: React.FC = () => {


  // cordova.plugins.backgroundMode.enable();
  
  // cordova.plugins.backgroundMode.setEnabled(true);


  const [showSettings, setShowSettings] = useState(() => (false))
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Splatty</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Splatty</IonTitle>
          </IonToolbar>
        </IonHeader>
          <main> 
            <SettingsContext.Provider value={{
              //Default Values for the timer
              showSettings,
              setShowSettings,
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
            }}>
              {showSettings ? (<Settings />) : (<SplattyTimer />)}
            </SettingsContext.Provider>
          </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
