<script lang="ts">

import type { ICourse } from "$lib/components_mini/miniTournamentData";


export let oCourse;
export let sTournament_ID;

let coursename = oCourse.id;

 console.log('sdfsdfsdfs ' + JSON.stringify(oCourse));


// let objCourse = 

    let course_id               = oCourse.id;
    let course_name             = oCourse.name;
    let course_locationName     = oCourse.locationName;
    let course_locationAddress  = oCourse.locationAddress;
    let course_teeTime          = oCourse.teeTime;
    let course_holeCount        = oCourse.holeCount;
    let course_par              = oCourse.coursePar;
    let course_groups           = oCourse.groups;
    let course_holes            = oCourse.holes;



</script>


<div class="section">

    <p>{sTournament_ID}</p>
    <p>{coursename}</p>


    <section>
    
    
        <h1>Edit Course information</h1>
        <br>
        <form on:submit|preventDefault={newTournamentSubmit}>
      
      
      

      
            <label for="course_id">course_id:</label>
            <input type="text" id="course_id" name="course_id" bind:value={course_id}><br><br>
            
            <label for="course_name">course_name:</label>
            <input type="text" id="course_name" name="course_name" bind:value={course_name}><br><br>
          
            <label for="course_locationName">course_locationName:</label>
            <input type="text" id="course_locationName" name="course_locationName" bind:value={course_locationName}><br><br>
      
            <label for="course_locationAddress">course_locationAddress:</label>
            <input type="text" id="course_locationAddress" name="course_locationAddress" bind:value={course_locationAddress}><br><br>
      
            <label for="course_teeTime">course_teeTime:</label>
            <input type="text" id="course_teeTime" name="course_teeTime" bind:value={course_teeTime}><br><br>
            
            <label for="course_holeCount">course_holeCount:</label>
            <input type="text" id="course_holeCount" name="course_holeCount" bind:value={course_holeCount}><br><br>
            <label for="course_par">course_par:</label>
            <input type="text" id="course_par" name="course_par" bind:value={course_par}><br><br>

      
            <input type="submit" value="Submit">
          </form>


</div>






<style>
	div{
	  color: aqua;
	}
</style>