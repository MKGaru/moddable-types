/*
 * Copyright (c) Chris Midgley - All Rights Reserved
 *
 * Use of this material, via any medium, is strictly prohibited without a
 * written license agreement.  Proprietary and confidential.
 */

declare module "embedded:io/digitalbank" {
	namespace DigitalBank {
		export type Input = 0;
		export type InputPullUp = 1;
		export type InputPullDown = 2;
		export type InputPullUpDown = 3;
		export type Output = 8;
		export type OutputOpenDrain = 9;
	}

	interface DigitalBankOptions {
		pins: number;
		mode:
			| DigitalBank.Input
			| DigitalBank.InputPullUp
			| DigitalBank.InputPullDown
			| DigitalBank.InputPullUpDown
			| DigitalBank.Output
			| DigitalBank.OutputOpenDrain;
		rises: number;
		falls: number;
		onReadable: () => void;
	}

	class DigitalBank {
		constructor(dictionary: DigitalBankOptions);
		close(): void;
		read(): number;
		write(value: number): void;
		get format(): string;
		set format(value);
		static Input: DigitalBank.Input;
		static InputPullUp: DigitalBank.InputPullUp;
		static InputPullDown: DigitalBank.InputPullDown;
		static InputPullUpDown: DigitalBank.InputPullUpDown;
		static Output: DigitalBank.Output;
		static OutputOpenDrain: DigitalBank.OutputOpenDrain;
	}

	export default DigitalBank;
}
