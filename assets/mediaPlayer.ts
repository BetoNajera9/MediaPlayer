class MediaPlayer {
	private lastState: String
	media: HTMLMediaElement
	plugins: Array<any>
	container: HTMLElement

	constructor(config) {
		this.media = config.el
		this.plugins = config.plugins ?? []
		this.initPlayer()
		this.initPlugins()
		this.media.play()
		this.lastStateMedia = 'play'
	}

	initPlayer() {
		this.container = document.createElement('div')
		this.container.style.position = 'relative'
		this.media.parentNode.insertBefore(this.container, this.media)
		this.container.appendChild(this.media)
	}

	get lastStateMedia() {
		return this.lastState
	}

	set lastStateMedia(state: String) {
		if (state == 'play' || state == 'pause') {
			this.lastState = state
		}
	}

	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this)
		})
	}

	togglePlay() {
		if (this.media.paused) {
			this.media.play()
			this.lastStateMedia = 'play'
		} else {
			this.media.pause()
			this.lastStateMedia = 'pause'
		}
	}

	play() {
		this.media.play()
	}

	pause() {
		this.media.pause()
	}

	toggleMute() {
		if (this.media.muted) {
			this.media.muted = false
		} else {
			this.media.muted = true
		}
	}
}

export default MediaPlayer
