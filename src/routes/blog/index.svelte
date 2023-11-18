<script context="module" lang="ts">
	export const prerender = true;
	import BlogCard from '../../lib/components_blog/blogCard.svelte';

	import {blogLandingPageData} from '$lib/components_blog/blog_LandingPage';
	const { title, quote, blogCard } = blogLandingPageData;
</script>

<script lang="ts">
	//import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>

	<div class="topBox">
		<h1>
		<div class="welcome">
			{title}
		</div>
		<div class="quote">
			{quote}
		</div>
		</h1>
	</div>


	<div class="blogContainer">
		<BlogCard {blogCard}/> 
	</div>

</section>





<style>





.quote{
	    font-family: Georgia,serif;
    color: var(--accent-color);
    font-size: 30px;
    line-height: 1em;
    /* margin: 0 0 0 60px; */
}



	section {
		grid-column: span 10;
	}

	h1 {
		width: 100%;
	}

	.welcome {

	color: var(--text-color);
    display: block;
    font-size: 85px;
    font-weight: normal;
    letter-spacing: -3.5px;
    line-height: 1em;
    font-family: Georgia,serif;
	}



.topBox{
	background: var(--secondary-color);
    box-shadow: rgb(39 44 49 / 60%) 8px 14px 38px, rgb(39 44 49 / 30%) 1px 3px 8px;
    color: var(--text-color);
    border-radius: 10px;
    transition: all .4s ease;
    position: relative;
    overflow: hidden;
    width: 100%;
    /* display: flex; */
    flex-direction: row;
    flex-wrap: wrap;
	margin-bottom: 20px;

}


</style>
