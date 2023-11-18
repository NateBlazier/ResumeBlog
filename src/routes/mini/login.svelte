<script context="module" lang="ts">

	export const prerender = true;
	//components
	import LoginBasicForm from '$lib/components_mini/login_basicForm.svelte';
	import LoginSocial from '$lib/components_mini/login_social.svelte';

	//data
	// import { oaTenantAdminPortal } from '$lib/components_mini/miniData';
	// const businesses = oaTenantAdminPortal;
	// const businesses = businesses;
	
</script>


<!-- <svelte:head>
	<title>Home</title>
</svelte:head> -->

<section>

	
  <LoginBasicForm/> 
  <LoginSocial/>

</section>


<style>
</style>