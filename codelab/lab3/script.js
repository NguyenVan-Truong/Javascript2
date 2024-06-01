// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // % lãi xuất
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//==============Lab3.2===========
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
      if (dog >= 3) {
          console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old `);
      } else {
          console.log(`Dog number ${i + 1} is still a puppy`);
      }
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//==============Lab3.3===============
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adult = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adult);

  const average = adult.reduce((acc, age, i, arr) => acc + age / arr.length, 0
  );

  return average;
};
const calcAverageHumanAge = age => age.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0
);;


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
//==============Lab3.4===============

const dogs =[
  {weight:22,curFood:250,owners:['Alice','Bob']},
  {weight:8,curFood:200,owners:['Matilda']},
  {weight:13,curFood:275,owners:['Sarah','John']},
  {weight:32,curFood:340,owners:['Michael',]},
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 *28)));
console.log(dogs);

const dogSarah=dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${dogSarah.curFood>dogSarah.recFood?'much':'little'}`
)

const ownersEatTooMuch = dogs.filter(dog =>dog.curFood>dog.curFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooMuchLittle = dogs.filter(dog =>dog.curFood<dog.curFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuchLittle);


console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooMuchLittle.join('and')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood===dog.recFood));

const checkEatingOkey = dog =>
dog.curFood > dog.recFood *0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkey));

console.log(dogs.filter(checkEatingOkey));

const dogsCopy = dogs.slice().sort((a,b)=>a.recFood-b.recFood);

console.log(dogsCopy)
