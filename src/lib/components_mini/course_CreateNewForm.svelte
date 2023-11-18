<script>

    import { createEventDispatcher} from 'svelte';

let dispatch = createEventDispatcher();

 let sLocationName;
 let sLocationAddress;



const newLocationSubmit = () => {
    const oLocation ={
        locationName: sLocationName,
        locationAddress: sLocationAddress,
        location_id: Math.random()
    }
    dispatch('addLocation', oLocation);
};

</script>



<section>

    <form on:submit|preventDefault={newLocationSubmit}>
        <label for="LocationName">Location Name:</label>
        <input type="text" id="LocationName" name="LocationName" bind:value={sLocationName}><br><br>
        
        <label for="LocationAddress">LocationAddress:</label>
        <input type="text" id="LocationAddress" name="LocationAddress" bind:value={sLocationAddress}><br><br>
        
        <input type="submit" value="Submit">
      </form>

</section>



<style></style>