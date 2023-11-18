
<script lang="ts">
  
  import { onMount } from 'svelte';

  import { oaPlayerData } from '$lib/components_mini/miniPlayerData';
  let { players } = oaPlayerData;

  import Player_CreateNewForm from '$lib/components_mini/player_CreateNewForm.svelte';

  import Modal from '$lib/components_mini/modal.svelte';


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


function addPlayer(e) {
  console.log("this###" + e.detail);
  const player = e.detail;
  players = [player, ...players]
  showModal = false;

};

</script>




<Modal showModal={showModal} on:click={toggleModel}>
  <Player_CreateNewForm on:addPlayer={addPlayer}/>
</Modal>

<div class="section-container">
  
<div class="top-playerlist">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" id='inputFilter' placeholder="Search.." name="search">

    </form>
  </div>

  <div class="addNewPlayer-container">
    <button on:click={toggleModel} class="button">Add Player</button>
  </div>
</div>

            <ul id='ulList' class="players-container" style="display: block;">
              {#each players as {player_id, playerImage ,name} (player_id)}
                <li class="player-container data-player_id={player_id}" style="display: block;">
                  <div class= filterable-content>
                    <img src={playerImage} class="player-img" alt="" width="50" height="50"> 
                    <div class="player-name">{name} </div>
                  </div>
                </li>  
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



.player-container{
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin-top: 5px;
  color: rgb(24, 24, 24);
  /* display: flex; */
 
}





.player-name{
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

.addNewPlayer-container{
  
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

.top-playerlist{
  /* background-color: rgb(255, 255, 255); */

  margin-top: 5px;
  color: rgb(24, 24, 24);
  display: inline-block;
  width: 100%;
}



</style>