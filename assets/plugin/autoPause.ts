import MediaPlayer from '../mediaPLayer.js'

class AutoPause {
	private threshold: number
	player: MediaPlayer

	constructor() {
		this.threshold = 0.25
		this.handlerIntersection = this.handlerIntersection.bind(this)
		this.handlerVisibility = this.handlerVisibility.bind(this)
	}

	run(player) {
		this.player = player
		const observer = new IntersectionObserver(this.handlerIntersection, {
			threshold: this.threshold,
		})
		observer.observe(player.media)

		document.addEventListener('visibilitychange', this.handlerVisibility)
	}

	private handlerIntersection(entries: IntersectionObserverEntry[]) {
		const entry = entries[0]

		const isVisible = entry.intersectionRatio > this.threshold

		if (isVisible) {
			console.log('Is')
			this.player.play()
			this.player.lastStateMedia = 'play'
		} else {
			console.log('Not')
			this.player.pause()
			this.player.lastStateMedia = 'pause'
		}
	}

	private handlerVisibility() {
		const isVisible = document.visibilityState === 'visible'
		if (isVisible) {
			if (this.player.lastStateMedia == 'play') {
				this.player.play()
				this.player.lastStateMedia = 'play'
			} else {
				this.player.pause()
				this.player.lastStateMedia = 'puse'
			}
		} else {
			this.player.pause()
		}
	}
}

export default AutoPause
