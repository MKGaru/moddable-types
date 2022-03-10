declare module "embedded:io/pwm" {
	export interface PWMOptions {
		/** A number from 0 to 16 indicating the GPIO number to operate as a PWM output. */
		pin: number,
		/** A number specifying the frequency of the PWM output in Hz.  */
		hz?: number,
	}
	class PWM {
		/**
		 * The built-in PWM IO class provides access to the pulse-width modulation capability of pins.
		 * @param options 
		 * @see {@link https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/io/io.md#pwm docs/io/pwm }
		 */
		constructor(options: PWMOptions)
		close(): void
		/** @param value 0~(2**resolution)-1 */
		write(value: number): void

		get hz()
		get resolution(): number

		get format(): 'number'
		set format(value: 'number')
	}
	export default PWM
}
