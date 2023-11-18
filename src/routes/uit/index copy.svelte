<!-- <script lang="ts">

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


var test2 = document.querySelector("#test2");
test2.addEventListener("input", function (evt) {
    var checkedRadio = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
    setCorrectClass.call(this, (checkedRadio === "other"));
});


var test3 = document.querySelector("#test3");
test3.addEventListener("input", function (evt) {
    var inputFirstName = document.getElementsByTagName('fieldset')[0].querySelector("[name='firstname']").value;
    var inputLastName = document.getElementsByTagName('fieldset')[0].querySelector("[name='lastname']").value;
    setCorrectClass.call(this, (inputFirstName === "Kiran" 
                              && inputLastName === "Gurunath"))
});


var test4 = document.querySelector("#test4");
test4.addEventListener("input", function (evt) {
    var inputKey = this.querySelector("[name='firstname']").value;
    setCorrectClass.call(this, (inputKey === "1w345"))
});

var test5 = document.querySelector("#test5");
test5.addEventListener("input", function (evt) {
    var selectItem = this.querySelector("[name='cars']").value;
    setCorrectClass.call(this, (selectItem === "fiat"))
});

var test6 = document.querySelector("#test6");
test6.addEventListener("input", function (evt) {
    var selectItem = this.querySelector("[name='cars']").value;
    setCorrectClass.call(this, (selectItem === "audi"))
});


var test7 = document.querySelector("#test7");
test7.addEventListener("input", function (evt) {
    var selectItem = this.querySelector("[name='cars']").value;
    setCorrectClass.call(this, (selectItem === "12"))
});


var test8 = document.querySelector("#test8");
test8.addEventListener("input", function (evt) {
    var selectItem = this.querySelector("[name='message']").value;
    setCorrectClass.call(this, (selectItem === "\"There will\""))
});

 var test9 = document.querySelector("#test9");
    test9.addEventListener("click", function (evt) {
    setCorrectClass.call(this, true)
});


var test10 = document.querySelector("#test10");
var buttonTest10 = test10.querySelector("[type='submit']");
buttonTest10.addEventListener("click", function (evt) {
    var selectItem = test10.querySelector("[name='browser']").value;
    setCorrectClass.call(test10, (selectItem === "Opera"))
});

var test11 = document.querySelector("#test11");
// var buttonTest11 = test11.querySelector("[type='submit']");
test11.addEventListener("input", function (evt) {
    var selectItemA = test11.querySelector("#a").value;
    var selectItemB = test11.querySelector("#b").value;

    
    setCorrectClass.call(this, ((selectItemA === "75") && (selectItemB === "25")))
});

function setCorrectClass(bIsCorrect) {
    if (bIsCorrect && !(this.classList.contains("squareComplete")))
        this.classList.toggle("squareComplete");

    else if (!(bIsCorrect) && this.classList.contains("squareComplete"))
        this.classList.toggle("squareComplete");
}


});






// if (confirm('Your text here')) {
//     alert("you did it");
// }
// else {
//     // user clicked on No
// }














