<script context="module">
	 import { browser, dev } from '$app/env';
	// import logo from '../lib/header/YoungNate.png';
	//  import Prism from 'prismjs';


	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	




// The code snippet you want to highlight, as a string
const code = `for (<Init>; <Condition>; <Repeat>)
{
    <Statement list>
}`;
const code0 = `a {
	color: inherit;
}`;

const code01 =
`Get-Help <cmdlet>
Help <cmdlet>`;

// Returns a highlighted HTML string
// const htmlw = Prism.highlight(code, Prism.languages.javascript, 'javascript');

// console.log(htmlw);



</script>

<!-- <link href="themes/prism.css" rel="stylesheet" /> -->
	




<svelte:head>
	<title>PowerShell</title>
	
</svelte:head>

<div class="mainContainer">

<div class="sectionTitle">
Get Help!!!
</div>

You can run the Update-Help Command btw to get the newest.
<pre><code>{`Update-Help`}</code></pre>

To display information on one page.
<pre><code>{
`Get-Help <cmdlet>
Help <cmdlet>`
}</code></pre>

To display information on multiple pages.
<pre><code>{`<cmdlet> -?`}</code></pre>

To display examples of a command.
<pre><code>{`Get-Help <cmdlet> -example`}</code></pre>

To display detailed information of a command.
<pre><code>{`Get-Help <cmdlet> -detailed`}</code></pre>

To display all the information of a command.
<pre><code>{`Get-Help <cmdlet> -full`}</code></pre>


To display information of a command in a new window. you can ctl+f in this."
<pre><code>{`Get-Help <cmdlet> -ShowWindow`}</code></pre>


If you want to see all the commands.
<pre><code>{`Get-Command`}</code></pre>
<pre><code>{`Get-Command | more`}</code></pre>
<pre><code>{`get-help get-command - ShowWindow`}</code></pre>

<div class="sectionTitle">Formats</div>

<pre><code>{` 
Format-Wide -
Format-List -
Format-Table -
Format-Custom -

Examples:
Get-Process | Format-Wide
Get-Process | Format-Wide - column 5
Get-Process | Format-List"
Get-Process -Name powershell | Format-List -Property ProcessName,FileVersion,Id
To Get all the properties you can use the WildCard
Get-Process -Name powershell | Format-List -Property *
`}</code></pre>

<div class="sectionTitle">Get-Member</div>
<pre><code>{` 
 '$sName = "Hello World"'
 '$sName | Get-Member'
 '$sName.Length'
 `}</code></pre>


<div class="sectionTitle">Variables</div>
<pre><code>{` 
 '$sName = "Hello World"'
 '[datetime]$dtDateOrTime = 3:00pm'
 '[String]$sString = "hello"'
 '[char]$chCharacter = a'
 '[double]$dFloatingNumber = 13.1'
 '[int]$iCount = 13'
 '[boolean]$bBoolean = true'
 ""
 "Constant is a write-protected variable"
 "New-Variable cmdlet is used to create constants"
 'ex. $serverIP ="10.10.10.10"'
 "Set-Variable severIP -option ReadOnly"
 "Set-Variable severIP -option Constant -value '12.12.12.12'"
 `}</code></pre>


<div class="sectionTitle">comparison operators</div>
<pre><code>{` 
 "-eq Equal to"
 "-lt Less Than"
 "-gt Greater than"
 "-ge Greater than or equal to"
 "-le Less than or equal to"
 "-ne Note equal to (!=)"
 ""
 "Logical operators:"
 "-not  Not"
 "! Not"
 "-and AND"
 "-or OR"
 ""
 "ex."
 '$a=6'
 '$b=6'
 '$a -eq $b'
 ""
 '($a -eq 100) -or ($a -gt $b)'
 ""
 '$a="abc"'
 '$b="ABC"'
 '$a -ieq $b   = true'
 '$a -ceq $b   = false'
 ""
 ""
 '$dtDate = Get-Date'
 'if($dtDate.day -ne 12){ "today"} else{ "not today"}'
 `}</code></pre>

<div class="sectionTitle">If Statment</div>
<pre><code>{` 
 "If(condition) {run this code}"
 "ElseIf (condition) {run this code}"
 "Else {Run this code}"
 `}</code></pre>

