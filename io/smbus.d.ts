declare module "embedded:io/smbus" {
	import { I2COptions } from "embedded:io/i2c";

	export interface SMBusOptions extends I2COptions {
		sendStop?: boolean;
	}

	class SMBus {
	
		constructor(options: SMBusOptions);
		close(): void;
	
		readByte(register: number): number;
	
		readWord(register: number, bigEndian: boolean): number;
	
		readBlock(register: number, buffer: ArrayBuffer|number): ArrayBuffer;
	
		writeByte(register: number, byte: number): void;
	
		writeWord(register: number, word: number, bigEndian: boolean): void;
	
		writeBlock(register: number, buffer: ArrayBuffer|Uint8Array): void;
	
		sendByte(command: number): void;
	
		receiveByte(): number;
	
		readQuick(): void;
	
		writeQuick(): void;
	
		get format(): "buffer";
		set format(value: "buffer");
	}
	
	export default SMBus;
}
