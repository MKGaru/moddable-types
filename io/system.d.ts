/*
 * Copyright (c) Chris Midgley - All Rights Reserved
 *
 * Use of this material, via any medium, is strictly prohibited without a
 * written license agreement.  Proprietary and confidential.
 */

// https://gist.github.com/cmidgley/807b06d5f6e0c2483619d269a53f0803

/*
    Types for io/system
*/
declare class Timer {}
declare type TimerCallback = (timer?: Timer) => void;

declare class System {
	static restart(): void;
	static deepSleep(): void;
	static resolve(name: string, callback: (name: string, ip: string) => void);
	static setTimeout(callback: TimerCallback, delay?: number): Timer;
	static clearTimeout(id: Timer): void;
	static setInterval(callback: TimerCallback, delay?: number): Timer;
	static clearInterval(id: Timer): void;
}
