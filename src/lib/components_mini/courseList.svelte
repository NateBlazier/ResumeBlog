
<script lang="ts">
export let oTournament;

let tournament_id = oTournament.id;

let oCourses = oTournament.courses;

console.log(oTournament)

import { onMount } from 'svelte';
  
//   import { oaTournaments } from '$lib/components_mini/miniTournamentData';
//   let { tournaments } = oaTournaments;

import CreateNewCourseForm from '$lib/components_mini/course_CreateNewForm.svelte';

  import Modal from '$lib/components_mini/modal.svelte';
// import TournamentCreateNewForm from '$lib/components_mini/tournamentCreateNewForm.svelte';


  let showModal = false;

  onMount(() => {

    document.getElementById("inputFilter").addEventListener("keyup", filterList);

  });
  
  

  function filterList() {
        var input, filter, ul, li, div, i, txtValue;
        input = document.getElementById("inputFilter");
        filter = input.value.toUpperCase();
        ul = document.getElementById("ulList");
        li = ul.getElementsByTagName("li");
        
        for (i = 0; i < li.length; i++) {
            div = li[i].querySelectorAll(".filterable-content")[0];
            txtValue = div.textContent || div.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

function toggleModel() {
  showModal = !showModal;
};


function addCourse(e) {
  const course = e.detail;
  oCourses = [course, ...oCourses];
  showModal = false;
};





</script>

<Modal showModal={showModal} on:click={toggleModel}>
  <CreateNewCourseForm on:addCourse={addCourse}/>
</Modal>

<div class="section-container">
  
<div class="top-list">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" id='inputFilter' placeholder="Search.." name="search">

    </form>
  </div>

  <div class="addNew-container">
    <button on:click={toggleModel} class="button">Add new course</button>
  </div>
</div>

            <ul id='ulList' class="items-container" style="display: block;">
              {#each oCourses as {name, locationName, locationAddress , teeTime, id} (id)}
              <a href={`${tournament_id}/courses/${id}`}>
                <li class="item-container data-item_id={id}" style="display: block;">
                  
                    <div class= filterable-content>
                      <!-- <img src={playerImage} class="player-img" alt="" width="50" height="50">  -->
                      <div class="item-name">{name} </div>
                      <div class="item-locationName">{locationName} </div>
                      <div class="item-locationAddress">{locationAddress} </div>
                      <div class="item-teeTime">{teeTime} </div>
                      <div class="item-id">{id} </div>
                    </div>
                
                </li>
              </a>  
              {/each}
            </ul>


</div>

<style lang="postcss">

  #ulList{
    list-style-type: none;
    padding: 0;
  margin: 0;
  }

  li{
    text-decoration: none;
  }

.section-container{
  border-style: dotted;
  
  
}



.item-container{
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin-top: 5px;
  color: rgb(24, 24, 24);
  /* display: flex; */
 
}





.item-name{
  display: inline-block; 
  vertical-align: top;
  
}




.player-img {
  display: inline-block;
  border-radius: 100%;
}



.search-container {
  float: left;
  display: inline-block;
}

input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.addNew-container{
  
  float: right;
  display: inline-block;
}

.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 0;
  cursor: pointer;
  background-color: green;
}

.top-list{
  /* background-color: rgb(255, 255, 255); */

  margin-top: 5px;
  color: rgb(24, 24, 24);
  display: inline-block;
  width: 100%;
}





.item-startDate{
      font-size: 12px;
}


</style>