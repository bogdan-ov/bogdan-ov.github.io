import * as utils from "../utils";

const NOTES = [

()=> `Now you have permissions to edit this!
So so so so so cool

    _.-._
  /| | | |_
  || | | | |
  || | | | |
 _||     \` |
\\\\\`\\       ;
 \\\\        |
  \\\\      /
  | |    |
  | |    |
`,

()=> `This THING is using vanilla js, html and css
<i>(with help of pixi.js and gsap)</i>
Thank you pixi and gsap!!

FUCK FRAMEWORKS!

      __   _
    _(  )_( )_
   (_   _    _)
  / /(_) (__)
 / / / / / /
/ / / / / /
`,

()=> `Randomness is kinda cool because randomness is beautiful :)
Even people are randomness... bad example

Good example:
${ utils.randomString(30) }

  __  __
 /  \\/  \\
|        |
 \\      /
  \\    /
   '__'
`,

()=> `I've rewrote this site in vanilla js, because <b>NOW DEVELOPERS OF REACT, VUE and other frameworks MUST PAY ME TO USE THEIR FRAMEWORKS</b>

$$$

   ____  ____  ____
  /   / /   / /   /
 /-$-/ /-$-/ /-$-/ 
/___/ /___/ /___/  
`,

()=> `Check out my github! Maybe there is already something interesting...

<b>https://github.com/bogdan-ov</b>

 /\\_/\\
( o.o )
 > ^ <
`,

()=> `There are also my other links... Check them out too!!

<b>vk:</b> vk.com/bbogdan_ov
<b>telegram:</b> tg.me/bbogan_ov
<b>discord:</b> @bogdan_ov

  .------.
 /        \\
|  ()  ()  |
| .      . |
 \\ '----' /
  '------'
`,

()=> `I use arch btw

       .
      /#\\
     /###\\
    /p^###\\
   /##P^q##\\
  /##(   )##\\
 /###P   q#,^\\
/P^         ^q\\
`,

()=> `<b>Q: How old are you?</b>
A: i'm 17!

<b>Q: What is your name?</b>
A: bogdan!

<b>Q: Where are you from?</b>
A: i'm from russia!

<b>Q: Stop using exclamation mark!</b>
A: shut up!

 ___
|   |
|   |
|   |
 |_|
  _
 (_)
`,

()=> `Crazy animated images became real with help of ezgif.com, tenor.com and giphy.com!
Gifs are sooo cool!

   _______ ____
  / ____(_) __/
 / / __/ / /_  
/ /_/ / / __/  
\\____/_/_/
`

]

export function initInfo() {
    const noteText = document.querySelector("#note-text");
    noteText.innerHTML = utils.randomItem(NOTES)();
}
