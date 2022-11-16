import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './SplattyTimer.css';
import PlayButton from '../buttons/PlayButton.js';
import PauseButton from '../buttons/PauseButton.js';
import SettingsButton from '../buttons/SettingsButton.js';
import { useContext , useState, useEffect, useref, useRef} from 'react';
import SettingsContext from '../../pages/settings/SettingsContext';
// const red = '#f54e4e';
// const green = '#4aec8c';



function SplattyTimer() {
   const settingsInfo = useContext(SettingsContext);
   
   
   const [isPaused, setIsPaused] = useState(true);
   const [mode, setMode] = useState('work'); //work/break/null
   const [secondsLeft, setSecondsLeft] = useState(0);
   
   const secondsLeftRef = useRef(secondsLeft);
   const isPausedRef = useRef(isPaused);
   const modeRef = useRef(mode);

  

   function tick() {
      secondsLeftRef.current--;
      setSecondsLeft(secondsLeftRef.current);
   }

   function initSplatty() {

      secondsLeftRef.current = settingsInfo.workMinutes * 60;
      setSecondsLeft(secondsLeftRef.current);

   }

   useEffect(() => {
      function switchMode() {
         const nextMode = modeRef.current === 'work' ? 'break' : 'work';
         const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes :settingsInfo.breakMinutes) * 60;
         
         setMode(nextMode);
         modeRef.current = nextMode;
         
   
         setSecondsLeft(nextSeconds);
         secondsLeftRef.current = nextSeconds;
      }

      


      initSplatty();

     const interval = setInterval(() => {
         if(isPausedRef.current) {
            return;
         }
         if (secondsLeftRef.current === 0) {
            return switchMode();
         }
         
         tick();
      }, 1000)

      return () => clearInterval(interval);
   }, [settingsInfo]);
   
   const totalSeconds = mode === 'work' 
   ? settingsInfo.workMinutes * 60 
   : settingsInfo.breakMinutes * 60; 

   // Here is where I am making the seconds display properly on the screen
   // Ideally I'll upgrade the way this works and have a smooth animation to go along
   // with it.
   const percentage = Math.round(secondsLeft / totalSeconds * 100);

   const minutes = Math.floor(secondsLeft / 60);
   let seconds = secondsLeft % 60;
   if(seconds < 10) seconds = '0'+ seconds;
   
   return (
      <div>
         <CircularProgressbar
            value={percentage}
            text={minutes + ':' + seconds}
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
               pathColor: mode === 'work' ? '#f54e4e' : '#4aec8c',//`rgba(62, 152, 199, ${percentage / 100})`,
               textColor: '#f88',
               trailColor: '#d6d6d6',
               backgroundColor: '#3e98c7',
            })}
         />
         <div style={{marginTop:'20px'}}>
            {isPaused 
            ? <PlayButton  onClick={() => { setIsPaused(false); isPausedRef.current = false; }} /> 
            : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
         </div>
         <div style={{marginTop: '20px'}}>
            <SettingsButton onClick={() => settingsInfo.setShowSettings(true)}/>
         </div>
      </div>
   );
}

export default SplattyTimer;