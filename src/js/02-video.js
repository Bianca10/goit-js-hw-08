import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(iframe);

vimeoPlayer.on(
  'timeupdate',
  throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

document.addEventListener('DOMContentLoaded', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    vimeoPlayer.setCurrentTime(parseFloat(currentTime));
  }
  console.log(vimeoPlayer);
});
