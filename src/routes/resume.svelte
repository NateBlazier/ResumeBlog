<script context="module">
	import { browser, dev } from '$app/env';
	import logo from '../lib/header/YoungNate.png';
	// import logo from '../lib/icons/YoungNate.png';
	// import logo from '../lib/icons/YoungNate.png';
	// import logo from '../lib/icons/YoungNate.png';
	// import logo from '../lib/icons/YoungNate.png';
	// import logo from '../lib/icons/YoungNate.png';


	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="resumeContainer">


	<div class="resumeUserContainer">
		<a href="/"><img src={logo} class="userImage" alt="Nate" /></a>
		<div class="userName">Nate Blazier</div> 
		<div class='emailText'>eMAIL: nblazier@gmail.com</div> 
		
			<!-- <svg  class="socialContainer"
				xmlns="http://www.w3.org/2000/svg"
  				viewBox="0 0 30 22"
  				color="green"
  				stroke= var(--text-color)
				fill="none"
				stroke-width="0"
				height = "20%"
				width ="6%"
			>
  				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
			</svg> -->
		


	</div>

	<div class="currentInfoContainer">
		"I currently manage a team of automation test engineers.  We work with all our (SCRUM) Product/Dev teams to bring automation test coverage to all our Web products. 
		Many of the products have been developed over the past 10 - 20 years. Keywords of the products could be (multi-environment, multi-tenant, multi-language, and heavily-customizable).  I am self-driven, honest, and I care about my work."
	</div>

		<div class="resumeCategoryContainer">


			<div class="resumeCategoryHeader">
				Skills:
			</div>




			
			
			<div class="jobContainer">
				<div class="resumeCategoryHeader">
					Work Experience:
				</div>

				<div class="companyHeader">
					<div class="companyInfo">Notified</div>
					<div class="companyInfoDates">May 2008 - Current.</div>
				</div>
				
				<div class="companyDescription">
				Owned by Apollo Global - INXPO > West Corporation > Intrado > now Notified.
				Notified is the world's only communications cloud for events, public relations, and investor relations.

				</div>
				<ul>
					<div class="jobTitle">
						Sr Software Quality Automation Test Engineer
					</div>
					<div class="jobDates">	
					January 2018 - Current 
					</div>

					<div class="jobDescription">

						<ul class="jobtools">
							<li>Manage a core team of 5 UI and API Automation Test Engineers.</li>
							<li>Support all other scrum teams towards automated testing coverage goals.</li>
							<li>Help support Performance testing teams on product knowledge.</li>
							<li>Train current manual tester to develop automation skills.</li>
							<li>Code automation testing scripts.</li>
							<li>Prioritize and Assign work to other teammembers.</li>
							<li>Build Automation Frameworks.
								
								<ul>
									<div class="tools">
										<br>
										<div class="tags">
											<div class="tag primary">Selenium</div>
											<div class="tag primary">RestAssured</div>
											<div class="tag primary">Java</div>
											<div class="tag primary">Maven</div>
											<div class="tag primary">TestNG</div>
											<div class="tag primary">Jenkins</div>
										</div>
									</div>
