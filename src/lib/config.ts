export default {
	bots: {
		minerobo: {
			eventName: 'Rocks and Minerals',
			botName: 'Minerobo',
			baseUrl: 'https://minerobo.sciolyid.org',
			upload: false,
			verify: true,
			count: true,
			practice: false,
			attribution: true
		},
		'bird-id': {
			eventName: 'Ornithology',
			botName: 'Bird-ID',
			baseUrl: 'https://orni-api.sciolyid.org',
			upload: false,
			verify: false,
			count: false,
			practice: true,
			attribution: false
		}
	},
	apiPaths: {
		items: '/about/list',
		info: '/about/info',
		count: '/about/count',
		login: '/user/login',
		logout: '/user/logout',
		profile: '/user/profile'
	},
	sitePaths: {
		upload: { name: 'Upload Images' },
		verify: { name: 'Verify Images' },
		count: { name: 'Image Counts' },
		practice: { name: 'Web Practice' },
		attribution: { name: 'Image Attributions' }
	}
} as const;
