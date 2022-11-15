import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SplattyFunction from '../components/SplattyFunction/SplattyFunction.js';
import './Home.css';


const Home: React.FC = () => {
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
            <SplattyFunction />
          </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
