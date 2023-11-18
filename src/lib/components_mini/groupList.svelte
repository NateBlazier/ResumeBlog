<script lang="ts">
  
  import { onMount } from 'svelte';


  

   import BlogCard from '$lib/components_blog/blogCard.svelte';
import { oaTenantAdminPortal } from '$lib/components_mini/miniData';
const {businesses} = oaTenantAdminPortal;


import { oaPlayerData } from '$lib/components_mini/miniPlayerData';
const { players } = oaPlayerData;


import { oaGroupData } from '$lib/components_mini/miniGroupData';
const { groups } = oaGroupData;

  onMount(() => {

    console.log("Mounting");

    var eleBusinessContainer = document.querySelectorAll(".business-container");
    var eleCourseContainer = document.querySelectorAll(".course-container");
    var eleHolesContainer = document.querySelectorAll(".hole-container");
    var elePlayerContainer = document.querySelectorAll(".player-container");
   

    
  // windowsOnloadInit();

  function listenerSetup_BusinessContainer(){
    for(var i = 0; i < eleBusinessContainer.length; i++){
      eleBusinessContainer[i].addEventListener("click", hideCourses)
    }
  }
  function listenerSetup_CourseContainer(){
    for(var i = 0; i < eleCourseContainer.length; i++){
      eleCourseContainer[i].addEventListener("click", hideHoles)
    }
  }
  function listenerSetup_HoleContainer(){
    for(var i = 0; i < eleHolesContainer.length; i++){
      eleHolesContainer[i].addEventListener("click", hidePlayers)
    }
  }

  function listenerSetup_PlayerContainer(){
    for(var i = 0; i < elePlayerContainer.length; i++){
      elePlayerContainer[i].addEventListener("click", stopPropagation)
    }
  }

  function stopPropagation(evt){
    evt.stopPropagation();
  }

  function hideCourses(evt){
    evt.stopPropagation();
    // var id = this.getAttribute('data-business_Id')    
    // var oElem = document.querySelector(`div[data-business_Id="${id}"].courses-container`);
    var oElem = this.querySelector(`.courses-container`);

    var styleDisplay = oElem.style.display; 
    
    if (styleDisplay === 'none'){
      oElem.style.display = 'block';
    }else{
      oElem.style.display = 'none';
    }

  }

  function hideHoles(evt){
    evt.stopPropagation();
    var oElem = this.querySelector(".holes-container");    
    var styleDisplay = oElem.style.display

    if (styleDisplay === 'none'){
      oElem.style.display = 'block';
    }else{
      oElem.style.display = 'none';
    }
  }
  function hidePlayers(evt){
    evt.stopPropagation();
    var oElem = this.querySelector(".players-container");    
    var styleDisplay = oElem.style.display

    if (styleDisplay === 'none'){
      oElem.style.display = 'block';
    }else{
      oElem.style.display = 'none';
    }
  }



listenerSetup_BusinessContainer();  
listenerSetup_CourseContainer();
listenerSetup_HoleContainer();
listenerSetup_PlayerContainer();


console.log("Mouted");

});
  

</script>


<div class="section-container">

  <div class="top-grouplist">
    <div class="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  
    <div class="createNewGroup-container">
      <button class="button button1">Create Group</button>
    </div>
  </div>

            <div class="groups-container" style="display: block;">
              {#each groups as {group_id, name} (group_id)}
                <div class="group-container data-player_id={group_id}">
                  <div class="group-name">{name} </div>

                </div>  
              {/each}
            </div>


</div>

<style lang="postcss">

.section-container{
  border-style: dotted;
  
  
}

.business-container{
  background-color: rgb(24, 24, 24);
  padding: 10px;
  margin-top: 5px;
  color: rgb(192, 191, 191); 
  
}

.businessInfo-container{
  background-color: rgb(207, 15, 15);
  padding: 10px;
  margin-top: 5px;
  color: rgb(192, 191, 191);
}

.course-container{
  background-color: rgb(100, 100, 100);
  padding: 10px;
  margin-top: 5px;
  color: rgb(24, 24, 24);
  display: block;

}

.hole-container{
  background-color: rgb(192, 191, 191);
  padding: 10px;
  margin-top: 5px;
  color: rgb(24, 24, 24);
}

.group-container{
  background-color: rgb(126, 126, 126);
  padding: 10px;
  margin-top: 5px;
  color: rgb(168, 167, 167);
  /* display: flex; */
  
}

.courses-container{

}

.holes-container{

}

.player-name{
  display: inline-block; 
  vertical-align: top;
  
}

.score{
  float: right;
  display: inline-block;
  
  float: right;
  
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

.createNewGroup-container{
  
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

.top-grouplist{
  /* background-color: rgb(255, 255, 255); */

  margin-top: 5px;
  color: rgb(24, 24, 24);
  display: inline-block;
  width: 100%;
}

/* .leaderboard {
  max-width: 490px;
  width: 100%;
  border-radius: 12px;
  
  header {
    --start: 15%;
    
    height: 130px;
    background-image: repeating-radial-gradient(circle at var(--start), transparent 0%, transparent 10%, rgba(54, 89, 219, .33) 10%, rgba(54, 89, 219, .33) 17%), linear-gradient(to right, #5b7cfa, #3659db);
    color: #fff;
    position: relative;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    
    .leaderboard__title {
      position: absolute;
      z-index: 2;
      top: 50%;
      right: calc(var(--start) * .75);
      transform: translateY(-50%);
      text-transform: uppercase;
      margin: 0;
      
      span {
        display: block;
      }
      
      &--top {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 6.5px;
      }
      
      &--bottom {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 3.55px;
        opacity: .65;
        transform: translateY(-2px);
      }
    }
    
    .leaderboard__icon {
      fill: #fff;
      opacity: .35;
      width: 50px;
      position: absolute;
      top: 50%;
      left: var(--start);
      transform: translate(-50%, -50%);
    }
  }
  
  &__profiles {
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    padding: 15px 15px 20px;
    display: grid;
    row-gap: 8px;
  }
  
  &__profile {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 10px 30px 10px 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
    background-color: #fff;
    
    &:hover {
      transform: scale(1.2);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  }
  
  &__picture {
    max-width: 100%;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
  }
  
  &__name {
    color: #979cb0;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.64px;
    margin-left: 12px;
  }
  
  &__value {
    color: #35d8ac;
    font-weight: 700;
    font-size: 34px;
    text-align: right;
    
    & > span {
      opacity: .8;
      font-weight: 600;
      font-size: 13px;
      margin-left: 3px;
    }
  }
}




// bare minimuu styles

body {
  margin: 0;
  background-color: #eaeaea;
  display: grid;
  height: 100vh;
  place-items: center;
  font-family: 'Source Sans Pro', sans-serif;
}

.leaderboard {
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
}

https://codepen.io/Markshall/pen/ZEQBKpb */


</style>