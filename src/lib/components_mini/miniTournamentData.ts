export interface ITournaments {
	tournaments: ITournament[];
}

export interface ITournament {
	id: string;
	name: string;
	description?: string;

	creatorId: string;
	creatorName: string;
	creatorEmail: string;
	creationDate: Date;

	startDate: string;
	startTime: string;

	isPrivate: boolean;

	isRegistrationRequired: boolean;
	registrationStartTime: Date;
	registrationEndTime: Date;

	isMultiCourse: boolean;

	courses: ICourse[];

	users: IUsers[];
	admins: string[];
	players: string[];
}

export interface IUsers {
	id: string;
	name: string;
	birthDate: string;
	email: string;
	userImage: string;
}

export interface ICourse {
	id: string;
	name: string;
	locationAddress: string;
	locationName: string;
	teeTime: Date;
	holeCount: number;
	coursePar: number;
	holes: IHole[];
	groups: IGroup[];
}

export interface IHole {
	hole_id: string;
	name: string;
	par: number;
}

export interface IGroup {
	id: number;
	player_ids: string[];
}

export const oaTournaments: ITournaments = {
	tournaments: [
		{
			id: '1',

			creationDate: new Date(),
			creatorId: '23',
			creatorName: 'Mick',
			creatorEmail: 'mmc@gmail.com',

			isPrivate: true,

			name: 'MMC 2023',
			description: 'greatest event of all time',
			startDate: new Date().toString(),
			startTime: new Date().getTime().toString(),

			isRegistrationRequired: true,
			registrationStartTime: new Date(),
			registrationEndTime: new Date(),

			isMultiCourse: true,

			courses: [
				{
					id: '1',
					name: 'Wisconsin Course',
					locationName: "America's Action Territory",
					locationAddress: '12345 75th St, Kenosha, WI 53142',
					teeTime: new Date(),
					holeCount: 18,
					coursePar: 48,
					groups: [
						{
							id: 1,
							player_ids: ['3', '12']
						},
						{
							id: 2,
							player_ids: []
						}
					],
					holes: [
						{
							hole_id: '1',
							name: 'hole 1',
							par: 3
						},
						{
							hole_id: '2',
							name: 'hole 2',
							par: 3
						},
						{
							hole_id: '3',
							name: 'hole 3',
							par: 3
						},
						{
							hole_id: '4',
							name: 'hole 4',
							par: 3
						},
						{
							hole_id: '5',
							name: 'hole 5',
							par: 3
						},
						{
							hole_id: '6',
							name: 'hole 6',
							par: 3
						},
						{
							hole_id: '7',
							name: 'hole 7',
							par: 3
						},
						{
							hole_id: '8',
							name: 'hole 8',
							par: 3
						},
						{
							hole_id: '9',
							name: 'hole 9',
							par: 3
						},
						{
							hole_id: '10',
							name: 'hole 10',
							par: 3
						},
						{
							hole_id: '11',
							name: 'hole 11',
							par: 3
						},
						{
							hole_id: '12',
							name: 'hole 12',
							par: 3
						},
						{
							hole_id: '13',
							name: 'hole 13',
							par: 3
						},
						{
							hole_id: '14',
							name: 'hole 14',
							par: 3
						},
						{
							hole_id: '15',
							name: 'hole 15',
							par: 3
						},
						{
							hole_id: '16',
							name: 'hole 16',
							par: 3
						},
						{
							hole_id: '17',
							name: 'hole 17',
							par: 3
						},
						{
							hole_id: '18',
							name: 'hole 18',
							par: 3
						}
					]
				},
				{
					id: '2',
					name: 'Western Course',
					locationName: "America's Action Territory",
					locationAddress: '12345 75th St, Kenosha, WI 53142',
					teeTime: new Date(),
					holeCount: 18,
					coursePar: 48,
					groups: [
						{
							id: 1,
							player_ids: ['3', '12']
						},
						{
							id: 2,
							player_ids: []
						}
					],
					holes: [
						{
							hole_id: '1',
							name: 'hole 1',
							par: 3
						},
						{
							hole_id: '2',
							name: 'hole 2',
							par: 3
						},
						{
							hole_id: '3',
							name: 'hole 3',
							par: 3
						},
						{
							hole_id: '4',
							name: 'hole 4',
							par: 3
						},
						{
							hole_id: '5',
							name: 'hole 5',
							par: 3
						},
						{
							hole_id: '6',
							name: 'hole 6',
							par: 3
						},
						{
							hole_id: '7',
							name: 'hole 7',
							par: 3
						},
						{
							hole_id: '8',
							name: 'hole 8',
							par: 3
						},
						{
							hole_id: '9',
							name: 'hole 9',
							par: 3
						},
						{
							hole_id: '10',
							name: 'hole 10',
							par: 3
						},
						{
							hole_id: '11',
							name: 'hole 11',
							par: 3
						},
						{
							hole_id: '12',
							name: 'hole 12',
							par: 3
						},
						{
							hole_id: '13',
							name: 'hole 13',
							par: 3
						},
						{
							hole_id: '14',
							name: 'hole 14',
							par: 3
						},
						{
							hole_id: '15',
							name: 'hole 15',
							par: 3
						},
						{
							hole_id: '16',
							name: 'hole 16',
							par: 3
						},
						{
							hole_id: '17',
							name: 'hole 17',
							par: 3
						},
						{
							hole_id: '18',
							name: 'hole 18',
							par: 3
						}
					]
				}
			],
			users: [
				{
					id: '1',
					userImage:
						'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwwfHwwfHw%3D&w=1000&q=80',
					name: 'Player Nate',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '2',
					userImage:
						'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?w=600&h=1260&ssl=1',
					name: 'Player Lynn',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '3',
					userImage:
						'https://photos.headshotcrew.com/styles/large/s3/photos/01/47/21/74825-alan-moore-final.jpg?itok=VSo69ejt',
					name: 'Player Jane',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '4',
					userImage:
						'http://digital-photography-school.com/wp-content/uploads/2016/02/funny-faces.jpg',
					name: 'Admin Player',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '5',
					userImage:
						'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
					name: 'Admin Joe',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '6',
					userImage:
						'https://www.chicagotribune.com/resizer/DsFbSrtnkmJWYhQgh44iS2RauWY=/1440x0/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/Q73XEMZADBADBO22HDTAVEDB3I.jpg',
					name: 'Mick',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				}
			],
			admins: ['6', '5', '4'],
			players: ['4', '3', '2', '1']
		},
		{
			id: '2',

			creationDate: new Date(),
			creatorId: '23',
			creatorName: 'Mick',
			creatorEmail: 'mmc@gmail.com',

			isPrivate: true,

			name: 'MMC 2024',
			description: 'greatest event of all time',
			startDate: '2023-06-01',
			startTime: new Date().getTime().toString(),

			isRegistrationRequired: true,
			registrationStartTime: new Date(),
			registrationEndTime: new Date(),

			isMultiCourse: true,

			courses: [
				{
					id: '1',
					name: 'Wisconsin Course',
					locationName: "America's Action Territory",
					locationAddress: '12345 75th St, Kenosha, WI 53142',
					teeTime: new Date(),
					holeCount: 18,
					coursePar: 48,
					groups: [
						{
							id: 1,
							player_ids: ['3', '12']
						},
						{
							id: 2,
							player_ids: []
						}
					],
					holes: [
						{
							hole_id: '1',
							name: 'hole 1',
							par: 3
						},
						{
							hole_id: '2',
							name: 'hole 2',
							par: 3
						},
						{
							hole_id: '3',
							name: 'hole 3',
							par: 3
						},
						{
							hole_id: '4',
							name: 'hole 4',
							par: 3
						},
						{
							hole_id: '5',
							name: 'hole 5',
							par: 3
						},
						{
							hole_id: '6',
							name: 'hole 6',
							par: 3
						},
						{
							hole_id: '7',
							name: 'hole 7',
							par: 3
						},
						{
							hole_id: '8',
							name: 'hole 8',
							par: 3
						},
						{
							hole_id: '9',
							name: 'hole 9',
							par: 3
						},
						{
							hole_id: '10',
							name: 'hole 10',
							par: 3
						},
						{
							hole_id: '11',
							name: 'hole 11',
							par: 3
						},
						{
							hole_id: '12',
							name: 'hole 12',
							par: 3
						},
						{
							hole_id: '13',
							name: 'hole 13',
							par: 3
						},
						{
							hole_id: '14',
							name: 'hole 14',
							par: 3
						},
						{
							hole_id: '15',
							name: 'hole 15',
							par: 3
						},
						{
							hole_id: '16',
							name: 'hole 16',
							par: 3
						},
						{
							hole_id: '17',
							name: 'hole 17',
							par: 3
						},
						{
							hole_id: '18',
							name: 'hole 18',
							par: 3
						}
					]
				},
				{
					id: '2',
					name: 'Western Course',
					locationName: "America's Action Territory",
					locationAddress: '12345 75th St, Kenosha, WI 53142',
					teeTime: new Date(),
					holeCount: 18,
					coursePar: 48,
					groups: [
						{
							id: 1,
							player_ids: ['3', '12']
						},
						{
							id: 2,
							player_ids: []
						}
					],
					holes: [
						{
							hole_id: '1',
							name: 'hole 1',
							par: 3
						},
						{
							hole_id: '2',
							name: 'hole 2',
							par: 3
						},
						{
							hole_id: '3',
							name: 'hole 3',
							par: 3
						},
						{
							hole_id: '4',
							name: 'hole 4',
							par: 3
						},
						{
							hole_id: '5',
							name: 'hole 5',
							par: 3
						},
						{
							hole_id: '6',
							name: 'hole 6',
							par: 3
						},
						{
							hole_id: '7',
							name: 'hole 7',
							par: 3
						},
						{
							hole_id: '8',
							name: 'hole 8',
							par: 3
						},
						{
							hole_id: '9',
							name: 'hole 9',
							par: 3
						},
						{
							hole_id: '10',
							name: 'hole 10',
							par: 3
						},
						{
							hole_id: '11',
							name: 'hole 11',
							par: 3
						},
						{
							hole_id: '12',
							name: 'hole 12',
							par: 3
						},
						{
							hole_id: '13',
							name: 'hole 13',
							par: 3
						},
						{
							hole_id: '14',
							name: 'hole 14',
							par: 3
						},
						{
							hole_id: '15',
							name: 'hole 15',
							par: 3
						},
						{
							hole_id: '16',
							name: 'hole 16',
							par: 3
						},
						{
							hole_id: '17',
							name: 'hole 17',
							par: 3
						},
						{
							hole_id: '18',
							name: 'hole 18',
							par: 3
						}
					]
				}
			],
			users: [
				{
					id: '1',
					userImage:
						'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwwfHwwfHw%3D&w=1000&q=80',
					name: 'Player Nate',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '2',
					userImage:
						'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?w=600&h=1260&ssl=1',
					name: 'Player Lynn',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '3',
					userImage:
						'https://photos.headshotcrew.com/styles/large/s3/photos/01/47/21/74825-alan-moore-final.jpg?itok=VSo69ejt',
					name: 'Player Jane',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '4',
					userImage:
						'http://digital-photography-school.com/wp-content/uploads/2016/02/funny-faces.jpg',
					name: 'Admin Player',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '5',
					userImage:
						'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
					name: 'Admin Joe',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				},
				{
					id: '6',
					userImage:
						'https://www.chicagotribune.com/resizer/DsFbSrtnkmJWYhQgh44iS2RauWY=/1440x0/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/Q73XEMZADBADBO22HDTAVEDB3I.jpg',
					name: 'Mick',
					birthDate: '1984/04/01',
					email: 'asdasd@dfsdfs.com'
				}
			],
			admins: ['6', '5', '4'],
			players: ['4', '3', '2', '1']
		}
	]
};
