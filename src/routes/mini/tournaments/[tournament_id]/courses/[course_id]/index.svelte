<!-- This is editing the main course page -->
Just getting the data ready to be passed.

<!-- 


need to pass the course information. 
-->



<script context="module" lang="ts">

	import { onMount } from 'svelte';
	import { createEventDispatcher} from 'svelte';

  import  Course  from "$lib/components_mini/course_CreateNewForm.svelte";

  import  CourseEdit  from "$lib/components_mini/course_edit.svelte";


  import {oaTournaments} from '$lib/components_mini/miniTournamentData';

  //This is getting the slugs
  export async function load({ params} ) {
			let sTournament_ID = params.tournament_id;
      let sCourse_ID = params.course_id;
			return {
				props: {sCourse_ID, sTournament_ID}
			} 
  	}
  
</script>

<script lang="ts">
  //this is exporting the values from the slugs to use on the page.
  export let sCourse_ID;
  export let sTournament_ID;
 

  let tournament = oaTournaments.tournaments;
  let oTournament = tournament.find(obj => {
     return obj.id === sTournament_ID;
  });

  let oCourse = oTournament.courses.find(obj => {
     	return obj.id === sCourse_ID;
  });

// console.log(oCourse);


</script>


<section>    
  <p>course_ID = {sCourse_ID}</p>
  <p>tournament_ID = {sTournament_ID}</p>
  <p>course_Name = {oCourse.name}</p>


  
  <CourseEdit oCourse={oCourse}, sTournament_ID={sTournament_ID}/> 



</section>


  <style>
	label{
	  color: aqua;
	}
  </style>