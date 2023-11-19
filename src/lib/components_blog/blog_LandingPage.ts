export interface BlogCard {
	title: string;
	imagePath: string;
	link: string;
	readTime: string;
	content: string;
	tags: string[];
	postTime: string;
}

export interface BlogLandingPageData {
	title: string;
	quote: string;
	blogCard: BlogCard[];
}

export const blogLandingPageData: BlogLandingPageData = {
	title: `blog`,

	quote: `"I will try to fill in the knowledge gaps to have you on your way. "`,

	blogCard: [
		{
			title: 'Selenium',
			imagePath:
				'https://blog.autify.com/static/0b1fa7c84cc543a52641d6395ad328c0/553fd/selenium-logo.png',
			link: 'https://www.youtube.com/watch?v=b8xDPbm9IZY&list=PL_VFqfaSA4Umpwjo_qNYyPLAS4kqqO70K',
			readTime: '20 min',
			content: `This is a youtube playlist I created to help setup selenium projects`,
			tags: ['selenium', 'java', 'Eclipse', 'git', 'TestNG'],
			postTime: 'Jan 22, 2019, 4:11:58 PM'
		},

		{
			title: 'Playwright',
			imagePath: 'https://miro.medium.com/max/1400/1*wrRk5Ut1L7mmbaFLGELcIw.png',
			link: 'https://www.youtube.com/watch?v=dz07r-SaTWo&list=PL_VFqfaSA4UlNiN_xbxBjgSvBTNda27oW',
			readTime: '20 min',
			content: `Youtube playlist to get started on playwright... read the documentation.`,
			tags: ['NodeJS', 'Playwright'],
			postTime: 'Jul 8, 2021, 11:11:23 PM'
		},
		{
			title: 'git and github',
			imagePath: 'https://miro.medium.com/max/1400/1*9PnPjPI65fGwLiMfluVLrw.jpeg',
			link: '/',
			readTime: '20 min',
			content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, aut aliquid libero ad ipsa quo fugit inventore unde. Consequuntur perferendis aperiam corporis quasi, quos exercitationem aut fuga tempore dolorum porro.`,
			tags: ['eee', 'ee'],
			postTime: '3/7/2022, 4:11:58 PM'
		},
		{
			title: 'Docker',
			imagePath: 'https://www.cloudsavvyit.com/p/uploads/2021/04/075c8694.jpeg',
			link: '/',
			readTime: '20 min',
			content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, aut aliquid libero ad ipsa quo fugit inventore unde. Consequuntur perferendis aperiam corporis quasi, quos exercitationem aut fuga tempore dolorum porro.`,
			tags: ['eee', 'ee'],
			postTime: '3/7/2022, 4:11:58 PM'
		},
		{
			title: 'Powershell',
			imagePath: 'https://www.techrepublic.com/wp-content/uploads/2020/09/powershell.jpg',
			link: '/blog/PowerShell',
			readTime: '20 min',
			content: `Powershell notes.`,
			tags: ['Powershell'],
			postTime: '3/7/2018, 4:11:58 PM'
		},
		{
			title: 'Java Projects',
			imagePath: 'https://wallpapercave.com/wp/wp7250087.jpg',
			link: '/',
			readTime: '20 min',
			content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, aut aliquid libero ad ipsa quo fugit inventore unde. Consequuntur perferendis aperiam corporis quasi, quos exercitationem aut fuga tempore dolorum porro.`,
			tags: ['eee', 'ee'],
			postTime: '3/7/2022, 4:11:58 PM'
		}
	]
};
