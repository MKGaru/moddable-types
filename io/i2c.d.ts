
declare module "embedded:io/i2c" {
	export interface I2COptions {
		/** A number from 0 to 16 indicating the GPIO number of the I2C data pin. */
		data: number,
		/** A number from 0 to 16 indicating the GPIO number of the I2C clock pin. */
		clock: number,
		/** The speed of communication on the I2C bus. */
		hz: number,
		/** The 7-bit address of the I2C slave device to communicate with. */
		address: number,
	}
	
	class I2C {
		/**
		 * The built-in I2C class implements an I2C Master to communicate with one address on an I2C bus.
		 * @see {@link https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/io/io.md#i2c docs/io/i2c }
		 */
		constructor(option: I2COptions)
		close(): void
		read(count: number): ArrayBuffer
		write(buffer: ArrayBufferView): void

		get format(): 'buffer'
		set format(value: 'buffer')
	}
	export default I2C
}
