<script lang="ts">
  // import Socials from '$lib/components/socials.svelte';
  import type { Contact } from '$lib/resume';

  import logo from '../../lib/header/YoungNate.png';

  export let contact: Contact;
  
</script>


<div class="resumeUserContainer">
  <a href="/"><img src={logo} class="userImage" alt="Nate" /></a>
  <div class="userName">{contact.name}</div> 
  <div class='emailText'>eMAIL: {contact.email}</div> 
</div>

<style lang="postcss">
.resumeUserContainer{
	display: flex;
	border-bottom: 1px solid;
	align-items: center;
	margin-bottom: 8px;
	flex-flow: row wrap;


}

.resumeUserContainer .userName{
	padding-left: 16px;
	font-family: var(--font-family-header);
	font-size: 2rem;


}

.emailText{
	font-size: .8rem;

position: absolute;
	right: 0;
	padding-right: 15px;
	padding-TOP: 35px;
	
}

.resumeUserContainer .socialContainer{
	position: absolute;
	right: 0;
	padding-right: 10px;
	
	
}

.userImage{
width: 4em;
height: 4em;
object-fit: contain;
border-radius: 20px;
border-radius: 24px;
filter: grayscale(100%);
transition: 1s;
flex: 1;


}
  /* .header-content {    
    display: flex;
    flex-flow: row wrap;
    align-items: center;    

    & :global(.socials) {
      padding-top: 6px; 
      display: none;     
    }      
  }

  @media (--tablet-and-larger) {

    .header-content {
      margin-top: 0;
    }
    .header-content :global(.socials) {
      display: flex;      
    }
  }

  h1 {    
    padding-left: 16px;
    white-space: nowrap;    
  } 

  img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    filter: grayscale(100%);
    transition: 1s;

    &:hover {
      filter: none;
    }
  }

  a {
    flex: 1;
  }

  hr {
    margin-top: 8px;
  } */
</style>