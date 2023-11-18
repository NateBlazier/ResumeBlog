<script lang="ts">
  

    import type { ITournament } from "$lib/components_mini/miniTournamentData";
    import { oaTournaments } from "$lib/components_mini/miniTournamentData";

    let tournament = oaTournaments.tournaments;

    // export function load({ params }) {
		//   return params.id;
    // }
  
    let result = tournament.find(obj => {
     return obj.id === "2";
    });

   
  
    
    import { createEventDispatcher} from 'svelte';
    
    let dispatch = createEventDispatcher();
    
    let id                      = result.id;
    let	name                    = result.name;
    let	description             = result.description;
    let	creatorId               = result.creatorId;
    let creatorName             = result.creatorName;
    let	creationDate            =result.creationDate;
    let	startDate               =result.startDate;
    let creatorEmail            =result.creatorEmail;
    let	isPrivate               =result.isPrivate;
    let	isRegistrationRequired  =result.isRegistrationRequired;
    let	registrationStartTime   =result.registrationStartTime;
    let	registrationEndTime     =result.registrationEndTime;
    let	isMultiCourse           =result.isMultiCourse;
    let	courses                 =result.courses;
    let	users                   =result.users;
    let	admins                  =result.admins;
    let	players                 =result.players;
    
    
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
    
    
    
    <p>{result.name}</p>
    
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
    
    
    
    <style>
      label{
        color: aqua;
      }
    </style>