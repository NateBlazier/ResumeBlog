<script context="module" lang="ts">

	export const prerender = true;
	//components

	import YourTournamentInvitations from '$lib/components_mini/yourTournamentInvitations.svelte';
	import YourTournamentRegistrations from '$lib/components_mini/yourTournamentRegistrations.svelte';
	import YourCreatedTournaments from '$lib/components_mini/yourCreatedTournaments.svelte';


	//data
	// import { oaTenantAdminPortal } from '$lib/components_mini/miniData';
	// const businesses = oaTenantAdminPortal;
	// const businesses = businesses;
	
</script>


<!-- <svelte:head>
	<title>Home</title>
</svelte:head> -->

<section>

<ul>
	<li>Tournament invitations: sort by newest. (there is a register button for each list item).</li>

	<li>Tournaments you have registered for: sort by start date. unregister.</li>

	<li>Youre Created Tournaments, Create new tournament</li>
	<li>public tournaments (register, request registration, see details)</li>
</ul>


<YourTournamentInvitations/>
<YourTournamentRegistrations/>
<YourCreatedTournaments/>



</section>


<style>
</style>