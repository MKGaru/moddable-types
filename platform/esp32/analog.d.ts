declare module "embedded:io/analog" {
	export interface AnalogOptions {
		pin: number
	}
	class Analog {
		constructor(options: AnalogOptions)
		close(): void
		read(): number
		get resolution(): number
		get format(): 'number'
		set format(value: 'number')
	}
	export default Analog
}
