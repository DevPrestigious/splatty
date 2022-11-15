import './Home.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import { findAllByTestId } from '@testing-library/react';
import SplattyFunction from '../components/SplattyFunction/SplattyFunction.js';
import { useState } from "react";
import Settings from './settings/Settings.js'


const Home: React.FC = () => {

  //I'm stuck on what I need to do here with setting the initial state, I should be only seeing the application.
  const [showSettings, setShowSettings] = useState(() => ({initialState: true}))

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
          {showSettings ? (
        <Settings />
      ) : (
        <SplattyFunction />
      )}
            
          </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
