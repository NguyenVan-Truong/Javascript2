

const game = {
    team1 :'Real Madrid',
    team2 :'Manchester United',
    players:[
        [
            "Navas",
            "Marcelo",
            "Pepe",
            "Ramos",
            "Carvajar",
            "Casemiro",
            "kroos",
            "modric",
            "Ronaldo",
            "Benzema",
            "bale",
        ],
        [
            "Sar",
            "Evra",
            "Rio",
            "Vidic",
            "Neville",
            "Scholes",
            "Giggs",
            "Sung",
            "Ronaldo",
            "Rooney",
            "Tevez",
        ]
    ],  
    score:'4:0',
    scored: ["Ronaldo","Bale", "Benzema","Ronaldo"],
    date:"february 30th , 2024",
    odds:{
        team1 : 1.33,
        x: 3.25,
        team2 :6.5,
    },
};
    const[players1,players2]=game.players;
    console.log(players1,players2);

    const [gk,...fieldPlayers]=players1;
    console.log(gk,fieldPlayers);

    const allPlayers=[...players1,...players2];
    console.log(allPlayers);

    const players1Final = [...players1,'Thiago','Coutinho','Periscic'];

    const {odds:{team1,x : draw, team2}}= game;
    console.log(team1,draw,team2);

    const printGoals=function(...players){
        console.log(players);
        console.log(`${players.length}goals were scored`);
    };
    // printGoals("Ronaldo","Bale", "Benzema","Ronaldo");
    // printGoals("Ronaldo","Bale");
    printGoals(...game.scored);

    team1 < team2 && console.log('Team 1 is more likely to win ');
    team1 > team2 && console.log('Team 2 is more likely to win ');


    for(const [i,players]of game.scored.entries()){
        console.log(`Goal ${i+1}: ${players}`)
    }

    const odđs = Object.values(game.odds);
    let average = 0;
    for(const odd of odđs) average += odd;
    // console.log(average);
    average /= odđs.length;
    console.log(average);

    for(const [team,odd] of Object.entries(game.odds)){
        const teamStr = team === 'x'?'draw': `Victory ${game[team]}`;
        console.log(`Odd of ${teamStr} ${odd}`);
    }