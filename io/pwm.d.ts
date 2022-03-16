declare module "embedded:io/pwm" {
	export interface PWMOptions {
		/** A number from 0 to 16 indicating the GPIO number to operate as a PWM output. */
		pin: number,
		/** A number specifying the frequency of the PWM output in Hz.  */
		hz?: number,
	}

	class PWM {
		constructor(options: PWMOptions);
		close(): void;
		write(value: number): void;
		
		get hz(): number;
		get resolution(): number;
	
		get format(): "number";
		set format(value: "number");
	}
	
	export default PWM;
}
