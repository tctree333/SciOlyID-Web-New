export default {
	bots: {
		minerobo: {
			event_name: 'Rocks and Minerals',
			baseUrl: 'https://minerobo.sciolyid.org',
			upload: false,
			verify: true
		}
	},
	urlPaths: {
		items: '/about/list',
		info: '/about/info',
		counts: '/about/count',
		login: '/user/login',
		logout: '/user/logout',
		profile: '/user/profile'
	}
} as const;