<br>
									<div class="tools">
										<div class="tags">
											<div class="tag primary">Microsoft Playwright</div>
											<div class="tag primary">SuperTest API testing</div>
											<div class="tag primary">typescript</div>
											<div class="tag primary">Javascript</div>
											<div class="tag primary">Node</div>
											<div class="tag primary">Jenkins</div>
										</div>
									</div>
								</ul>
							</li>
						</ul>
					</div>
				</ul>
			</div>
			




			<div class="jobContainer">
				<ul>
					<div class="jobTitle">
						Quality Assurance Engineer
					</div>
					<div class="jobDates">	
						January 2010 - January 2018 
					</div>

					<ul>
						<li>Work internally to assure high build quality of INXPO’s proprietary software: Webcasting XPOCAST, INXPO Virtual Events, Social Business TV, Email Publication Suite, INXPO Mobile Applications, Mobile Browser , and Data Metrics, etc.</li>
						<li>Involved in the software development process - monitoring and improving processes, making sure all agreed-upon processes, standards, and procedures are followed.   </li>
						<li>Work with Development, Solutions, Product Management, and Production on finding solutions to current and possible future web issues.</li>
						<li>Manage test scenarios.</li>
						<li>Write scripts used for training INXPO teams and INXPO clients on software uses.</li>
						<li>Worked on custom INXPO projects with companies such as Microsoft, Cisco, Redhat, Jive, etc.</li>
					</ul>	
				</ul>
			</div>

			<div class="jobContainer">

				<ul>
				<div class="jobTitle">
					Senior Associate Producer in Client Services for New Media
				</div>
				<div class="jobDates">	
				May 2008 - February 2010
				</div>
				
				<ul>	
				<li>Assist Event Director in managing/Directing all aspects of building INXPO Virtual Environments for Businesses (Trade Shows, Job fairs, Virtual Office Buildings, Online Presentations, Social Communities.</li>
				<li>Directly worked with clients such as: Cisco Systems(Cisco Live & Cisco Partner Space), GE Healthcare, Waters, Jack Morton, HSM, BG-Group, Global Spec, Highland Capital Partners, IDG, PennWell, IngramMicro, Informatica, Journal of Commerce, Shaker, ValleyForge, Motorcycle Industry and ATV Industry Magazine, UBM, and more...</li>
			</ul>	
			</ul>
			</div>

			<div class="jobContainer">


				<div class="companyHeader">
					<div class="companyInfo">Orchard View Nursing Home - Princeton, IL</div>
					<div class="companyInfoDates">February 2008 - May 2008</div>
				</div>
				<div class="companyDescription">
					Started out as a volunteer. They lost most of their workers so I took a job until they could restaff.
				</div>

				<ul>
					<div class="jobTitle">
						Dietary/Cook
					</div>
					<ul>
						<li>Assist health-care staff in making sure residents receive nutritious good tasting food.</li>
						<li>Following up on dietary regimens; monitoring and charting eating habits.</li>
					</ul>
				</ul>
			</div>


			<div class="jobContainer">


				<div class="companyHeader">
					<div class="companyInfo">Allan Odis Inc. - Chicago, IL </div>
					<div class="companyInfoDates">January 2006 - Jan 2008</div>
				</div>


		
				<div class="companyDescription">
					Real-Estate Brokerage Condominium Management.
				</div>
				<ul>
					<div class="jobTitle">
						Property Management Operations Assistant
					</div>

				
					<ul>
						<li>Manage/Maintain Properties and Property Budgets.</li>
						<li>Host Condo Association Meetings.</li>
						<li>Involved in New Employee Hire and Training.</li>
						<li>Handled Marketing and Administration Duties.</li>
						<li>Maintained customers satisfaction with excellent customer service skills.</li>
						<li>Vendor Relations.</li>
					</ul>
				</ul>
			</div>


			<div class="jobContainer">



				<div class="companyHeader">
					<div class="companyInfo">Pioneer Hi-Bred International - Princeton, IL</div>
					<div class="companyInfoDates">Summers of 1997, 1999-2006</div>
				</div>




				<div class="companyDescription">
					DuPont Pioneer, formerly Pioneer Hi-Bred is the largest U.S. producer of hybrid seeds for agriculture. They are a major producer of genetically modified organisms.
				</div>
			<ul>
			<div class="jobTitle">
				Crew Leader
			</div>
				<ul>
				<li>Handled the business of moving groups towards company goals.</li>
				<li>In charge of training and overseeing crews.</li>
				<li>Readied and maintained work areas for crews.</li>
				</ul>
				<div class="jobTitle">
				Research Assistant
			</div>	
			<ul>	
				<li>Dealt with the experimental genetic manipulation of different corn hybrids.</li>
				<li>Performed inoculation experiments (Organic, Chemical, Biological).</li>
				<li>Responsible for data collection.</li>
				<li>Prepared workspaces/experiment zones for the Scientists. </li>
			</ul>
			</ul>
			</div>

		</div>



		<div class="resumeCategoryContainer">
			<div class="resumeCategoryHeader">
				Education:
			</div>

			<div class="companyHeader">
				<div class="companyInfo">Carthage College, Kenosha WI </div>
			</div>


				<ul>
					<li>Bachelor of Arts, Business Administration & Marketing, May 2007.</li>
					<li>Degrees with additional focuses - Economics, Computer Graphic Design, and IMS.</li>
					<li>Economic Educational Study Tours - East Africa, Thailand, and Japan.</li>
					<li>Awarded Carthage Business Fellowship.  </li>
				</ul>



				<div class="companyHeader">
					<div class="companyInfo">Work while at Carthage College - Kenosha, WI </div>
				</div>
								   

				<ul>
				<div class="jobTitle">Resident Assistant</div>
				<div class="jobDates">August 2005 - May 2006</div> 
				<ul>
				<li>Aided in building a community among students.</li>
				<li>Introduced residents to outside/inside events, opportunities and programs.</li>
				<li>Provided paths for residents to follow during attendance.</li>
				<li>Handled issues that appeared in resident's lives.</li>
				</ul>
				</ul>

				<ul>
				<div class="jobTitle">Website Administrator - Carthage College Paper “The Current”.</div>
				<div class="jobDates">August 2005 - May 2006</div> 
				<ul>
				<li>Maintained Website for the college paper “The Current”.</li>
				<li>Handled The Graphic Design and Maintenance.</li>
				</ul>	
				</ul>

				<ul>
				<div class="jobTitle">Allan Odis Inc. - condo management. In chicago. </div>
			</ul>
		</div>

		
		<div class="resumeCategoryContainer">
			<div class="resumeCategoryHeader">
				Activities and Societies:
				
			</div>
				International Friendship Society, Resident Assistant, German club, Track (Pole Vault).
		</div>


		<div class="resumeCategoryContainer">
			<div class="resumeCategoryHeader">
				Awards:
				
			</div>
		

		Tadd Metzger Award, American Legion Award, Daughters of American Revolution Award, Most Hole in ones at 2014 M.C. Mini Masters.
		</div>
	
</div>





<style>




.resumeUserContainer{
	display: flex;
	border-bottom: 1px solid;
	align-items: center;
	margin-bottom: 8px;
	flex-flow: row wrap;


}

.resumeUserContainer .userName{
	padding-left: 16px;
	font-family: var(--font-family-header);
	font-size: 2rem;


}

.emailText{
	font-size: .8rem;

position: absolute;
	right: 0;
	padding-right: 15px;
	padding-TOP: 35px;
	
}

.resumeUserContainer .socialContainer{
	position: absolute;
	right: 0;
	padding-right: 10px;
	
	
}

.userImage{
width: 4em;
height: 4em;
object-fit: contain;
border-radius: 20px;
border-radius: 24px;
filter: grayscale(100%);
transition: 1s;
flex: 1;


}
.companyHeader{
	display: grid;
grid-template-columns: auto 1fr -webkit-max-content;
grid-template-columns: auto 1fr max-content;
grid-template-areas: "company company company-time" "period period period";
align-items: baseline;
}

.jobDates{
	font-size: 12px;
}

.companyInfoDates{
	position: absolute;
  	right: 0;
	font-size: 12px;
	padding: 0px 20px;
}

.tags{
	display: flex;
	align-items: center;
	gap: 5px;
	flex-wrap: wrap;
}


.tag{

background: var(--primary-color);
color: var(--secondary-color);	
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
padding: 5px 15px;
border-radius: 10px;
font-weight: 550;
font-size: .60rem;
width: fit-content;
white-space: nowrap;
	
}


	.resumeContainer {
		background-color: var(--secondary-color);
		box-shadow: rgb(39 44 49 / 60%) 8px 14px 38px, rgb(39 44 49 / 30%) 1px 3px 8px;

		color: var(--text-color);
		

    	font-family: Lato, sans-serif;
    	font-size: 16px;
	
		max-width: 210mm;

		margin: 20px auto;
		padding: 1rem;

		border-radius: 10px;

   	 	display: grid;
  		position: relative;
		line-height: 1.8;
	}


	.currentInfoContainer{
		background-color: var(--primary-color);
		margin: 20px auto;
		padding: 1rem;
		line-height: 1.8;
		border-radius: 10px;
		font-style: italic;

	}

	.companyInfo{
		font-family: var(--font-family-header);
		font-size: 1.2rem;
		font-style: italic;
	}


	.companyDescription{
		font-size: .80rem;
	}

	.jobContainer {
		/* width: 100%; */
		/* max-width: var(--column-width); */
		margin: var(--column-margin-top) auto 0 auto;
		color: var(--text-color);
		
	}

	.jobTitle{
		font-weight: bolder;
		
		
	}

	.resumeCategoryHeader{
		display: flex;
		border-bottom: 1px solid;
		align-items: baseline;
		margin-bottom: 8px;
		padding-top: 8px;
		font-size: 1.5rem;
	}



</style>
