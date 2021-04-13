import MediaPlayer from '../mediaPLayer.js'
class AutoPlay {
	constructor() {}
	run(player: MediaPlayer) {
		player.toggleMute()
	}
}
export default AutoPlay
