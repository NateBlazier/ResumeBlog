<script lang=ts>

	export const prerender = true;
    import { onMount } from 'svelte';

import BlogCard from '$lib/components_blog/blogCard.svelte';
import { oaTenantAdminPortal } from '$lib/components_mini/miniData';
const {businesses} = oaTenantAdminPortal;

onMount(() => {


    var colorCorrect = "#00ff00";

var square = document.querySelectorAll(".square");






var test1 = document.querySelector("#test1");
test1.addEventListener("input", function (evt) {
    var inputFirstName = (document.getElementById('firstname')as HTMLInputElement).value;
    var inputLastName = (document.getElementById('lastname')as HTMLInputElement).value;
    setCorrectClass.call(this, (inputFirstName === "Nate" 
                              && inputLastName === "Blazier"))
});


// var test2 = document.querySelector("#test2");
// test2.addEventListener("input", function (evt) {
//     var checkedRadio = document.querySelector('input[name="gender"]:checked').value;
//     setCorrectClass.call(this, (checkedRadio === "other"));
// });


// var test3 = document.querySelector("#test3");
// test3.addEventListener("input", function (evt) {
//     var inputFirstName = document.getElementsByTagName('fieldset')[0].querySelector("[name='firstname']").value;
//     var inputLastName = document.getElementsByTagName('fieldset')[0].querySelector("[name='lastname']").value;
//     setCorrectClass.call(this, (inputFirstName === "Kiran" 
//                               && inputLastName === "Gurunath"))
// });


// var test4 = document.querySelector("#test4");
// test4.addEventListener("input", function (evt) {
//     var inputKey = this.querySelector("[name='firstname']").value;
//     setCorrectClass.call(this, (inputKey === "1w345"))
// });

// var test5 = document.querySelector("#test5");
// test5.addEventListener("input", function (evt) {
//     var selectItem = this.querySelector("[name='cars']").value;
//     setCorrectClass.call(this, (selectItem === "fiat"))
// });

// var test6 = document.querySelector("#test6");
// test6.addEventListener("input", function (evt) {
//     var selectItem = this.querySelector("[name='cars']").value;
//     setCorrectClass.call(this, (selectItem === "audi"))
// });


// var test7 = document.querySelector("#test7");
// test7.addEventListener("input", function (evt) {
//     var selectItem = this.querySelector("[name='cars']").value;
//     setCorrectClass.call(this, (selectItem === "12"))
// });


// var test8 = document.querySelector("#test8");
// test8.addEventListener("input", function (evt) {
//     var selectItem = this.querySelector("[name='message']").value;
//     setCorrectClass.call(this, (selectItem === "\"There will\""))
// });

//  var test9 = document.querySelector("#test9");
//     test9.addEventListener("click", function (evt) {
//     setCorrectClass.call(this, true)
// });


// var test10 = document.querySelector("#test10");
// var buttonTest10 = test10.querySelector("[type='submit']");
// buttonTest10.addEventListener("click", function (evt) {
//     var selectItem = test10.querySelector("[name='browser']").value;
//     setCorrectClass.call(test10, (selectItem === "Opera"))
// });

// var test11 = document.querySelector("#test11");
// // var buttonTest11 = test11.querySelector("[type='submit']");
// test11.addEventListener("input", function (evt) {
//     var selectItemA = test11.querySelector("#a").value;
//     var selectItemB = test11.querySelector("#b").value;
//     setCorrectClass.call(this, ((selectItemA === "75") && (selectItemB === "25")))
// });

function setCorrectClass(bIsCorrect) {
    if (bIsCorrect && !(this.classList.contains("squareComplete")))
        this.classList.toggle("squareComplete");

    else if (!(bIsCorrect) && this.classList.contains("squareComplete"))
        this.classList.toggle("squareComplete");
}


});



</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>

	




    
    <body>
        <div id="container">
            <div id="htmlFormContainer" class="GridContainer">
        
                <h1>HTML Forms</h1>
                <div id="test1" class="square">
                    <h2>input type ="text"</h2>
                    <h4>Send Keys First name "Nate" and the Last Name "Blazier"</h4>
                    <form>
                        First name:<br>
                        <input type="text" name="firstname" id="firstname"><br>
                        Last name:<br>
                        <input type="text" name="lastname" id="lastname">
                    </form>
                </div>    


            </div>          
        </div>
    
    

       
    </body>
    
  




	

</section>


<style>

body{
    background-color: #20201e;
}

.GridContainer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    max-width: 100%;
    margin-bottom: 2rem;  
}

.square{
background-color: #d6c9b9;
padding: 2rem;
}

/*
.squareComplete{
    background-color: #489533;
}
*/

#container{
    margin: 0 auto;
    max-width: 1000px;
}

h1{
    padding: 0 auto;
    color: #ffffff;
}

 /* #htmlInputContainer{
    
 }

 #html5InputContainer{
      
} */


  .GridContainer h1{
    grid-column: 1 / span 3;
  }


  /* iframe:{ 
    outline: none;
    border:none;
    overflow: auto;
    width: 10000px;
  } */
/*   
  iframe[seamless] { 
    display: block;
    border:none;
  } */



</style>




