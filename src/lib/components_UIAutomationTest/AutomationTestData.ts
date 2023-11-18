// export interface ItenantAdminPortal {
// 	businesses: Ibusiness[];
// }

// export interface InterfaceTestCell {
// 	title: string;
// 	instructions: string;
// 	notes?: string;
// 	formFields: ;
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

export const automationUiTestData = {
	testCells: [
		{
			cell_id: '1',
			title: 'input type ="text"',
			instructions: 'Send Keys First name "Nate" and the Last Name "Blazier"',
			notes: '',
			form: '<form>First name:<br><input type="text" name="firstname" id="firstname"><br>Last name:<br><input type="text" name="lastname" id="lastname"></form>'
		}
	]
};
