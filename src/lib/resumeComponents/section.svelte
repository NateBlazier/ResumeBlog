<script lang="ts">
  export let header: string;
</script>

<section>
  <div class="container">
    <div class="header-wrapper">
      {header}
      <span class="spacer"></span>    
    </div>
    <div class="options-wrapper">
      <slot name="options"/>
      <slot /> 
    </div>
  </div>
 
</section>

<style lang="postcss">
  .spacer {
    flex: 1 1 0px;
  }

  /* .header {
    margin-right: auto;
  } */

  .header-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    border-bottom: 1px solid;
    margin-bottom: 8px;
		padding-top: 8px;  
    font-size: 1.5rem;
  }

  .options-wrapper {
    /* display: flex; */
    justify-content: flex-start;
    padding: 2px;
    margin-bottom: 8px;
  }

  @media screen and (--tablet-and-larger) {
    .header-wrapper {
      margin-bottom: 0px;
      border-bottom: none;
      margin-right: auto;
    }

    .options-wrapper {
      padding-bottom: 0px;           
    }

    .container {
      display: flex;
      border-bottom: 1px solid;
      align-items: baseline;
      margin-bottom: 8px; 
    }
  }
</style>