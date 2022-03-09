/*
 * Copyright (c) Chris Midgley - All Rights Reserved
 *
 * Use of this material, via any medium, is strictly prohibited without a
 * written license agreement.  Proprietary and confidential.
 */

declare module "embedded:io/digital" {
	import DigitalBank from "embedded:io/digitalbank";

	namespace Digital {
		export type Input = DigitalBank.Input;
		export type InputPullUp = DigitalBank.InputPullUp;
		export type InputPullDown = DigitalBank.InputPullDown;
		export type InputPullUpDown = DigitalBank.InputPullUpDown;
		export type Output = DigitalBank.Output;
		export type OutputOpenDrain = DigitalBank.OutputOpenDrain;
		export type Rising = 1;
		export type Falling = 2;
	}

	export interface DigitalOptions {
		pin: number;
		mode:
			| Digital.Input
			| Digital.InputPullUp
			| Digital.InputPullDown
			| Digital.InputPullUpDown
			| Digital.Output
			| Digital.OutputOpenDrain;
		edge?: Digital.Rising | Digital.Falling;
		onReadable?: () => void;
	}

	class Digital extends DigitalBank {
		constructor(dictionary: DigitalOptions);
		static Rising: Digital.Rising;
		static Falling: Digital.Falling;
	}

	export default Digital;
}
