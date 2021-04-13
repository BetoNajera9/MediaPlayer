import MediaPlayer from './mediaPlayer'
import AutoPlay from './plugin/autoPlay'
import AutoPause from './plugin/autoPause'
import Adsplugin from './plugin/Ads/index'

const video = document.querySelector('video')
const buttonPlay: HTMLElement = document.querySelector('#Play')
const buttonMute: HTMLElement = document.querySelector('#Mute')

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new Adsplugin()],
})

buttonPlay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch((error) => {
		console.log(error.menssage)
	})
}
