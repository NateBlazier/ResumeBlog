<script context="module">
	import { browser, dev } from '$app/env';

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
<div class="resume">
<div class="content">
	<h1>Nathaniel Blazier</h1>



<h2>
Work Experience:
</h2>
---------------------------------------------
<div class="job">
<p>
	INXPO > West Corporation > Intrado > Notified - currently owned by Apollo Global. - Chicago, IL - Current.
</p>
<p>
	I currently manage a team of automation test engineers. We work with all our (SCRUM) Product/Dev teams to manage the automation test projects. Our team worked on automation testing coverage for the company’s multi-environment, multi-tenant, multi-language, and heavily customizable products. These products have been around for 10-20 years… So, there was quite a bit to catch up on. We have just finished getting most of our products in a well covered state. The company is seeing very positive results in issue reduction, time needed for testing, along with a massive increase of coverage which was unable to be done before.  This has helped the company realize the need to place more effort into having automation testing within the individual SCRUM teams. 
</p>
<p>
Along with building and maintaining older products, we are also working on planning for new products where automation testing is to be worked on inline with these newly developed products. This requires more team members within the individual scrum teams to develop their automation testing skills... I also am building training programs for individual team members, Building automation tests, while I personally learn new automation tools.
</p>
<p>
Sr Software Quality Automation Test Engineer
</p>
<p>
Built Automation software testing frameworks for Multiple 10 - 20 yr old products using:
</p>

<ul class="jobtools">
<li>Selenium</li>
<li>Java</li>
<li>Maven </li>
<li>TestNG</li>
<li>Microsoft TFS Repo/project tracking tool.</li>
<li>Jenkins</li>
<li>GitHub Repository</li>
<li>API tests with RestAssured</li>
</ul>

<ul class="jobtools">
<li>Currently working on Automation testing frameworks for the future and newly started products.</li> 
<li>Microsoft Playwright</li>
<li>Puppeteer</li>
<li>typescript/Javascript</li>
<li>Node</li>
<li>js</li>
<li>SuperTest - API testing.</li>
</ul>

<ul class="Tasks">
<li>Managed  sharepoint Wiki for all of the members of the QA team.</li>
<li>Confluence Documentation.</li>
<li>Create Help Videos. </li>
</ul>


 

</div>







<div class="job">
  
INXPO - Chicago, IL	      				   January 2010 - Current 
Industry leader in webcasting and online events, utilizing video and social media tools to engage global audiences.
Quality Assurance Engineer
Work internally to assure high build quality of INXPO’s proprietary software: Webcasting XPOCAST, INXPO Virtual Events, Social Business TV, Email Publication Suite, INXPO Mobile Applications, Mobile Browser , and Data Metrics, etc.
Involved in the software development process - monitoring and improving processes, making sure all agreed-upon processes, standards, and procedures are followed.   
Work with Development, Solutions, Product Management, and Production on finding solutions to current and possible future web issues.
Manage test scenarios.
Write scripts used for training INXPO teams and INXPO clients on software uses.
Worked on custom INXPO projects with companies such as Microsoft, Cisco, Redhat, Jive, etc.
</div>

<div class="job">

Inxpo - Chicago, IL	 			                   May 2008 - February 2010
Industry leader in webcasting and online events, utilizing video and social media tools to engage global audiences.
Senior Associate Producer in Client Services for New Media
Assist Event Director in managing/Directing all aspects of building INXPO Virtual Environments for Businesses (Trade Shows, Job fairs, Virtual Office Buildings, Online Presentations, Social Communities.
Directly worked with clients such as: Cisco Systems(Cisco Live & Cisco Partner Space), GE Healthcare, Waters, Jack Morton, HSM, BG-Group, Global Spec, Highland Capital Partners, IDG, PennWell, IngramMicro, Informatica, Journal of Commerce, Shaker, ValleyForge, Motorcycle Industry and ATV Industry Magazine, UBM, and more...

</div>

<div class="job">
Orchard View Nursing Home - Princeton, IL           February 2008 - May 2008
Dietary/Cook
Assist health-care staff in making sure residents receive nutritious good tasting food.
Following up on dietary regimens; monitoring and charting eating habits.  
</div>


<div class="job">
Allan Odis Inc. - Chicago, IL 				January 2007 - Jan 2008
Real-Estate Brokerage Condominium Management
Property Operations Management Assistant
Manage/Maintain Properties and Property Budgets
Host Condo Association Meetings
Involved in New Employee Hire and Training
Handled Marketing and Administration Duties
Maintained customers satisfaction with excellent customer service skills
Vendor Relations

</div>


<div class="job">
Pioneer Hi-Bred International - Princeton, IL   Summers of 1997, 1999-2006
DuPont Pioneer, formerly Pioneer Hi-Bred is the largest U.S. producer of hybrid seeds for agriculture. They are a major producer of genetically modified organisms.
Crew Leader
Handled the business of moving groups towards company goals.
In charge of training and overseeing crews. 
Readied and maintained work areas for crews.
Research Assistant
Dealt with the experimental genetic manipulation of different corn hybrids
Performed inoculation experiments (Organic, Chemical, Biological)
Responsible for data collection
Prepared workspaces/experiment zones for the Scientists 

</div>




Education:
---------------------------------------------

Carthage College, Kenosha WI
     Bachelor of Arts, Business Administration & Marketing, May 2007
       - Degrees with additional focuses - Economics, Computer Graphic Design, and IMS.
       - Economic Educational Study Tours - East Africa, Thailand, and Japan.
       - Awarded Carthage Business Fellowship.  


Work while at Carthage College - Kenosha, WI 				   August 2005 - May 2006 

Resident Assistant
Aided in building a community among students.
Introduced residents to outside/inside events, opportunities and programs.
Provided paths for residents to follow during attendance.
Handled issues that appeared in resident’s lives.
Carthage College Paper “The Current”  Website Administrator 
Maintained Website for the college paper “The Current”.
Handled The Graphic Design and Maintenance.
Allan Odis Inc. - condo management. In chicago. 

Activities and Societies:
---------------------------------------------
International Friendship Society, Resident Assistant, German club, Track (Pole Vault).


Awards:
---------------------------------------------

Tadd Metzger Award, American Legion Award, Daughters of American Revolution Award, Most Hole in ones at 2014 M.C. Mini Masters.

</div>
</div>


	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>


<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}


	.resume {
    margin: 20px auto;
    max-width: 210mm;
    box-shadow: rgb(39 44 49 / 60%) 8px 14px 38px, rgb(39 44 49 / 30%) 1px 3px 8px;
	padding: 30px 20px;
   

	border-radius: 10px;

    display: grid;
    color: var(--text-color);
    font-family: Lato, sans-serif;
    font-size: 16px;
    background-color: #fff;
    position: relative;
}
</style>