<div class="sectionTitle">Looping</div>
<pre><code>{` 
 "For Each-Object"
 "For"
 "While"
 "Do While"
 "Do Until"
 ""
 ""
 '$a=5,6,4,3,2'
 '$a | ForEach { $_}'
 ""
 'ForEach ($Value in $a){ $Value}'
 ""
 'For ($a=1; $a -le 5; $a++) { $a}'
 ""
 'while($val -ne 10) { $val++ ;  $val }'
 ""
 '$a = 1'
 'do { $a; $a++}'
 'while ($a -lt 0)'
 ""
 '$a = 1'
 'do { $a; $a++}'
 'until ($a -gt 5)'
 `}</code></pre>


<div class="sectionTitle">.Net Objects</div>
<pre><code>{` 
 "In powershell everything is a .net object"
 "Get-Member gets information about the .NET object."
 "the .net framework is a bunch of classes.. objects are created based on classes."
 "There are three concepts to understand:"
 ".NET Framework Classes"
 "objects"
 "Powershell commands"
 "note for self maybe learn to build some classes and objects."
 `}</code></pre>


 <div class="sectionTitle">Get-ChildItem</div>
<pre><code>{` 
 dir, gci, ls
 gci c:\*.* -include *.txt
 `}</code></pre>


<div class="sectionTitle">pipeline</div>
<pre><code>{` 
 "Pipes information from one command to another"
 'Get-Service | where-Object {$_.DisplayName -Match "MS"}'
 '$_ is the current information in the pipline}'
 `}</code></pre>


<div class="sectionTitle">Creating scripts</div>
<pre><code>{` 
 "You can do this in any editor but Windows PowerShell ISE can be used "
 "By default executing PowerShell scripts might be restricted"
 "type - Get-ExecutionPolicy ... if it is Restricted you need to Set-ExecutionPolicy RemoteSigned"
 "to run a script, the path and file name is required"
Wrire-Host "Get-Location | .\PowershellNateNotes.ps1"
`}</code></pre>

<div class="sectionTitle">HotKeys</div>
<pre><code>{` 
 "EnterKey - displays the next line."
 "Spacebar - displays everything to the end of the page."

 `}</code></pre>

<div class="sectionTitle">Regular expression</div>
<pre><code>{` 
 "Get-Help about_regular_expression"
 ""
 "Literal matches:"
 '"Microsoft" -match "soft"'
 '"Microsoft" -cmatch "Soft"'
 ""
 "Pattern matches:"
 ". (period) matched a single character"
 "[aeiou] matched at least one character specified within the brackets"
 "[b-f] matched at least one character specified within a range"
 "[^bfghjk] matched any character except those within the brackets"
 "^ matches characters locasted at the beginning of a string"
 "$ matches characters located at the end of a string"
 "*matched zero or more occurrences of the preceding character"
 "? matches zero or one occurrence of the preceding character"
 "\ matches the character following the escape (\) character"
 ""
 "Regular Expression Qualifiers:"
 "* must match zero or more times"
 "+ must match one or more times"
 "? Must match no more than one time"
 "{n} must match n times"
 "{n,} must at least n matches"
 "{n,m} must match at least n times, but nor more than m times"
 ""
 "Regular Expression Shortcuts"
 "\d matches any decimal digit, same as [0-9]"
 "\w matches any word character, same as [0-9A-Za-z]"
 "\D matches any non-digit"
 "\W matches any non-word character such as space"
 "\S matched any non-whitespace charater"
 ""
 'ex. $ip="192.168.15.21"'
 '$rx="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"'
 '$ip -match $rx'
 ""
 ""
 `}</code></pre>


<!-- <div class="sectionTitle">escape characters and comments</div>
<pre><code>{` 

 `n
 `r
 `t
 `a
 `'
 `"
 
 # comment

 `}</code></pre> -->


 <div class="sectionTitle">Paramaters</div>
<pre><code>{`
 "Simple Param Block:"
 'Param([string]$variablename)'
 ''
 'Full param block'
 'Param([Parameter(Mandatory=$true)][string]$variablename)'
 ''
 'ex.'
 'Param([Parameter(Mandatory=$true)][string]$Username)'
 '$a = $Username'
 ' "Hello $a!"'
 ''


 `}</code></pre>






<div>
	

</div>






	


</div>


<style>


.mainContainer{
	background-color: var(--secondary-color);
	box-shadow: rgb(39 44 49 / 60%) 8px 14px 38px, rgb(39 44 49 / 30%) 1px 3px 8px;
	color: var(--text-color);
	font-family: Lato, sans-serif;
	font-size: 16px;
	max-width: 210mm;
	margin: 20px auto;
	padding: 1rem;
	border-radius: 10px;
	display: grid;
	position: relative;
	line-height: 1.8;
}

.sectionTitle{
	font-size: xx-large;
}

</style>
