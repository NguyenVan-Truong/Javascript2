const gameEvents = new Map([
    [17, "⚽ Goal"],
    [36, "🔄 substitution"],
    [47, "⚽ Goal"],
    [61, "🔄 substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "🔄 substitution"],
    [72, "🔄 substitution"],
    [76, "⚽ Goal"],
    [80, "⚽ Goal"],
    [92, "🟨 yellow card"],

]);

//2.1
//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(`an envent happend , on average, every  ${90 / gameEvents.size } minutes`);


const time =[...gameEvents.keys()].pop();
console.log(time);
console.log(`an envent happend , on average, every ${time/ gameEvents.size } minutes`);

//4
for(const[min,envent]of gameEvents){
    const half = min<=45 ? 'First':'second';
    console.log(`[${half} Half] ${min}:${envent}`);
};  

//2.2
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;
document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    for(const [i,row] of rows.entries()){
      const [first,second] = row.toLowerCase().trim().split('_');
      const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
    }
})

//2.3
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0,3).toUpperCase();
for(const flight of flights.split('+')){
   const [type,from,to, time] = flight.split(';');
   const tutput = ` ${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replace('_','')} ${from.slice(0,3).toUpperCase()} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
   console.log(tutput);
};

// 2.4

(function(){
    const header = document.querySelector('h1');
 header.style.color = 'red';
 document.querySelector('body').addEventListener('click', function () {
 header.style.color = 'blue';
 });
})();