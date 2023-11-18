// export interface ItenantAdminPortal {
// 	businesses: Ibusiness[];
// }

// export interface Ibusiness {
// 	business_id: string;
// 	name: string;
// 	address: string;
// 	courses: Icourse[];
// 	otherAmenities?: string[];
// }

// export interface Icourse {
// 	course_id: string;
// 	name: string;
// 	holeCount: number;
// 	coursePar: number;
// 	holes: Ihole[];
// }

// export interface Ihole {
// 	hole_id: string;
// 	name: string;
// 	par: number;
// }

export const oaTenantAdminPortal = {
	businesses: [
		{
			business_id: '1',
			name: 'Nate mini co',
			address: '19233 Nated Drive wi 53405',
			courses: [
				{
					course_id: '1',
					name: 'South West',
					holeCount: 18,
					coursePar: 48,
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
					course_id: '2',
					name: 'Wacky',
					holeCount: 9,
					coursePar: 24,
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
						}
					]
				}
			]
		},
		{
			business_id: '2',
			name: 'Lynn mini co',
			address: '19233 Lynder Drive wi 53405',
			courses: [
				{
					course_id: '1',
					name: 'Course001',
					holeCount: 18,
					coursePar: 48,
					holes: [
						{
							hole_id: '1',
							name: 'hole 1',
							par: 3
						}
					]
				},
				{
					course_id: '2',
					name: 'Course002',
					holeCount: 9,
					coursePar: 24,
					holes: [
						{
							hole_id: '1',
							name: 'hole 1',
							par: 3
						}
					]
				}
			]
		}
	]
};
