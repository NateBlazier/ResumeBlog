<script>

    import { createEventDispatcher} from 'svelte';

let dispatch = createEventDispatcher();

 let sPlayerName;
 let sPlayerEmail;



const newPlayerSubmit = () => {
    const oPlayer ={
        name: sPlayerName,
        email: sPlayerEmail,
        id: Math.random()
    }

    // console.log(sPlayerName, sPlayerEmail)
    dispatch('addPlayer', oPlayer);
};

</script>



<section>


    <h1>Add Player information</h1>
    <br>
    <form on:submit|preventDefault={newPlayerSubmit}>
        <label for="PlayerName">Name:</label>
        <input type="text" id="PlayerName" name="PlayerName" bind:value={sPlayerName}><br><br>
        
        <label for="PlayerEmail">sPlayerEmail:</label>
        <input type="text" id="PlayerEmail" name="PlayerEmail" bind:value={sPlayerEmail}><br><br>
        
        <input type="submit" value="Submit">
      </form>

    <br>
    or
    <br>
    Copy and send link to:
    <br>
    345345345/sdsdfsdf/34sdsdfs/sdfsfsdf.com


</section>



<style></style>