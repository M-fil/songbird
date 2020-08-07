import './audio-player.scss';
import React from 'react';
import { audioConstants } from '../../constants/constants';

const {
    ZERO_TIME_TEXT,
    ICON_START,
    ICON_PAYSE,
} = audioConstants;

const defaultPlayerState = {
  startTime: audioConstants.ZERO_TIME_TEXT,
  endTime: audioConstants.ZERO_TIME_TEXT,
  sliderValue: 0,
  iconState: audioConstants.ICON_START,
};

function Player({ soundUrl }) {
    const [state, setState] = useState(defaultPlayerState);
    const playerRef = useRef();
    const sliderRef = useRef();

    const converTime = (sec) => {
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds;
    }

    const sliderChange = (time) => {
        setState({sliderValue: time});
    }

    const playButtonAction = (event) => {
        let tinterval;
        const durationTime = Math.round(playerRef.current.duration);
        sliderRef.current.max = durationTime;
        setState({endTime: converTime(durationTime)});

        if (event.target.classList.contains('fa-play')) {
            playerRef.current.play();
            setState({iconState: audioConstants.iconPause});
            tinterval = setInterval(() => {changeSliderAndCurrentTime();}, 1000);
        } else {
            playerRef.current.pause();
            setState({iconState: audioConstants.iconStart});
            clearInterval(tinterval);
        }
    }

    const changeSliderAndCurrentTime = () => {
        let curTime = Math.round(playerRef.current.currentTime);
        sliderChange(curTime);
        if (playerRef.current.ended) {
            curTime = audioConstants.zeroTime;
            sliderChange(0);
            setState({iconState: audioConstants.iconStart});
        } else {
            curTime = converTime(curTime);
        }
        setState({startTime: curTime});
    }

    return (
        <div className="audio">
            <audio ref={playerRef} className="audio_question-block">
                <source src={soundUrl}/>
            </audio>
            <div className="audio-button" onClick={playButtonAction}>
                <i className={`fas fa-${state.iconState}`}></i>
            </div>
            <div className="audio-slider">
                <input ref="slider" 
                    type="range"
                    className="audio-slider_liner" min="0" step="1"
                    value={state.sliderValue}
                    onChange={sliderChange}
                />
                <div className="audio-slider_times">
                    <div className="stat-time">{state.startTime}</div>
                    <div className="end-time">{state.endTime}</div>
                </div>
            </div>
        </div>
    );
}

Player.propTypes = {
  soundURL: PropTypes.string.isRequired,
  isGuessed: PropTypes.bool,
};

Player.defaultProps = {
  isGuessed: false,
};

export default Player;
