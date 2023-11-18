<script context="module" lang="ts">
	
	import { onMount } from 'svelte';
	import { createEventDispatcher} from 'svelte';
	import type { ITournament } from "$lib/components_mini/miniTournamentData";
  import { oaTournaments } from "$lib/components_mini/miniTournamentData";
  import  CourseForm  from "$lib/components_mini/course_CreateNewForm.svelte";
  import  CourseList  from "$lib/components_mini/courseList.svelte";
import { dataset_dev } from 'svelte/internal';
  
  export const prerender = true;
  
  export async function load({ params} ) {
			let sId = params.tournament_id;
			return {
				props: {sId}
			} 
  	}
  






    
  
  

	// onMount(() => {});

		



	// 
    

    
    



</script>

<script lang="ts">

  export let sId;
  

  let tournament = oaTournaments.tournaments;

	let result = tournament.find(obj => {
     	return obj.id === sId;
    });

    let dispatch = createEventDispatcher();

    let id                      = result.id;
    let	name                    = result.name;
    let	description             = result.description;
    let	creatorId               = result.creatorId;
    let creatorName             = result.creatorName;
    let	creationDate            = result.creationDate;
    let	startDate               = result.startDate;
    let	startTime               = result.startTime;
    let creatorEmail            = result.creatorEmail;
    let	isPrivate               = result.isPrivate;
    let	isRegistrationRequired  = result.isRegistrationRequired;
    let	registrationStartTime   = result.registrationStartTime;
    let	registrationEndTime     = result.registrationEndTime;
    let	isMultiCourse           = result.isMultiCourse;
    let	courses                 = result.courses;
    let	users                   = result.users;
    let	admins                  = result.admins;
    let	players                 = result.players;




    const updateTournamentSubmit = () => {
      const oTournament: ITournament = {
    
          id, 
          name,
          description,
    
          creatorId,
          creatorName,
          creatorEmail,
          creationDate,
    
          startDate,
          startTime,
          isPrivate,
    
          isRegistrationRequired,
          registrationStartTime,
          registrationEndTime,
    
          isMultiCourse,
          courses,
    
          users,
          admins,
          players     
      }
    
      console.log(name, description)
      dispatch('addTournament', oTournament);
    };

</script>
<section>


    
  


	<h1>Edit Tournament <br> {result.name}</h1>
  
	<br>
	<form on:submit|preventDefault={updateTournamentSubmit}>
  
  
      <label for="id">id:</label>
      <input type="text" id="id" name="id" bind:value={id}><br><br>
      
      <label for="name">name:</label>
      <input type="text" id="name" name="name" bind:value={name}><br><br>
      
      <label for="description">description:</label>
      <input type="text" id="description" name="description" bind:value={description}><br><br>
    
      <label for="creatorId">creatorId:</label>
      <input type="text" id="creatorId" name="creatorId" bind:value={creatorId}><br><br>
    
      <label for="creationDate">creationDate:</label>
      <input type="text" id="creationDate" name="creationDate" bind:value={creationDate}><br><br>
    
      <label for="startDate">startDate:</label>
      <input type="date" id="startDate" name="startDate" bind:value={startDate}><br><br>
    
      <label for="startTime">startTime:</label>
      <input type="time" id="startTime" name="startTime" bind:value={startTime}><br><br>
    

      <label for="isPrivate">isPrivate:</label>
      <input type="checkbox" id="isPrivate" name="isPrivate" bind:checked={isPrivate}><br><br>
    
      <label for="isRegistrationRequired">isRegistrationRequired:</label>
      <input type="checkbox" id="isRegistrationRequired" name="isRegistrationRequired" bind:checked={isRegistrationRequired}><br><br>
    
      <label for="registrationStartTime">registrationStartTime:</label>
      <input type="datetime-local" id="registrationStartTime" name="registrationStartTime" bind:value={registrationStartTime}><br><br>
    
      <label for="registrationEndTime">registrationEndTime:</label>
      <input type="datetime-local" id="registrationEndTime" name="registrationEndTime" bind:value={registrationEndTime}><br><br>
    
    
      <input type="submit" value="Submit">
	  </form>
  

    
  </section>



  <CourseForm/>
  <CourseList oTournament={result}/>




  <style>
	label{
	  color: aqua;
	}
  </style>