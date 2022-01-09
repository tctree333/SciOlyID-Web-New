export default {
	bots: {
		minerobo: {
			eventName: 'Rocks and Minerals',
			botName: 'Minerobo',
			baseUrl: 'https://minerobo.sciolyid.org',
			upload: false,
			verify: true,
			counts: true,
			practice: false,
			attribution: true
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
	sitePaths: {
		upload: { name: 'Upload Images' },
		verify: { name: 'Verify Images' },
		counts: { name: 'Image Counts' },
		practice: { name: 'Web Practice' },
		attribution: { name: 'Image Attributions' }
	}
} as const;
