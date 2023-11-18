<script>
    import { oaSocialLoginOptions } from '$lib/components_mini/mini_Admin_SocialLogin';
const {socialLoginOptions} = oaSocialLoginOptions;
</script>



<section>

<div>or login using:</div>
{#each socialLoginOptions as {id, name, image} (id)}
<a href="/"><img alt='{name}' src='{image}' width="25" height="25"></a>
{/each}

</section>



<style>
        section{
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }
</style>