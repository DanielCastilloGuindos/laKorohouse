import EtsyIcon from '../assets/icons/etsy.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import TiktockIcon from '../assets/icons/tiktok.svg'
import TwitchIcon from '../assets/icons/twitch.svg'
import TwitterIcon from '../assets/icons/twitter.svg'

export let footerNavs = {
	primarylinks: {
		'Productos'	: {
			navs	: {
				'Laminas'	: { path	: '/shop/dibujos', },
				'Chapas'	: { path	: '/shop/chapas', },
				'Pines'	: { path	: '/shop/pines', },
			},
		},
		'Util links'	: {
			navs	: {
				'Quienes somos'	: { path	: ''},
				'Contacta'			: { path	: ''},
			},
		},
	},

	socialLinks: {
		'twitter'	: {
			path	: '',
			icon	: TwitterIcon,
		},
		'tiktok'	: {
			path	: '',
			icon	: TiktockIcon,
		},
		'instagram'	: {
			path	: '',
			icon	: InstagramIcon,
		},
		'etsy'	: {
			path	: '',
			icon	: EtsyIcon,
		},
		'twitch'	: {
			path	: '',
			icon	: TwitchIcon,
		},
	},

};