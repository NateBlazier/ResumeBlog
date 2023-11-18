<script lang="ts">
  // import Section from '$lib/resumeComponents/section.svelte';
  import type {BlogCard} from '$lib/components_blog/blog_LandingPage';

  export let blogCard: BlogCard[];
</script>


<section>

  <div class="section-container">
    <div class="grid-container">
      {#each blogCard as {title, imagePath, link, readTime, content, tags, postTime} (title)}
      <a class="card clickable" href={link}>
        <div class="image">
          <img src={imagePath} alt="Cover Image" loading="lazy" decoding="async" class="picture"> 
        </div>
          <div class="body">
            <div class="content">
              <div class="title">{title}</div> 
              <div class="note">{postTime}</div> 
              <div class="text">{content}</div>
            </div>
            
            <div class="footer">

              <div class="tags">
              {#each tags as tag, index (index)}
                  <div class="tag primary">{tag}</div>            
              {/each}
            </div>

            </div>
          </div>
      </a>
      {/each}

    </div>
</div>

</section>







<style lang="postcss">

.section-container {
  flex-direction: column;
  margin-bottom: 20px;
}

.grid-container > :nth-child(6n+1) {
  grid-column: span 3;
  height: 23em
}
.grid-container > :nth-child(6n+2) {
  grid-column: span 3;
  height: 23em
}

.grid-container > :nth-child(6n+3) {
  grid-column: span 2;
}

.grid-container > :nth-child(6n+4) {
  grid-column: span 2;
}

.grid-container > :nth-child(6n+5) {
  grid-column: span 2;
}

.grid-container > :nth-child(6n+6) {
  grid-column: span 6;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  

}

.grid-container > :nth-child(6n+6) .image {

flex: 1 0 max(50%,330px);
height: min(100%,350px);
}



.quote{
	    font-family: Georgia,serif;
    color: var(--accent-color);
    font-size: 30px;
    line-height: 1em;
    /* margin: 0 0 0 60px; */
}

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

	color: var(--text-color);
    display: block;
    font-size: 85px;
    font-weight: normal;
    letter-spacing: -3.5px;
    line-height: 1em;
    font-family: Georgia,serif;
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
  		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  		grid-gap: 20px;
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

.card.clickable {
  cursor: pointer;
}

.card.clickable:hover {
  box-shadow: var(--card-shadow-hover);
  transform: scale(1.01);
  text-decoration: none;
}

.card {
    background: var(--secondary-color);
    box-shadow: rgb(39 44 49 / 60%) 8px 14px 38px, rgb(39 44 49 / 30%) 1px 3px 8px;
    color: var(--text-color);
    border-radius: 10px;
    transition: all .4s ease;
    position: relative;
    overflow: hidden;
    width: 100%;
    /* display: flex; */
    /* flex-direction: row; */
    flex-wrap: wrap;
}

.card .image {
    background-size: cover;
    background-position: center;
    position: relative;
    /* flex: 1 0 max(50%,330px); */
    height: min(50%,350px);
    /* min-height: 240px; */
    /* max-height: 350px; */
}


.card .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
	
    
}

.card .title{
	color: var(--text-color);
	font-size: large;
	font-weight: bolder;
	display:block;
	padding-bottom: 10px;
}

.card .note{
	font-size: small;
	display:block;
	padding-bottom: 10px;
}

.card .content{
display: flex;
flex-direction: column;
flex: 1;
}

.card .text{
	font-size: medium;
	color: var(--accent-color);
	display:block;
	padding-bottom: 10px;
}

.card .footer{
	font-size: small;
	position: absolute;
  	bottom: 0;
  	/* left: 0; */
	padding: 5px 0px;
}

.card .footer .tags{
	display: flex;
	align-items: center;
	gap: 5px;
	flex-wrap: wrap;
}



.card .footer .tag{

background: var(--primary-color);
color: var(--secondary-color);	
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
padding: 5px 15px;
border-radius: 10px;
font-weight: 550;
font-size: .60rem;
width: fit-content;
white-space: nowrap;
	
}

	
</style>