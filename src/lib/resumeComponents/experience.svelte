<script lang="ts">
  import Section from '$lib/resumeComponents/section.svelte';
  import type { Experience } from '$lib/resume';

  export let experience: Experience[];  
</script>

<Section header="Experience">
  <div class="experience-list-container">    
    {#each experience as {company, companyStart, companyEnd, companyDescription, periods} (company)}
      <div class="experience">
        <div class="company" style="grid-area: company">{company}</div>
        <div class="company-dates" style="grid-area: company-dates">{companyStart} - {companyEnd}</div> 
          <!-- {periods[periods.length-1].start} - {periods[0].end ?? 'present'}</div>         -->
        <div class="company-description" style="grid-area: company-description">{companyDescription}</div>  
        <div class="periods" style="grid-area: period">
          {#each periods as {start, end, title, achievements, toolSets} (`${start}-${end}`)}  
            <div class="period">
              
              <div class="roll-title" style="grid-area: roll-title">{title}</div>
              {#if start.length > 1}
                <div class="roll-dates" style="grid-area: roll-dates">{start} - {end ?? 'present'}</div>
              {/if}
              
              <ul class="achievements" style="grid-area: achievements">
                {#each achievements as achievement, index (index)}
                  <li>{achievement}</li>
                {/each}
              </ul>

              <!-- {#if tools.length > 1}
              <ul class="tools" style="grid-area: tools">
                {#each tools as tool, index (index)}
                  <li>{tool}</li>
                {/each}
              </ul>
              {/if} -->

              {#if toolSets.length >= 1}
               <div class="toolSets" style="grid-area: toolSets">

                {#each toolSets as {tools}, index (index)}
                
                  <div class="tools">
                    

                    <ul class="tools" style="grid-area: tool">
                      {#each tools as tool, index (index)}
                        <div class='tool'>{tool}</div>
                      {/each}
                    </ul> 
                  
                
                  </div>

                {/each}
              
              </div>
              {/if} 


            </div>        
          {/each}
        </div>
      </div>
    {/each}
  </div>
</Section>

<style lang="postcss">


.tools{
	display: flex;
	align-items: center;
	gap: 5px;
	flex-wrap: wrap;
}

.tool{
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


  .achievements {
    /* padding-top: 0.25rem; */
    padding-left: 2rem;
  }

  .experience-list-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }

  .experience {
    display: grid;
    grid-template-columns: auto 1fr max-content;
    grid-template-areas:
    "company company company-dates"
    "company-description company-description company-description"
    "period period period";
    align-items: baseline;
  }

  .period {    
    padding-top: 1rem;
    padding-left: 2rem;
    padding-bottom: 0rem;
    display: grid;
    grid-template-columns: auto 1fr max-content;
    grid-template-areas:
    "roll-title roll-title roll-title"
    "roll-dates roll-dates roll-dates"
    "achievements achievements achievements"
    "toolSets toolSets toolSets";

    @media screen and (--tablet-and-larger) {
      /* padding-left: 2ch; */
    }
  }

  ul {
    padding-left: 2ch;   
  }


	.company{
		font-family: var(--font-family-header);
		font-size: 1.2rem;
		font-style: italic;

	}

	.company-description{
		font-size: .80rem;
	}

  .company-dates{
	/* position: absolute; */
  	/* right: 0; */
	font-size: 12px;
	/* padding: 0px 20px; */
}

.roll-dates{
	font-size: 12px;
}

.roll-title{
  font-weight: bold;
}



</style>