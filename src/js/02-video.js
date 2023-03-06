import throttle from 'lodash.throttle';
import Player  from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    console.log(JSON.parse(localStorage.getItem("videoplayer-current-time")));
};
player.on('timeupdate', throttle(onPlay,1000));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});