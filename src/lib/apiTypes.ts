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

// /verify/
interface VerifyItemEnd {
	end: true;
}
export interface VerifyItemMore {
	id: string;
	item: string;
	duplicates: string[];
	url: string;
	offset: number;
	end: false;
}
export type VerifyItem = VerifyItemMore | VerifyItemEnd;

// /verify/stats
export interface VerifyStats {
	valid: number;
	invalid: number;
	duplicate: number;
}

// /user/profile (Bird-ID)
export interface BirdIDProfile {
	avatar_hash: string;
	avatar_url: string;
	username: string;
	discriminator: string;
	score: number;
	max_streak: number;
	missed: [string, number][];
}
