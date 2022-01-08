export default {
	bots: {
		minerobo: {
			event_name: 'Rocks and Minerals',
			baseUrl: 'https://minerobo.sciolyid.org',
			upload: false,
			verify: true,
			counts: true,
			practice: false
		}
	},
	apiPaths: {
		items: '/about/list',
		info: '/about/info',
		counts: '/about/count',
		login: '/user/login',
		logout: '/user/logout',
		profile: '/user/profile'
	},
	sitePaths: ['upload', 'verify', 'counts', 'practice'] as Readonly<string[]>
} as const;
