import './Home.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { findAllByTestId } from '@testing-library/react';
import SplattyTimer from '../components/SplattyTimer/SplattyTimer.js';
import { useState } from "react";
import Settings from './settings/Settings.js'
import SettingsContext from './settings/SettingsContext';


const Home: React.FC = () => {

  //I'm stuck on what I need to do here with setting the initial state, I should be only seeing the application.
  const [showSettings, setShowSettings] = useState(() => (false))
  const [workMinutes, setWorkMinutes] = useState(4);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
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
