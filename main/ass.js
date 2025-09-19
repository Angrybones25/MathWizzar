const prompt = require('prompt-sync')();
var strikes = 1;
var score = 100;
var multiplier = 1;
const rnum = (min,max) =>
{
    return Math.floor(Math.random() * (max-min + 1)) + min;
}
const strikeout = () =>
{
    const easy = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,10)
        let n2 = rnum(1,10)
        let ans = n1 + n2
        console.log(`What's ${n1} + ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes <= 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else
            {
            console.log(`You have run out of lives. Never return again.`)
            Process.exit();
            }
    }
    }
     const medium = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,999)
        let n2 = rnum(1,999)
        let ans = n1 + n2
        console.log(`What's ${n1} + ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes <= 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else
            {
            console.log(`You have run out of lives. Never return again.`)
            Process.exit();
            }
    }
    }
    const hard = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,9999)
        let n2 = rnum(1,9999)
        let ans = n1 + n2
        console.log(`What's ${n1} + ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes <= 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else
            {
            console.log(`You have run out of lives. Never return again.`)
            Process.exit();
            }
    }
    }
    const extreme = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,9999)
        let n2 = rnum(1,9999)
        let ans = n1 - n2
        console.log(`What's ${n1} - ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes < 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else if (strikes === 3)
            {
            console.log(`You have run out of lives. Never return again.`)
            process.exit();
            }
    }
    }
    console.log("What Difficulty would you like to play?\n[1.] Easy\n[2.] Medium\n[3.] Hard\n[4.] Extreme")
    let answer = Number(prompt("-->"))
    if(answer === 1){easy()}
    else if(answer === 2){medium()}
    else if(answer === 3){hard()}
    else if(answer === 4){extreme()}
}
const scoreing = () =>
{
    const easy = () =>
    {
        while(score > 0)
    {
        let n1 = rnum(1,10)
        let n2 = rnum(1,10)
        let ans = n1 + n2
        console.log(`What's ${n1} + ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            score += (100 * multiplier)
            multiplier +=1
            console.log(`Correct! Score: ${score}`)
            continue;
        }
        else if (answer !== (ans) && score > 0)
        { 
            if(score === 2){
                score = 0
                console.log(`Incorrect. Score: ${score}`)
            }
            else
            {
            score = Math.floor(score / 2)
            multiplier = 1
            console.log(`Incorrect. Score: ${score}`)
            }
            continue;
        }
        else
            {
            console.log(`You suck`)
            Process.exit();
            }
    }
    }
     const medium = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,999)
        let n2 = rnum(1,999)
        let ans = n1 + n2
        console.log(`What's ${n1} + ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes <= 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else
            {
            console.log(`You have run out of lives. Never return again.`)
            Process.exit();
            }
    }
    }
    const hard = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,9999)
        let n2 = rnum(1,9999)
        let ans = n1 + n2
        console.log(`What's ${n1} + ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes <= 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else
            {
            console.log(`You have run out of lives. Never return again.`)
            Process.exit();
            }
    }
    }
    const extreme = () =>
    {
        while(strikes <= 3)
    {
        let n1 = rnum(1,9999)
        let n2 = rnum(1,9999)
        let ans = n1 - n2
        console.log(`What's ${n1} - ${n2}?`)
        answer = Number(prompt("-->"))
        if(answer === (ans))
        {
            console.log(`Correct!`)
            continue;
        }
        else if (answer !== (ans) && strikes < 3)
        {
            console.log(`Incorrect. you have ${strikes} strikes`) 
            strikes += 1
            continue;
        }
        else if (strikes === 3)
            {
            console.log(`You have run out of lives. Never return again.`)
            process.exit();
            }
    }
    }
    console.log("What Difficulty would you like to play?\n[1.] Easy\n[2.] Medium\n[3.] Hard\n[4.] Extreme")
    let answer = Number(prompt("-->"))
    if(answer === 1){easy()}
    else if(answer === 2){medium()}
    else if(answer === 3){hard()}
    else if(answer === 4){extreme()}
}
scoreing()