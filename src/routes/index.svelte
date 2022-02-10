<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		"I will try to fill in the knowledge gaps to have you on your way. "
	</h1>








	<Counter />



	<div class="grid-container">
		<a class="card clickable" href="/blog-development-sveltekit">
			<div class="image">
				
						<img src="https://wallpapercave.com/wp/wp7250087.jpg" alt="Cover Image" loading="lazy" decoding="async" class="picture"> 
			</div>
				<div class="body">
					<div class="content">
						<div class="content">
							<div class="title">How I built a blog with Svelte and SvelteKit</div> 
							<div class="note">20 min read</div> 
							<div class="text">An overview of the experience I've had using these amazing projects.</div>
						</div>
					</div> 
					<div class="footer">
						<div class="footer">
							<div class="tags">
								<div class="tag primary">Front-End</div>
								<div class="tag primary">Svelte</div>
							</div>
						</div>
					</div>
				</div>
			
		</a>


		<a class="card clickable" href="/blog-development-sveltekit">
			<div class="image">
				
						<img src="https://wallpapercave.com/wp/wp7250087.jpg" alt="Cover Image" loading="lazy" decoding="async" class="picture"> 
			</div>
				<div class="body">
					<div class="content">
						<div class="content">
							<div class="title">How I built a blog with Svelte and SvelteKit</div> 
							<div class="note">20 min read</div> 
							<div class="text">An overview of the experience I've had using these amazing projects.</div>
						</div>
					</div> 
					<div class="footer">
						<div class="footer">
							<div class="tags">
								<div class="tag primary">Front-End</div>
								<div class="tag primary">Svelte</div>
							</div>
						</div>
					</div>
				</div>
			
		</a>
	


		

		
	</div>




</section>





<style>

.picture{
	width: 100%;
    height: 100%;
}

	section {
		grid-column: span 10;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.grid-container {
		width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-column: span 3;
}

.card {
    background: #fff;
    box-shadow: rgb(39 44 49 / 60%) 8px 14px 38px, rgb(39 44 49 / 30%) 1px 3px 8px;
    color: var(--text-color);
    border-radius: 10px;
    transition: all .4s ease;
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.image {
    background-size: cover;
    background-position: center;
    position: relative;
    flex: 1 0 max(50%,330px);
    height: min(50%,350px);
    min-height: 240px;
    max-height: 350px;
}

.card .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    flex: 1 0 50%;
}

</style>
