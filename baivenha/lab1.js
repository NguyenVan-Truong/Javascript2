//=======================================Lab1_1========================//
//bài 1
const team1 = ['ct1', 'ct2', 'ct3', 'ct4', 'ct5', 'ct6', 'ct7', 'ct8', 'ct9', 'ct10','ct11'];
const players1 = ['gk'];
const players2 = [];
//bài 2
function team1 () {
    const gk = 'gk'
    const fieldPlayers = ['ct1', 'ct2', 'ct3', 'ct4', 'ct5', 'ct6', 'ct7', 'ct8', 'ct9', 'ct10']
    return [...gk, fieldPlayers]
}
//bài 3
const allPlayers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
//bài 4
const players1Final = team1()
players1Final.push('Thiago');
players1Final.push('Coutinho');
players1Final.push('Coutinho');
//bài 5


//bài 6
function printGoals (tenCt) {
    const goals = {}
    if (goals[tenCt] > 1) {
        let goal = goals[tenCt]
        goal++
    } else {
        goals[tenCt] = 1
    }
    return goals
}
//bài 7 


//=========================================Lab1_2=====================//
//bài 1
for ( const [i,player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);
//bài 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds ) average += odd;
average /= odds.length;
console.log(average);
//bài 3
for (const [team , odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`odd of ${teamStr} ${odd}`);
}


