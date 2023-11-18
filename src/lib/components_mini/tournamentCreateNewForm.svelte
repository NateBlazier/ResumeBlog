<script lang="ts">
  

import type { ITournament } from "$lib/components_mini/miniTournamentData";


import { createEventDispatcher} from 'svelte';

let dispatch = createEventDispatcher();

let id = Math.random().toString();
let	name;
let	description;
let	creatorId  = Math.random().toString();
let creatorName;
let creatorEmail;

let	creationDate = new Date();

let	startDate;
let	startTime;
let	isPrivate = true;
let	isRegistrationRequired;
let	registrationStartTime = new Date();
let	registrationEndTime = new Date();
let	isMultiCourse;
let	location_ids;
let	courses;
let	users;
let	admins;
let	players;


const newTournamentSubmit = () => {
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


  <h1>Add Tournament information</h1>
  <br>
  <form on:submit|preventDefault={newTournamentSubmit}>





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
      <input type="datetime-local" id="startDate" name="startDate" bind:value={startDate}><br><br>

      <label for="isPrivate">isPrivate:</label>
      <input type="checkbox" id="isPrivate" name="isPrivate" bind:value={isPrivate}><br><br>

      <label for="isRegistrationRequired">isRegistrationRequired:</label>
      <input type="checkbox" id="isRegistrationRequired" name="isRegistrationRequired" bind:value={isRegistrationRequired}><br><br>

      <label for="registrationStartTime">registrationStartTime:</label>
      <input type="datetime-local" id="registrationStartTime" name="registrationStartTime" bind:value={registrationStartTime}><br><br>

      <label for="registrationEndTime">registrationEndTime:</label>
      <input type="datetime-local" id="registrationEndTime" name="registrationEndTime" bind:value={registrationEndTime}><br><br>


      <input type="submit" value="Submit">
    </form>

    


</section>



<style></style>