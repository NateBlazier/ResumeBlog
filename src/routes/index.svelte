<script lang="ts">
  import Education from '../lib/resumeComponents/education.svelte';
  import Experience from '../lib/resumeComponents/experience.svelte';
  // import Skills from '$lib/components/skills.svelte';
  import Summary from '../lib/resumeComponents/summary.svelte';
  import Contact from '../lib/resumeComponents/contact.svelte';

  import logo from '../lib/header/YoungNate.png';

  import { resume } from '$lib/resume';
  const { contact, summary, skills, experience, education } = resume;

  const host = 'https://nateblazier.github.io/'
  const ogImageUrl = `${host}/images/do-something-great-1200x627.jpg`
</script>

 <!-- <svelte:head>
  <title>Nate Blazier Resume</title>
  <meta property="og:site_name" content="Ryan Sheehan" />
  <meta property="og:title" content="Software Engineer &amp; Development Manager"/>
  <meta property="og:description" content="Ryan Sheehan is a Software Engineer and Development Manager. Come check out what I'm up to..."/>
  <meta property="og:url" content="{host}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="{logo}"/>
  <meta property="og:image:secure_url" content="{logo}"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content = "627"/>
</svelte:head>  -->

<div class="resumeContainer">
  <Contact {contact}/> 
  <Summary {summary}/> 
 <!-- <Skills {skills}/> -->
  <Experience {experience}/>
  <Education {education}/>
</div>

<style lang="postcss">

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



  /* div {
    
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
    padding-bottom: 2rem;
  } */
</style>
