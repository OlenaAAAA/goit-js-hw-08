import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);


const playTime = (event) => {
    localStorage.setItem("videoplayer-current-time", event.seconds);
    };

player.on("timeupdate", throttle(playTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0);






