class Player 
{
    php = 100;
    mp = 100;
    matk = 1;
    atk = 1;
    def = 1;
    phyattacks = [punch]
}
class Enemy
{
    php = 50;
    mp = 75;
    matk = 1;
    atk = 1;
    def = 1;
}

const player = new Player();
const enemy = new Enemy();
console.log(`Player hp: ${player.php}\n\n\nEnemy hp: ${enemy.php}`)
