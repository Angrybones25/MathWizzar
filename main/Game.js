function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}
const prompt = require('prompt-sync')();
// console.log("Start");
// sleepSync(2000); // blocks EVERYTHING
// console.log("End");
// console.log(`Guard: ""`)
const next = (time) =>
{
    sleep(time)
    console.clear() 
}
var php = 1;
var mp = 100;
var matk = 1
var atk = 1
var def = 1
const Intro = () => 
{
    console.log(`Guard: "Welcome back my lord."`)
    next(5000)
    console.log(`Guard: "We all thought you died back there."`)
    next(5000)
    console.log(`Guard: "What was that spell you used? It's a miracle you're alive."`)
    next(5000)
    console.log(`You look at the guard dazed and confused. You're lightheaded and your entire body is sore`)
    next(6000)
    console.log(`The guard looks at you with worry and bites off the cork to a red potion that he pulls out of his armor. `)
    next(6000)
    console.log(`Guard: "Here, drink this"`)
    next(5000)
    console.log(`[1.]Accept\n[2.]Decline\n`)
   let choice = Number(prompt("-->"))
    if(choice===1)
    {
    console.log(`You part your lips slightly and allow the guard to pour the potion into your mouth.`)
    next(5000)
    php = 15;
    console.log(`Your body is a little lighter, and your head is a little less clouded, but the pain doesn't cease.`)
    next(4000)
    console.log(`Not even a little`)
    next(5500)
    console.log(`guard: "Even a greater healing potion barely has any effect."`)
    next(1000)
    console.log(`guard: "Even a greater healing potion barely has any effect.."`)
    next(2000)
    console.log(`guard: "Even a greater healing potion barely has any effect..."`)
    next(5000)
    console.log(`guard: "Do you even remember your name?."`)
    }
    else if(choice===2)
    {
    console.log(`You use as much strength as you can muster to raise your right hand and push the potion back into the guards hands. The motion alone almost makes you lose consiousness.`)
    next(6000)
    console.log(`guard: "my lord please! you aren't thinkning right!."`)
    next(4500)
    console.log(`We...`)
    next(1000)
    console.log(`We can't lose you!`)
    next(5000)
    console.log(`guard: "Do you even know where you are right now? Do you remember me?"`)
    next(5000)
    console.log(`guard: "Do you even remember your name?."`)
    }
    else{console.log(`invalid option`)}
console.log(`My name is...`)
var name = prompt(`-->`)
console.log(`I can't remember`)
next(3000)
console.log(`Trying to remember your name intensifies the numbness in your head and you black out`)
next(3000)
console.log(`Trying to remember your name intensifies the numbness in your head and you black out.`)
next(3000)
console.log(`Trying to remember your name intensifies the numbness in your head and you black out..`)
next(3000)
console.log(`Trying to remember your name intensifies the numbness in your head and you black out...`)
next(3500)
console.log(`You wake up to the smell of blood`)
next(3000)
console.log(`You lie on the floor with your robe drenched in fresh warm blood, in a fuzzy haze your eyes lock onto the source.`)
next(5000)
console.log(`It's the guard`)
next(2000)
console.log(`His armor was torn from his body and his entire body is covered in claw marks`)
next(5000)
console.log(`beside him is a demon licking the blood from his claws. The shock clears your vison immedietly. Beside the demon is four other identical dead demons.`)
next(7000)
console.log(`You stagger to your feet, your head feels as though it's being split open, however, you're well aware that a headache is the least of your concerns right now.`)
next(6700)
console.log(`It's time to fight!`)
}

Intro()

