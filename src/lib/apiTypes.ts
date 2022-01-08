// /about/count
interface CountGroup {
	group: true;
	name: string;
	value: { name: string; value: number }[];
}
interface CountNoGroup {
	group: false;
	name: string;
	value: number;
}
export interface BotMediaCounts {
	total: number;
	counts: (CountGroup | CountNoGroup)[];
}

// /about/info
export interface BotInfo {
	idName: string;
	description: string;
	server: string;
	verificationServer: string | null;
	source: string;
}

// /about/list
export interface ListGroups {
	[group: string]: string[];
}
export interface ListNoGroups {
	items: string[];
}
export type BotList = ListGroups | ListNoGroups;
