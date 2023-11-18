<script context="module">
    export async function load({fetch}){
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = await res.json();

        if (res.ok) {
            return {
                props:{
                    todos: todos 
                }
            }
        }

        return{
            status: res.status,
            error: new Error('Could not fetch the guides')
        }


    }
</script>

<script>
    export let todos;
</script>

<div>
    <ul>
        {#each todos as todo}
            
            <li>{todo.title}</li>
        {/each}
        
    </ul>
</div>