</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>

	



    <head>
        <title>Form for Automated Testing Practice</title>
        <link rel="stylesheet" type="text/css" href="/inputTypes.css">
    </head>
    
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
              
              
                <div id="test2" class="square">
                    <h2>Radio Button Input</h2>
                    <h4>Select "Other"</h4>
                    <form>
                        <input type="radio" name="gender" value="male" checked> Male<br>
                        <input type="radio" name="gender" value="female"> Female<br>
                        <input type="radio" name="gender" value="other"> Other
                    </form>
                </div>
                <div id="test3" class="square">
                    <h2>Grouping Form Data with fieldset</h2>
                    <h4>Send Keys First name "Kiran" and the Last Name "Gurunath"</h4>
                    <form action="/action_page.php">
                        <fieldset>
                            <legend>Personal information:</legend>
                            First name:<br>
                            <input type="text" name="firstname" value="Mickey"><br>
                            Last name:<br>
                            <input type="text" name="lastname" value="Mouse"><br><br>
                            <input type="submit" value="Submit">
                        </fieldset>
                    </form>
                </div>
    
                <h1>HTML Form Elements</h1>
                <div id="test4" class="square">
                    <h2>The &lt;input&gt; Element </h2>
                    <h4>1w345</h4>
                    <input name="firstname" type="text">
                </div>
                <div id="test5" class="square">
                    <h2>The &lt;select&gt; Element </h2>
                    <h4>Select Fiat</h4>
                    <select name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div id="test6" class="square">
                    <h3>Visible Values:</h3>
                    <h4>Select Audi</h4>
                    <select name="cars" size="3">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div id="test7" class="square">
                    <h3>Allow Multiple Selections:</h3>
                    <h4>Select Volvo and Audi</h4>
                    <p> down the Ctrl (windows) - Command (Mac) button to select multiple options.</p>
                    <select name="cars" size="4" multiple>
                        <option value="12">Volvo</option>
                        <option value="22">Saab</option>
                        <option value="32">Fiat</option>
                        <option value="42">Audi</option>
                    </select>
                </div>
    
                <div id="test8" class="square">
                    <h2>The &lt;textarea&gt; Element</h2>
                    <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
                </div>
                <div id="test9" class="square">
                    <h2>The &lt;button&gt; Element</h2>
                    <button type="button" onclick="alert('Hello World!')">Click Me!</button>
                </div>
            </div>
            <div id="html5FormContainer" class="GridContainer">
                <h1>Html 5 Elements</h1>
                <div id="test10" class="square">
                    <h2>datalist Element</h2>
                    <input list="browsers" name="browser">
                    <datalist id="browsers">
                        <option value="Internet Explorer">
                        <option value="Firefox">
                        <option value="Chrome">
                        <option value="Opera">
                        <option value="Safari">
                    </datalist>
                    <input type="submit">
                </div>
                <div id="test11" class="square">
                    <h2>output Element</h2>
    
                    <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
                        0
                        <input type="range" id="a" name="a" value="50">
                        100 +
                        <input type="number" id="b" name="b" value="50">
                        =
                        <output name="x" for="a b"></output>
                        <br><br>
            -->            <!-- <input type="submit"> -->
                    <!-- </form>
                </div>
            </div>
        
    
            <iframe src="inputTypes.html"
            name="testFrame1" height="1950px" width="100%" frameborder="0" marginheight="20" marginwidth="0"
            scrolling="auto"></iframe>
    
    
    
            <div id="htmlLablesFormContainer" class="GridContainer">
                <h1>Lables</h1>
                <div class="square">
                    <h2>datalist Element</h2>
                    <input list="browsers" name="browser">
                    <datalist id="browsers">
                        <option value="Internet Explorer">
                        <option value="Firefox">
                        <option value="Chrome">
                        <option value="Opera">
                        <option value="Safari">
                    </datalist>
                    <input type="submit">
                </div>
                <div id="test12" class="square">
                    <h2>output Element</h2>
                    <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
                        0
                        <input type="range" id="a" name="a" value="50">
                        100 +
                        <input type="number" id="b" name="b" value="50">
                        =
                        <output name="x" for="a b"></output>
                        <br><br>
                        <input type="submit">
                    </form>
                </div>
            </div>
    
        </div> -->
    
    
        <!-- iframes
        tables
        new pages
    
        <form action="/action_page.php" method="get"></form>
        <form action="/action_page.php" method="post"></form>
        <label></label>
        
        <optgroup></optgroup> -->
    
    
    
    
<!--     
        <script src="/AutomationQuiz.js"></script>
    </body> 
    
  




	

</section>
 -->

<style>
/*
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

.squareComplete{
    background-color: #489533;
}

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
/*

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




