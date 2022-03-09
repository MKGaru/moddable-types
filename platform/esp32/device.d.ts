
// @ts-nocheck
import Analog from "embedded:io/analog";
import Digital from "embedded:io/digital";
import DigitalBank from "embedded:io/digitalbank";
import I2C from "embedded:io/i2c";
import PulseCount from "embedded:io/pulsecount";
import PWM from "embedded:io/pwm";
import Serial from "embedded:io/serial";
import SMBus from "embedded:io/smbus";
import SPI from "embedded:io/spi";

declare global {
	const device: {
		I2C: {
			default: {
				io: typeof I2C,
				data: number,
				clock: number
			}
		},
		Serial: {
			default: {
				io: typeof Serial,
				port: number,
				receive: number,
				transmit: number
			}
		},
		SPI: {
			default: {
				io: typeof SPI,
				clock: number,
				in: number,
				out: number,
				port: number
			}
		},
		Analog: {
			default: {
				io: typeof Analog,
				pin: number
			}
		},
		io: {
			Analog: typeof Analog,
			Digital: typeof Digital,
			DigitalBank: typeof DigitalBank,
			I2C: typeof I2C,
			PulseCount: typeof PulseCount,
			PWM: typeof PWM,
			Serial: typeof Serial,
			SMBus: typeof SMBus,
			SPI: typeof SPI
		},
		pin: {
			[key: string]: number,
		}
	}
}
