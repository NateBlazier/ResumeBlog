<script context="module" lang="ts">

	export const prerender = true;
	//components
	import PlayerList from '$lib/components_mini/playerlist.svelte';
	import GroupList from '$lib/components_mini/groupList.svelte';

	//data
	// import { oaTenantAdminPortal } from '$lib/components_mini/miniData';
	// const businesses = oaTenantAdminPortal;
	// const businesses = businesses;
	
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>

	
  <PlayerList/> 
  <GroupList/>

</section>


<style>
</style>