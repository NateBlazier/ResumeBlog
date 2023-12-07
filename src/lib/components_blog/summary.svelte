<script lang="ts">
  export let summary: string;
</script>

<section>
  {summary}
</section>

<style lang="postcss">

  section{
		background-color: --secondary-color ;
		margin: 20px auto;
		padding: 1rem;
		line-height: 1.8;
		border-radius: 10px;
		font-style: italic;
    content: open-quote;
    content: close-quote;
  }


  
/* section {
    color: var(--text-dark-medium);
    background-color: hsl(var(--hsl-gray-300));
    padding: 24px 24px;
    border-radius: 24px;    
  } */
  
  /* p {
    font-style: italic;    

    &:before {
      content: open-quote;
    }

    &:after {
      content: close-quote;
      margin-left: -2px;
    } 
  } */

</style> 