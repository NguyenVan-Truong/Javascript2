//=================Lab2_1===========
const gameEvents = new Map([
    // [17,'GOAL'],
    // [36,'stitution'],
    // [47,'GOAL'],
    // [61,'Substitution'],
    // [64,'Yellow card'],
    // [69,'Red card'],
    // [70,'Substitution'],
    // [72,'Substitution'],
    // [76,'GOAL'],
    // [80,'GOAL'],
    // [92,'Yellow card'],
]);

gameEvents.set(0, [17, 'GOAL'])
gameEvents.set(1, [36, 'Substitution'])
gameEvents.set(2, [64, 'Yellow card'])
gameEvents.set(3, [92, 'Red card'])

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);

//3.
console.log(
    `an event happend , on average , every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `an event happend , on average , every ${time / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}
//===================Lab2.2==========================
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);

    for (const row of rows) {
        const [first, second] = row.toLocaleLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'true'.replace(i + 1)}`);
    }
});
//==============Lab2.3==============================
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440';
+_Arrival; bru0943384722; fao93766109
    + _Delayed_Arrival; hel7439299980; fao93766109
        + _Departure; fao93766109; lis2323639855;

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
        '_',
        ' '
    )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}
//=====================Lab2.4========================
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
    });
})();