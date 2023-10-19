export default {
	invite: 'https://discord.com/invite/2HbshwGjnm',
	bots: {
		treebo: {
			eventName: 'Forestry',
			botName: 'Treebo',
			baseUrl: '',
			invite:
				'https://discord.com/api/oauth2/authorize?client_id=990375195015544883&permissions=51200&scope=bot',
			upload: false,
			verify: false,
			count: false,
			practice: false,
			attribution: false
		},
		'fossil-id': {
			eventName: 'Fossils',
			botName: 'Fossil-ID',
			baseUrl: '',
			invite:
				'https://discord.com/api/oauth2/authorize?client_id=678437690848313373&permissions=51200&scope=bot',
			upload: false,
			verify: false,
			count: false,
			practice: false,
			attribution: false
		},
		'bird-id': {
			eventName: 'Ornithology',
			botName: 'Bird-ID',
			baseUrl: 'https://orni-api.sciolyid.org',
			invite:
				'https://discord.com/api/oauth2/authorize?client_id=601917808137338900&permissions=268486656&scope=bot',
			upload: false,
			verify: false,
			count: false,
			practice: true,
			attribution: false
		},
		minerobo: {
			eventName: 'R & M',
			botName: 'Minerobo',
			baseUrl: 'https://minerobo.sciolyid.org',
			invite:
				'https://discord.com/api/oauth2/authorize?client_id=821143596232474684&permissions=51200&scope=bot',
			upload: false,
			verify: true,
			count: true,
			practice: false,
			attribution: true
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
		attribution: { name: 'Image Attributions' },
		invite: { name: 'Add to Server' }
	}
} as const;
