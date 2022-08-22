<script lang="ts">
  import Section from '$lib/resumeComponents/section.svelte';
  import type {Education} from '$lib/resume';

  export let education: Education[];
</script>

<Section header="Education">
  <div class="education-list-container">   
  {#each education as {school, study, degree, year, additionalInfo} (school+year)}
      <div class="education">
        <div class="school" style="grid-area: school;">{school}</div>
        <div class="year" style="grid-area: year;">{year}</div>
        <div class="study" style="grid-area: study;">{study}</div>
        <div class="degree" style="grid-area: degree;">{degree}</div>
        <ul class="additionalInfo" style="grid-area: additionalInfo">
        {#each additionalInfo as individualInfo, index (index)}
          <div>{individualInfo}</div>
        {/each}
      </ul>
      </div>
    
    
  {/each}
</div>
</Section>






<style lang="postcss">
  /* ul {
    padding-left: 16px;
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  } */


	.school{
		font-family: var(--font-family-header);
		font-size: 1.2rem;
		font-style: italic;

	}

  .education {
    display: grid;
    grid-template-columns: auto 1fr min-content;
    /* column-gap: 1ch; */
    grid-template-areas: 
    "school school year"
    "study study study"
    "degree degree degree"
    "additionalInfo additionalInfo additionalInfo";
    align-items: baseline;
  }


  .education-list-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }

  .year{
		font-family: var(--font-family-header);
		font-size: 1.2rem;
		font-style: italic;
	}
    /* @media screen and (--tablet-and-larger) {
      grid-template-columns: min-content 1fr max-content;      
      grid-template-areas: 
      "study study degree"
      "year school school";
      

      & .school, & .year {
        align-self: flex-start;
      }

      & .study, & .degree {
        align-self: baseline;
      }

      & .year {
        justify-self: flex-end;
      }

      & .degree {
        justify-self: flex-start;
      }
    } 
  }

  .year {
    &:before {
      content: '[';
    }

    &:after {
      content: ']';
    }
  }*/
</style>