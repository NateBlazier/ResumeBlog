<script context="module" lang="ts">

	export const prerender = true;
	//components
	import BusinessCard from '$lib/components_mini/businessCard.svelte';	
	import Tournament_map from '$lib/components_mini/Tournament_map.svelte';
	import CourseCreateNew from '$lib/components_mini/course_CreateNewForm.svelte';
	import NavBar from '$lib/components_mini/navBar.svelte';
	import Edit from '$lib/components_mini/edit.svelte';



	//data
	// import { oaTenantAdminPortal } from '$lib/components_mini/miniData';
	// const businesses = oaTenantAdminPortal;
	// const businesses = businesses;
	
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>

  <NavBar/> 
  <BusinessCard/> 
  <Tournament_map/>
  <CourseCreateNew/>
  <Edit/>
 
	

</section>


<style>
</style>