import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './SplattyTimer.css';
import PlayButton from '../buttons/PlayButton.js';
import PauseButton from '../buttons/PauseButton.js';
import SettingsButton from '../buttons/SettingsButton.js';
import { useContext } from 'react';
import SettingsContext from '../../pages/settings/SettingsContext';
// const red = '#f54e4e';
// const green = '#4aec8c';
const percentage = 60;

function SplattyTimer() {
   const settingsInfo = useContext(SettingsContext);
   return (
      <div>
         <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
               // Rotation of path and trail, in number of turns (0-1)
               rotation: 0.25,

               // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
               strokeLinecap: 'butt',

               // Text size
               textSize: '16px',

               // How long animation takes to go from one percentage to another, in seconds
               pathTransitionDuration: 0.5,

               // Can specify path transition in more detail, or remove it entirely
               // pathTransition: 'none',

               // Colors
               pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
               textColor: '#f88',
               trailColor: '#d6d6d6',
               backgroundColor: '#3e98c7',
            })}
         />
         <div style={{marginTop:'20px'}}>
            <PlayButton /> 
            <PauseButton />
         </div>
         <div style={{marginTop: '20px'}}>
            <SettingsButton onClick={() => settingsInfo.setShowSettings(true)}/>
         </div>
      </div>
   );
}

export default SplattyTimer;